import React, { useState, useCallback } from "react";
import {AvailabilityType, RoomItem} from "./types";
import styled from "styled-components";
import {api} from "./api";
import {AVAILABILITY_URL} from "./constants";

const ListItem = styled.li`
	list-style: none;
`;

const Bold = styled.b`
	font-weight: 600;
	color: #FF5533;
	padding: 0 5px;
`;

const sortByPrice = (rooms: RoomItem[]) => {
	const sortedRooms = [];
	const roomsData = Object.values(rooms);
	for (const index in roomsData) {
		const roomPrice: number = roomsData[index].price.value;
		sortedRooms.push([roomPrice, roomsData[index]]);
	}

	return sortedRooms.sort((a, b) => {
		if(b[0] < a[0]) {
			return 1;
		} else return -1;
	});
}

export const List = (data: RoomItem[]) => {
	const [selectRoom, setSelectRoom] = useState<number>(0);
	const [availabilityData, setAvailabilityData] = useState<AvailabilityType>();
	const sortedRooms = sortByPrice(Object.values(data));
	const onSelect = useCallback((id: number) => {
		setSelectRoom(id);
		api(`${AVAILABILITY_URL}${id}`).then(response => setAvailabilityData(response));
	}, []);

	const roomsList = sortedRooms.map((item, index) => {
		const room = isNaN(item[1]) ? item[1] : null;

		if (room && typeof room === 'object') {
			return (
				<ListItem key={index.toString()}>
					<input type="radio" id={room.id.toString()} name={`room`} value={room.price.value.toString()} onClick={() => onSelect(room.id)}/>
					{`${room.name} ${room.price.value} ${room.price.currencyCode} `}
					{selectRoom === room.id && (
						<span>
							<Bold>{availabilityData?.availabilityStatus}</Bold>
							<Bold>{availabilityData?.price?.value ?? ''}</Bold>
							<Bold>{availabilityData?.price?.currencyCode ?? ''}</Bold>
						</span>
					)}
				</ListItem>
			);
		}
		return '';
	});

	return (
		<ul>
			{roomsList}
		</ul>
	);
}
import React, { useEffect, useState} from "react";
import { api } from "../api";
import { URL } from "../constants";
import { List } from '../List';
import { RoomItem } from "../types";
import styled from "styled-components";

const Root = styled.div`
	display: flex;
	flex-direction: column;
  align-items: center;
	
	h1 {
		border-bottom: 1px solid grey;
	}
	
	section {
		width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
`;

/*
*	Use Moesif for CORS
 */

export const App = () => {
	const [data, setData] = useState<RoomItem>(null);

	useEffect(() => {
		api(URL).then(response => setData(response));
	}, []);

	return (
		<Root>
			<header>
				<h1>List of rooms</h1>
			</header>
			<section>
				<List {...data} />
			</section>
		</Root>
	);
}
export interface RoomItem {
	id: number,
	name: string,
	price: PriceAmount
}

export type PriceAmount = {
	"value": 23990,
	"currencyCode": "CZK"
}

export type AvailabilityType = {
	availabilityStatus: "available" | "onRequest" | "soldout" | "error",
	price: PriceAmount
}
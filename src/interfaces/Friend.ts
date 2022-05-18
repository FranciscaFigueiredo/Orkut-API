export interface FriendShipRequest {
    recipient: number;
    sender: number;
}

export interface AcceptFriendShip {
    id: number;
    recipient: number;
    sender: number;
}

export interface IContact {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    isFav: boolean
    groups: Array<IGroup>;
}

export interface IGroup {
    id: number;
    name: string;
    members: Array<IContact>
}
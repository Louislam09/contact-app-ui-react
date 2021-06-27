export interface IContact {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address?: string;
    isFav: boolean;
    groups?: Array<IGroup>;
}

export interface IAllContact{
    contacts: IContact[]
}
export interface IAllGroup{
    groups: IGroup[]
}

export interface IGroup {
    id: number;
    name: string;
    members: Array<IContact>
}
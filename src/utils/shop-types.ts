import {Paths} from "./paths.ts";

export enum Roles {
    ALL,
    USER,
    ADMIN,
    NO_AUTH,
}

export type RouteType = {
    path: Paths,
    title: string,
    role?: Roles,
}


export type LoginData = {
    email: string,
    password: string,
}


export type SignupData = {
    fullName: string,
    email:string,
    password:string
}

export type ProductType = {
    id?: string,
    title: string,
    category: string,
    unit: string,
    cost: number,
    img: string,
}

export type Category = {
    category_name: string
}


export type ShopCartProdType = {
    cartProdId: string;
    count: number;

}
import type {RouteType} from "../utils/shop-types.ts";
import {Paths} from "../utils/paths.ts";

export const navItems: RouteType[] = [
    {path: Paths.HOME, title: "Home"},
    {path: Paths.ORDERS, title: "Orders"},
    {path: Paths.CART, title: "Shopping Cart"},
    {path: Paths.CUSTOMERS, title: "Customers"},
    {path: Paths.PRODUCTS, title: "Products"},
    {path: Paths.LOGIN, title: "Sign In"},
]

export const productItems: RouteType[] = [
    {path: Paths.BREAD, title: "Bread"},
    {path: Paths.DAIRY, title: "Dairy"},
    {path: Paths.BACK, title: "Back to main menu"},
    {path: Paths.LOGIN, title: "Sign In"},
]
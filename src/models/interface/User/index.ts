import { Transaction } from "../transactions";

export interface User {
    name: string;
    email: string;
    password: string;
    transferPassword: string;
    balance: string;
    transactions: Transaction[];
}
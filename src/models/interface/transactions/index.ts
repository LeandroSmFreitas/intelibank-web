export interface Transaction {
    id: string;
    name: string;
    identifier: string;
    value: number;
    bank?: string;
    account?: string;
    agency?: string;
    type: string;
    code: string;
    date: string;
}
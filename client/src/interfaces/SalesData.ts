export interface ISalesData{
    ID: number;
    DATA: string;
    CLIENTE: string;
    IDADE: number;
    ESTADO: string;
    PRODUTO: string;
    QUANTIDADE_VENDIDA: number;
}

export interface IFormatedSalesData{
    DATA: string;
    CLIENTE: string;
    IDADE: number;
    ESTADO: string;
    PRODUTO: string;
    QUANTIDADE_VENDIDA: number;
}
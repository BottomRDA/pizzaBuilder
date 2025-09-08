export interface IProduct {
    id: number;
    name: string;
    price: number;
    imageSrc: string;
    ingredients: IAddition[];
}

export interface IAddition {
    id: number;
    name: string;
    price: number;
}

export interface ICartItem {
    product: IProduct;
    selectedAdds: IAddition[];
    count: number;
}

export interface IOrderData {
    name: string;
    phone: string;
    address: string;
    comment?: string;
}

export interface IOrder extends IOrderData {
    items: ICartItem[];
    totalPrice: number;
    orderDate: string;
}

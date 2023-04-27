export interface Television {
    id?: number,
    product_name: string;
    description: string;
    manufacturer: string;
    price: number;
    screen_size: number;
}

export interface Televisions {
    data: Television[] 
}

export interface TelevisonSingle {
    data: Television
}


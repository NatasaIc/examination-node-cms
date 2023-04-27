export interface Mobile {
    id?: number,
    product_name: string,
    description: string,
    manufacturer: string,
    price: number,
    screen_type: string,
}

export interface Mobiles {
    data: Mobile[]
}

export interface MobileSingle {
    data: Mobile
}
export interface Computer {
    id?: number,
    product_name: string,
    description: string,
    manufacturer: string,
    price: number,
    processor: string,
}

export interface Computers {
    data: Computer[],
}

export interface ComputerSingle {
    data: Computer,
}
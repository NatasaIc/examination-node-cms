export interface Audio {
    id?: number;
    product_name: string;
    description: string;
    manufacturer: string;
    price: number;
    effect: number;
}

export interface Audios {
    data: Audio[]
}

export interface AudioSingle {
    data: Audio
}
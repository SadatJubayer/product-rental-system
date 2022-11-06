export interface IProduct {
    code: string;
    name: string;
    type: 'plain' | 'meter';
    availability: boolean;
    needing_repair: boolean;
    durability: number;
    max_durability: number;
    mileage: number | null;
    price: number;
    minimum_rent_period: number;
}

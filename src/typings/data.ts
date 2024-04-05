export type CarProps = {
    id: string;
    brand: string;
    name: string;
    about: string;
    rent: Rent;
    fuel_type: MotorType;
    thumbnail: string;
    accessories: Accessory[];
    photos: string[];
};

type Rent = {
    period: string;
    price: number;
};

type Accessory = {
    type: string;
    name: string;
};

type MotorType =
    | "speed"
    | "acceleration"
    | "turning_diameter"
    | "gasoline_motor"
    | "electric_motor"
    | "hybrid_motor"
    | "exchange"
    | "seats";

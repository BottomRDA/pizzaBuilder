export type TPizza = {
    id: number;
    name: string;
    price: number;
    image: string;
    ingredients: TIngredient[];
};

export type TIngredient = {
    id: number;
    name: string;
    price: number;
};

import { TPizza } from 'entities/entities.ts';

export const listPizzas: TPizza[] = [
    {
        id: 1,
        name: 'Пепперони',
        price: 500,
        image: 'https://via.placeholder.com/150',
        ingredients: [
            { id: 1, name: 'сыр моцарелла', price: 50 },
            { id: 2, name: 'острый соус', price: 30 },
            { id: 3, name: 'оливки', price: 40 },
            { id: 4, name: 'доп. пепперони', price: 70 },
        ],
    },
    {
        id: 2,
        name: 'Маргарита',
        price: 400,
        image: 'https://via.placeholder.com/150',
        ingredients: [
            { id: 5, name: 'базилик', price: 20 },
            { id: 6, name: 'помидоры черри', price: 40 },
            { id: 1, name: 'сыр моцарелла', price: 50 },
            { id: 7, name: 'песто', price: 30 },
        ],
    },
    {
        id: 3,
        name: 'Четыре сыра',
        price: 550,
        image: 'https://via.placeholder.com/150',
        ingredients: [
            { id: 8, name: 'горгонзола', price: 60 },
            { id: 9, name: 'чеддер', price: 50 },
            { id: 10, name: 'сливочный соус', price: 30 },
            { id: 11, name: 'грибы', price: 40 },
        ],
    },
    {
        id: 4,
        name: 'Гавайская',
        price: 480,
        image: 'https://via.placeholder.com/150',
        ingredients: [
            { id: 12, name: 'доп. ананас', price: 30 },
            { id: 13, name: 'ветчина', price: 50 },
            { id: 2, name: 'острый соус', price: 30 },
            { id: 1, name: 'сыр моцарелла', price: 50 },
        ],
    },
    {
        id: 5,
        name: 'Барбекю',
        price: 530,
        image: 'https://via.placeholder.com/150',
        ingredients: [
            { id: 14, name: 'курица', price: 50 },
            { id: 15, name: 'бекон', price: 50 },
            { id: 16, name: 'лук', price: 20 },
            { id: 17, name: 'соус барбекю', price: 30 },
        ],
    },
    {
        id: 6,
        name: 'Вегетарианская',
        price: 450,
        image: 'https://via.placeholder.com/150',
        ingredients: [
            { id: 18, name: 'баклажаны', price: 40 },
            { id: 19, name: 'цукини', price: 40 },
            { id: 20, name: 'перец болгарский', price: 30 },
            { id: 21, name: 'брокколи', price: 30 },
        ],
    },
    {
        id: 7,
        name: 'Мясная',
        price: 560,
        image: 'https://via.placeholder.com/150',
        ingredients: [
            { id: 22, name: 'салями', price: 50 },
            { id: 15, name: 'бекон', price: 50 },
            { id: 14, name: 'курица', price: 50 },
            { id: 23, name: 'говядина', price: 70 },
        ],
    },
    {
        id: 8,
        name: 'Дьябло',
        price: 520,
        image: 'https://via.placeholder.com/150',
        ingredients: [
            { id: 24, name: 'халапеньо', price: 30 },
            { id: 2, name: 'острый соус', price: 30 },
            { id: 4, name: 'доп. пепперони', price: 70 },
            { id: 25, name: 'лук красный', price: 20 },
        ],
    },
    {
        id: 9,
        name: 'С грибами',
        price: 470,
        image: 'https://via.placeholder.com/150',
        ingredients: [
            { id: 26, name: 'белые грибы', price: 50 },
            { id: 27, name: 'трюфельное масло', price: 60 },
            { id: 11, name: 'грибы', price: 40 },
            { id: 16, name: 'лук', price: 20 },
        ],
    },
    {
        id: 10,
        name: 'С морепродуктами',
        price: 600,
        image: 'https://via.placeholder.com/150',
        ingredients: [
            { id: 28, name: 'креветки', price: 80 },
            { id: 29, name: 'кальмары', price: 70 },
            { id: 30, name: 'мидии', price: 60 },
            { id: 31, name: 'лимон', price: 10 },
        ],
    },
];

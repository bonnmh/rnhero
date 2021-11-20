import { ImageSourcePropType } from 'react-native';

import { images } from '@assets/image';

export type Dish = {
    id: string;
    title: string;
    description: string;
    price: string;
    image?: ImageSourcePropType;
    coverImage?: ImageSourcePropType;
    sideDishes?: DishSection[];
};

export type DishSection = {
    title: string;
    data: Dish[];
};

export type Place = {
    id: string;
    title: string;
    coverImage?: ImageSourcePropType;
    image: ImageSourcePropType;
    subTitle: string;
    distance: number;
    time: number;
    rating: number;
    dishSection?: DishSection[];
};

export const mockPlaceDetails: Place = {
    id: '1',
    title: 'Neapolitan pizza, Italy. Neapolitan pizza',
    coverImage: images.bg_wallpaper,
    image: images.bg_wallpaper,
    subTitle: 'Western, Spaghetti',
    distance: 75,
    time: 90,
    rating: 4,
    dishSection: [
        {
            title: 'Burgers',
            data: Array(13)
                .fill(0)
                .map((_, index) => ({
                    id: 'BurgersId',
                    title: `BurgersTitle${index}`,
                    description: `Burgersdescription${index}`,
                    price: `Burgersprice${index}`,
                    image: images.bg_wallpaper,
                })),
        },
        {
            title: 'Pizza',
            data: Array(3)
                .fill(0)
                .map((_, index) => ({
                    id: 'PizzaId',
                    title: `PizzaTitle${index}`,
                    description: `Pizzadescription${index}`,
                    price: `Pizzaprice${index}`,
                    image: images.bg_wallpaper,
                })),
        },
        {
            title: 'Bánh mì',
            data: Array(22)
                .fill(0)
                .map((_, index) => ({
                    id: 'Bánh mì Id',
                    title: `Bánh mì title${index}`,
                    description: `Bánh mì description${index}`,
                    price: `Bánh mì price${index}`,
                    image: images.bg_wallpaper,
                })),
        },
        {
            title: 'Bún bò',
            data: Array(22)
                .fill(0)
                .map((_, index) => ({
                    id: 'Bún bò Id',
                    title: `Bún bò title${index}`,
                    description: `Bún bò description${index}`,
                    price: `Bún bò price${index}`,
                    image: images.bg_wallpaper,
                })),
        },
        {
            title: 'Cháo lòng',
            data: Array(22)
                .fill(0)
                .map((_, index) => ({
                    id: 'Cháo lòng Id',
                    title: `Cháo lòng title${index}`,
                    description: `Cháo lòng description${index}`,
                    price: `Cháo lòng price${index}`,
                    image: images.bg_wallpaper,
                })),
        },
    ],
};

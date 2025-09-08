import { Image } from '@chakra-ui/react';

interface IImageCard {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

export const ImageCard = ({ src, alt, width = 150, height = 150 }: IImageCard) => {
    return (
        <Image
            src={src}
            alt={alt}
            minWidth={`${width}px`}
            minHeight={`${height}px`}
            objectFit='cover'
            bg={'#33333333'}
            mx='auto'
        />
    );
};

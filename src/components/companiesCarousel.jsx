import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import companies from '../data/companies.json';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '../components/ui/carousel';

const companiesCarousel = () => {
    return (
        <>
            <div>companiesCarousel</div>
            <section className="mb-12">
                <h2 className="text-center text-lg sm:text-xl font-semibold text-gray-700 mb-6">
                    Trusted by Leading Companies
                </h2>
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                    className="w-full py-10"
                >
                    <CarouselContent className="flex gap-5 sm:gap-20 items-center">
                        {companies.map(({ name, id, path }) => (
                            <CarouselItem
                                key={id}
                                className="basis-1/3 lg:basis-1/6"
                            >
                                <img
                                    src={path}
                                    alt={name}
                                    className="h-9 sm:h-14 object-contain"
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </section>
        </>
    );
};

export default companiesCarousel;

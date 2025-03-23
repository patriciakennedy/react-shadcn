import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const TestimonialCarousel = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true, speed: 10 });
    const testimonials = [
        {
            rating: '★★★★★',
            text: '“Job Board exceeded my expectations in every aspect. From the moment I created my profile, I received valuable insights and resources through their career guidance.”',
            name: 'David S.',
        },
        {
            rating: '★★★★★',
            text: '“As a recent graduate, I was overwhelmed by the job market. However, Job Board made the process less daunting and helped me navigate numerous opportunities.”',
            name: 'Sophia L.',
        },
        {
            rating: '★★★★★',
            text: '“The platform’s intuitive interface allowed me to narrow down my options and discover opportunities that aligned with my desired work environment.”',
            name: 'Alex R.',
        },
        {
            rating: '★★★★★',
            text: '“I appreciated the quality of companies on the platform. Each listing had detailed descriptions, making it easy to understand the role and company culture.”',
            name: 'Michael H.',
        },
        {
            rating: '★★★★★',
            text: '“I was able to apply to multiple positions with a single profile, and the notifications kept me updated every step of the way.”',
            name: 'Maria P.',
        },
        {
            rating: '★★★★★',
            text: '“Their career resources and interview tips really helped me land my current role. Highly recommended for any developer on the job hunt!”',
            name: 'Jonathan T.',
        },
    ];

    return (
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h5 className="text-sm uppercase text-purple-400 tracking-widest text-center">
                Testimonials
            </h5>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mt-2">
                Our happy users say about us
            </h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto mt-4">
                We are grateful to our users for their kind words and
                testimonials. Their success stories motivate us to continually
                improve our platform and provide the best possible job search
                experience for every user.
            </p>
            <div className="embla mt-10 overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex space-x-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="embla__slide min-w-[300px] bg-gray-900 p-6 rounded-lg flex flex-col justify-between"
                        >
                            <div className="text-purple-400 text-sm mb-2">
                                {testimonial.rating}
                            </div>
                            <p className="text-gray-300 mb-4">
                                {testimonial.text}
                            </p>
                            <p className="text-gray-400 text-right">
                                {testimonial.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialCarousel;

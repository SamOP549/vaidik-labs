import { Carousel } from '@mantine/carousel';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/legacy/image';
import { createStyles } from '@mantine/core';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons';
import core from '../../../public/CarouselCovers/core.jpg';
import software from '../../../public/CarouselCovers/software.jpg';
import team from '../../../public/CarouselCovers/team.jpg';
import Link from 'next/link';

const useStyles = createStyles((_theme, _params, getRef) => ({
    controls: {
        ref: getRef('controls'),
        transition: 'opacity 150ms ease',
        opacity: 0,
    },

    root: {
        height: "100vh",
        '&:hover': {
            [`& .${getRef('controls')}`]: {
                opacity: 1,
            },
        },
    },
}));


function Demo() {
    const autoplay = useRef(Autoplay({ delay: 4000 }));
    const { classes } = useStyles();
    const slides = [
        {
            image: core,
            title: "Core Banking Solutions",
            desc: "We have been providing Finacle Implementation, Customization, Integration with Third Party apps, Report creation, Migration and Support for financial institutions all around the world.",
        },
        {
            image: team,
            title: "Experienced Team",
            desc: "We are a group of skilled software developers working to provide exceptional and effective tools for your business and daily life.",
        },
        {
            image: software,
            title: "Software Solutions",
            desc: "Our company's software solutions have won numerous accolades for their creative features and usability.",
        }
    ];
    return (
        <Carousel
            orientation="horizontal"
            controlsOffset="xs"
            loop
            draggable={false}
            withIndicators
            nextControlIcon={<IconArrowRight size={20} />}
            previousControlIcon={<IconArrowLeft size={20} />}
            styles={{
                indicator: {
                    width: 12,
                    height: 4,
                    transition: 'width 250ms ease',
                    backgroundColor: "white",

                    '&[data-active]': {
                        width: 40,
                        backgroundColor: "#FF7000",
                    },
                },
            }}
            plugins={[autoplay.current]}
            slidesToScroll={1}
            align="start"
            classNames={classes}
        >
            {slides.map((slide, index) => (
                <Carousel.Slide key={index}>
                    <div
                        className="p-12 text-center relative overflow-hidden" style={{ height: "100vh" }}>
                        <Image quality="90" loading="lazy" src={slide.image} layout="fill" objectFit="cover" alt={slide.title} />
                        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                            <div className="flex justify-center items-center h-full">
                                <div className="text-white md:px-36 px-12">
                                    <h2 className="font-semibold md:text-5xl text-4xl mb-4">{slide.title}</h2>
                                    <h4 className="font-semibold md:text-xl text-lg mb-6">{slide.desc}</h4>
                                    <Link href="/contact">
                                        <button className="get_started_btn"> Get Started</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Slide>
            ))}
        </Carousel>
    );
}
export default Demo;
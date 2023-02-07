import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import Link from 'next/link';

const useStyles = createStyles((theme, _params, getRef) => ({
    card: {
        height: 440,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundSize: 'cover',
        position: "relative",
        overflow: "visible",
        backgroundPosition: 'center',
        marginLeft: '2rem',
        marginRight: '2rem',
        transition: "0.5s ease-out",
        '&:hover': {
            boxShadow: "0 4px 18px 0 rgba(0, 0, 0, 0.25)",
            borderColor: "#008bf8",
        },
        [`&:hover .${getRef('button')}`]: {
            transform: "translate(-50%, -20%)",
            opacity: "1",
        }
    },

    button: {
        ref: getRef('button'),
        transform: "translate(-50%, 125%)",
        width: "60%",
        borderRadius: "1rem",
        border: "none",
        backgroundColor: "#008bf8",
        color: "#fff",
        fontSize: "1rem",
        padding: ".5rem 1rem",
        position: "absolute",
        left: "50%",
        bottom: "0",
        opacity: "0",
        transition: "0.3s ease-out",
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 700,
        color: theme.white,
        lineHeight: 1.2,
        fontSize: 32,
        marginTop: theme.spacing.xs,
    },

}));

interface CardProps {
    image: string;
    title: string;
}

function Card({ image, title }: CardProps) {
    const { classes } = useStyles();

    return (
        <Paper
            shadow="md"
            p="xl"
            radius="md"
            sx={{ backgroundImage: `url(${image})` }}
            className={classes.card}
        >
            <div>
                <Title order={3} className={classes.title}>
                    {title}
                </Title>
            </div>
            <Link href="/contact">
                <button className={classes.button}>More info</button>
            </Link>
        </Paper>
    );
}

const data = [
    {
        image:
            "./Services/p1.jpg",
        title: 'Migration',
    },
    {
        image:
            "./Services/p2.jpg",
        title: 'Customizations',
    },
    {
        image:
            "./Services/p4.jpg",
        title: 'Software Solution',
    },
    {
        image:
            "./Services/p3.jpg",
        title: 'Optimization',
    },
    {
        image:
            "./Services/p5.jpg",
        title: 'Fintech Service',
    },
    {
        image:
            "./Services/p6.jpg",
        title: 'Custom Banking Software Service',
    },
];

export function CardsCarousel() {
    const autoplay = useRef(Autoplay({ delay: 3000 }));
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
    const slides = data.map((item) => (
        <Carousel.Slide key={item.title}>
            <Card {...item} />
        </Carousel.Slide>
    ));

    return (
        <div className="h-[100vh]" >
            <h1 className='text-center mt-10 font-semibold lg:text-4xl md:text-3xl text-2xl overflow-visible'>Services We Offer</h1>
            <Carousel
                slideSize="33%"
                breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
                slideGap="xl"
                align="start"
                slidesToScroll={1}
                className="my-10 md:px-5 px-10 overflow-visible"
                loop
                plugins={[autoplay.current]}
                withControls={false}
            >
                {slides}
            </Carousel>
        </div>
    );
}

export default CardsCarousel;
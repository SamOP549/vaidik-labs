import React from "react";
//These are Third party packages for smooth slideshow
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slideshow = () => {
    //Array of Images
    const images = [
        "https://images.unsplash.com/photo-1516655855035-d5215bcb5604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
        "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60"
    ];

    //These are custom properties for zoom effect while slide-show
    const zoomInProperties = {
        duration: 3000,
        transitionDuration: 1000,
        infinite: true,
        prevArrow: (
            <div style={{ width: "30px", marginLeft: "10px", cursor: "pointer" }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </div>
        ),
        nextArrow: (
            <div style={{ width: "30px", marginRight: "10px", cursor: "pointer" }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>

            </div>
        ),
    };
    return (

        <Slide {...zoomInProperties}>
            {images.map((each, index) => (
                <div key={index} className="flex justify-center w-full h-full">
                    <img
                        className="h-[100vh] w-full object-cover shadow-xl"
                        src={each}
                    />
                </div>
            ))}
        </Slide>
    );
};

export default Slideshow;
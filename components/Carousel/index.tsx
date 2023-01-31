import React from "react";
import Screen0 from "./Screen0"
import Screen1 from "./Screen1"

const Carousel = ({ screen }: any) => {
    if (screen == 0)
        return (
            <Screen0 />
        )
    else if (screen == 1)
        return (
            <Screen1 />
        )
};

export default Carousel;
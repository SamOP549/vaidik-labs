import React from "react";
import Screen0 from "./Screen0"
import Screen1 from "./Screen1"
import Screen2 from "./Screen2"

const Carousel = ({ screen , title, bg }: any) => {
    let sc;
    if (screen == 0)
        sc = <Screen0 />
    else if(screen == 1)
        sc = <Screen1 />
    else if(screen == 2)
        sc = <Screen2 title={title} bg={bg} />
    return (
        <div>
            {sc}
        </div>
    );
};

export default Carousel;
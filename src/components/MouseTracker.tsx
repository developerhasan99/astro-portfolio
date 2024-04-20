import { useEffect, useState } from "react";

const MouseTracker = () => {


    const [x, setX] = useState();
    const [y, setY] = useState();

    useEffect(
        () => {
            const update = (e) => {
                setX(e.x);
                setY(e.y);
            }

            window.addEventListener('mousemove', update);
            window.addEventListener('touchmove', update);
            return () => {
                window.removeEventListener('mousemove', update);
                window.removeEventListener('touchmove', update);
            }
        },
        [setX, setY]
    );

    return (
        <div className="bg-blue blur-[80px] h-16 w-16 fixed -translate-x-2/4 -translate-y-2/4 -z-[1]" style={{ top: y, left: x }}>
        </div>
    );
};

export default MouseTracker;
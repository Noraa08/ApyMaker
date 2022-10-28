import { useState, useEffect } from "react";

interface ISize {
    width: undefined | number;
    height: undefined | number;
}

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<ISize>({
        width: undefined,
        height: undefined
    });

    useEffect(() => {

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return windowSize;
}

export default useWindowSize;
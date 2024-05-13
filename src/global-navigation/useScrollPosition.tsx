import React, {useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

interface Position {
    scrollY: number;
    top: number;
    direction: 'up' | 'down';
    height?: number;
}

const useElementPosition = (elementRef: React.RefObject<HTMLDivElement>): Position => {
    const [position, setPosition] = useState<Omit<Position, 'sentinel'>>({
        scrollY: window.scrollY || 0,
        top: 0,
        direction: 'down',
    });
    // const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = throttle(() => {
            if (elementRef.current) {
                const rect = elementRef!.current!.getBoundingClientRect();
                setPosition((prev) => {
                    const top = rect.top;
                    const direction = prev.scrollY > window.scrollY ? 'up' : 'down';
                    return {
                        scrollY: window.scrollY,
                        top,
                        direction
                    };
                });
            }
        }, 300); // Throttle the event handler to fire at most once every 300 milliseconds

        // Adding scroll and resize listeners to track changes
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        // Initial check
        handleScroll();

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
            handleScroll.cancel(); // Cancel the throttled function
        };
    }, [elementRef]); // Ensure this effect runs only when the elementRef changes

    return {
        ...position,
    };
};

export default useElementPosition;
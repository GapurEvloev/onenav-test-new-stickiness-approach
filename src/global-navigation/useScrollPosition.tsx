import React, { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

export interface Position {
    scrollY: number;
    top: number;
    direction: 'up' | 'down';
}

const useElementPosition = (elementRef: React.RefObject<HTMLDivElement>): Position => {
    const [position, setPosition] = useState<Omit<Position, 'sentinel'>>({
        scrollY: window.scrollY || 0,
        top: 0,
        direction: 'down',
    });

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
        }, 300);

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
            handleScroll.cancel();
        };
    }, [elementRef]);

    return {
        ...position,
    };
};

export default useElementPosition;
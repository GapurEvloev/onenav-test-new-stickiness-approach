import {ResponsiveSetting} from "./types.ts";
import {useEffect, useState} from "react";
import {Position} from "./useScrollPosition.tsx";

export const useStickyStyles = (position: Position, sticky?: ResponsiveSetting<boolean | number> | boolean | number) => {
    const [styles, setStyles] = useState('');
    const {
      scrollY,
      direction,
    } = position;

    useEffect(() => {
        if((!sticky && typeof(sticky) === 'boolean' && scrollY >= 300 && direction === 'down') || (sticky && typeof(sticky) === 'number' && scrollY >= sticky && direction === 'down')) {
            setStyles(`
                grid-template-rows: 0fr;
                border-bottom: none;
            `);
        } else {
            setStyles(`
                grid-template-rows: 1fr;
                border-bottom: 1px solid #c0c0c0;
            `);
        }
    }, [scrollY]);

    return styles;
}
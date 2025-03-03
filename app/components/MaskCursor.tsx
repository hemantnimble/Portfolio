'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useHideCursor } from '../context/GlobalCursor';

function MaskCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState<"default" | "text">("default");
    const { hideCursor, setHideCursor } = useHideCursor();

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 7.5,
            y: mousePosition.y - 7.5,
        },
        text: {
            height: 150,
            width: 150,
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            backgroundColor: "yellow",
            mixBlendMode: "difference" as "difference",
        },
    };

    const textEnter = () => {
        setCursorVariant("text");
    };

    const textLeave = () => {
        setCursorVariant("default");
    };

    return (
        <>
            <div className="flex items-center justify-center h-[100vh] bg-[#ffff00]">
                <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className="text-[10rem] cursor-pointer">
                    Hello World
                </h1>
                <motion.div
                    className={`bg-black h-4 w-4 rounded-full fixed top-0 left-0 pointer-events-none ${hideCursor ? "hidden" : ""}`} // Add "hidden" class conditionally
                    variants={variants}
                    animate={cursorVariant}
                />
            </div>
        </>
    );
}

export default MaskCursor;

"use client"
import React from 'react'
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';
import { DiRedis } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { motion } from 'framer-motion';

const iconVariants = (duration: number) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse" as const, // Explicitly setting the string literal type
        },
    },
});

const Technologies = () => {
    return (
        <div className="py-20">
            <h1 className="heading">
                My Skills and{" "}
                <span className="text-purple">Technologies</span>
            </h1>
            <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1.5}}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="w-32 h-32 flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4 mt-20"
                >
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                    <p className="text-sm mt-2">React.JS</p>
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="w-32 h-32 flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4 mt-20"
                >
                    <TbBrandNextjs className="text-7xl" />
                    <p className="text-sm mt-2">Next.JS</p>
                </motion.div>
                <motion.div
                    variants={iconVariants(3.5)}
                    initial="initial"
                    animate="animate"
                    className="w-32 h-32 flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4 mt-20"
                >
                    <SiMongodb className="text-7xl text-green-500" />
                    <p className="text-sm mt-2">MongoDB</p>
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="w-32 h-32 flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4 mt-20"
                >
                    <DiRedis className="text-7xl text-red-700" />
                    <p className="text-sm mt-2">Redis</p>
                </motion.div>
                <motion.div
                    variants={iconVariants(4.5)}
                    initial="initial"
                    animate="animate"
                    className="w-32 h-32 flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4 mt-20"
                >
                    <FaNodeJs className="text-7xl text-green-500" />
                    <p className="text-sm mt-2">Node.JS</p>
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="w-32 h-32 flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-4 mt-20"
                >
                    <BiLogoPostgresql className="text-7xl text-sky-700" />
                    <p className="text-sm mt-2">PostgreSQL</p>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies
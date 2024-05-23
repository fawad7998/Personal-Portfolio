import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference }) => {
    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["center end", "center center"],
    });

    return (
        <figure className="absolute left-0 stroke-dark dark:stroke-light">
            <svg
                className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
                width="75"
                height="75"
                viewBox="0 0 45 100"
            >
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "#1e3a8a", stopOpacity: 1 }} />
                    </linearGradient>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "#dbeafe", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
                <circle
                    cx="50"
                    cy="50"
                    r="20"
                    className="stroke-primary dark:stroke-primaryDark stroke-1 fill-none"
                    stroke="url(#grad1)"
                />
                <motion.circle
                    cx="50"
                    cy="50"
                    r="20"
                    className="stroke-[5px] fill-light dark:fill-dark"
                    style={{ pathLength: scrollYProgress }}
                    stroke="url(#grad2)"
                />
                <circle
                    cx="50"
                    cy="50"
                    r="10"
                    className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark"
                    fill="url(#grad1)"
                />
                <motion.circle
                    cx="50"
                    cy="50"
                    r="25"
                    className="stroke-[1px] fill-none"
                    stroke="url(#grad2)"
                    style={{ scale: scrollYProgress }}
                />
                <motion.circle
                    cx="50"
                    cy="50"
                    r="30"
                    className="stroke-[1px] fill-none"
                    stroke="url(#grad1)"
                    style={{ opacity: scrollYProgress }}
                />
            </svg>
        </figure>
    );
};
export default LiIcon;

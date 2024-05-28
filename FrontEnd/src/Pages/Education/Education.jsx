import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcon from "../Experience/liicon";
import { education } from "./EducationData";

const EducationDetails = ({ education }) => {
    return education.map((educationFact) => (
        <Details
            key={educationFact.name}
            name={educationFact.name}
            company={educationFact.company}
            year={educationFact.year}
            place={educationFact.address}
        />
    ));
};

const Details = ({ name, company, year, place }) => {
    const ref = useRef(null);
    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%] sm:w-full"
        >
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize text-white font-bold text-xl sm:text-lg xs:text-md">
                    {name}
                </h3>
                <span className="capitalize font-medium text-blue-700/75 dark:text-blue-200/75 xs:text-sm">
                    {year} |{" "}
                    <span className="uppercase font-bold text-blue-600 dark:text-blue-400">
                        {company}
                    </span>{" "}
                    - {place}
                </span>
            </motion.div>
        </li>
    );
};

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });
    return (
        <div id="education" className="scale-90 my-12 p-4 sm:p-10 md:p-20">
            <h1 className="text-4xl font-bold text-center mb-8 pb-6">
                <span className="text-white text-6xl sm:text-5xl xs:text-4xl">My</span> <span className="text-blue-300 text-6xl sm:text-5xl xs:text-4xl">Education</span>
            </h1>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full sm:w-full">
                <motion.div
                    className="absolute left-9 top-0.5 w-[4px] h-full bg-blue-900 origin-top dark:bg-blue-300 md:w-[2px] md:left-[30px] xs:left-[20px]"
                    style={{ scaleY: scrollYProgress }}
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <EducationDetails education={education} />
                </ul>
            </div>
        </div>
    );
};

export default Education;

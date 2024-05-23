import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./liicon";
import { education } from "./ExperienceData";

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
            className="my-8 first:mt-0 4xl:last:mb-19 2xl:last:mb-1 xl:last:mb-10 xs:last:mb-5 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]"
        >
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg text-light-blue-500 dark:text-light-blue-300">
                    {name}
                </h3>
                <span className="capitalize font-medium text-blue-700 dark:text-blue-500 xs:text-sm">
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

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });
    return (
        <div className="my-64">
            <h2 className="font-bold text-6xl mb-32 w-full text-center text-white">
                Experience
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div
                    className="absolute left-9 top-0.5 w-[4px] h-full bg-blue-700 origin-top dark:bg-blue-500 md:w-[2px] md:left-[30px] xs:left-[20px]"
                    style={{ scaleY: scrollYProgress }}
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <EducationDetails education={education} />
                </ul>
            </div>
        </div>
    );
};

export default Experience;

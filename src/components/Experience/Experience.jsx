import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./liicon";
import { projects } from "./ExperienceData";

const CollabDetails = ({ collaborations }) => {
    return collaborations.map((collab) => (
        <Details
            key={collab.company}
            position={collab.position}
            company={collab.company}
            companyLink={collab.companyLink}
            time={collab.time}
            address={collab.address}
            work={collab.work}
        />
    ));
};

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    const displayWork = (works) => {
        return works.map(function (description, index) {
            return (
                <li key={index} className="list-disc ms-9">
                    {description}
                </li>
            );
        });
    };
    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]"
        >
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-xl sm:text-xl xs:text-lg">
                    {position}&nbsp;
                    <a
                        href={companyLink}
                        target="_blank"
                        className="text-light-blue-500 capitalize"
                    >
                        @{company}
                    </a>
                </h3>
                <span className="capitalize font-medium text-dark-blue-300 xs:text-sm">
                    {time} | {address}
                </span>
                <div className="text-justify font-medium text-md w-full md:text-sm">
                    <ul>{displayWork(work)}</ul>
                </div>
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
    const collaborations = projects.collaborations;
    return (
        <div id="experience" className="scale-90 my-12 p-20">
            <h1 className="text-4xl font-bold text-center  mb-8 pb-6">
                <span className="text-white text-6xl">My</span> <span className="text-blue-300 text-6xl">Experience</span>
            </h1>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full text-light-blue-100">
                <motion.div
                    className="absolute left-9 top-0.5 w-[4px] h-full bg-dark-blue-500 origin-top dark:bg-light-blue-400 md:w-[2px] md:left-[30px] xs:left-[20px]"
                    style={{ scaleY: scrollYProgress }}
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <CollabDetails collaborations={collaborations} />
                </ul>
            </div>
        </div>
    );
};

export default Experience;

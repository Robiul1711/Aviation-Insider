
import { motion } from "framer-motion";
import Title from "../common/Title";

const CommonBanner = ({ image, title, description, link, linkText, logo }) => {
  const MotionTitle = motion(Title);

  return (
    <section className="relative w-full section-padding-x h-[350px] md:h-[400px] overflow-hidden">
      {/* Video Background */}

      <img
        src={image}
        alt="Banner"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Optional Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      {/* Overlay Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-white px-4 text-center">
        <div className="pb-3">{logo}</div>
        <div className="mx-auto w-full">
          <MotionTitle
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeOut",
            }}
            animate={{ opacity: 1 }}
            className="leading-custom  "
            level="title56"
            viewport={{ once: true }}
          >
            {title}
          </MotionTitle>

          <MotionTitle
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="mb-5 md:mt-6 max-w-[1070px] w-full md:text-lg !font-normal"
          >
            {description}
          </MotionTitle>

          {/* <motion.button className="px-10 py-3 rounded-full font-semibold transition duration-200 bg-white text-Primary">
            {linkText}
          </motion.button> */}
        </div>
      </div>
    </section>
  );
};

export default CommonBanner;

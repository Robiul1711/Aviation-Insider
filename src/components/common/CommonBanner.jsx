import { motion } from "framer-motion";
import Title from "../common/Title";
import { cn } from "@/lib/utils";

const CommonBanner = ({
  image,
  title,
  description,
  link,
  linkText,
  logo,
  className,
}) => {
  const MotionTitle = motion(Title);

  return (
    <section
      className={cn(
        `relative w-full section-padding-x h-[250px] sm:h-[300px] lg:h-[400px] overflow-hidden ${className}`
      )}
    >
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
        <div className="mx-auto w-full text-center">
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
            className="mb-5 md:mt-6  md:text-lg !font-normal"
          >
            {description}
          </MotionTitle>
          {linkText && (
              <motion.button className="px-10 py-3 rounded-md font-semibold transition duration-200 bg-Secondary  text-white">
                {linkText}
              </motion.button>
            )}
        </div>
      </div>
    </section>
  );
};

export default CommonBanner;

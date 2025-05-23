import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { Calendar, Users, FileCheck2, Plane } from "lucide-react";
import { CardContainer, CardBody } from "@/components/ui/3d-card";
import { useTranslations } from "next-intl";

const Process = () => {
  const t = useTranslations("process");
  const ProcessCard = ({
    step,
  }: {
    step: (typeof processSteps)[0];
    index: number;
  }) => {
    const Icon = step.icon;

    return (
      <CardBody
        className="bg-white rounded-xl p-4 sm:p-5 lg:p-6 shadow-lg flex flex-col h-full 
        min-h-[300px] lg:min-h-[320px] relative transition-all duration-300 
        hover:bg-primary group">
        {/* Duration badge */}
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 bg-primary-secondary text-primary rounded-full text-xs font-medium">
            {step.duration}
          </span>
        </div>

        {/* Icon and Title Container */}
        <div className="flex flex-col items-start text-left space-y-3">
          <div
            className="p-3 bg-primary rounded-xl transform transition-all duration-300 
            hover:scale-110">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3
            className="font-bold text-lg lg:text-xl text-black
            group-hover:text-white transition-colors duration-300">
            {step.title}
          </h3>
        </div>

        {/* Description */}
        <p
          className="text-black text-sm leading-relaxed mt-3
          group-hover:text-white/90 transition-colors duration-300">
          {step.description}
        </p>
      </CardBody>
    );
  };
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const processSteps = [
    {
      icon: Calendar,
      title: t("processsteps1.title"),
      duration: t("processsteps1.duration"),
      description: t("processsteps1.processdesc"),
    },
    {
      icon: Users,
      title: t("processsteps2.title"),
      duration: t("processsteps2.duration"),
      description: t("processsteps2.processdesc"),
    },
    {
      icon: FileCheck2,
      title: t("processsteps3.title"),
      duration: t("processsteps3.duration"),
      description: t("processsteps3.processdesc"),
    },
    {
      icon: Plane,
      title: t("processsteps4.title"),
      duration: t("processsteps4.duration"),
      description: t("processsteps4.processdesc"),
    },
  ];
  useEffect(() => {
    return () => {
      scrollYProgress.destroy();
    };
  }, [scrollYProgress]);

  const translateLeft = useTransform(scrollYProgress, [0, 1], [100, -80]);
  const translateRight = useTransform(scrollYProgress, [0, 1], [100, -80]);
  const translateMiddleTop = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const translateTitle = useTransform(scrollYProgress, [0, 1], [100, -80]);

  return (
    <section
      className="py-16 sm:py-20 lg:py-35 overflow-hidden"
      ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            {t("title")}
          </h2>
          <p className="text-black max-w-2xl mx-auto mt-4">{t("subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          <div className="relative hidden md:block">
            <motion.div
              className="absolute top-16 left-2 z-10"
              style={{ y: translateTitle }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}></motion.div>

            <motion.div style={{ y: translateLeft }} className="h-full mt-52">
              <CardContainer className="w-full">
                <ProcessCard step={processSteps[0]} index={0} />
              </CardContainer>
            </motion.div>
          </div>

          {/* Middle Column - Second and Third Cards */}
          <div className="hidden md:flex flex-col space-y-8 lg:space-y-12 mt-32">
            {[1, 2].map((index) => (
              <motion.div
                key={processSteps[index].title}
                style={{ y: translateMiddleTop }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="transform-gpu">
                <CardContainer className="w-full">
                  <ProcessCard step={processSteps[index]} index={index} />
                </CardContainer>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Fourth Card */}
          <motion.div
            style={{ y: translateRight }}
            className="hidden md:block h-full mt-32">
            <CardContainer className="w-full">
              <ProcessCard step={processSteps[3]} index={3} />
            </CardContainer>
          </motion.div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            {/* Mobile Title */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              <h2 className="text-lg sm:text-xl font-bold text-primary mb-1">
                The Process of Hiring Foreign Workers
              </h2>
              <p className="text-xs sm:text-sm text-black">
                A comprehensive approach to international recruitment
              </p>
            </motion.div>

            {/* Mobile Cards */}
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-md hover:bg-primary group transition-all duration-300">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-base text-black group-hover:text-white">
                        {step.title}
                      </h3>
                      <div className="p-3 bg-primary rounded-lg shrink-0">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <span className="text-sm bg-primary text-white px-3 py-1 rounded-full w-fit">
                      {step.duration}
                    </span>

                    <p className="text-black text-sm leading-relaxed mt-2 group-hover:text-white/90">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

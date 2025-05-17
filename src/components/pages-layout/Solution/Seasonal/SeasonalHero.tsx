import React from "react";
import SolutionArticale from "@/components/common/SolutionArticale";
import SolutionDetails from "@/components/common/SolutionDetails";
import SolutionContent from "@/components/common/SolutionContent";
import { useTranslations } from "next-intl";

const Content = [
  {
    title: "Access to Skilled Talent",
    paragraphs:
      " Gain access to a pool of qualified, vetted professionals ready to meet your business needs",
  },
  {
    title: "Flexible Workforce Solutions",
    paragraphs:
      " We recognize the importance of adaptability and offer workforce management solutions tailored to your operational demands.",
  },
  {
    title: "Fast & Hassle-Free Recruitment",
    paragraphs:
      " Accelerate your hiring process with our streamlined approach to sourcing, onboarding, and managing talent.",
  },
];
export default function SeasonalHero() {
  const t = useTranslations("solutionsseasonal");
  const paragraphs = t.raw("seasonalarticle.peragraphs") as string[];
  return (
    <section className="py-12 container">
      <SolutionArticale
        imageSrc="/images/seasonal1.jpg"
        title={t("seasonalarticle.title")}
        highlightedText={t("seasonalarticle.boldtext")}
        paragraphs={paragraphs}
      />
      <SolutionDetails
        imageSrc="/images/seasonal2.jpg"
        title="Assignment of workers"
        paragraphs="we enables quick and easy hiring of labor for seasonal projects or fixed-term assignments. You can tap into an existing pool of workers across Europe, significantly speeding up the recruitment process. We handle the conclusion of assignment agreements and take full responsibility for salary payments and all related administrative tasks. This service offers a practical solution for urgent workforce needs, ensuring flexibility and efficiency in managing staff for various projects and seasonal demands."
      />
      <div className="w-full flex justify-center px-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          {Content.map((item, index) => (
            <div key={index} className={`text-center px-4`}>
              <SolutionContent
                title={item.title}
                paragraphs={item.paragraphs}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import TeamCard from "@/components/common/TeamCard";
import { useTranslations } from "next-intl";

export default function BehindOurTeam() {
  const t = useTranslations("behindthebrand");
  return (
    <section className="py-12 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[45px] text-black md:text-4xl font-bold text-center mb-12">
          {t("teamsction.title")}
        </h2>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          <TeamCard
            name={t("teamsction.team1.name")}
            // title={t("teamsction.team1.position")}
            description={t("teamsction.team1.description")}
            emailLink="sales@company.com"
          />
          <TeamCard
            name={t("teamsction.team2.name")}
            // title={t("teamsction.team2.position")}
            description={t("teamsction.team2.description")}
            emailLink="sales@company.com"
          />
          <TeamCard
            name={t("teamsction.team3.name")}
            // title={t("teamsction.team3.position")}
            description={t("teamsction.team3.description")}
            emailLink="sales@company.com"
          />
          <TeamCard
            name={t("teamsction.team4.name")}
            // title={t("teamsction.team4.position")}
            description={t("teamsction.team4.description")}
            emailLink="sales@company.com"
          />
          <TeamCard
            name={t("teamsction.team5.name")}
            // title={t("teamsction.team5.position")}
            description={t("teamsction.team5.description")}
            emailLink="sales@company.com"
          />
          <TeamCard
            name={t("teamsction.team6.name")}
            // title={t("teamsction.team6.position")}
            description={t("teamsction.team6.description")}
            emailLink="sales@company.com"
          />
          <TeamCard
            name={t("teamsction.team7.name")}
            // title={t("teamsction.team7.position")}
            description={t("teamsction.team7.description")}
            emailLink="sales@company.com"
          />
          <TeamCard
            name={t("teamsction.team8.name")}
            // title={t("teamsction.team8.position")}
            description={t("teamsction.team8.description")}
            emailLink="sales@company.com"
          />

          <TeamCard
            name={t("teamsction.team9.name")}
            // title={t("teamsction.team9.position")}
            description={t("teamsction.team9.description")}
            emailLink="sales@company.com"
          />
          <TeamCard
            name={t("teamsction.team10.name")}
            // title={t("teamsction.team10.position")}
            description={t("teamsction.team10.description")}
            emailLink="sales@company.com"
          />
          {/* <TeamCard
            title="Recruitment Consultant"
            name="Luka Jovanović"
            // imageSrc="/images/team2.jpg"
            emailLink="luka@recruitment-4u.co"
            bgColor="bg-[#009AEE]"
          />
          <TeamCard
            title="Talent Acquisition Specialist"
            name="Ivana Radić"
            // imageSrc="/images/team3.jpg"
            emailLink="ivana@recruitment-4u.co"
            bgColor="bg-[#FFEA9A]"
          />
          <TeamCard
            title="Sourcing Specialist"
            name="Matteo Borg"
            // imageSrc="/images/team4.jpg"
            emailLink="matteo@recruitment-4u.co"
            bgColor="bg-[#FFEA9A]"
          />
          <TeamCard
            title="Account Manager (Clients)"
            name="Stefan Ionescu"
            // imageSrc="/images/team5.jpg"
            emailLink="stefan@recruitment-4u.co"
            bgColor="bg-[#009AEE]"
          />
          <TeamCard
            title="Candidate Relationship Manager"
            name="Marko Petrović"
            // imageSrc="/images/team6.jpg"
            emailLink="marko@recruitment-4u.co"
            bgColor="bg-[#FFEA9A]"
          />
          <TeamCard
            title="Recruitment Coordinator"
            name="Emma Camilleri"
            // imageSrc="/images/team8.jpg"
            emailLink="emma@recruitment-4u.co"
            bgColor="bg-[#9CC8C0]"
          />
          <TeamCard
            title="Business Development Executive"
            name="Elena Marinescu"
            // imageSrc="/images/team9.jpg"
            emailLink="elena@recruitment-4u.co"
            bgColor="bg-[#D388BE]"
          />
          <TeamCard
            title="Employer Branding Specialist"
            name="Ana Stojanović"
            // imageSrc="/images/team10.jpg"
            emailLink="ana@recruitment-4u.co"
            bgColor="bg-[#D388BE]"
          /> */}
        </div>
      </div>
    </section>
  );
}

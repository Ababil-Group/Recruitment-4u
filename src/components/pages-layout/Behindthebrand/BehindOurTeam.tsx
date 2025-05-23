"use client";
import React from "react";
import TeamCard from "@/components/common/TeamCard";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function BehindOurTeam() {
  const router = useRouter();
  const t = useTranslations("behindthebrand");
  const HandileClick = (path: string) => {
    router.push(path);
  };
  return (
    <section className="py-12 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[45px] text-black md:text-4xl font-bold text-center mb-12">
          {t("teamsction.title")}
        </h2>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          <TeamCard
            name={t("teamsction.team1.name")}
            onClick={() => HandileClick("/position/team1")}
            // title={t("teamsction.team1.position")}
            description={t("teamsction.team1.description")}
            emailLink="sales@company.com"
          />
          <TeamCard
            name={t("teamsction.team2.name")}
            onClick={() => HandileClick("/position/team2")}
            // title={t("teamsction.team2.position")}
            description={t("teamsction.team2.description")}
            emailLink="sales@company.com"
          />
          <TeamCard
            name={t("teamsction.team3.name")}
            onClick={() => HandileClick("/position/team3")}
            // title={t("teamsction.team3.position")}
            description={t("teamsction.team3.description")}
            emailLink="sales@company.com"
          />
          <TeamCard
            name={t("teamsction.team4.name")}
            onClick={() => HandileClick("/position/team4")}
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
        </div>
      </div>
    </section>
  );
}

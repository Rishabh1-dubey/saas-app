import CompanionCard from "@/components/CompanionCard";
import CompantionList from "@/components/CompantionList";
import CTA from "@/components/CTA";
import { getAllCompanions, getRecentSessions } from "@/lib/action/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import React from "react";

const Page = async () => {

  const companions = await getAllCompanions({ limit: 3 })
  const recentSessionCompanion = await getRecentSessions(10)

  return (
    <main className="">
      <h1 className="text-2xl underline "> Popular Companions</h1>

      <section className="home-section">
        {
          companions.map((companion:Companion) => (

            <CompanionCard key={companion.id} {...companion} color={getSubjectColor(companion.subject)} />

          ))
        }


      </section>

      <section className="home-section">
        <CompantionList title="Recently completed session" companions={recentSessionCompanion} className="w-2/3 max-lg:w-full" />
        <CTA />
      </section>
    </main>
  );
};

export default Page;

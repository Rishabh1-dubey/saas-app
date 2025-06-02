import CompanionCard from "@/components/CompanionCard";
import CompantionList from "@/components/CompantionList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
import { getAllCompanions } from "@/lib/action/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import React from "react";

const Page = async () => {

  const companions = await getAllCompanions({ limit: 3 })

  return (
    <main className="">
      <h1 className="text-2xl underline "> Popular Companions</h1>

      <section className="home-section">
        {
          companions.map((companion:any) => (

            <CompanionCard key={companion.id} {...companion} color={getSubjectColor(companion.subject)} />

          ))
        }


      </section>

      <section className="home-section">
        <CompantionList title="Recently completed session" companions={recentSessions} className="w-2/3 max-lg:w-full" />
        <CTA />
      </section>
    </main>
  );
};

export default Page;

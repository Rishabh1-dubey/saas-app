import CompanionCard from "@/components/CompanionCard";
import CompantionList from "@/components/CompantionList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main className="">
      <h1 className="text-2xl underline "> Popular Companions</h1>

      <section className="home-section">
        <CompanionCard
          id="123"
          name="Nerual the Brainy works"
          topic="Neural Network of Future"
          subject="science"
          duration={45}
          color="#ffda6e"
        />

        <CompanionCard
          id="456"
          name="Countsy the Number Wizard"
          topic="Derivatives and Integrals"
          subject="Maths"
          duration={45}
          color="#e5d0ff"
        />

        <CompanionCard
          id="123"
          name="Verba the Vocalbulary Builder"
          topic="English Literature"
          subject="Language"
          duration={30}
          color=" #BDE7FF"
        />
      </section>

      <section className="home-section">
        <CompantionList  title ="Recently completed session" companions={recentSessions} className="w-2/3 max-lg:w-full" />
        <CTA />
      </section>
    </main>
  );
};

export default Page;

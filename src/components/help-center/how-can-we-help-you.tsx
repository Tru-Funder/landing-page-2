import React from "react";
import Card from "./card";

export default function HowCanWeHelpYou() {
  return (
    <section className="bg-[#070E2A] py-24">
      <div className="custom-container grid gap-6 text-white text-center">
        <h1 className="text-4xl font-bold">
          How can we{" "}
          <span className="bg-[linear-gradient(91deg,_#03C90A_58.27%,_#018905_103.02%)] bg-clip-text text-transparent">
            help you?
          </span>
        </h1>

        <input
          type="text"
          placeholder="Start typing to search"
          className="bg-[#282D3E] rounded-full outline-none px-6 py-3 [filter:_drop-shadow(0px_4px_4px_rgba(170,_170,_170,_0.25))"
        />

        <p>
          <span className="font-semibold">OR</span> choose an option below
        </p>

        <div className="grid grid-cols-3 gap-10 mt-6">
          <Card
            content="2-Step evaluation account: Your path to trading mastery. Are you ready to take your trading skills to the next level?"
            icon="/assets/rating.svg"
            title="Guides"
          />
          <Card
            content="Direct funding with our express trading account, you can bypass lengthy evaluation phases and access direct funding."
            icon="/assets/deadline.svg"
            title="FAQ"
          />
          <Card
            content="Transition from being a lucky trader to a skillful, strategic one with Trufunder One-Step Account."
            icon="/assets/one-time-password.svg"
            title="Community"
          />
        </div>
      </div>
    </section>
  );
}

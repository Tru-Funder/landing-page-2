import Image from "next/image";
import React from "react";

interface CardProps {
  Icon_url: string;
  className?: string;
  exchanges: string[];
  title: string;
}

export default function Card({
  Icon_url,
  className,
  exchanges,
  title,
}: CardProps) {
  return (
    <div
      className={`bg-[linear-gradient(180deg,_#008905_0%,_#15272E_51.5%,_#11292F_67%,_#070E2A_100%)] w-[500px] p-10 rounded-xl text-white ${className}`}
    >
      <span className="block relative w-5 mx-auto">
        <Image src={Icon_url} width={100} height={100} alt={`${title} Icon`} />
      </span>

      <h3 className="text-3xl font-bold text-center mt-5">{title}</h3>

      <div className="grid grid-flow-col items-center gap-3 w-max mx-auto">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="block relative w-5">
            <Image
              src={"/assets/star.png"}
              width={100}
              height={100}
              alt={`Star Icon`}
            />
          </span>
        ))}
        <span className="block relative w-5">
          <Image
            src={"/assets/star.png"}
            width={100}
            height={100}
            alt={`Star Icon`}
          />
        </span>
        <p>(4.8)</p>
      </div>

      <div className="w-full bg-[#070E2A] rounded-xl mx-auto mt-8">
        <span className="block relative w-full">
          <Image
            src={"/assets/chart.png"}
            width={500}
            height={500}
            alt={`Star Icon`}
          />
        </span>
      </div>

      <div className="grid gap-3 mt-8">
        <p>Exchange:</p>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(100px,_1fr))] gap-x-10 gap-y-3">
          {exchanges.map((exchange, i) => (
            <p key={i}>{exchange}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

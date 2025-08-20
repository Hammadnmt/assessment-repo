"use client";
import React from "react";
import Image from "next/image";
import { Card } from "@/components/ProductCard";
import { InvestmentPersona } from "@/components/InvestmentPersona";
import Subscription from "@/components/Subscription";
import NavBar from "./NavBar";

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center gap-16 self-stretch py-12 pb-24 ">
        <div className="px-60 flex flex-col self-stretch gap-6">
          <div>
            <h4 className="text-[28.43px] leading-[125%] font-[350] text-white">My Account</h4>
          </div>
          <div className="flex items-center self-stretch gap-4">
            <div>
              <Image src="/Avatar.png" width={76} height={76} alt="avatart" />
            </div>
            <div className="flex items-center gap-4">
              <h4 className="text-white text-[28.43px] not-italic font-[350] leading-[125%]">Oliva Rhye</h4>
              <Image src="/pen.png" width={24} height={24} alt="edit" />
            </div>
            <div className="flex items-center gap-1">
              <Image src="/email.png" width={24} height={24} alt="email" />
              <h4 className="text-[rgba(255,255,255,0.75)] text-base font-[325] leading-6">
                olivia@gmail.com
              </h4>
              <Image src="/pen.png" width={24} height={24} alt="pen" />
            </div>
            <div className="flex items-center gap-2">
              <Image src="/logo.png" width={24} height={24} alt="email" />
              <h4 className="text-[var(--Website,#5699FF)] text-[16px] not-italic font-[350] leading-[24px]">
                rileyomoore
              </h4>
              <Image src="/arrowup.png" width={20} height={20} alt="pen" />
              <Image src="/pen.png" width={24} height={24} alt="pen" />
            </div>
          </div>
        </div>

        <div>
          <InvestmentPersona />
        </div>

        <div className="px-60 flex flex-col self-stretch gap-6">
          <div className="flex flex-col items-start self-stretch gap-1">
            <h3 className="text-[28.43px] leading-[125%] font-[350] text-white">Product recommendation</h3>
            <p className="text-[rgba(255,255,255,0.75)] font-[350] text-[16px] leading-[145%] tracking-[-0.48px]">
              These tools have been recommended to you based on previous purchase and your personality types
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <Card
              imageSrc="/image1.png"
              imageAlt="DCAS"
              tag="Introductory tool"
              title="IA DCA on Steroids (DCAS)"
              description="Dollar Cost Average on Steroids (aka 'DCAS') is a first-of-its-kind, mathematically proven model to optimize your DCA strategy by timing market buys and loads based on numerous math models."
              originalPrice="$40"
              currentPrice="$19 USD/mo."
            />

            <Card
              imageSrc="/image2.png"
              imageAlt="Arc Cloud"
              tag="Advanced tool"
              title="IA Arb Cloud"
              description="The Arb Cloud is a model designed to help traders identify arbitrage opportunities for co-integrated assets (for example BTC and MSTR)."
              originalPrice="$54"
              currentPrice="$24 USD/mo."
            />

            <Card
              imageSrc="/image3.png"
              imageAlt="Solana"
              tag="Introductory tool"
              title="IA Solana Upside Model"
              description="Designed to help you visualize Solana's price in comparison to several of our price prediction models (ETH + ADA), the Solana Upside Model allows you to optimally allocate Solana as well as profit take and help you get accustomed to pair trading."
              currentPrice="FREE"
            />
          </div>
        </div>
        <Subscription />
      </div>
    </>
  );
}

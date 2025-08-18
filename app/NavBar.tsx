import Image from "next/image";
import React from "react";

export default function NavBar() {
  return (
    <nav className="box-border shadow-[0_0_53px_0_rgba(0,0,0,0.25)] pt-4 px-60 pb-6 flex items-center justify-between self-stretch">
      <h2 className="text-[#FFF] font-light text-[30.462px] uppercase">InvestAnswers</h2>
      <div className="flex items-start gap-6">
        <div>
          <p className="">Crypto Compendium</p>
        </div>
        <div>
          <p className="">SCP Profile</p>
        </div>
        <div>
          <p className="">Product</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex justify-center gap-1.5 items-center py-1.5 px-4 rounded-lg border border-[1px,rgba(255,255,255,0.75)]">
          <Image src="/Question.png" width={24} height={24} alt="Question mark" />
          <p>Support</p>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/Avatar.png" width={40} height={49} alt="avatar" />
          <Image src="/arrow.png" width={24} height={24} alt="arrow" />
        </div>
      </div>
    </nav>
  );
}

import Image from "next/image";
import React from "react";
import SubscriptionCard from "./SubscriptionCard";
export default function Subscription() {
  return (
    <div className="px-60 flex flex-col items-start self-stretch gap-6">
      <div className="flex flex-col items-start self-stretch gap-5">
        <div className="flex items-start self-stretch gap-4">
          <div className="flex flex-col justify-center items-start self-stretch flex-1 gap-1">
            <div className="flex items-center self-stretch gap-2">
              <h2 className="text-[color:var(--Primary-Heading,#FFF)] text-[28.43px] font-normal leading-[125%]">
                Your subscriptions
              </h2>
            </div>
            <h3 className="text-white/75 text-base leading-[145%] tracking-[-0.48px]">
              All the subscriptions that you purchased
            </h3>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start self-stretch gap-2">
        <div className="flex items-start  gap-4">
          <div className="py-3 flex items-center justify-center gap-2">
            <h3 className="text-white/75 text-xl font-semibold leading-5">All subscriptions</h3>
            <div className="flex py-0.5 px-2  items-center border border-[#7ACFE3] rounded-full">
              <span>3</span>
            </div>
          </div>
          <div className="py-3 flex items-center justify-center gap-2">
            <h3 className="text-white/75 text-xl font-semibold leading-5">Active</h3>
            <div className="flex py-0.5 px-2 items-center border border-[#7ACFE3] rounded-full">
              <span>2</span>
            </div>
          </div>
          <div className="py-3 flex items-center justify-center gap-2">
            <h3 className="text-white/75 text-xl font-semibold leading-5">Inactive</h3>
            <div className="flex py-0.5 px-2 items-center">
              <span>1</span>
            </div>
          </div>
        </div>
        <Image src="/divider.png" width={1920} height={1} alt="divider" />
      </div>

      {/*Cards start here*/}

      <div className="grid grid-cols-3 gap-6">
        <SubscriptionCard title="IA Bitcoin Top & Bottom (TABI)" image={"/bitcoin.png"} />
        <SubscriptionCard title="IA Bitcoin Top & Bottom (TABI)" image={"/bitcoin.png"} />
        <SubscriptionCard title="IA Bitcoin Top & Bottom (TABI)" image={"/bitcoin.png"} />
      </div>
    </div>
  );
}

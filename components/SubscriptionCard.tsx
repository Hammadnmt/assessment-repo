import React from "react";
import Image from "next/image";
interface SubscriptionCardProps {
  image: string;
  title: string;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ image, title }) => {
  return (
    <div className="flex flex-col items-start rounded-xl border border-[color:var(--Accent,#212428)] bg-[color:var(--background,#010203)] shadow-xs">
      <div className="flex flex-col items-start p-6 gap-6">
        <div className="flex flex-col justify-center items-start self-stretch gap-2">
          <Image src={image} width={84} height={84} alt="bitcoin" />
          <h2 className="overflow-hidden text-[var(--Primary-Heading)] text-[21.33px] font-[350] leading-[135%] font-gotham truncate">
            {title}
          </h2>
        </div>

        <div className="flex items-start self-stretch gap-6">
          <div className="flex flex-col items-start flex-1 gap-1">
            <p className="text-[var(--Secondary-Heading)] font-gotham text-[14px] font-[325] leading-[20px]">
              Product Access
            </p>
            <div className="bg-green-500 border-none rounded-2xl flex items-center justify-center px-3 py-1">
              <span className="text-black font-poppins text-[14px] font-medium leading-none">Active</span>
            </div>
          </div>
          <div className="flex flex-col items-center flex-1 gap-1">
            <p className="text-white/75 font-gotham text-[14px] leading-[20px]">Linked Trading View</p>
            <div className="flex items-start gap-2">
              <Image src="/logo.png" height={24} width={24} alt="logo" />
              <div className="flex items-center justify-center gap-2">
                <p className="text-[var(--Tirshery-Heading,#7ACFE3)] font-gotham text-[16px] font-[350] leading-[24px]">
                  rohantahir
                </p>
                <Image src="/arrowup.png" width={24} height={24} alt="Arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center self-stretch border border-l-0 border-r-0 border-b-0 border-t-[#212428]">
        <div className="flex items-center justify-center self-stretch gap-4 px-4 py-2">
          <div className="flex items-center justify-center self-stretch` py-4 gap-2 px-0">
            <Image src="/Book.png" width={24} height={24} alt="guide" />
            <h2 className="text-[var(--Primary-Heading,#FFF)]  text-[14px]  leading-[20px]">
              User guides Videos
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            <Image src="/Vector.png" width={2} height={12} alt="Vector" />
          </div>
          <div className="flex items-center justify-center py-4 gap-2 px-0">
            <Image src="/Settings.png" width={24} height={24} alt="guide" />
            <h2 className="text-white/75 font-gotham text-[14px] not-italic font-[350] leading-[20px]">
              Manage Subscription
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;

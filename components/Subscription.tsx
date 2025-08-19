import Image from "next/image";
import React from "react";
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
            <h3 className="text-[color:var(--Secondary-Heading,rgba(255,255,255,0.75))] text-base leading-[145%] tracking-[-0.48px]">
              All the subscriptions that you purchased
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start self-stretch gap-2">
        <div className="flex items-start  gap-4">
          <div className="py-3 px-3 flex items-center justify-center gap-2">
            <h3 className="text-[color:var(--Secondary-Heading,rgba(255,255,255,0.75))] text-xl font-semibold leading-5">
              All subscriptions
            </h3>
            <div className="flex py-0.5 px-2 flex items-center border border-[#7ACFE3] rounded-full">
              <span>3</span>
            </div>
          </div>
          <div className="py-3 px-3 flex items-center justify-center gap-2">
            <h3 className="text-[color:var(--Secondary-Heading,rgba(255,255,255,0.75))] text-xl font-semibold leading-5">
              Active
            </h3>
            <div className="flex py-0.5 px-2 flex items-center border border-[#7ACFE3] rounded-full">
              <span>2</span>
            </div>
          </div>
          <div className="py-3 px-3 flex items-center justify-center gap-2">
            <h3 className="text-[color:var(--Secondary-Heading,rgba(255,255,255,0.75))] text-xl font-semibold leading-5">
              Inactive
            </h3>
            <div className="flex py-0.5 px-2 flex items-center">
              <span>1</span>
            </div>
          </div>
        </div>
        <Image src="/divider.png" width={1920} height={1} alt="divider" />
      </div>

      <div className="flex items-start self-stretch gap-4">
        <div className="flex flex-col items-start rounded-xl border border-[color:var(--Accent,#212428)] bg-[color:var(--background,#010203)] shadow-xs">
          <div className="flex flex-col items-start p-6 gap-6">
            <div className="flex flex-col justify-center items-start self-stretch gap-2">
              <Image src="/bitcoin.png" width={84} height={84} alt="bitcoin" />
              <h2 className="overflow-hidden text-[var(--Primary-Heading)] text-[21.33px] font-[350] leading-[135%] font-gotham truncate">
                IA Bitcoin Top & Bottom (TABI)
              </h2>
            </div>

            <div className="flex items-start self-stretch gap-6">
              <div className="flex flex-col items-start flex-1 gap-1">
                <p className="text-[var(--Secondary-Heading)] font-gotham text-[14px] font-[325] leading-[20px]">
                  Product Access
                </p>
                <div className="bg-[#4BE26C] border rounded-2xl p-2">
                  <span className="text-[var(--text-color-blue-gray-text-color-blue-gray)] font-poppins text-[14px] font-medium leading-none">
                    Active
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center flex-1 gap-1">
                <p className="text-white/75 font-gotham text-[14px] font-[325] leading-[20px]">
                  Linked Trading View
                </p>
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

          <div className="flex flex-col items-center self-stretch border-t-[#212428] px-4">
            <div className="flex items-center justify-center self-stretch gap-4">
              <div className="flex items-center justify-center py-4 gap-2 px-0">
                <Image src="/Book.png" width={24} height={24} alt="guide" />
                <h2 className="text-[var(--Primary-Heading,#FFF)] font-gotham text-[14px] font-[350] leading-[20px]">
                  User guides & Videos
                </h2>
              </div>
              <Image src="/Vector.png" width={1} height={5} alt="divider" />
              <div className="flex items-center justify-center py-4 gap-2 px-0">
                <Image src="/Settings.png" width={24} height={24} alt="guide" />
                <h2 className="text-[var(--Primary-Heading,#FFF)] font-gotham text-[14px] font-[350] leading-[20px]">
                  User guides & Videos
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start rounded-xl border border-[color:var(--Accent,#212428)] bg-[color:var(--background,#010203)] shadow-xs">
          <div className="flex flex-col items-start p-6 gap-6">
            <div className="flex flex-col justify-center items-start self-stretch gap-2">
              <Image src="/bitcoin.png" width={84} height={84} alt="bitcoin" />
              <h2 className="overflow-hidden text-[var(--Primary-Heading)] text-[21.33px] font-[350] leading-[135%] font-gotham truncate">
                IA Layer In, Layer Out (LILO)
              </h2>
            </div>

            <div className="flex items-start self-stretch gap-6">
              <div className="flex flex-col items-start flex-1 gap-1">
                <p className="text-[var(--Secondary-Heading)] font-gotham text-[14px] font-[325] leading-[20px]">
                  Product Access
                </p>
                <div className="bg-[#4BE26C] border rounded-2xl p-2">
                  <span className="text-[var(--text-color-blue-gray-text-color-blue-gray)] font-poppins text-[14px] font-medium leading-none">
                    Active
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center flex-1 gap-1">
                <p className="text-white/75 text-[14px] font-[325] leading-[20px]">Linked Trading View</p>
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

          <div className="flex flex-col items-center self-stretch border-t-[#212428] px-4">
            <div className="flex items-center justify-center self-stretch gap-4">
              <div className="flex items-center justify-center py-4 gap-2 px-0">
                <Image src="/Book.png" width={24} height={24} alt="guide" />
                <h2 className="text-[var(--Primary-Heading,#FFF)] font-gotham text-[14px] font-[350] leading-[20px]">
                  User guides & Videos
                </h2>
              </div>
              <Image src="/Vector.png" width={1} height={5} alt="divider" />
              <div className="flex items-center justify-center py-4 gap-2 px-0">
                <Image src="/Settings.png" width={24} height={24} alt="guide" />
                <h2 className="text-[var(--Primary-Heading,#FFF)] font-gotham text-[14px] font-[350] leading-[20px]">
                  User guides & Videos
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start rounded-xl border border-[color:var(--Accent,#212428)] bg-[color:var(--background,#010203)] shadow-xs">
          <div className="flex flex-col items-start p-6 gap-6">
            <div className="flex flex-col justify-center items-start self-stretch gap-2">
              <Image src="/bitcoin.png" width={84} height={84} alt="bitcoin" />
              <h2 className="overflow-hidden text-[var(--Primary-Heading)] text-[21.33px] font-[350] leading-[135%] font-gotham truncate">
                IA Suite
              </h2>
            </div>

            <div className="flex items-start self-stretch gap-6">
              <div className="flex flex-col items-start flex-1 gap-1">
                <p className="text-[var(--Secondary-Heading)] font-gotham text-[14px] font-[325] leading-[20px]">
                  Product Access
                </p>
                <div className="bg-[#4BE26C] border rounded-2xl p-2">
                  <span className="text-[var(--text-color-blue-gray-text-color-blue-gray)] font-poppins text-[14px] font-medium leading-none">
                    Active
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center flex-1 gap-1">
                <p className="text-[var(--Secondary-Heading)] font-gotham text-[14px] font-[325] leading-[20px]">
                  Linked Trading View
                </p>
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

          <div className="flex flex-col items-center self-stretch border-t-[#212428] px-4">
            <div className="flex items-center justify-center self-stretch gap-4">
              <div className="flex items-center justify-center py-4 gap-2 px-0">
                <Image src="/Book.png" width={24} height={24} alt="guide" />
                <h2 className="text-[var(--Primary-Heading,#FFF)] font-gotham text-[14px] font-[350] leading-[20px]">
                  User guides & Videos
                </h2>
              </div>
              <Image src="/Vector.png" width={1} height={5} alt="divider" />
              <div className="flex items-center justify-center py-4 gap-2 px-0">
                <Image src="/Settings.png" width={24} height={24} alt="guide" />
                <h2 className="text-[var(--Primary-Heading,#FFF)] font-gotham text-[14px] font-[350] leading-[20px]">
                  User guides & Videos
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

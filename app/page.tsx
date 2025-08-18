"use client";
import React from "react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center gap-16 self-stretch py-12 pb-24">
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
            <h4 className="text-[rgba(255,255,255,0.75)] text-base font-[325] leading-6">olivia@gmail.com</h4>
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
      <div className="px-60 flex flex-col self-stretch gap-6">
        <div className="flex flex-col items-start self-stretch gap-1">
          <h3 className="text-[28.43px] leading-[125%] font-[350] text-white">Your investment persona</h3>
          <p className="text-[rgba(255,255,255,0.75)] font-[350] text-[16px] leading-[145%] tracking-[-0.48px]">
            All the subscriptions that you purchased
          </p>
        </div>
        <div className="flex items-start self-stretch gap-2.5">
          <div className="flex flex-col items-start flex-1 border border-[#212428] rounded-lg p-6">
            <div className="flex flex-col items-start self-stretch p-6 gap-6">
              <div className="flex items-start self-stretch gap-4">
                <Image src="/person.png" width={84} height={84} alt="person" />
                <div className="flex-1 flex flex-col items-start gap-2">
                  <div className="flex flex-col items-start self-stretch">
                    <div className="flex items-center self-stretch gap-2">
                      <h2 className="text-[21.33px] font-light leading-[135%] text-[var(--Primary-Heading,#FFF)]">
                        The Architect{" "}
                      </h2>
                      <h2 className="text-lg font-light leading-[140%] text-[var(--Secondary-Heading,rgba(255,255,255,0.75))]">
                        (LQNT)
                      </h2>
                    </div>
                    <p className="text-lg font-[325] leading-[140%] tracking-[-0.54px] text-[var(--Secondary-Heading,rgba(255,255,255,0.75))]">
                      Lorem ipsum dolor sit amet consectetur. Semper in tincidunt non egestas. Tellus sit nec
                      amet quis et sagittis. Convallis id mattis fames lorem. Massa ultricies semper faucibus
                      nullam urna. Viverra posuere laoreet diam sit dictum. Dolor velit quam sit sit imperdiet
                      ullamcorper. Morbi sed augue adipiscing facilisi. Aliquet neque faucibus at tristique a
                      amet risus condimentum. Risus hac diam molestie cursus sed risus ullamcorper lectus
                      ornare. Neque eu dictumst nisl purus. Orci nibh imperdiet morbi auctor lectus
                      ullamcorper vitae morbi vitae. Diam mauris in mauris commodo posuere laoreet. Diam at mi
                      aliquam lacus quisque. Amet auctor adipiscing tempor volutpat. Volutpat aliquam ante ac
                      vestibulum urna morbi etiam odio. Integer viverra aliquam habitasse tincidunt sit.
                      Lectus nunc tempus feugiat non. Varius risus ipsum enim justo in. Donec ornare ligula
                      purus ut scelerisque urna elementum. Enim integer in ac vitae sem. Ipsum tellus in in
                      consectetur.
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <h3 className="text-right text-base font-[350] leading-[125%] text-[var(--Website,#5699FF)]">
                      Read more
                    </h3>
                    <Image src="/arrowup.png" width={24} height={24} alt="arrow" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center self-stretch pb-4 gap-4">
              <Image src="/divider.png" width={1} height={2} alt="divider" />
              <div className="flex items-start self-stretch gap-4">
                <div className="flex items-center justify-center flex-1 gap-2 py-0 px-6">
                  <Image src="/lab.png" width={24} height={24} alt="lab" />
                  <h3 className="text-sm font-[350] leading-[20px] text-[var(--Primary-Heading,#FFF)]">
                    Retake Test
                  </h3>
                </div>
                <Image src="/Vector.png" width={1} height={24} alt="Divider" />
                <div className="flex items-center justify-center flex-1 gap-2 py-0 px-6">
                  <Image src="/Settings.png" width={24} height={24} alt="lab" />
                  <h3 className="text-sm font-[350] leading-[20px] text-[var(--Primary-Heading,#FFF)]">
                    Manage Personality Records
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-60 flex flex-col self-stretch gap-6">
        <div className="flex flex-col items-start self-stretch gap-1">
          <h3 className="text-[28.43px] leading-[125%] font-[350] text-white">Product recommendation</h3>
          <p className="text-[rgba(255,255,255,0.75)] font-[350] text-[16px] leading-[145%] tracking-[-0.48px]">
            These tools have been recommended to you based on previous purchase and your personality types
          </p>
        </div>

        <div className="flex items-start self-stretch gap-6">
          {/* DCAS Product */}
          <div className="flex-1 flex flex-col items-start self-strech gap-4 rounded-xl bg-[rgba(255,255,255,0.05)]">
            <div className="flex flex-col items-start flex-1 self-stretch p-6 gap-6">
              <div className="flex flex-col justify-center items-start self-stretch gap-3">
                <Image src="/image1.png" alt="DCAS" width={128} height={128} />
                <div className="flex flex-col items-start self-stretch gap-2">
                  <div className="flex flex-col items-start self-stretch gap-2">
                    <div className="flex flex-col items-start self-stretch">
                      <h2 className="text-[color:var(--Secondary-Heading,rgba(255,255,255,0.75))] text-base font-light leading-[145%] tracking-[-0.48px]">
                        Introductory tool
                      </h2>
                      <h2 className="text-[color:var(--Primary-Heading,#FFF)] text-[21.33px] font-light leading-[135%]">
                        IA DCA on Steroids (DCAS)
                      </h2>
                    </div>
                    <div className="w-full">
                      <h2 className="text-lg font-[325] leading-[140%] tracking-[-0.54px] text-[var(--Secondary-Heading,rgba(255,255,255,0.75))]">
                        Dollar Cost Average on Steroids (aka “DCAS”) is a first-of-its-kind, mathematically
                        proven model to optimize your DCA strategy by timing market buys and loads based on
                        numerous math models.
                      </h2>
                    </div>
                  </div>
                  <p className="text-[color:var(--Website,#5699FF)] font-inter text-sm font-semibold leading-5">
                    Learn more
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center self-stretch gap-4 pb-4">
              <Image src="/divider.png" width={100} height={1} alt="divider" />
              <div className="flex justify-end items-center self-stretch py-0 px-6 gap-4">
                <div className="flex items-center flex-1 gap-2">
                  <h2 className="text-[color:var(--Secondary-Heading,rgba(255,255,255,0.75))] text-[21.33px] font-[350] leading-[120%] line-through">
                    $40
                  </h2>
                  <h5 className="text-[color:var(--Primary-Heading,#FFF)] text-[21.33px] font-[350] leading-[135%]">
                    $19 USD/mo.
                  </h5>
                </div>
                <div className="flex items-center gap-4"></div>
              </div>
            </div>
          </div>

          {/* Arc Cloud Product */}
          <div className="flex-1 flex flex-col gap-4 p-6 rounded-lg bg-[rgba(255,255,255,0.05)]">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 relative">
                <Image src="/image2.png" alt="Arc Cloud" layout="fill" objectFit="contain" />
              </div>
              <span className="text-white text-[18px] font-[350]">Additional tool</span>
            </div>
            <h4 className="text-white text-[21.33px] font-[350] leading-[135%]">IA Arc Cloud</h4>
            <p className="text-[rgba(255,255,255,0.75)] text-[16px] font-[350] leading-[140%]">
              The Arc Cloud is a model designed to help modern identity settings automatically for
              co-integrated size.
            </p>
            <div className="flex items-center gap-2 mt-auto">
              <span className="text-white text-[18px] font-[350] line-through">$54</span>
              <span className="text-white text-[18px] font-[350]">$24 USD/mo.</span>
            </div>
          </div>

          {/* Solana Product */}
          <div className="flex-1 flex flex-col gap-4 p-6 rounded-lg bg-[rgba(255,255,255,0.05)]">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 relative">
                <Image src="/image3.png" alt="Solana Upside Model" layout="fill" objectFit="contain" />
              </div>
              <span className="text-white text-[18px] font-[350]">Manufacturer tool</span>
            </div>
            <h4 className="text-white text-[21.33px] font-[350] leading-[135%]">IA Solana Upside Model</h4>
            <p className="text-[rgba(255,255,255,0.75)] text-[16px] font-[350] leading-[140%]">
              Designer is not key and variable. Science guides in comparison to several of our prior products
              models.
            </p>
            <div className="text-white text-[18px] font-[350] mt-auto">Free</div>
          </div>
        </div>
      </div>
    </div>
  );
}

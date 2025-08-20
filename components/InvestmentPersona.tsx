import Image from "next/image";

/**
 * InvestmentPersona Component
 * Displays a user's investment personality profile with detailed information and actions
 */
export const InvestmentPersona = () => {
  return (
    // Main container with responsive padding
    <div className="px-4 md:px-60 flex flex-col self-stretch gap-6 min-w-dvh">
      {/* Section header with title and description */}
      <div className="flex flex-col items-start self-stretch gap-1">
        <h3 className="text-[28.43px] leading-[125%] font-[350] text-white">Your investment persona</h3>
        <p className="text-[rgba(255,255,255,0.75)] font-[350] text-[16px] leading-[145%] tracking-[-0.48px]">
          All the subscriptions that you purchased
        </p>
      </div>

      {/* Persona card container */}
      <div className="flex items-start self-stretch gap-2.5">
        {/* Main card with border and rounded corners */}
        <div className="flex flex-col items-start flex-1 border border-[#212428] rounded-lg p-6">
          {/* Persona content section */}
          <div className="flex flex-col items-start self-stretch p-6 gap-6">
            {/* Profile header with image and title */}
            <div className="flex items-start self-stretch gap-4">
              {/* Profile image */}
              <Image
                src="/person.png"
                width={84}
                height={84}
                alt="Persona profile"
                className="rounded-full"
              />

              {/* Profile details */}
              <div className="flex-1 flex flex-col items-start gap-2">
                {/* Persona title and tag */}
                <div className="flex flex-col items-start self-stretch">
                  <div className="flex items-center self-stretch gap-2">
                    <h2 className="text-[21.33px] font-light leading-[135%] text-[var(--Primary-Heading,#FFF)]">
                      The Architect
                    </h2>
                    <h2 className="text-lg font-light leading-[140%] text-[var(--Secondary-Heading,rgba(255,255,255,0.75))]">
                      (LQNT)
                    </h2>
                  </div>

                  {/* Persona description with read more functionality */}
                  <p className="text-lg font-[325] leading-[140%] tracking-[-0.54px] text-[var(--Secondary-Heading,rgba(255,255,255,0.75))] line-clamp-3">
                    Lorem ipsum dolor sit amet consectetur. Semper in tincidunt non egestas. Tellus sit nec
                    amet quis et sagittis. Convallis id mattis fames lorem. Massa ultricies semper faucibus
                    nullam urna. Viverra posuere laoreet diam sit dictum. Dolor velit quam sit sit imperdiet
                    ullamcorper. Morbi sed augue adipiscing facilisi. Aliquet neque faucibus at tristique a
                    amet risus condimentum. Risus hac diam molestie cursus sed risus ullamcorper lectus
                    ornare. Neque eu dictumst nisl purus. Orci nibh imperdiet morbi auctor lectus ullamcorper
                    vitae morbi vitae. Diam mauris in mauris commodo posuere laoreet. Diam at mi aliquam lacus
                    quisque. Amet auctor adipiscing tempor volutpat. Volutpat aliquam ante ac vestibulum urna
                    morbi etiam odio. Integer viverra aliquam habitasse tincidunt sit. Lectus nunc tempus
                    feugiat non. Varius risus ipsum enim justo in. Donec ornare ligula purus ut scelerisque
                    urna elementum. Enim integer in ac vitae sem. Ipsum tellus in in consectetur.
                  </p>
                </div>

                {/* Read more link with arrow icon */}
                <div className="flex items-center justify-center gap-2 cursor-pointer group">
                  <h3 className="text-right text-base font-[350] leading-[125%] text-[var(--Website,#5699FF)] group-hover:underline">
                    Read more
                  </h3>
                  <Image
                    src="/arrowup.png"
                    width={24}
                    height={24}
                    alt="Expand content"
                    className="transition-transform group-hover:translate-y-[-2px]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons section */}
          <div className="flex flex-col items-center self-stretch pb-4 gap-4">
            {/* Divider */}
            <Image src="/divider.png" width={1920} height={2} alt="Section divider" />

            {/* Action buttons container */}
            <div className="flex items-start self-stretch gap-4">
              {/* Retake test button */}
              <button className="flex items-center justify-center flex-1 gap-2 py-0 px-6 hover:bg-[rgba(255,255,255,0.05)] rounded-lg transition-colors">
                <Image src="/lab.png" width={24} height={24} alt="Test icon" />
                <h3 className="text-sm font-[350] leading-[20px] text-[var(--Primary-Heading,#FFF)]">
                  Retake Test
                </h3>
              </button>

              {/* Vertical divider */}
              <div className="w-px h-6 bg-[#212428]"></div>

              {/* Manage records button */}
              <button className="flex items-center justify-center flex-1 gap-2 py-0 px-6 hover:bg-[rgba(255,255,255,0.05)] rounded-lg transition-colors">
                <Image src="/Settings.png" width={24} height={24} alt="Settings icon" />
                <h3 className="text-sm font-[350] leading-[20px] text-[var(--Primary-Heading,#FFF)]">
                  Manage Personality Records
                </h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

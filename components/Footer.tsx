import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="px-60">
      <Image src="/divider.png" width={1920} height={2} alt="divider" />
    </div>
  );
}

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface IProp {
  iconUrl: string;
  text: string;
  description: string;
  linkText: string;
}

function FeatureCard({ iconUrl, text, description, linkText }: IProp) {
  return (
    <div className="flex flex-col py-[32px] px-[24px] gap-4 items-center bg-[#1A1B23] rounded-[25px] ">
      <div>
        <img src={iconUrl} alt="feature icon" />
      </div>
      <p className="text-white font-bold text-[32px] text-center">{text}</p>
      <p className="text-subtitle text-center">{description}</p>

      <div>
        <Link href="/">
          <div className="inline-flex gap-2 text-primary">
            {linkText} <ArrowRight color="#B982FF" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default FeatureCard;

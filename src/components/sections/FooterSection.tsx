import React from "react";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { ArrowRight } from "lucide-react";

function FooterSection() {
  const firstSet = ["Company", "About", "Careers", "Press", "News", "Merch"];
  const secondSet = [
    "Privacy Policy and Terms of Service",
    "CoinFlip Privacy Policy",
    "CoinFlip Biometrics Privacy Policy",
    "CoinFlip Financial Privacy Notice",
    "CoinFlip Terms of Service",
    "CoinFlip Trade Desk Terms of Service",
  ];
  return (
    <section className="py-16 ">
      <Separator className="bg-white/40" />

      <div className="flex justify-around w-full flex-col md:flex-row gap-8 mt-8 md:mt-[97px] px-4">
        <div>
          <div>
            <img src="/images/footer_logo.png" alt="footer logo" />
          </div>
          <p className="text-white/40 mt-[32px]">
            CoinFlip, the world&apos;s leading bitcoin ATM operator, makes it so
            flippin&apos; easy to buy and sell bitcoin via cash, card, or bank
            transfer.
          </p>
          <p className="text-white/40 my-4">
            Sign up to get the latest in CoinFlip news, discounts, and more.
          </p>

          <div>
            <div className="relative max-w-[304px]">
              <Input
                type="email"
                placeholder="Email Address"
                className="h-[45px] bg-[#0B0B0F]"
                gradientClassName="h-[50px]"
              />

              <ArrowRight
                className="absolute top-3 right-3 z-20"
                size="20"
                color="#565976"
              />
            </div>
          </div>

          <p className="text-white/40 mt-[24px]">
            © 2021 GPD Holdings, LLC FinCEN MSB
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {firstSet.map((link, index) => (
            <p className="text-white/40" key={index}>
              {link}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-6">
          {secondSet.map((link, index) => (
            <p className="text-white/40" key={index}>
              {link}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FooterSection;

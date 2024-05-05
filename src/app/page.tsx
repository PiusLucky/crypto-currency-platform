import NavBar from "@/components/common/NavBar";
import FeatureSection from "@/components/sections/FeatureSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import InvestmentSection from "@/components/sections/InvestmentSection";
import ReceiveTransmission from "@/components/sections/ReceiveTransmissionSection";
import TakeStepSection from "@/components/sections/TakeStepSection";
import TwoFourSevenSection from "@/components/sections/TwoFourSevenSection";

export default function Home() {
  return (
    <main className="bg-customDark">
      <NavBar />
      <HeroSection />
      <div className="px-4 md:px-[130px]">
        <FeatureSection />
      </div>
      <div className="flex flex-col gap-4 md:gap-16">
        <InvestmentSection />
        <TwoFourSevenSection />
        <TakeStepSection />
        <ReceiveTransmission />
      </div>

      <FooterSection />
    </main>
  );
}

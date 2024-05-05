import React from "react";
import MainButton from "../common/MainButton";

function TwoFourSevenSection() {
  return (
    <section className="flex justify-between flex-col md:flex-row gap-8 items-center xl:-mt-[30rem]">
      <div className="hidden md:block">
        <img src="/images/big_left_section.png" alt="security badge" />
      </div>
      <div className="mt-4 px-4 md:px-[130px]">
        <p className="text-[2rem] md:text-[50px] font-bold">
          24/7 access to full service customer support
        </p>
        <p className="text-subtitle mt-4 mb-[32px]">
          We invest more resources than any other platform in making sure great
          support from real people is a click away, whenever you need it.
        </p>
        <div>
          <MainButton
            text="Get Started"
            classes="bg-transparent  hover:bg-transparent border-[2px] border-white rounded-[10px] font-semibold w-[156px] h-[56px]"
          />
        </div>
      </div>
    </section>
  );
}

export default TwoFourSevenSection;

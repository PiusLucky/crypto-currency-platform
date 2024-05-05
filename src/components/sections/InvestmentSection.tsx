"use client";

import React from "react";
import { motion } from "framer-motion";
import MainButton from "../common/MainButton";

function InvestmentSection() {
  return (
    <section className="z-10 relative overflow-hidden  flex justify-center flex-col items-center bg-cover bg-no-repeat w-full md:h-screen">
      <div className="px-4 md:px-[130px]">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, y: 0 }}
          viewport={{ once: false }}
          className="z-2 font-bold text-[2rem] leading-tight md:text-[85px] text-center"
        >
          A crypto investment platform that invests in you
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, y: 0 }}
          viewport={{ once: false }}
          className="text-subtitle py-[32px] pt-4 text-center"
        >
          We invest more resources than any other platrom in making sure great
          support from real people is a click away, whenever you need it.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, y: 0 }}
        viewport={{ once: false }}
      >
        <MainButton
          text="Get Started"
          classes="primary-gradient border-gradient rounded-[10px] font-semibold w-[156px] h-[56px]"
        />
      </motion.div>
      <div className="absolute right-0 -z-10">
        <img
          src="/images/looper.png"
          alt="looper shape"
          className="w-[700px]"
        />
      </div>
    </section>
  );
}

export default InvestmentSection;

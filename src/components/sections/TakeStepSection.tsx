"use client";

import React from "react";
import MainButton from "../common/MainButton";
import { motion } from "framer-motion";

function TakeStepSection() {
  return (
    <section className="z-10 relative flex justify-between flex-col md:flex-row gap-8 items-center xl:-mt-[30rem]">
      <div className="mt-4 px-4 md:px-[130px]">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, y: 0 }}
          viewport={{ once: false }}
          className="text-[2rem] md:text-[50px] font-bold"
        >
          Take your first step into safe, secure crypto investing
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, y: 0 }}
          viewport={{ once: false }}
          className="text-subtitle mt-4 mb-[32px]"
        >
          Separated they live in Bookmarks right at the coast of the famous
          Semantics, large language ocean Separated they live in Bookmarks right
          at the coast.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <MainButton
            text="Get Started"
            classes="bg-transparent primary-gradient  hover:bg-transparent rounded-[10px] font-semibold w-[156px] h-[56px]"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, y: 0 }}
        viewport={{ once: false }}
        className="hidden md:block"
      >
        <img src="/images/suit_case.png" alt="suit case" />
      </motion.div>

      <div className="hidden md:block absolute -top-8 left-0 -z-10">
        <img
          src="/images/half_large_circle.png"
          alt="half circle"
          className="w-[400px]"
        />
      </div>
    </section>
  );
}

export default TakeStepSection;

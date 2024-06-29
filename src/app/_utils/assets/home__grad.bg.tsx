"use client";

import React from "react";
import Lottie from "lottie-react";
import HomeGradJSON from "./home__grad.data.json";

const Bg__HomeGrad = () => (
  <Lottie
    animationData={HomeGradJSON}
    loop={true}
    className="min-w-[100dvw] min-h-screen transform scale-x-[-1] scale-y-[-1]"
  />
);

export default Bg__HomeGrad;

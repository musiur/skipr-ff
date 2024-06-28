"use client";

import React from "react";
import Lottie from "lottie-react";
import superFastJSON from "./super__fast.data.json";

const Icon__SuperFast = () => (
  <Lottie animationData={superFastJSON} loop={true} />
);

export default Icon__SuperFast;

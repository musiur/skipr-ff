"use client";

import React from "react";
import Lottie from "lottie-react";
import superStableJSON from "./super__stable.data.json";

const Icon__SuperStable = () => (
  <Lottie animationData={superStableJSON} loop={true} />
);

export default Icon__SuperStable;

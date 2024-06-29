"use client";

import React from "react";
import Lottie from "lottie-react";
import BlinkingEyeJSON from "./blinking__eye.data.json";

const Icon__BlinkingEye = ({ className }: { className?: string }) => (
  <Lottie animationData={BlinkingEyeJSON} loop={true} className={className} />
);

export default Icon__BlinkingEye;

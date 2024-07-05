"use client";

import React from "react";
import Lottie from "lottie-react";
import DeployPurpleJSON from "./deploy__purple.data.json";

const ANIM__DeployPurple = ({ className }: { className?: string }) => (
  <Lottie animationData={DeployPurpleJSON} loop={true} className={className} />
);

export default ANIM__DeployPurple;

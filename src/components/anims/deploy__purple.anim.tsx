"use client";

import React from "react";
import Lottie from "lottie-react";
import DeployPurpleJSON from "./deploy__purple.data.json";
import { cn } from "@udecode/cn";

const ANIM__DeployPurple = ({ className }: { className?: string }) => (
  <Lottie
    animationData={DeployPurpleJSON}
    loop={true}
    className={cn(className, "")}
  />
);

export default ANIM__DeployPurple;

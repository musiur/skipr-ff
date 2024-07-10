"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

export default function LayoutWraper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false, // default: true
        },
      },
    })
  );

  useEffect(() => {
    // @ts-ignore
    const _mtm = (window._mtm = window._mtm || []);
    _mtm.push({ "mtm.startTime": new Date().getTime(), event: "mtm.Start" });
    const d = document,
      g = d.createElement("script"),
      s = d.getElementsByTagName("script")[0];

    g.async = true;
    g.src =
      "https://cdn.matomo.cloud/skiprvpn.matomo.cloud/container_USK6H5Aj.js";
    // @ts-ignore
    s.parentNode.insertBefore(g, s);
  }, []);

  return (
    <>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </>
  );
}

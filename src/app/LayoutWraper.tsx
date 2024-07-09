'use client'

import React, { useEffect } from "react";

export  default function LayoutWraper({children}: Readonly<{children: React.ReactNode;}>) {
    useEffect(() => {
        // @ts-ignore
        const _mtm = window._mtm = window._mtm || [];
        _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
        const d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        // @ts-ignore
        g.async=true; g.src='https://cdn.matomo.cloud/skiprvpn.matomo.cloud/container_USK6H5Aj.js'; s.parentNode.insertBefore(g,s);
}, [])
  return (
    <>{children}</>
  )
}
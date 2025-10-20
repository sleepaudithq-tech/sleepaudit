"use client";

import { usePathname } from "next/navigation";

export default function ContentOffset({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return <div className={isHome ? undefined : "pt-header"}>{children}</div>;
}


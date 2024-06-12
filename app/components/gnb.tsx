"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export const GNB = ({ children }: React.PropsWithChildren) => {
  const path = usePathname();
  const menuList = [
    { href: "/", name: "메인" },
    { href: "/auto-remark", name: "특이사항 초기화" },
  ];
  return (
    <main className="flex min-h-[calc(100vh)] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <div className="mx-auto grid w-full max-w-screen-2xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[180px_1fr]">
        <nav
          className="grid gap-1 text-base text-muted-foreground"
          x-chunk="dashboard-04-chunk-0"
        >
          <h1 className="pb-4 pl-4 text-xl font-semibold text-black">실험실</h1>
          {menuList.map((e, i) => (
            <Link
              key={i}
              href={e.href}
              className={cn(
                "rounded-lg px-4 py-2",
                path === e.href && "bg-[#F4F4F5] font-semibold text-primary",
              )}
            >
              {e.name}
            </Link>
          ))}
        </nav>
        <div className="grid gap-6">{children}</div>
      </div>
    </main>
  );
};

"use client";

import { useEffect } from "react";

import { enableMocking } from "@/mocks";

export const MswTrigger = () => {
  useEffect(() => {
    const timeoutId = setTimeout(enableMocking, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  return null;
};

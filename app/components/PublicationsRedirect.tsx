"use client";

import { useEffect } from "react";

export function PublicationsRedirect() {
  useEffect(() => { window.location.replace("/research/#papers"); }, []);
  return null;
}

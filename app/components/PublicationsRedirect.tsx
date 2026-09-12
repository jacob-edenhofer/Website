"use client";

import { useEffect } from "react";
import { sitePath } from "../../site.config.mjs";

export function PublicationsRedirect() {
  useEffect(() => { window.location.replace(sitePath("/research/#papers")); }, []);
  return null;
}

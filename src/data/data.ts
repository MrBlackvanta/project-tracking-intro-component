import type { HeroContent, NavLink } from "./data.types";

export const navLinks: NavLink[] = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
];

export const loginLink: NavLink = { label: "Login", href: "#login" };

export const hero: HeroContent = {
  badge: "New",
  eyebrow: "Monograph Dashboard",
  title: "Powerful insights into your team",
  description: "Project planning and time tracking for agile teams",
  ctaLabel: "Schedule a demo",
  ctaHint: "to see a preview",
};

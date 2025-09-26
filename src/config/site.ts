import { USER } from "@/features/profile/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://chanhdai.com",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [];

export const SOURCE_CODE_GITHUB_REPO = "arvinder/chanhdai.com";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/arvinder0603";

export const UTM_PARAMS = {
  utm_source: "chanhdai.com",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};

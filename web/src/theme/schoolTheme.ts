import type { Theme } from "@/types/content";

type ThemeClasses = {
  pageBg: string;
  link: string;
  button: string;
  card: string;
};

export const SCHOOL_THEME: Record<Theme, ThemeClasses> = {
  navy: {
    pageBg: "bg-slate-50",
    link: "text-slate-700 hover:text-slate-900",
    button: "bg-slate-900 text-white hover:bg-slate-800",
    card: "bg-white border-slate-200",
  },
  emerald: {
    pageBg: "bg-emerald-50",
    link: "text-emerald-800 hover:text-emerald-950",
    button: "bg-emerald-700 text-white hover:bg-emerald-600",
    card: "bg-white border-emerald-200",
  },
  crimson: {
    pageBg: "bg-rose-50",
    link: "text-rose-800 hover:text-rose-950",
    button: "bg-rose-700 text-white hover:bg-rose-600",
    card: "bg-white border-rose-200",
  },
  violet: {
    pageBg: "bg-violet-50",
    link: "text-violet-800 hover:text-violet-950",
    button: "bg-violet-700 text-white hover:bg-violet-600",
    card: "bg-white border-violet-200",
  },
};

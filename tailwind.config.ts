import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'transparent-white':'#FFFFFF0F',
        'lila':'#B1AFCD',
        'indigo': '#171339',
        'dark-indigo':'#100D28',
        'light-purple':'#C1A6FF',
        'purple':'#A077FF',
        'transparent-purple': '#6F6C992A',
        'light-gray':'#EAEAEA',
        'gray':'#979797',
      },
    }
    // fontSize: {
    //   sm: '0.8rem',
    //   base: '1rem',
    //   xl: '1.25rem',
    //   '2xl': '1.563rem',
    //   '3xl': '1.953rem',
    //   '4xl': '2.441rem',
    //   '5xl': '3.052rem',
    // }
  },
  plugins: [],
};
export default config;

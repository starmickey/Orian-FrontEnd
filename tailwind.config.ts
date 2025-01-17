import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'purple-40': '#C1A6FF',
      'purple-50': '#AD8DF7',
      'purple-60': '#A077FF',
      'purple-80': '#7357C5',

      'purple-gray-20': '#E3DDF3',
      'purple-gray-40': '#B1AFCD',
      'purple-gray-83': '#535175',
      'purple-gray-85': '#454261',

      'blue-gray-80': '#5B5A99',
      'blue-gray-90': '#312F62',

      'gray-20': '#EAEAEA',
      'gray-30': '#DEDEDE',
      'gray-60': '#979797',

      'indigo-80': '#251E5D',
      'indigo-85': '#1E1851',
      'indigo-90': '#171339',
      'indigo-100': '#100D28',
      
      'cherry': '#FF3737',
      'gold': '#F6921A',
      'green': '#2F9264',

      'white': '#FFFFFF',

      'transparent-white-5': '#FFFFFF07',
      'transparent-white-10': '#FFFFFF0F',
      'transparent-white-50': '#FFFFFF7F',

      'transparent-purple-20': '#6F6C992A',

    },
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

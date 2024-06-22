import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        asap: ['var(--font-asap)'],
        karantina: ['var(--font-karantina)']
      },
      colors: {
        'primary-yellow': '#FFD600',
        'secondary-yellow': '#FFE03B',
        'primary-pink': '#E82876',
        'second-pink': '#F23983',
        'third-pink': '#E72774',
        'four-pink': '#FF2A77',
        'fifth-pink': '#E62974',
        'black': '#1A1A1A',
        'second-black': '#141821',
        'third-black': '#000000',
        'silver': '#DADADA',
        'blue': '#3086C8',
        'second-blue': '#006FCF',
        'third-blue': '#1097FF',
        'white': '#FFFFFF',
        'second-white': '#FAFAFA',
        'third-white': '#FAF7F7',
        'red': '#EB001B',
        'green': '#09CE40',
        'gradient-s1': 'linear-gradient(109deg, #4B001B 0%, #F33076 100%)',
        'border-gradient': 'linear-gradient(90deg, #FF2E9F, #FBE310, #FF4D00)',
      },

    },
  },
  plugins: [
    function ({ addUtilities, theme }: PluginAPI) {
      const hoverDelay = theme('transitionDuration.300', '300ms');
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".gradient-bg": {
          backgroundImage: 'linear-gradient(156deg, #FFD600 0%, #FFD600 38%, #FFE03B 38%, #FFE03B 100%)',
        },
        ".container-bg": {
          'backgroundSize': 'cover',
          'backgroundPosition': 'center',
        }
      };
      addUtilities(newUtilities);
    }
  ],
};
export default config;

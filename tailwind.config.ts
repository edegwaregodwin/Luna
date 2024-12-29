import type { Config } from "tailwindcss";

const headerHeight = "5rem";
const footerHeight = "9rem";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        sm: "480px",
        md: "768px",
        lg: "976px",
        xlg: "1280px",
        xl: "1440px",
      },
      colors: {
        "luna-blue": "#002147",
        "luna-beige": "#e8dfd6",
      },
      height: {
        header: headerHeight,
        footer: footerHeight,
        "content-screen": `calc(100vh - ${headerHeight} - ${footerHeight})`,
      },
      minHeight: {
        "content-screen": `calc(100vh - ${headerHeight} - ${footerHeight})`,
      },
    },
  },
  plugins: [],
} satisfies Config;

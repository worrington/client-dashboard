const COLORS = {
  LIME_GREEN: '#B1F149',
  PALE_LIME_GREEN: '#CAF684',
 
  EMERALD_GREEN: '#34D399',
  LIGHT_YELLOW: '#FDE68A',
  LIGHT_RED: '#F87171',

  MIDNIGHT_BLUE: '#161A22',
  CHARCOAL_GRAY: '#3A424E',
  COOL_GRAY: '#9CA3AF',

  LIGHT_GRAY_BLUE: '#E0E2EB',
  SLATE_BLUE: '#2F3646',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        'monument': ['Monument Extended', 'sans-serif'],
      },
      colors: {
        primary: COLORS.LIME_GREEN,
        secondary: COLORS.PALE_LIME_GREEN,
        success: COLORS.EMERALD_GREEN,
        warning: COLORS.LIGHT_YELLOW,
        danger: COLORS.LIGHT_RED,
        grey: COLORS.CHARCOAL_GRAY,
        dark: COLORS.MIDNIGHT_BLUE,
        light: COLORS.LIGHT_GRAY_BLUE,
        body: {
          primary: COLORS.MIDNIGHT_BLUE,
          secondary: COLORS.CHARCOAL_GRAY,
          light: COLORS.COOL_GRAY,
        },
      },
    },
  },
  plugins: [],
}

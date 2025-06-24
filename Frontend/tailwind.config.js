// tailwind.config.js
import relumePreset from '@relume_io/relume-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [relumePreset],
  plugins: [require('tailwind-scrollbar-hide')],
};

module.exports = {
  theme: {
    extend: {
      transitionProperty: {
        opacity: 'opacity',
      },
    },
  },
};

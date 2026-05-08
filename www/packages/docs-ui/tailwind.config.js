import coreConfig from "tailwind/modified.tailwind.config"
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...coreConfig,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
};

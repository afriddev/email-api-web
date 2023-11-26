import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '300px',
  
        'md': '600px',
  
        'lg': '1023px',
      },
      colors: {
        r2: '#6dceff',
        r3: '#17c3b2',
        bt:"#212121"
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        mono: ['RobotoMono', 'monospace'],
        roboto: ['Roboto', 'sans-serif']
      }
      
    },
  },
  plugins: [],
}
export default config

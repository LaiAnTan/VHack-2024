/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./App.{js,jsx,ts,tsx}", "./screen/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: '#294B29',
				secondary: '#50623A',
				tertiary: '#789461',
				neutral: '#DBE7C9',
				text: "#fdf5e6",
				user_bg: '#FEF3F1',
				darker_user_bg: 'rgba(0, 0, 0, 0.27)',
				user_back: '#fac0b5',
			},
		},
	},
	plugins: [],
  }
  
  
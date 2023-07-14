/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./pages/**/*.{html,jsx}',
		'./components/**/*.{html,jsx}',
		'./src/**/*.{html,jsx}',
	  ],
  theme: {
    extend: {
		colors: {
			'purple': '#5856E8',
			'bg': '#01020A'
		},
		fontFamily: {
			'dm': ['"DM Sans"', 'sans-serif'],
			'pop': ['Poppins', 'sans-serif']
		},
	},

  },
  plugins: [],
}


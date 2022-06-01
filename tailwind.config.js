module.exports = {
   content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}',], theme: {
      fontFamily: {
         'sans': ['ui-sans-serif', 'system-ui'],
         'serif': ['ui-serif', 'Georgia'],
         'mono': ['ui-monospace', 'SFMono-Regular'],
         'display': ['Oswald'],
         'body': ['"Open Sans"'],
      }, extend: {},
   }, plugins: [require('@tailwindcss/forms')],
}

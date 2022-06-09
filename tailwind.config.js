module.exports = {
   content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}',], theme: {
      fontFamily: {
         'sans': ['ui-sans-serif', 'system-ui'],
         'serif': ['ui-serif', 'Georgia'],
         'mono': ['ui-monospace', 'SFMono-Regular'],
         'display': ['Oswald'],
         'body': ['"Open Sans"'],
      }, extend: {
         keyframes: {
            'fade-in-down': {
               'from': {
                  transform: 'translateY(-0.75rem)',
                  opacity: '0'
               },
               'to': {
                  transform: 'translateY(0rem)',
                  opacity: '1'
               },
            },
         },
         animation: {
            'fade-in-down': 'fade-in-down 0.2s ease-in-out both',
         },
      },
   }, plugins: [require('@tailwindcss/forms')],
}

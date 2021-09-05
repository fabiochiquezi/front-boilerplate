module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
            center: true,
        },
        fontFamily: {
            sans: ['Lato', 'sans-serif'],
            serif: ['Cambria', 'serif'],
        },
        fontSize: {
            xs: '.75rem',
            sm: '.875rem',
            tiny: '.875rem',
             base: '1rem',
             lg: '1.125rem',
             xl: '1.25rem',
             '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
             '5xl': '3rem',
             '6xl': '4rem',
            '7xl': '5rem',
           }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

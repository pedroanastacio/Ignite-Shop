import { createStitches } from "@stitches/react";

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
} = createStitches({
    theme: {
        colors: {
            white: '#FFF',

            gray900: '#121214',
            gray800: '#202024',
            gray400: '#8D8D99',
            gray300: '#c4c4cc',
            gray100: '#e1e1e6',

            green300: '#00B37E',

            purple300: '#8284FA',
            purple500: '#5E60CE',
        },

        fontSizes: {
            sm: '.875rem',
            md: '1.125rem',
            lg: '1.25rem',
            xl: '1.5rem',
            '2xl': '2rem',
        }
    }
})
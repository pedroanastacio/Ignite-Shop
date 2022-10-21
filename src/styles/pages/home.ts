import { styled } from "..";

export const ProductsList = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',

    width: '100%',
    padding: '0 1rem 2rem 1rem',

    '@sm': {
        display: 'none',
    }
})

export const ProductSlider = styled('main', {
    display: 'none !important',

    '@sm': {
        display: 'flex !important',
        width: '100%',
        maxWidth: '90rem',
        minHeight: '41rem',
        margin: '0 auto',
        paddingBottom: '2rem',
        position: 'relative',
    }
})

export const SliderControls = styled('div', {
    display: 'flex',
    alignItems: 'center',

    position: 'absolute',
    height: '100%',
    width: '8.5rem',

    button: {
        border: 0,
        background: 'transparent',
        cursor: 'pointer',

        '&:hover': {
            svg: {
                color: '$gray300',
                transition: 'color 0.2s',
            },
        },

        svg: {
            color: '$gray400'
        }
    },

    variants: {
        side: {
            left: {
                left: 0,
                backgroundColor: 'red',
                background: 'linear-gradient(90deg, $gray900 0%, rgba(18, 18, 20, 0) 100%)',

                svg: {
                    marginLeft: '1rem'
                },
            },

            right: {
                right: 0,
                backgroundColor: 'red',
                background: 'linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, $gray900 100%)',

                svg: {
                    marginLeft: '4.5rem'
                }
            }
        }
    }
})

export const Product = styled('a', {
    background: 'linear-gradient(180deg, $green300 0%, $purple300 100%)',
    minHeight: '41rem',
    borderRadius: 8,
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover',
    },

    footer: {
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        padding: '2rem',

        borderRadius: 6,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',

        backgroundColor: 'rgba(0, 0, 0, 0.6)',

        transition: 'all 0.2s ease-in-out',

        strong: {
            fontSize: '$lg',
            color: '$gray100',
            display: 'block',
        },

        span: {
            fontSize: '$xl',
            fontWeight: 'bold',
            color: '$green300',
            marginTop: '0.25rem',
        },

        button: {
            width: '3.5rem',
            height: '3.5rem',
            padding: '0.75rem',
            borderRadius: 6,
            border: 0,
            backgroundColor: '$purple500',
            cursor: 'pointer',

            svg: {
                color: '$white',
            },

            '&:hover': {
                backgroundColor: '$purple300',
                transition: 'background-color 0.2s'
            }
        },
    },

    variants: {
        variant: {
            hidden: {
                footer: {
                    transform: 'translateY(110%)',
                    opacity: 0,
                }
            },

            shown: {
                footer: {
                    transform: 'translateY(0%)',
                    opacity: 1,
                }
            }
        }
    },
})


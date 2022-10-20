import { styled } from "..";

export const HomeContainer = styled('main', {
    display: 'flex',
    width: '100%',
    // maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    // marginLeft: 'auto',
    maxWidth: '90rem',
    minHeight: '41rem',
    margin: '0 auto',
    paddingBottom: '2rem',
    position: 'relative',
})

export const ArrowContainer = styled('div', {
    display: 'none',

    '@sm': {
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
    }
})

export const BackArrow = styled(ArrowContainer, {
    left: 0,
    backgroundColor: 'red',
    background: 'linear-gradient(90deg, $gray900 0%, rgba(18, 18, 20, 0) 100%)',

    svg: {
        marginLeft: '1rem'
    },
})

export const NextArrow = styled(ArrowContainer, {
    right: 0,
    backgroundColor: 'red',
    background: 'linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, $gray900 100%)',

    svg: {
        marginLeft: '4.5rem'
    }
})

export const Product = styled('a', {
    background: 'linear-gradient(180deg, $green300 0%, $purple300 100%)',
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


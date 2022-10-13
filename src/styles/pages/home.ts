import { styled } from "..";

export const HomeContainer = styled('main', {
    display: 'flex',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft: 'auto',
    minHeight: 656,
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

        backgroundColor: 'rgba(0, 0, 0, 0.6)',

        transform: 'translateY(110%)',
        opacity: 0,
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
            width: 56,
            height: 56,
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
        }
    },

    '&:hover': {
        footer: {
            transform: 'translateY(0%)',
            opacity: 1,
        }
    }
})
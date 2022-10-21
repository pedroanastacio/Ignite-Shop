import { styled } from "..";

export const SuccessContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    heigth: '41rem',
    padding: '0 1rem',

    h1: {
        fontSize: '$2xl',
        color: '$gray100',
        marginTop: '3rem',
    },

    p: {
        fontSize: '$xl',
        color: '$gray300',
        maxWidth: '35rem',
        textAlign: 'center',
        marginTop: '2rem',
        lineHeight: 1.4,
    },

    a: {
        display: 'block',
        marginTop: '5rem',
        fontSize: '$lg',
        color: '$purple500',
        textDecoration: 'none',
        fontWeight: 'bold',

        '&:hover': {
            color: '$purple300'
        }
    }
})

export const ImagesContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: '6.5rem',

    '& div + div': {
        marginLeft: -50,
    },
})

export const ImageContainer = styled('div', {
    width: '8.75rem',
    height: '8.75rem',
    background: 'linear-gradient(180deg, $green300 0%, $purple300 100%)',
    borderRadius: 999,
    padding: '0.25rem',
    boxShadow: '0px 0px 75px #121214',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover',
    }
})
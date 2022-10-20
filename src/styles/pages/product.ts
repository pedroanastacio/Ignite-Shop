import { styled } from "..";

export const ProductContainer = styled('main', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
    gap: '4rem',

    maxWidth: '73.75rem',
    margin: '0 auto',
})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: '36rem',
    height: '41rem',
    background: 'linear-gradient(180deg, $green300 0%, $purple300 100%)',
    borderRadius: 8,
    padding: '0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover'
    }

})

export const ProductDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    h1: {
        fontSize: '$2xl',
        color: '$gray300',
    },

    span: {
        marginTop: '1rem',
        display: 'block',
        fontSize: '$2xl',
        color: '$green300',
    },

    p: {
        marginTop: '2.5rem',
        fontSize: '$md',
        lineHeight: 1.6,
        color: '$gray300'
    },

    form: {
        marginTop: 'auto',
        
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
    },
})

export const AddToCartButton = styled('button', {
    width: '100%',
    backgroundColor: '$purple500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
        backgroundColor: '$purple300',
        transition: 'background-color 0.2s'
    }
})

export const SkeletonContainer = styled(ProductContainer, {  
    div: {
        display: 'flex',
        flexDirection: 'column',

        h2: {
            marginTop: '1rem',
        },
    
        p: {
            marginTop: '2.5rem',
    
            span: {
                marginTop: '.5rem',
            },
        },
    
        form: {
            marginTop: 'auto',
        }
    }
})
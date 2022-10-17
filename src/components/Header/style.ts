import { styled } from '../../styles'

export const HeaderContainer = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',

    display: 'flex',
    justifyContent: 'space-between',

    a: {
        cursor: 'pointer'
    }
})

export const ShoppingCartButton = styled('button', {
    padding: '0.75rem',
    border: 0,
    borderRadius: 6,
    backgroundColor: '$gray800',
    position: 'relative',
    cursor: 'pointer',
    width: 48,
    height: 48,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    svg: {
        color: '$gray300',
    },

    span: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        position: 'absolute',
        right: -7,
        top: -7,
        width: 27,
        height: 27,

        borderRadius: 999,
        backgroundColor: '$purple500',
        color: '$white',
        fontSize: '$xs',
        border: '3px solid $gray900',
    },

    '&:hover': {
        svg: {
            color: '$gray100',
            transition: 'color 0.2s'
        },
    }
})






import { styled } from "..";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '100vh',
})

export const Header = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',

    display: 'flex',
    justifyContent: 'space-between'
})

export const ShoppingCartAnchor = styled('a', {
    padding: '0.75rem',
    borderRadius: 6,
    backgroundColor: '$gray800',
    cursor: 'pointer',
    position: 'relative',

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
        fontSize: '$sm',
        border: '3px solid $gray900',
    }
})
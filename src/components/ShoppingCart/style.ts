import { slide as Menu } from 'react-burger-menu'

import { styled } from "../../styles"

export const ShoppingCartContainer = styled(Menu, {
    top: 0,
    bottom: 0,
    backgroundColor: '$gray800',
    padding: '4.5rem 2rem 2rem 2rem',
    width: '100% !important',
    maxWidth: '480px',

    '@xs': {
        padding: '4.5rem 3rem 3rem 3rem',
    },

    nav: {
        display: 'flex',
        flexDirection: 'column',
    },

    header: {
        div: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',

            h2: {
                fontSize: '$lg',
            },

            button: {
                border: 0,
                background: 'transparent',
                color: '$purple500',
                width: 'fit-content',
                fontSize: '$sm',
                fontWeight: 'bold',
                cursor: 'pointer',

                '&:hover': {
                    color: '$purple300',
                    transition: 'color 0.2s'
                }
            }
        }

    },

    ul: {
        marginTop: '2rem',
        marginBottom: '2rem',
        overflow: 'auto',
        scrollbarWidth: 'none',
        MsOverflowStyle: 'none',
    },

    'ul::-webkit-scrollbar': {
        display: 'none',
    },

    footer: {
        marginTop: 'auto',

        div: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
    }
})

export const CloseButton = styled('button', {
    position: 'absolute',
    top: 24,
    right: 24,
    border: 0,
    background: 'transparent',
    cursor: 'pointer',

    svg: {
        color: '$gray400',
    },

    '&:hover': {
        svg: {
            color: '$gray300',
            transition: 'color 0.2s'
        }
    }
})

export const TotalQuantity = styled('div', {
    span: {
        color: '$gray300',
    }
})

export const TotalAmount = styled('div', {
    marginTop: '0.5rem',

    span: {
        fontWeight: 'bold',
        fontSize: '$md',
    },

    '& span + span': {
        fontSize: '$xl',
    }
})

export const CheckoutButton = styled('button', {
    width: '100%',
    backgroundColor: '$purple500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',
    marginTop: '3.5rem',

    '&:hover': {
        backgroundColor: '$purple300',
        transition: 'background-color 0.2s'
    }
})

export const EmptyCart = styled('div', {
    display: 'flex !important',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',

    height: '100%',

    svg: {
        color: '$gray400'
    },

    p: {
        color: '$gray400',
        fontSize: '$md',
    }
})
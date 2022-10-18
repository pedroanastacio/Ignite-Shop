import { slide as Menu } from 'react-burger-menu'

import { styled } from "../../styles"

export const ShoppingCartContainer = styled(Menu, {
    top: 0,
    bottom: 0,
    backgroundColor: '$gray800',
    padding: '4.5rem 3rem 3rem 3rem',

    nav: {
        display: 'flex',
        flexDirection: 'column',
    },

    header: {
        button: {
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
        },

        h2: {
            fontSize: '$lg',
        },
    },

    ul: {
        marginTop: '2rem',
        marginBottom: '2rem',
        overflow: 'auto',
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
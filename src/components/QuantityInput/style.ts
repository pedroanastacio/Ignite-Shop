import { styled } from "../../styles";

export const QuantityInputContainer = styled('div', {
    backgroundColor: '$gray800',
    padding: '.8rem',
    borderRadius: 8,

    display: 'flex',
    alignItems: 'center',
    gap: '.5rem',

    button: {
        background: 'transparent',
        border: 0,
        color: '$purple500',
        cursor: 'pointer',
        margin: 'auto',

        '&:disabled': {
            color: '$gray400',
            cursor: 'not-allowed',
        },

        '&:not(:disabled):hover': {
            color: '$purple300',
        }
    },

    input: {
        background: 'transparent',
        border: 0,
        textAlign: 'center',
        color: '$gray300',
        fontSize: '$md',
        MozAppearance: 'textfield',
    },
  
    "input::-webkit-outer-spin-button": {
        WebkitAppearance: 'none',
        margin: 0,
    },

    "input::-webkit-inner-spin-button": {
        WebkitAppearance: 'none',
        margin: 0,
    }
})
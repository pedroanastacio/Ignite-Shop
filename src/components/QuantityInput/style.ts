import { styled } from '../../styles';

export const QuantityInputContainer = styled('div', {
    variants: {
        variant: {
            dark: {
                backgroundColor: '$gray800',
            },
            light: {
                backgroundColor: '$gray700',
            }
        }
    },

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.25rem',

    padding: '.5rem',
    borderRadius: 8,

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
        fontSize: '$sm',
        MozAppearance: 'textfield',
    },
  
    'input::-webkit-outer-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
    },

    'input::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
    }
})
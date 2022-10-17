import { styled } from "../../../styles";

export const ItemContainer = styled('li', {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',

    marginBottom: '1.5rem',
})

export const ItemImageContainer = styled('div', {
    background: 'linear-gradient(180deg, $green300 0%, $purple300 100%)',
    borderRadius: 8,
})

export const ItemDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',

    height: '100%',

    h4: {
        fontSize: '$md',
        fontWeight: 'normal',
        color: '$gray300',
    },

    span: {
        fontSize: '$md',
        fontWeight: 'bold',
    },
})

export const ItemActions = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',

    '& button': {
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
})
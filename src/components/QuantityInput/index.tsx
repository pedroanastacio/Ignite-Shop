import { ChangeEvent, InputHTMLAttributes } from 'react'
import { Minus, Plus } from 'phosphor-react'

import { QuantityInputContainer } from './style'

interface QuantityInputProps extends InputHTMLAttributes<HTMLInputElement> {
    quantity: number
    max: number
    min?: number
    setQuantity: (quantity: number) => void

}

export function QuantityInput({ quantity, min = 1, max, setQuantity, ...props }: QuantityInputProps) {

    function handleQuantityChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('')
        setQuantity(event.target.valueAsNumber)
    }

    function handleQuantityDecrement() {
        setQuantity(quantity - 1)
    }

    function handleQuantityIncrement() {
        setQuantity(quantity + 1)
    }

    return (
        <QuantityInputContainer>
            <button
                type="button"
                onClick={handleQuantityDecrement}
                disabled={quantity <= min}
            >
                <Minus size={18} weight='bold' />
            </button>

            <input
                type="number"
                min={min}
                max={max}
                value={quantity}
                onChange={handleQuantityChange}
                {...props}
            />

            <button
                type="button"
                onClick={handleQuantityIncrement}
                disabled={quantity >= max}
            >
                <Plus size={18} weight='bold' />
            </button>
        </QuantityInputContainer>
    )
}
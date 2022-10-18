import Image from "next/image"
import { useContextSelector } from "use-context-selector"

import { ShoppingCartContext } from "../../../../contexts/ShoppingCartContext"
import { toBRL } from "../../../../utils/currency"
import { QuantityInput } from "../../../QuantityInput"

import { ItemActions, ItemContainer, ItemDetails, ItemImageContainer } from "./style"

interface ItemProps {
    product: {
        id: string
        imageUrl: string
        name: string
        price: number
        quantity: number
    }
}

export function Item({ product }: ItemProps) {
    const changeItemQuantity = useContextSelector(ShoppingCartContext, context => context.changeItemQuantity)
    const removeITem = useContextSelector(ShoppingCartContext, context => context.removeItem)

    function handleQuantityChange(quantity: number) {
        changeItemQuantity(product.id, quantity)
    }

    function handleRemove() {
        removeITem(product.id)
    }
    
    return (
        <ItemContainer>
            <ItemImageContainer>
                <Image src={product.imageUrl} alt="" width={102} height={93} />
            </ItemImageContainer>

            <ItemDetails>
                <h4>{product.name}</h4>

                <span>{toBRL(product.price * product.quantity)}</span>

                <ItemActions>
                    <QuantityInput
                        variant="light"
                        max={5}
                        quantity={product.quantity}
                        setQuantity={handleQuantityChange}
                    />
                    <button onClick={handleRemove}>Remover</button>
                </ItemActions>
            </ItemDetails>
        </ItemContainer>
    )
}
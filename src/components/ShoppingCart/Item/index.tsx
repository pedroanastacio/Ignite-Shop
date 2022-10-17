import Image from "next/image"
import { useContextSelector } from "use-context-selector"

import { ShoppingCartContext } from "../../../contexts/ShoppingCartContext"
import { QuantityInput } from "../../QuantityInput"

import { ItemActions, ItemContainer, ItemDetails, ItemImageContainer } from "./style"

interface ItemProps {
    id: string
    imageUrl: string
    name: string
    price: string
    quantity: number
}

export function Item({ id, imageUrl, name, price, quantity }: ItemProps) {
    const changeItemQuantity = useContextSelector(ShoppingCartContext, context => context.changeItemQuantity)
    
    function handleQuantityChange(quantity: number) {
        changeItemQuantity({ productId: id, quantity })
    }
    
    return (
        <ItemContainer>
            <ItemImageContainer>
                <Image src={imageUrl} alt="" width={102} height={93} />
            </ItemImageContainer>

            <ItemDetails>
                <h4>{name}</h4>

                <span>{price}</span>

                <ItemActions>
                    <QuantityInput
                        variant="light"
                        max={5}
                        quantity={quantity}
                        setQuantity={handleQuantityChange}
                    />
                    <button>Remover</button>
                </ItemActions>
            </ItemDetails>
        </ItemContainer>
    )
}
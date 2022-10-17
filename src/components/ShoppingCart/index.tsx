import Image from "next/image";
import { X } from "phosphor-react";
import { useEffect, useState } from "react";
import { useContextSelector } from "use-context-selector";

import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { ShoppingCartMenuContext } from "../../contexts/ShoppingCartMenuContext";
import { Item as ShoppingCartItem } from "./Item";
import { Item } from "../../reducers/ShoppingCart/reducers";

import { 
    CheckoutButton,
    ShoppingCartContainer,
    TotalAmount,
    TotalQuantity
} from "./style";

export function ShoppingCart() {
    const [items, setItems] = useState<Item[]>([])

    const isMenuOpen = useContextSelector(ShoppingCartMenuContext, context => context.isMenuOpen)
    const stateChangeHandler = useContextSelector(ShoppingCartMenuContext, context => context.stateChangeHandler)
    const closeMenu = useContextSelector(ShoppingCartMenuContext, context => context.closeMenu)

    const itemsInCart = useContextSelector(ShoppingCartContext, context => context.items)

    useEffect(() => {
        setItems(itemsInCart)
    }, [itemsInCart])

    return (
        <ShoppingCartContainer
            right
            width={480}
            customBurgerIcon={false}
            isOpen={isMenuOpen}
            onStateChange={(state) => stateChangeHandler(state)}
            disableOverlayClick
        >
            <header>
                <button onClick={closeMenu}>
                    <X size={24} />
                </button>
                
                <h2>Sacola de compras</h2>
            </header>

            <ul>
                {items.map(item => {
                    return (
                        <ShoppingCartItem
                            key={item.productId} 
                            id={item.productId}
                            imageUrl=""
                            name="Camiseta Beyond the Limits"
                            price="R$ 69,90"
                            quantity={item.quantity}
                        />
                    )
                })}
            </ul>

            <footer>
                <TotalQuantity>
                    <span>Quantidade</span>
                    <span>3 itens </span>
                </TotalQuantity>

                <TotalAmount>
                    <span>Valor total</span>
                    <span>R$ 188,90</span>
                </TotalAmount>

                <CheckoutButton>Finalizar compra</CheckoutButton>
            </footer>
        </ShoppingCartContainer>
    )
}
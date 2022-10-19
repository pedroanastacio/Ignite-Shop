import { Handbag, X } from "phosphor-react";
import { useEffect, useState } from "react";
import { useContextSelector } from "use-context-selector";
import axios from "axios";

import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { ShoppingCartMenuContext } from "../../contexts/ShoppingCartMenuContext";
import { Item as ShoppingCartItem } from "./components/Item";
import { Item } from "../../reducers/ShoppingCart/reducers";
import { useCheckout } from "../../hooks/useCheckout";
import { toBRL } from "../../utils/currency";

import {
    CheckoutButton,
    EmptyCart,
    ShoppingCartContainer,
    TotalAmount,
    TotalQuantity
} from "./style";

export function ShoppingCart() {
    const [items, setItems] = useState<Item[]>([])
    const checkout = useCheckout()
    const isMenuOpen = useContextSelector(ShoppingCartMenuContext, context => context.isMenuOpen)
    const stateChangeHandler = useContextSelector(ShoppingCartMenuContext, context => context.stateChangeHandler)
    const closeMenu = useContextSelector(ShoppingCartMenuContext, context => context.closeMenu)
    const itemsInCart = useContextSelector(ShoppingCartContext, context => context.items)

    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState<boolean>(false)

    async function handleCheckout() {
        setIsCreatingCheckoutSession(true)

        const lineItems = items.map(item => {
            return {
                price: item.priceId,
                quantity: item.quantity
            }
        })

        try {
            const response = await axios.post('/api/checkout', {
                items: lineItems
            })

            const { checkoutUrl } = response.data

            window.location.href = checkoutUrl

        } catch (error) {
            setIsCreatingCheckoutSession(false)

            // Recomendado: conectar a uma ferramenta de observabilidade (Datadog / Sentry)
            alert('Falha ao redirecionar para checkout!')
        }
    }


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
            noOverlay
        >
            <header>
                <button onClick={closeMenu}>
                    <X size={24} />
                </button>

                <h2>Sacola de compras</h2>
            </header>

            {items.length === 0 ?
                <EmptyCart>
                    <Handbag size={40} />
                    <p>Sua sacola está vazia.</p>
                </EmptyCart>
                :
                <>
                    <ul>
                        {items.map(item => {
                            return (
                                <ShoppingCartItem
                                    key={item.id}
                                    product={{
                                        id: item.id,
                                        imageUrl: item.imageUrl,
                                        name: item.name,
                                        price: item.price,
                                        quantity: item.quantity
                                    }}
                                />
                            )
                        })}
                    </ul>

                    <footer>
                        <TotalQuantity>
                            <span>Quantidade</span>
                            <span>{checkout.totalItems} {checkout.totalItems > 1 ? 'itens' : 'item'}</span>
                        </TotalQuantity>

                        <TotalAmount>
                            <span>Valor total</span>
                            <span>{toBRL(checkout.totalAmount)}</span>
                        </TotalAmount>

                        <CheckoutButton
                            disabled={isCreatingCheckoutSession}
                            onClick={handleCheckout}
                        >
                            Finalizar compra
                        </CheckoutButton>
                    </footer>
                </>
            }
        </ShoppingCartContainer>
    )
}
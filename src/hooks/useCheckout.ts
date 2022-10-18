import { useMemo } from "react";
import { useContextSelector } from "use-context-selector";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";

export function useCheckout() {
    const items = useContextSelector(ShoppingCartContext, context => context.items)

    const checkout = useMemo(() => {
        return items.reduce((acc, item) => {
            const totalItems = acc.totalItems += item.quantity
            const totalAmount = acc.totalAmount += (item.price * item.quantity)
        
            return { totalItems, totalAmount }
        }, 
        {
            totalItems: 0,
            totalAmount: 0,
        }
        )
    }, [items])

    return checkout
}

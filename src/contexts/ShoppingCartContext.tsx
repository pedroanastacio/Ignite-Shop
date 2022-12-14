import { PropsWithChildren, useCallback, useEffect, useReducer } from "react";
import { createContext } from "use-context-selector";
import { 
    addNewItemAction,
    changeItemQuantityAction,
    emptyCartAction, 
    removeItemAction 
} from "../reducers/ShoppingCart/actions";

import { Item, shoppingCartReducer } from "../reducers/ShoppingCart/reducers";

interface ShoppingCartContextType {
    items: Item[]
    addNewItem: (item: Item) => void
    removeItem: (id: string) => void
    changeItemQuantity: (id: string, quantity: number) => void
    emptyCart: () => void
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

const initialShoppingCartState = { items: [] }

export function ShoppingCartProvider({ children }: PropsWithChildren) {
    const [shoppingCartState, dispatch] = useReducer(
        shoppingCartReducer,
        initialShoppingCartState,
        () => {
            if(typeof window !== 'undefined') {
                const storedStateJSON = localStorage.getItem(
                    '@ignite-shop:shopping-cart-state-1.0.0',
                )
        
                if (storedStateJSON) {
                    return JSON.parse(storedStateJSON)
                }
            }

            return {
                items: [],
            }
        },
    )

    const { items } = shoppingCartState

    const addNewItem = useCallback((item: Item) => {
        dispatch(addNewItemAction(item))
    }, [])

    const removeItem = useCallback((id: string) => {
        dispatch(removeItemAction(id))
    }, [])

    const changeItemQuantity = useCallback((id: string, quantity: number) => {
        dispatch(changeItemQuantityAction(id, quantity))
    }, [])

    const emptyCart = useCallback(() => {
        dispatch(emptyCartAction())
    }, [])

    useEffect(() => {
        const stateJSON = JSON.stringify(shoppingCartState)
    
        localStorage.setItem(
          '@ignite-shop:shopping-cart-state-1.0.0',
          stateJSON,
        )
    }, [shoppingCartState])

    return (
        <ShoppingCartContext.Provider 
            value={{
                items, 
                addNewItem,
                removeItem,
                changeItemQuantity,
                emptyCart, 
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}
import { PropsWithChildren, useCallback, useState } from "react";
import { createContext } from "use-context-selector";
import { State } from 'react-burger-menu'

interface ShoppingCartMenuType {
    isMenuOpen: boolean
    toggleMenu: () => void
    closeMenu: () => void
    stateChangeHandler: (newState: State) => void
}

export const ShoppingCartMenuContext = createContext({} as ShoppingCartMenuType)

export function ShoppingCartMenuProvider({ children }: PropsWithChildren) {
    const [menuOpenState, setMenuOpenState] = useState<boolean>(false)

    const toggleMenu = useCallback(() => {
        setMenuOpenState(!menuOpenState)
    }, [menuOpenState])

    const closeMenu = useCallback(() => {
        setMenuOpenState(false)
    }, [])

    const stateChangeHandler = useCallback((newState: State) => {
        setMenuOpenState(newState.isOpen)
    }, [])

    return (
        <ShoppingCartMenuContext.Provider
            value={{
                isMenuOpen: menuOpenState,
                toggleMenu,
                closeMenu,
                stateChangeHandler
            }}
        >
            {children}
        </ShoppingCartMenuContext.Provider>
    )
}
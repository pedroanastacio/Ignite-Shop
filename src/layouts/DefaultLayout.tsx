import { PropsWithChildren } from "react";
import { Header } from "../components/Header";
import { ShoppingCart } from "../components/ShoppingCart";
import { ShoppingCartMenuProvider } from "../contexts/ShoppingCartMenuContext";

export function DefaultLayout({ children }: PropsWithChildren) {
    return (
        <>
            <ShoppingCartMenuProvider>
                <Header />
                <ShoppingCart />
            </ShoppingCartMenuProvider>

            {children}
        </>
    )
}
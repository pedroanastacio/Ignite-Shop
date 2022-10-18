import { produce } from 'immer'

import { ActionTypes } from "./actions"

export interface Item {
    id: string
    imageUrl: string
    name: string
    price: number
    priceId: string
    quantity: number
}

interface ShoppingCartState {
    items: Item[]
}

export function shoppingCartReducer(state: ShoppingCartState, action: any) {
    switch (action.type) {
        case ActionTypes.ADD_NEW_ITEM: {
            const itemIndex = state.items.findIndex(
                (item) => item.id === action.payload.item.id,
            )

            if(itemIndex < 0) {
                return produce(state, draft => {
                    draft.items.push(action.payload.item)
                })
            }

            return produce(state, draft => {
                draft.items[itemIndex].quantity += action.payload.item.quantity
            })
        }
        case ActionTypes.REMOVE_ITEM: {
            const itemToBeRemovedIndex = state.items.findIndex(
                (item) => item.id === action.payload.id,
            )
        
            if (itemToBeRemovedIndex < 0) {
                return state
            }
        
            return produce(state, (draft) => {
                draft.items.splice(itemToBeRemovedIndex, 1)
            })
        }
        case ActionTypes.CHANGE_ITEM_QUANTITY: {
            const itemIndex = state.items.findIndex(
              (item) => item.id === action.payload.id,
            )
      
            return produce(state, (draft) => {
              draft.items[itemIndex].quantity = action.payload.quantity
            })
        }
        case ActionTypes.EMPTY_CART:
            return {
                items: [],
            }
        default:
            return state
    }
}

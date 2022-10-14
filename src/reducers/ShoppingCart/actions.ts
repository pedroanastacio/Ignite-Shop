import { Item } from "./reducers"

export enum ActionTypes {
    ADD_NEW_ITEM = 'ADD_NEW_ITEM',
    REMOVE_ITEM = 'REMOVE_ITEM',
    CHANGE_ITEM_QUANTITY = 'CHANGE_ITEM_QUANTITY',
    EMPTY_CART = 'EMPTY_CART',
}

export function addNewItemAction(item: Item) {
    return {
      type: ActionTypes.ADD_NEW_ITEM,
      payload: {
        item,
      },
    }
  }
  
  export function removeItemAction(productId: string) {
    return {
      type: ActionTypes.REMOVE_ITEM,
      payload: {
        productId,
      },
    }
  }
  
  export function changeItemQuantityAction(item: Item) {
    return {
      type: ActionTypes.CHANGE_ITEM_QUANTITY,
      payload: {
        item,
      },
    }
  }
  
  export function emptyCartAction() {
    return {
      type: ActionTypes.EMPTY_CART,
    }
  }
  
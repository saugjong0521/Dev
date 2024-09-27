

export const init = {
    items: [], //카트에 담긴 상품 목록들
    totalItems: 0, //카트에 답긴 총 상품의 갯수
    totalPrice: 0, //카트에 담긴 상품들의 총 금액
}

function findItemIndex(el, idx) {
    return el.findIndex((item) => item.id === idx)
}


export function ShoppingCartReducer(state, action) {
    switch (action.type) {
        case 'add-item':
            const currentIndex = findItemIndex(state.items, action.pay.id)
            if (currentIndex >= 0) {
                //새 상품이 아닐 경우 금액만 증가
                const updateItems = state.items.map((item, idx) =>
                    idx === currentIndex ? { ...item, quantity: item.quantity + 1 } : item)

                return {
                    ...state,
                    items: updateItems,
                    totalPrice: state.totalPrice + action.pay.price
                }
            } else {
                //새 상품일 경우 카트에 추가
                return {
                    ...state,
                    items: [...state.items, { ...action.pay, quantity: 1 }],
                    totalItems: state.totalItems + 1,
                    totalPrice: state.totalPrice + action.pay.price
                }

            }

            default:
                return state
    }
}

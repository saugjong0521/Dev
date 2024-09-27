

export const init={
    items: [], //카트에 담긴 상품 목록들
    totalItems: 0, //카트에 답긴 총 상품의 갯수
    totalPrice: 0, //카트에 담긴 상품들의 총 금액
}

function findItemIndex(el, idx){
    return el.findIndex((item)=>item.idx === idx)
}


export function ShoppingCartReducer(state, action) {
    switch (action.type) {
        case 'add-item':
            const currentIndex = findItemIndex(state.items, action.pay.id)
            if(currentIndex >= 0){
                //새 상품이 아닐 경우 금액만 증가
                const updateItems
            }

    }
}
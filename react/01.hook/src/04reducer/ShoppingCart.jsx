
import { useReducer } from "react"
import { ShoppingCartReducer, init } from "./ShoppingCartReducer"


export default function ShoppingCart() {
    const item = [
        { id: 1, name: 'item01', price: 500 },
        { id: 2, name: 'item02', price: 15000 },
        { id: 3, name: 'item03', price: 3000 },
        { id: 4, name: 'item04', price: 5000 },
        { id: 5, name: 'item05', price: 8900 },
        { id: 6, name: 'item06', price: 1500 },
        { id: 7, name: 'item07', price: 45000 },
        { id: 8, name: 'item08', price: 197000 },
        { id: 9, name: 'item09', price: 5500 },
        { id: 10, name: 'item10', price: 2500 },
    ]


    const [state, dispatch] = useReducer(ShoppingCartReducer, init);

    const addItemCart = (product) => {
        dispatch({ type: 'add-item', pay: product })
    }

    const removeItemCart = (product) => {
        dispatch({ type: 'remove-item', pay: product })
    }

    const clearCart = () => {
        dispatch({type: 'clear-cart'}); //전부 지우기 때문에 매개변수가 필요없음
    }

    return (
        <>
            <h1>아이템 리스트</h1>
            {item.map((el) => (
                <li key={el.id}>
                    <p>{el.name}</p>
                    <p>{el.price}</p>
                    <button onClick={() => addItemCart(el)}>장바구니 추가</button>
                    <button onClick={() => removeItemCart(el)}>장바구니 삭제</button>
                </li>
            ))}

            <h1>카트 리스트</h1>
            <ul>
                {state.items.map((el) => (
                    <li key={el.id}>
                        <p>{el.name}: {el.price}</p>
                    </li>
                ))}
            </ul>
            <p>total item: {state.totalItems}, </p>
            <p>total price: {state.totalPrice}</p>
            <button onClick={clearCart}>장바구니 비우기</button>

        </>
    )

}
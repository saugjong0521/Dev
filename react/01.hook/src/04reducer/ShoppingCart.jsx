
import { useReducer } from "react"
import { ShoppingCartReducer, init } from "./ShoppingCartReducer"


export default function ShoppingCart() {
    const item = [
        { id: 1, name: 'item01', price: 5000 },
        { id: 2, name: 'item02', price: 5000 },
        { id: 3, name: 'item03', price: 5000 },
        { id: 4, name: 'item04', price: 5000 },
        { id: 5, name: 'item05', price: 5000 },
        { id: 6, name: 'item06', price: 5000 },
        { id: 7, name: 'item07', price: 5000 },
        { id: 8, name: 'item08', price: 5000 },
        { id: 9, name: 'item09', price: 5000 },
        { id: 10, name: 'item10', price: 5000 },
    ]


    const [state, dispatch] = useReducer(ShoppingCartReducer, init);

    const addItemCart = (product) => {
        dispatch({type: 'add-item', pay: product})
    }

    return (
        <>
            <h1>아이템 리스트</h1>
            {item.map((el) => (
                <li key={el.id}>
                    <p>{el.name}</p>
                    <p>{el.price}</p>
                    <button>장바구니 추가</button>
                    <button>장바구니 삭제</button>
                </li>
            ))}
        </>
    )

}
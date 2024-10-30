import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthContext } from "./AuthContext";
import { updateCart } from "../api/Firebase";


export default function (){
    const {uid} = useAuthContext();

    // useQueryClient = 리액트에서 데이터를 가져오고 업데이트 하는 라이브러리 (yarn add @tanstack/react-query)

    const queryClient = useQueryClient();

    const addItemCart = useMutation({
        mutationFn : (product) => updateCart(uid, product),
        onSuccess : ()=>{
            queryClient.invalidateQueries(['cart', uid])
            //상태값을 최신으로 갱신(쿠키값을 무효화 시켜서 상품의 정보를 최신으로 업데이트)
        }
    });
    // useMutation 장바구니에 상품 추가를 업데이트하는 메소드

    // console.log("User ID:", uid)


    return {addItemCart}

}

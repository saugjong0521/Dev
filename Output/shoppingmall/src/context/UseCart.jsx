import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthContext } from "./AuthContext";


export default function (){
    const {uid} = useAuthContext();

    // useQueryClient = 리액트에서 데이터를 가져오고 업데이트 하는 라이브러리 (yarn add @tanstack/react-query)

    const queryCliect = useQueryClient();

    // const addItemCart = useMutation({
    //     mutationFn : (product) = 
    // });
    // useMutation 장바구니에 상품 추가를 업데이트하는 메소드
}

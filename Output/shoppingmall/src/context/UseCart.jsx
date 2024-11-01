import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuthContext } from "./AuthContext";
import { getCart, updateCart } from "../api/Firebase";


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

    // 장바구니 아이템의 경우 사용자가 아이템의 목록을 삭제하거나 수정할 수도 있기 때문에, 업데이트 내역을 상시로 갱신해줄 수 있는 useQuery로 받아와야 한다.
    const cartInfo = useQuery({
        // cart의 데이터를 가져오는 비동기 쿼리 설정
        queryKey : ['cart', uid || ''],// 쿼리를 식별해주는 키
        queryFn : () => getCart(uid), // 데이터를 가져오는 함수
        enabled : !!uid // 쿼리를 활성화 되어야 하는 조건(!!)
    })
    



    return {addItemCart}

}

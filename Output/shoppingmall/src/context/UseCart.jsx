import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthContext } from "./AuthContext";
import { updateCart } from "../api/Firebase";

export default function () {
    const { uid, isLoading } = useAuthContext();

    // 로딩 중일 때 처리
    if (isLoading) {
        return { addItemCart: null }; // 로딩 중일 때는 null 반환
    }

    // uid가 null일 경우 처리
    if (uid === null) {
        console.error("User ID is null. Please log in.");
        return { addItemCart: null }; // uid가 없을 때 처리
    }

    const queryClient = useQueryClient();

    const addItemCart = useMutation({
        mutationFn: (product) => updateCart(uid, product),
        onSuccess: () => {
            queryClient.invalidateQueries(['cart', uid]);
        }
    });

    console.log("User ID:", uid);

    return { addItemCart };
}

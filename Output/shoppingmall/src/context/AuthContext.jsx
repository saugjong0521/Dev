import { createContext, useContext, useEffect, useState } from "react";
import { googleLogin, googleLogout, onUserState } from "../api/Firebase";



const AuthContext = createContext();
// context: 컴포넌트간에 어떠한 값을 공유할 수 있게 해주는 hook;
// 변수에 새로운 context를 초기화
// createContext() = 컨택스트를 사용하기 위해서 생성


export function AuthContextProvider ({children}){
    const [user, setUser] = useState();
    const [unSubscribe, setUnSubscribe] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        /*
        페이지를 새로고침하는 경우, 페이지에서 사용자의 정보가 넘어오기 전에 인증을 끝내기 때문에 protextRouter로 인해 에러가 나오는 경우가 생김
        사용자 정보를 모두 받아오기 전까지 protectRouter를 실행하지 못하게 지연시키는 방법으로 접근
        */

        const storeUser = sessionStorage.getItem('user');
        // sessionStorage = 웹 브라우저에서 제공하는 저장소, 페이지가 유지되는 동안 데이터를 저장하는 용도
        // 현재 열린 창을 닫으면 데이터가 삭제되므로, 임시 데이터를 저장하는데에 사용
        // 다크모드같은 경우는 세션스토리지가 아닌 로컬스토리지에 저장해서 유지
        
        if(storeUser){
            setUser(JSON.parse(storeUser))
            // JSON.parse는 JSON.stringify로 저장된 데이터를 자바스크립트 객체로 변환
        }
        
        //로그인, 로그아웃을 확인하는 함수
        const userChange = (newUser) => {
            setUser(newUser)
            setIsLoading(false);

            if(newUser){
                sessionStorage.setItem('user', JSON.stringify(newUser));
                // 로그인 시 sessionStorage에 'user' 데이터를 저장
            } else {
                sessionStorage.removeItem('user')
                // 로그아웃 시, 'user' 데이터를 제거
            }
            const unSubscribeFunc = onUserState(userChange) // 여기서 로그인을 감지
            setUnSubscribe(()=>unSubscribeFunc);
            return () => {
                if(unSubscribeFunc){
                    unSubscribeFunc();
                }
            }
        }
    },[]) // useEffect

    return(
        <AuthContext.Provider value={{user,googleLogin,googleLogout, isLoading, uid:user && user.uid}}>
            {children}
        </AuthContext.Provider>
        // provider 래핑되어 있는 하위에 있는 모든 컴포넌트에서 AuthContext에 접근할 수 있도록 해서 데이터를 공유하게 하는 역할을 함
    )

}

export function useAuthContext(){
    return useContext(AuthContext)
}
// 다른 곳에서 참조할 수 있도록 context를 export


/*
newuser의 로그인 상태를 감지하는 코드는 onUserState가 감지함.
-> api폴더 내에서 만들었음
onUserState는 사용자가 로그인/로그아웃 할때마다 실행되는 함수
매번 로그인 상태가 바뀔때마다 userChange를 호출해서 uewUser의 값을 update하는 방식

*/
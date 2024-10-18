import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Main from "../pages/Main";



export default function Router(){
    const router = createBrowserRouter([
        {
            path: '/',
            element : <Home/>,
            errorElement : <NotFound/>, //일치하는 경로가 없을때 출력할 컴포넌트(에러페이지)
            children : [    //자식 경로 설정
                {index: true, element: <Main/>}, //main 컴포넌트를 기본경로로 설정
                {path : '/main:category/:movieId'}
            ],
        }

    ])

    return <RouterProvider router = {router}/>  //RouterProvider로 생성된 router를 전체 페이지에 뿌림

}
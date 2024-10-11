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
                {index: true, element: <Main/>} //main컴퍼넌트를 기본경로로 설정
            ],
        }

    ])

    return <RouterProvider router = {router}/>

}
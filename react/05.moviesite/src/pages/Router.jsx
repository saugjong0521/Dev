import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Main from "./Main";



export default function Router(){
    const router = createBrowserRouter({
        {
            path: '/',
            element : <Home/>,
            errorElement : <NotFound/>,
            children : [
                {index: true, element: <Main/>}
            ],
        }

    })
}
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";



export default function Router(){
    const router = createBrowserRouter({
        {
            path: '/'
            element : <Home/>
        }

    })
}
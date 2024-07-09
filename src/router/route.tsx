import {
    createBrowserRouter, RouterProvider,
} from "react-router-dom";
import App from '@/App.tsx';
const route = createBrowserRouter([
    {
        path : '/',
        element : <App/>
    }
])

 const Router = () =>{
    return (
        <RouterProvider router={route}/>
    )
}
export default Router;
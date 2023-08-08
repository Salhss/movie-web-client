import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/movie/:id",
        element: <div>ini halaman detail</div>
    }
])

export default router
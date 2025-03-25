import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Login from "./components/Login";
import { createBrowserRouter , RouterProvider,Outlet} from "react-router-dom";



const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
       
    );
};
const appRouter=createBrowserRouter([{
    path:"/",
    element:<AppLayout/>,
    children: [ 
        {
            path:"/",
            element:<Body/>
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/contact",
          element: <Contact />,
        },
        {
        path:"/cart",
        element:<Cart/>,
        },
      
        {
            path:"/resturant/:resId",
            element:<Menu/>,
        },{
            path:"/login",
            element:<Login/>,
        },
    ],
    errorElement:<Error/>,
},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
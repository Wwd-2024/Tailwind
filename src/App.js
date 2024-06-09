import React, {lazy, Suspense} from 'react';
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import Error from './components/Error';
import { RouterProvider, createBrowserRouter,Outlet } from 'react-router-dom';
import RestaurantDetails from './components/RestaurantDetails';
import Shimmer from './components/Shimmer';

const About = lazy(()=> import('./components/About'));

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRoutes = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<Suspense fallback={<Shimmer/>}><About /></Suspense>
            },
            {
                path:"/restaurants/:resID",
                element:<RestaurantDetails />
            }
        ],
        errorElement:<Error />
    }
    

]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes}/>);
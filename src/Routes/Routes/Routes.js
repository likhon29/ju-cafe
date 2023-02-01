import { createBrowserRouter } from "react-router-dom";
import Reservation from "../../Pages/Reservation/Reservation/Reservation";
import Main from './../../Layout/Main/Main';
import Login from './../../Pages/Authentication/Login/Login';
import SignUp from './../../Pages/Authentication/SignUp/SignUp';
import Home from './../../Pages/Home/Home/Home';
import Menu from './../../Pages/FoodMenu/Menu/Menu';
import About from './../../Pages/Home/About/About';
import Gallery from './../../Pages/Home/Gallery/Gallery';
import NotFound from "../../Pages/Others/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/reservation',
            element: <Reservation></Reservation>
        },
        {
            path: '/menu',
            element: <Menu></Menu>
        },
        {
            path: '/review',
            element: <SignUp></SignUp>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/gallery',
            element: <Gallery></Gallery>
        },
        ]
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
export default router;

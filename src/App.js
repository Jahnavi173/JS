import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/home/HomePage';
import UserRegister from './components/signup/UserRegister';
import Login from './components/login/Login'
import RootLayout from './RootLayout'
import ProductCatalog from './components/productCatalog/ProductCatalog';
import ProductPage from './components/productPage/ProductPage';
import CartPage from './components/cartPage/CartPage';
import Search1 from './components/search/Search1';


function App() {
const router=createBrowserRouter([
  {
    path:'/',
    element:<RootLayout />,
    children:[
      {
        path:'/',
        element:<Home />,
        // children:[
        //   {
        //     path:'productCatalog',
        //     element:<ProductCatalog />,
        //     children:[
        //      {
        //       path:'productPage',
        //       element:<ProductPage />,
        //       children:[
        //         {

        //         }
        //       ]
        //      }

        //     ]
        //   }
        // ]
      },
      {
        path:'/SignUp',
        element:<UserRegister />
      },
      {
        path:'/Login',
        element:<Login />
      },
      {
        path:'/CartPage',
        element:<CartPage />
      },
      {
        path:'/search',
        element:<Search1 />
      },
      {
        path:'/productCatalog',
        element:<ProductCatalog />

      },
      {
        path:'/ProductPage/:id',
        element:<ProductPage />
      }

    ]
  }
])


  return (
    <div className="App">
    <RouterProvider router={router}/>  
    </div>
  );
}

export default App;

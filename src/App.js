import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Root/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import CartDetail from './components/CartDetail/CartDetail';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch(' https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: () => fetch(' https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/:cartId',
          loader: async ({params}) => {
            // console.log(params.cartId);
            return fetch(` https://openapi.programming-hero.com/api/quiz/${params.cartId}`)
          },
          element: <CartDetail></CartDetail>
        },
        {path: '*' , element: <Error></Error>}
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

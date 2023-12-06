import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      { path: "products", element: <ProductsPage></ProductsPage> },
      { path: "products/:id", element: <ProductDetailPage></ProductDetailPage> },
    ],
  },
]);

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage></HomePage>}></Route>
//     <Route path="/products" element={<ProductsPage></ProductsPage>}></Route>
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

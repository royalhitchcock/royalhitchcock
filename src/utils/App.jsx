import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard, {loader as patientLoader } from "../features/dashboard/Dashboard";
import Login, {action as loginAction } from "../features/login/Login";
import AppLayout from "../ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path:'/',
        element: <Login />,
        action: loginAction,
      },
      {
        path: '/dashboard',
        element:  <Dashboard />,
        loader: patientLoader,
      }
    ]
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}

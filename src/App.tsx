import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import SideMenuLayout from './layouts/SideMenuLayout'
import FoodList from './features/tasks/components/FoodList/FoodList'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <SideMenuLayout />
      </div>
    ),
    children: [
      {
        path: '/',
        element: <FoodList />,
      },
    ],
  }
])

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  )
}

export default App

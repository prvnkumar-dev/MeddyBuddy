import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterContextProvider, RouterProvider } from 'react-router'
import MedicineDetails from './components/MedicineDetails.tsx'
import Dashboard from './components/Dashboard.tsx'
import { Provider } from 'react-redux'
import { store } from "./redux/store.tsx"
const route = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [{
    index: true,
    element: <Dashboard />
  },
  {
    path: "medicines/:id",
    element: <MedicineDetails />
  }]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={route} />

    </Provider>
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import Statistic from './component/Statistic/Statistic';
import AppliedJob from './component/AppliedJob/AppliedJob';
import Blog from './component/Blog/Blog';
import JobDetails from './component/JobDetails/JobDetails';
const router = createBrowserRouter([
  {
    path: '/',
    element:<App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/jobInfo.json')
      },
      {
        path:'jobdeails/:id',
        element: <JobDetails></JobDetails>,
        loader: ({params}) => fetch(`/jobInfo.json`)
      },
      {
        path:'statistic',
        element:<Statistic/>
      },
      {
        path:'appliedJob',
        element:<AppliedJob/>,
         
      },
      {
        path: 'blog',
        element:<Blog/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

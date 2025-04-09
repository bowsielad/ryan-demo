import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Contact from "./pages/Contact.jsx"
import ProfilesPage from "./pages/ProfilesPage"
import ProfilePage from "./pages/ProfilePage"
import NotFoundPage from "./pages/NotFoundPage"

import WomensHealthAssessment from "./pages/WomensHealth/WomensHealthAssessment";

import BladderBowelForm from "./pages/WomensHealth/Assessment1/BladderBowelForm";
import BladderBowelResult from "./pages/WomensHealth/Assessment1//BladderBowelResult";
import BladderBowelResults from "./pages/WomensHealth/Assessment1/BladderBowelResults";

import HealthCheckForm from "./pages/WomensHealth/Assessment2/HealthCheckForm";
import HealthCheckResult from "./pages/WomensHealth/Assessment2/HealthCheckResult";
import HealthCheckResults from "./pages/WomensHealth/Assessment2/HealthCheckResults";

import LifestyleHabitsPage from "./pages/LifestyleHabits/LifestyleHabitsPage";
import LifestyleHabitsCompletePage from "./pages/LifestyleHabits/LifestyleHabitsCompletePage";
import DailyReflectionPage from "./pages/DailyReflections/DailyReflectionPage";

import DashboardPage from "./pages/Dashboard/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/womenshealthassessment",
        element: <WomensHealthAssessment/>,
      },
      {
        path: "/bladderbowelform",
        element: <BladderBowelForm/>,
      },
      {
        path: "/bladderbowelresult",
        element: <BladderBowelResult/>,
      },
      {
        path: "/bladderbowelresults",
        element: <BladderBowelResults/>,
      },
      {
        path: "/healthcheckform",
        element: <HealthCheckForm/>,
      },
      {
        path: "/healthcheckresult",
        element: <HealthCheckResult/>,
      },
      {
        path: "/healthcheckresults",
        element: <HealthCheckResults/>,
      },
      {
        path: "/lifestylehabits",
        element: <LifestyleHabitsPage/>,
      },
      {
        path: "/lifestylehabitscomplete",
        element: <LifestyleHabitsCompletePage/>,
      },
      {
        path: "/dailyreflections",
        element: <DailyReflectionPage/>,
      },
      {
        path: "/dashboard",
        element: <DashboardPage/>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/profiles",
        element: <ProfilesPage />,
        children: [
          {
            path: "/profiles/:profileId",
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

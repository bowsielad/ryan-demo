import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home.jsx"
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

import MentalHealthResultsPage from "./pages/MentalHealth/MentalHealthResults/MentalHealthResultsPage";

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
        path: "/mentalhealthresults",
        element: <MentalHealthResultsPage/>,
      },
      {
        path: "/dashboard",
        element: <DashboardPage/>,
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

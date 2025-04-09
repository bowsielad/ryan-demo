import { DataProvider } from "./context/DataContext"
import { Outlet } from "react-router-dom"

import "./App.css";

import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <DataProvider>
        <Header />
        
        <main>
        <SideBar />
        <Outlet/>
        </main>

        <Footer/>
      </DataProvider>
    </>
  )
}

export default App

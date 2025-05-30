import { Route, Routes } from "react-router"
import App from "./App"
import Projects from "./pages/Projects/Projects"
import ProjectPage from "./pages/ProjectPage/ProjectPage"
import Repair from "./pages/Repair/Repair"
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login"
import Contact from "./pages/Contacts/Contacts"
import { useDebugValue, useEffect } from "react"
import { fetchCurrent } from "./redux/slice/userSlice"
import { useDispatch } from "react-redux"


const MainRouter = () => {
   const dispatch = useDispatch()
   useEffect(() => {
      const cur = async () => {
         const {data} = await dispatch(fetchCurrent());
         console.log(data)
         
      }

      cur()
   }, [])
   return (
      <Routes>
         <Route path='/' element={<App />} />
         <Route path='/projects' element={<Projects />} />
         <Route path='/project' element={<ProjectPage />} />
         <Route path='/repairs' element={<Repair />} />
         <Route path='/repair' element={<ProjectPage />} />
         <Route path='/contacts' element={<Contact />} />
         <Route path='/auth'>
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
         </Route>
      </Routes>
   )
}

export default MainRouter
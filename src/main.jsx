import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Route, Routes } from 'react-router'
import {Provider} from 'react-redux'

import Projects from './pages/Projects/Projects.jsx'
import Repair from './pages/Repair/Repair.jsx'
import Register from './pages/Register/Register.jsx'
import Login from './pages/Login/Login.jsx'
import Navigation from './components/Navigation/Navigation.jsx'
import store from './redux/store.js'
import ProjectPage from './pages/ProjectPage/ProjectPage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <StrictMode> */}
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project' element={<ProjectPage />} />
          <Route path='/repairs' element={<Repair />} />
          <Route path='/auth'>
              <Route path='register' element={<Register />} />
              <Route path='login' element={<Login />} />
          </Route>
        </Routes>
      </Provider>
    {/* </StrictMode> */}
  </BrowserRouter>
)

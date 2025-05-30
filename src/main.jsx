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
import Contacts from './pages/Contacts/Contacts.jsx'
import RepairPage from './pages/RepairPage/RepairPage.jsx'
import MainRouter from './MainRouter.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Provider store={store}>
        <MainRouter />
      </Provider>
    </StrictMode>
  </BrowserRouter>
)

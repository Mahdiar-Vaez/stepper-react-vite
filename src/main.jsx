import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StepValuesContext from './utils/StepValueContext.jsx'


createRoot(document.getElementById('root')).render(

  <StrictMode>
  <StepValuesContext>
    <App /></StepValuesContext>
  </StrictMode>,
)

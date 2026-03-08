import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer.jsx'


createRoot(document.getElementById('root')).render(<div>
 <Nav/><h1>hello</h1>
<Footer/>
<App/> 
</div>

)

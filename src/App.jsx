
import Agents from "./components/Agents"
import Home from "./components/Home"
import Login from "./components/Signin"
import Signin from "./components/Signin"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Tickets from "./components/Tickets"
import Customers from "./components/Customers"
import Products from "./components/Products"
import Hero from "./components/Hero"
import Orders from "./components/Orders"
import Analytics from "./components/Analytics"


function App() {
 
  return (
    <>
       <Router>
        <Routes>
          <Route index element={<Login/>}/>
          <Route path="/" element={<Home/>}>
          <Route path="/hero" element={<Hero/>}/>
          <Route path="/agents" element={<Agents/>}/>
          <Route path="/tickets" element={<Tickets/>}/>
          <Route path="/customers" element={<Customers/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/analytics" element={<Analytics/>}/>
          </Route>
         

        </Routes>
       </Router>
       
        

    </>
  )
}

export default App


import './App.css';
import MainRoutes from './components/Routes/MainRoutes';
import Layout from './components/Layout/Layout';
import MobileNav from './components/MobileNav/MobileNav';
import {useState} from "react"
import { MobileNavContext } from './Context/MobileNavContext/MobileNavContext';
import AuthRoutes from './components/Routes/AuthRoutes';
import { useLocation } from 'react-router-dom';

function App() {
  const [ShowMoblieNav, setShowMoblieNav] = useState(false);

   const location=useLocation();
   const path=location.pathname
  return (
    <div>
      {path==="/sign-up"?
       <AuthRoutes/>:
      <MobileNavContext.Provider value={{setShowMoblieNav}}>
      {!ShowMoblieNav ? <Layout>
      <MainRoutes/>
      </Layout>:
      <MobileNav/>}
      </MobileNavContext.Provider>}
    </div>

  );
}

export default App;

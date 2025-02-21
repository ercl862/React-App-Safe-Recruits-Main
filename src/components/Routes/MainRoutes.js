import {
    Routes,
    Route,
  } from 'react-router-dom';
import About from '../About/About';
import Employers from '../Employers/Employers';
import Home from '../Home/Home';
import JobSeekers from '../JobSeekers/JobSeekers';
import PlansPricing from '../PlansPricing/PlansPricing';
import Test from '../Test/Test';
const MainRoutes = () => {
    return (
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/job-seekers" element={<JobSeekers />} />
          <Route path="/test" element={<Test />} />
          <Route path='/plans-pricing' element={<PlansPricing/>}/>

        </Routes>
     
    )
}


export default MainRoutes;
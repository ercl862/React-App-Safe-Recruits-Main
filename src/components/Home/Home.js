import { motion } from "framer-motion";
import "./home.css";
import homeImage from "../../images/home-image.png";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate=useNavigate()

  const handleSignup=()=>{
    navigate('/sign-up')
  }

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="box">
        <img src={homeImage} className="homeImage" alt="Girl in a jacket" />
        <div className="welcome-content">
          <div className="welcome-wraper">
            <p className="welcome-text">Welcome to <br/> Safe Recruits</p>
            <span className="bio">
              Talent Matching and Talent Testing Solutions
            </span>
            <div className="buttons-wraper">
              <div className="buttons" onClick={handleSignup}>Find The Right Employee</div>
              <div className="buttons">Build or Upload Your CV</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;

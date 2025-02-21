import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./planspricing.css";
const PlansPricing = () => {
  const navigate = useNavigate();
  const handleBackToHome = () => {
    navigate("/");
  };
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <p className="head-text">No plans available</p>
      <p className="description" style={{ marginLeft: "0px" }}>
        Once there are plans available for purchase, you’ll see them here.
      </p>
      <div className="btn-bakhome" onClick={handleBackToHome}>
        Back to Home Page
      </div>
    </motion.div>
  );
};

export default PlansPricing;

import "./test.css";
import { motion } from "framer-motion";
const Test = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <p className="head-text">Test Scheduler</p>
      <p className="description" style={{ marginLeft: "0px" }}>
        Pick a date below to book a test
      </p>
      <div className="btn-sbmt">submit</div>
    </motion.div>
  );
};

export default Test;

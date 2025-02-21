import "./about.css";
import aboutImage from "../../images/about.jpg";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img src={aboutImage} alt="Girl in a jacket" className="about-image" />
      <p className="about-heading">Reliable Innovative Staffing</p>
      <p className="description">
        Safe Recruits is widely recognized as one of the industry’s fastest
        growing staffing agencies. With 1 team members, <br />
        we have the capacity to build meaningful, long-lasting relationships
        with all our clients. Our success is a result of
        <br /> our commitment to the best people, the best solutions and the
        best results.
      </p>
      <p className="des">
        We invite you to contact one of our team members today. They are
        committed to providing you, our clients,
        <br /> with an experience focused on what you value most.
      </p>
      <div className="btn-wrap">
        <div className="btn">Find The Right Employee</div>
        <div className="btn">Build or Upload Your CV</div>
      </div>
    </motion.div>
  );
};

export default About;

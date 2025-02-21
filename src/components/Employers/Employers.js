import Image1 from "../../images/emp1.jpg";
import Image2 from "../../images/emp2.jpg";
import "./employers.css";
import { motion } from "framer-motion";

const Employers = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <p className="about-heading">Our Recruitment Services</p>
      <p className="description" style={{ marginLeft: "0px" }}>
        At Safe Recruits, we’ll keep you connected to top talent, whenever and
        wherever you need it. Contact us today so we can help you find <br />
        the perfect people best suited for your needs and requirements. We make
        sure to create the perfect fit between companies and employees so that
        <br /> both sides are happy in the end. Let us help you today.
      </p>
      <div className="image-div-emplr">
        <div className="image-container">
          <img style={{filter:'brightness(60%)',width:'100%',objectFit:'cover'}} src={Image1} alt="Girl in a jacket" width={588} height={736} />
          <div className="image-txt-left">
            <p>Position Recruitment</p>
            <p className="des-emplr">
              You dont have a shortlist of applicants yet?
              <br /> No problem, simply search our database for screened and
              <br /> tested candidates that meet your requirements and simply
              <br /> get in touch with the candidate to schedule an interview.
              <br /> A truly seamless experience 
            </p>
          </div>
        </div>
        <div className="image-container">
          <img style={{filter:'brightness(60%)',width:'100%',objectFit:'cover'}} src={Image2} alt="Girl in a jacket" width={588} height={736} />
          <div className="image-txt-right">
            <p>Candidate Testing</p>
            <p className="des-emplr">
              Do you want to engage the most competent of the <br /> applicants
              in your recruitment campaign?  <br /> Simply use our candidate
              testing service. <br />
              Your applicants simply upload their CV's and take a test at <br />
              one of our test locations. <br /> We will handle the screening and
              testing of all your <br /> applicants before they show up for an
              interview with you
            </p>
          </div>
        </div>
      </div>
      <div className="btn-wrap">
        <div className="btn">Find The Right Employee</div>
        <div className="btn">Build or Upload Your CV</div>
      </div>
    </motion.div>
  );
};

export default Employers;

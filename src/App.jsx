import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BasicInfo from "./components/BasicInfo";
import TshirtInfo from "./components/TshirtInfo";
import RegisterActivities from "./components/RegisterActivities";
import PaymentInfo from "./components/PaymentInfo";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    otherJob: "",
    size: "",
    design: "",
    color: "",
    main: false,
    libraries: false,
    node: false,
    frameworks: false,
    express: false,
    buildTools: false,
    npm: false,
    paymentType: "",
    expMonth: "",
    expYear: "",
    ccNum: "",
    zip: "",
    cvv: "",
    payment: "",
  });
  const [activities, setActivities] = useState([
    {
      name: "main",
      time: "",
      cost: 200,
      title: "Main Conference",
      checked: false,
      disabled: false,
    },
    {
      name: "frameworks",
      time: "Tuesday 9am-12pm",
      cost: 100,
      title: "JavaScript Frameworks Workshop",
      checked: false,
      disabled: false,
    },
    {
      name: "libraries",
      time: "Tuesday 1pm-4pm",
      cost: 100,
      title: "JavaScript Libraries Workshop",
      checked: false,
      disabled: false,
    },
    {
      name: "express",
      time: "Tuesday 9am-12pm",
      cost: 100,
      title: "Express Workshop",
      checked: false,
      disabled: false,
    },
    {
      name: "node",
      time: "Tuesday 1pm-4pm",
      cost: 100,
      title: "Node.js Workshop",
      checked: false,
      disabled: false,
    },
    {
      name: "buildTools",
      time: "Wednesday 9am-12pm",
      cost: 100,
      title: "Build tools Workshop",
      checked: false,
      disabled: false,
    },
    {
      name: "npm",
      time: "Wednesday 1pm-4pm",
      cost: 100,
      title: "npm Workshop",
      checked: false,
      disabled: false,
    },
  ]);
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <>
      <main>
        <ul className="progress">
          <li>Basic</li>
          <li>T-Shirt</li>
          <li>Activities</li>
          <li>Payment</li>
        </ul>
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ width: `${currentStep * 25}%` }}
          ></div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {currentStep === 1 && (
              <BasicInfo formData={formData} setFormData={setFormData} />
            )}
            {currentStep === 2 && (
              <TshirtInfo formData={formData} setFormData={setFormData} />
            )}
            {currentStep === 3 && (
              <RegisterActivities
                formData={formData}
                setFormData={setFormData}
                activities={activities}
                setActivities={setActivities}
              />
            )}
            {currentStep === 4 && (
              <PaymentInfo formData={formData} setFormData={setFormData} />
            )}
          </motion.div>
        </AnimatePresence>

        <div className="nav-buttons">
          <button
            className="previous"
            type="button"
            onClick={handlePrevious}
            hidden={currentStep === 1}
          >
            Previous
          </button>
          <button
            className="next"
            type="button"
            onClick={handleNext}
            hidden={currentStep === 4}
          >
            Next
          </button>
          <button className="submit" type="submit" hidden={currentStep !== 4}>
            Submit
          </button>
        </div>
      </main>
    </>
  );
}

export default App;

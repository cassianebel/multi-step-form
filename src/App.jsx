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
    totalCost: 0,
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

  const emailValidator = () => {
    const emailInput = document.getElementById("email");
    const emailHint = document.getElementById("email-hint");
    const emailMissingAt = /^[^@]+[^@.]+\.[a-z]+$/i.test(emailInput.value);
    if (emailMissingAt) {
      emailHint.innerHTML = `Your email is missing the '@'`;
    }
    const emailMissingPeriod = /^[^@]+@[^@.]+[a-z]+$/i.test(emailInput.value);
    if (emailMissingPeriod) {
      emailHint.innerHTML = `Your email is missing the '.'`;
    }
    const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailInput.value);
    return emailIsValid;
  };

  const handleNext = () => {
    const nameHint = document.getElementById("name-hint");
    const nameInput = document.getElementById("name");
    const emailHint = document.getElementById("email-hint");
    const emailInput = document.getElementById("email");
    if (currentStep === 1 && (!formData.name || !emailValidator())) {
      if (!formData.name) {
        nameHint.style.visibility = "visible";
        nameInput.classList.add("error-border");
        nameInput.focus();
        return;
      } else {
        nameHint.style.visibility = "hidden";
        nameInput.classList.remove("error-border");
      }
      if (!emailValidator()) {
        emailHint.style.visibility = "visible";
        emailInput.classList.add("error-border");
        emailInput.focus();
        return;
      } else {
        emailHint.style.visibility = "hidden";
        emailInput.classList.remove("error-border");
      }
    } else if (currentStep === 3 && formData.totalCost === 0) {
      document.getElementById("activities-hint").style.visibility = "visible";
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.paymentType === "" ||
      formData.paymentType === "select method"
    ) {
      document.getElementById("payment-hint").style.visibility = "visible";
      document.getElementById("payment").classList.add("error-border");
      document.getElementById("payment").focus();
      return;
    } else if (formData.paymentType === "credit-card") {
      const ccHint = document.getElementById("cc-hint");
      const ccNum = document.getElementById("cc-num");
      const zip = document.getElementById("zip");
      const cvv = document.getElementById("cvv");
      if (formData.ccNum.length < 13 || formData.ccNum.length > 16) {
        ccHint.style.visibility = "visible";
        ccNum.classList.add("error-border");
        ccNum.focus();
        return;
      } else {
        ccHint.style.visibility = "hidden";
        ccNum.classList.remove("error-border");
      }
      if (formData.zip.length !== 5) {
        document.getElementById("zip-hint").style.visibility = "visible";
        zip.classList.add("error-border");
        zip.focus();
        return;
      } else {
        document.getElementById("zip-hint").style.visibility = "hidden";
        zip.classList.remove("error-border");
      }
      if (formData.cvv.length !== 3) {
        document.getElementById("cvv-hint").style.visibility = "visible";
        cvv.classList.add("error-border");
        cvv.focus();
        return;
      } else {
        document.getElementById("cvv-hint").style.visibility = "hidden";
        cvv.classList.remove("error-border");
      }
      if (formData.expMonth === "" || formData.expMonth === "Select Month") {
        document.getElementById("exp-hint").style.visibility = "visible";
        document.getElementById("exp-month").classList.add("error-border");
        document.getElementById("exp-month").focus();
        return;
      } else {
        document.getElementById("exp-hint").style.visibility = "hidden";
        document.getElementById("exp-month").classList.remove("error-border");
      }
      if (formData.expYear === "" || formData.expYear === "Select Year") {
        document.getElementById("exp-year-hint").style.visibility = "visible";
        document.getElementById("exp-year").classList.add("error-border");
        document.getElementById("exp-year").focus();
        return;
      } else {
        document.getElementById("exp-year-hint").style.visibility = "hidden";
        document.getElementById("exp-year").classList.remove("error-border");
      }
    }
    setCurrentStep(currentStep + 1);
    console.log(formData);
  };

  return (
    <>
      <main>
        <div hidden={currentStep === 5}>
          <ul className="progress" aria-hidden>
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
            {currentStep === 5 && (
              <h2 className="success">Congrats! You made it to the End!</h2>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="nav-buttons">
          <button
            className="previous"
            type="button"
            onClick={handlePrevious}
            hidden={currentStep === 1 || currentStep === 5}
          >
            Previous
          </button>
          <button
            className="next"
            type="button"
            onClick={handleNext}
            hidden={currentStep >= 4}
          >
            Next
          </button>
          <button
            className="submit"
            type="submit"
            onClick={handleSubmit}
            hidden={currentStep !== 4}
          >
            Submit
          </button>
        </div>
      </main>
    </>
  );
}

export default App;

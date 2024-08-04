import { useState } from "react";
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
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <>
      {currentStep === 1 && (
        <BasicInfo formData={formData} setFormData={setFormData} />
      )}
      {currentStep === 2 && (
        <TshirtInfo formData={formData} setFormData={setFormData} />
      )}
      {currentStep === 3 && (
        <RegisterActivities formData={formData} setFormData={setFormData} />
      )}
      {currentStep === 4 && (
        <PaymentInfo formData={formData} setFormData={setFormData} />
      )}

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
    </>
  );
}

export default App;

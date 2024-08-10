import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BasicInfo from "./components/BasicInfo";
import TshirtInfo from "./components/TshirtInfo";
import RegisterActivities from "./components/RegisterActivities";
import PaymentInfo from "./components/PaymentInfo";

const tabs = [
  { label: "BasicInfo", icon: "🪪", step: 1 },
  { label: "TshirtInfo", icon: "👕", step: 2 },
  { label: "RegisterActivities", icon: "🎟️", step: 3 },
  { label: "PaymentInfo", icon: "💳", step: 4 },
];

function App() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
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
      {/* <nav>
        <ul>
          {tabs.map((item) => (
            <li
              key={item.label}
              className={item === selectedTab ? "selected" : ""}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon}`}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav> */}
      {/* <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab.label === "BasicInfo" && (
              <BasicInfo formData={formData} setFormData={setFormData} />
            )}
            {selectedTab.label === "TshirtInfo" && (
              <TshirtInfo formData={formData} setFormData={setFormData} />
            )}
            {selectedTab.label === "RegisterActivities" && (
              <RegisterActivities
                formData={formData}
                setFormData={setFormData}
              />
            )}
            {selectedTab.label === "PaymentInfo" && (
              <PaymentInfo formData={formData} setFormData={setFormData} />
            )}
          </motion.div>
        </AnimatePresence>
      </main> */}
      <main>
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

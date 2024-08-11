import { useState } from "react";
import PropTypes from "prop-types";

const RegisterActivities = ({ formData, setFormData }) => {
  const [total, setTotal] = useState(0);
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

  const handleChange = (index) => {
    const updatedActivities = [...activities];
    updatedActivities[index].checked = !updatedActivities[index].checked;

    // Update form data
    setFormData({
      ...formData,
      [updatedActivities[index].name]: updatedActivities[index].checked,
    });

    // Calculate new total cost
    const newTotal = updatedActivities.reduce(
      (sum, activity) => (activity.checked ? sum + activity.cost : sum),
      0
    );
    setTotal(newTotal);

    // Handle disabling conflicting activities
    const selectedTime = updatedActivities[index].time;

    // If the activity is now checked, disable others with the same time
    if (updatedActivities[index].checked) {
      updatedActivities.forEach((activity, i) => {
        if (activity.time === selectedTime && i !== index) {
          activity.disabled = true;
        }
      });
    } else {
      // If the activity is now unchecked, re-enable others with the same time
      updatedActivities.forEach((activity, i) => {
        if (activity.time === selectedTime && i !== index) {
          activity.disabled = false;
        }
      });
    }

    // Update the activities state
    setActivities(updatedActivities);
  };

  return (
    <fieldset id="activities" className="activities">
      <legend>Register for Activities</legend>

      <div id="activities-box" className="activities-box error-border">
        {activities.map((activity, index) => (
          <label
            className={`custom-checkbox ${activity.disabled ? "disabled" : ""}`}
            key={activity.name}
            htmlFor={activity.name}
          >
            <i className="fa-solid fa-check"></i>
            <input
              id={activity.name}
              type="checkbox"
              name={activity.name}
              data-day-and-time={activity.time}
              data-cost={activity.cost}
              checked={activity.checked}
              disabled={activity.disabled}
              onChange={() => handleChange(index)}
            />
            <span className="checkbox-mark"></span>
            <div className="label">
              <div className="activity-title">
                <span>{activity.title}</span>
                <br />
                <span>{activity.time}</span>
              </div>
              <div className="activity-time-cost">
                <span className="activity-cost">${activity.cost}</span>
              </div>
            </div>
          </label>
        ))}
      </div>
      <p id="activities-cost" className="activities-cost">
        Total: ${total}
      </p>
      <p id="activities-hint" className="activities-hint hint">
        Choose at least one activity
      </p>
    </fieldset>
  );
};

RegisterActivities.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default RegisterActivities;

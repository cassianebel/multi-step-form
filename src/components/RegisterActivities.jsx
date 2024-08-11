import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const RegisterActivities = ({
  formData,
  setFormData,
  activities,
  setActivities,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (index) => {
    const updatedActivities = [...activities];
    updatedActivities[index].checked = !updatedActivities[index].checked;

    // Calculate new total cost
    const newTotal = updatedActivities.reduce(
      (sum, activity) => (activity.checked ? sum + activity.cost : sum),
      0
    );

    // Update form data
    const updatedFormData = {
      ...formData,
      [updatedActivities[index].name]: updatedActivities[index].checked,
      totalCost: newTotal,
    };
    setFormData(updatedFormData);

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
              ref={index === 0 ? inputRef : null}
              id={activity.name}
              type="checkbox"
              name={activity.name}
              data-day-and-time={activity.time}
              data-cost={activity.cost}
              checked={formData[activity.name]}
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
        Total: ${formData.totalCost}
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
  activities: PropTypes.array.isRequired,
  setActivities: PropTypes.func.isRequired,
};

export default RegisterActivities;

import PropTypes from "prop-types";

const RegisterActivities = ({ formData, setFormData }) => {
  const updateTotalCost = () => {
    let totalCost = 0;
    const checkboxes = document.querySelectorAll("#activities-box input");
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        totalCost += parseInt(checkbox.dataset.cost);
      }
    });
    document.getElementById("activities-cost").textContent =
      `Total: $${totalCost}`;
  };

  return (
    <fieldset
      id="activities"
      className="activities"
      onChange={() => updateTotalCost()}
    >
      <legend>Register for Activities</legend>

      <div id="activities-box" className="activities-box error-border">
        <label className="custom-checkbox">
          <i className="fa-solid fa-check"></i>
          <input
            type="checkbox"
            name="all"
            data-cost="200"
            onChange={(e) =>
              setFormData({ ...formData, main: e.target.checked })
            }
            checked={formData.main}
          />
          <span className="checkbox-mark"></span>
          <div className="label">
            <div className="activity-title">
              <span>Main Conference</span>
            </div>
            <div className="activity-time-cost">
              <span className="activity-cost">$200</span>
            </div>
          </div>
        </label>

        <label className="custom-checkbox">
          <i className="fa-solid fa-check"></i>
          <input
            type="checkbox"
            name="js-libs"
            data-day-and-time="Tuesday 9am-12pm"
            data-cost="100"
            onChange={(e) =>
              setFormData({ ...formData, libraries: e.target.checked })
            }
            checked={formData.libraries}
          />
          <span className="checkbox-mark"></span>
          <div className="label">
            <div className="activity-title">
              <span>JavaScript Libraries Workshop</span>
              <br />
              <span>Tuesday 9am-12pm</span>
            </div>
            <div className="activity-time-cost">
              <span className="activity-cost">$100</span>
            </div>
          </div>
        </label>

        <label className="custom-checkbox">
          <i className="fa-solid fa-check"></i>
          <input
            type="checkbox"
            name="node"
            data-day-and-time="Tuesday 1pm-4pm"
            data-cost="100"
            onChange={(e) =>
              setFormData({ ...formData, node: e.target.checked })
            }
            checked={formData.node}
          />
          <span className="checkbox-mark"></span>
          <div className="label">
            <div className="activity-title">
              <span>Node.js Workshop</span>
              <br />
              <span>Tuesday 1pm-4pm</span>
            </div>
            <div className="activity-time-cost">
              <span className="activity-cost">$100</span>
            </div>
          </div>
        </label>

        <label className="custom-checkbox">
          <i className="fa-solid fa-check"></i>
          <input
            type="checkbox"
            name="js-frameworks"
            data-day-and-time="Tuesday 9am-12pm"
            data-cost="100"
            onChange={(e) =>
              setFormData({ ...formData, frameworks: e.target.checked })
            }
            checked={formData.frameworks}
          />
          <span className="checkbox-mark"></span>
          <div className="label">
            <div className="activity-title">
              <span>JavaScript Frameworks Workshop</span>
              <br />
              <span>Tuesday 9am-12pm</span>
            </div>
            <div className="activity-time-cost">
              <span className="activity-cost">$100</span>
            </div>
          </div>
        </label>

        <label className="custom-checkbox">
          <i className="fa-solid fa-check"></i>
          <input
            type="checkbox"
            name="build-tools"
            data-day-and-time="Tuesday 1pm-4pm"
            data-cost="100"
            onChange={(e) =>
              setFormData({ ...formData, buildTools: e.target.checked })
            }
            checked={formData.buildTools}
          />
          <span className="checkbox-mark"></span>
          <div className="label">
            <div className="activity-title">
              <span>Build tools Workshop</span>
              <br />
              <span>Tuesday 1pm-4pm</span>
            </div>
            <div className="activity-time-cost">
              <span className="activity-cost">$100</span>
            </div>
          </div>
        </label>

        <label className="custom-checkbox">
          <i className="fa-solid fa-check"></i>
          <input
            type="checkbox"
            name="npm"
            data-day-and-time="Wednesday 9am-12pm"
            data-cost="100"
            onChange={(e) =>
              setFormData({ ...formData, npm: e.target.checked })
            }
            checked={formData.npm}
          />
          <span className="checkbox-mark"></span>
          <div className="label">
            <div className="activity-title">
              <span>npm Workshop</span>
              <br />
              <span>Wednesday 9am-12pm</span>
            </div>
            <div className="activity-time-cost">
              <span className="activity-cost">$100</span>
            </div>
          </div>
        </label>

        <label className="custom-checkbox">
          <i className="fa-solid fa-check"></i>
          <input
            type="checkbox"
            name="express"
            data-day-and-time="Wednesday 1pm-4pm"
            data-cost="100"
            onChange={(e) =>
              setFormData({ ...formData, express: e.target.checked })
            }
            checked={formData.express}
          />
          <span className="checkbox-mark"></span>
          <div className="label">
            <div className="activity-title">
              <span>Express Workshop</span>
              <br />
              <span>Wednesday 1pm-4pm</span>
            </div>
            <div className="activity-time-cost">
              <span className="activity-cost">$100</span>
            </div>
          </div>
        </label>
      </div>
      <p id="activities-cost" className="activities-cost">
        Total: $0
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

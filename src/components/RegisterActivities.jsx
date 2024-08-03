import PropTypes from "prop-types";

const RegisterActivities = ({ formData, setFormData }) => {
  return (
    <fieldset id="activities" className="activities">
      <legend>
        Register for Activities <span className="asterisk">*</span>
      </legend>

      <div id="activities-box" className="activities-box error-border">
        <label>
          <input
            type="checkbox"
            name="all"
            data-cost="200"
            onChange={(e) =>
              setFormData({ ...formData, main: e.target.checked })
            }
            checked={formData.main}
          />
          <span>Main Conference</span>
          <span className="activity-cost">$200</span>
          <img className="activity-img js-img" src="img/js.svg" alt="" />
        </label>

        <label>
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
          <span>JavaScript Libraries Workshop</span>
          <span>Tuesday 9am-12pm</span>
          <span className="activity-cost">$100</span>
          <img className="activity-img react-img" src="img/react.svg" alt="" />
        </label>

        <label>
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
          <span>Node.js Workshop</span>
          <span>Tuesday 1pm-4pm</span>
          <span className="activity-cost">$100</span>
          <img className="activity-img node-img" src="img/node.svg" alt="" />
        </label>

        <label>
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
          <span>JavaScript Frameworks Workshop</span>
          <span>Tuesday 9am-12pm</span>
          <span className="activity-cost">$100</span>
          <img
            className="activity-img angular-img"
            src="img/angular.svg"
            alt=""
          />
        </label>

        <label>
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
          <span>Build tools Workshop</span>
          <span>Tuesday 1pm-4pm</span>
          <span className="activity-cost">$100</span>
          <img className="activity-img build-img" src="img/build.svg" alt="" />
        </label>

        <label>
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
          <span>npm Workshop</span>
          <span>Wednesday 9am-12pm</span>
          <span className="activity-cost">$100</span>
          <img className="activity-img npm-img" src="img/npm.svg" alt="" />
        </label>

        <label>
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
          <span>Express Workshop</span>
          <span>Wednesday 1pm-4pm</span>
          <span className="activity-cost">$100</span>
          <img
            className="activity-img express-img"
            src="img/express.svg"
            alt=""
          />
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

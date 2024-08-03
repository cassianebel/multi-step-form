import PropTypes from "prop-types";

const PersonInfo = ({ formData, setFormData }) => {
  return (
    <fieldset className="basic-info">
      <legend>Basic Info</legend>

      <label htmlFor="name">
        Name: <span className="asterisk">*</span>
        <input
          type="text"
          id="name"
          name="user-name"
          className="error-border"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          value={formData.name}
        />
        <span id="name-hint" className="name-hint hint">
          Name field cannot be blank
        </span>
      </label>

      <label htmlFor="email">
        Email Address: <span className="asterisk">*</span>
        <input
          type="email"
          id="email"
          name="user-email"
          className="error-border"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          value={formData.email}
        />
        <span id="email-hint" className="email-hint hint">
          Email address must be formatted correctly
        </span>
      </label>

      <label htmlFor="title">Job Role</label>
      <select
        id="title"
        name="user-title"
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        value={formData.title}
      >
        <option hidden="">Select Job Role</option>
        <option value="full-stack js developer">
          Full Stack JavaScript Developer
        </option>
        <option value="front-end developer">Front End Developer</option>
        <option value="back-end developer">Back End Developer</option>
        <option value="designer">Designer</option>
        <option value="student">Student</option>
        <option value="other">Other</option>
      </select>

      <label htmlFor="other-job-role">Other Job Role</label>
      <input
        type="text"
        name="other-job-role"
        id="other-job-role"
        className="other-job-role"
        placeholder="Other job role?"
        onChange={(e) => setFormData({ ...formData, otherJob: e.target.value })}
        value={formData.otherJob}
      />
    </fieldset>
  );
};

PersonInfo.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default PersonInfo;

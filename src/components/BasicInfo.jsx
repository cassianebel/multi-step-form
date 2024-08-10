import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

const PersonInfo = ({ formData, setFormData }) => {
  return (
    <fieldset className="basic-info">
      <legend>Basic Info</legend>

      <label htmlFor="name">Name</label>
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

      <label htmlFor="email">Email Address</label>
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

      <label htmlFor="title">Job Role</label>
      <div className="select-arrow">
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
        <i className="fa-solid fa-angle-down"></i>
      </div>

      <AnimatePresence>
        {formData.title === "other" && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.69] }}
          >
            <div id="other-job">
              <label htmlFor="other-job-role">Other Job Role</label>
              <input
                type="text"
                name="other-job-role"
                id="other-job-role"
                className="other-job-role"
                onChange={(e) =>
                  setFormData({ ...formData, otherJob: e.target.value })
                }
                value={formData.otherJob}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </fieldset>
  );
};

PersonInfo.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default PersonInfo;

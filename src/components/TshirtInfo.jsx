import PropTypes from "prop-types";

const TshirtInfo = ({ formData, setFormData }) => {
  return (
    <fieldset className="shirts">
      <legend>T-Shirt Info</legend>

      <div className="shirt-div-box">
        <div id="shirt-sizes" className="shirt-sizes">
          <label htmlFor="size">Size:</label>
          <select
            id="size"
            name="user-size"
            onChange={(e) => setFormData({ ...formData, size: e.target.value })}
            value={formData.size}
          >
            <option value="small">S</option>
            <option value="medium">M</option>
            <option value="large">L</option>
            <option value="extra large">XL</option>
            <option value="double extra large">XXL</option>
          </select>
        </div>

        <div id="shirt-designs" className="shirt-designs">
          <label htmlFor="design">Design:</label>
          <select
            id="design"
            name="user-design"
            onChange={(e) =>
              setFormData({ ...formData, design: e.target.value })
            }
            value={formData.design}
          >
            <option hidden="">Select Theme</option>
            <option value="js puns">Theme - JS Puns</option>
            <option value="heart js">Theme - I ♥ JS</option>
          </select>
        </div>

        <div id="shirt-colors" className="shirt-colors">
          <label htmlFor="color">Color:</label>
          <select
            id="color"
            onChange={(e) =>
              setFormData({ ...formData, color: e.target.value })
            }
            value={formData.color}
          >
            <option defaultValue>Select a design theme above</option>
            <option data-theme="js puns" value="cornflowerblue">
              Cornflower Blue (JS Puns shirt only)
            </option>
            <option data-theme="js puns" value="darkslategrey">
              Dark Slate Grey (JS Puns shirt only)
            </option>
            <option data-theme="js puns" value="gold">
              Gold (JS Puns shirt only)
            </option>
            <option data-theme="heart js" value="tomato">
              Tomato (I ♥ JS shirt only)
            </option>
            <option data-theme="heart js" value="steelblue">
              Steel Blue (I ♥ JS shirt only)
            </option>
            <option data-theme="heart js" value="dimgrey">
              Dim Grey (I ♥ JS shirt only)
            </option>
          </select>
        </div>
      </div>
    </fieldset>
  );
};

TshirtInfo.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default TshirtInfo;

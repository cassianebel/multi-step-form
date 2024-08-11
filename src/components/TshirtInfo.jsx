import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const TshirtInfo = ({ formData, setFormData }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <fieldset className="shirts">
      <legend>T-Shirt Info</legend>

      <div className="shirt-div-box">
        <div id="shirt-sizes" className="shirt-sizes">
          <label htmlFor="size">Size</label>
          <div className="select-arrow">
            <select
              ref={inputRef}
              id="size"
              name="user-size"
              onChange={(e) =>
                setFormData({ ...formData, size: e.target.value })
              }
              value={formData.size}
            >
              <option value="small">S</option>
              <option value="medium">M</option>
              <option value="large">L</option>
              <option value="extra large">XL</option>
              <option value="double extra large">XXL</option>
            </select>
            <i className="fa-solid fa-angle-down"></i>
          </div>
        </div>

        <div id="shirt-designs" className="shirt-designs">
          <label htmlFor="design">Design</label>
          <div className="select-arrow">
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
            <i className="fa-solid fa-angle-down"></i>
          </div>
        </div>

        <div id="shirt-colors" className="shirt-colors">
          <label htmlFor="color">Color</label>
          <div className="select-arrow">
            <select
              id="color"
              onChange={(e) =>
                setFormData({ ...formData, color: e.target.value })
              }
              value={formData.color}
              disabled={formData.design === "Select Theme"}
            >
              <option defaultValue>Select a design theme above</option>
              <option
                data-theme="js puns"
                value="cornflowerblue"
                hidden={formData.design === "heart js"}
              >
                Cornflower Blue (JS Puns shirt only)
              </option>
              <option
                data-theme="js puns"
                value="darkslategrey"
                hidden={formData.design === "heart js"}
              >
                Dark Slate Grey (JS Puns shirt only)
              </option>
              <option
                data-theme="js puns"
                value="gold"
                hidden={formData.design === "heart js"}
              >
                Gold (JS Puns shirt only)
              </option>
              <option
                data-theme="heart js"
                value="tomato"
                hidden={formData.design === "js puns"}
              >
                Tomato (I ♥ JS shirt only)
              </option>
              <option
                data-theme="heart js"
                value="steelblue"
                hidden={formData.design === "js puns"}
              >
                Steel Blue (I ♥ JS shirt only)
              </option>
              <option
                data-theme="heart js"
                value="dimgrey"
                hidden={formData.design === "js puns"}
              >
                Dim Grey (I ♥ JS shirt only)
              </option>
            </select>
            <i className="fa-solid fa-angle-down"></i>
          </div>
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

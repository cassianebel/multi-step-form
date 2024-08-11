import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

const PaymentInfo = ({ formData, setFormData }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <fieldset className="payment-methods">
      <legend>Payment Info</legend>

      <div className="payment-method-box">
        <label htmlFor="payment">I&apos;m going to pay with</label>
        <div className="select-arrow">
          <select
            ref={inputRef}
            id="payment"
            name="user-payment"
            onChange={(e) => {
              setFormData({ ...formData, paymentType: e.target.value });
              document.getElementById("payment-hint").style.visibility =
                "hidden";
            }}
            value={formData.paymentType}
          >
            <option value="select method" hidden="">
              Select Payment Method
            </option>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bitcoin">Bitcoin</option>
          </select>
          <i className="fa-solid fa-angle-down"></i>
        </div>
        <div id="payment-hint" className="payment-hint hint">
          You must select a payment method
        </div>
      </div>

      <AnimatePresence>
        {formData.paymentType === "credit-card" && (
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
            <span className="required">All fields required</span>
            <div id="credit-card" className="credit-card">
              <div className="num-box">
                <label htmlFor="cc-num">
                  <span>Card Number</span>
                </label>
                <input
                  id="cc-num"
                  name="user-cc-num"
                  type="text"
                  onChange={(e) =>
                    setFormData({ ...formData, ccNum: e.target.value })
                  }
                  value={formData.ccNum}
                />
                <span id="cc-hint" className="cc-hint hint">
                  Card number must be between 13 - 16 digits
                </span>

                <div className="zip-cvv">
                  <div className="zip-box">
                    <label htmlFor="zip">
                      <span>Zip Code</span>
                    </label>
                    <input
                      id="zip"
                      name="user-zip"
                      type="text"
                      onChange={(e) =>
                        setFormData({ ...formData, zip: e.target.value })
                      }
                      value={formData.zip}
                    />
                    <span id="zip-hint" className="zip-hint hint">
                      Zip must be 5 digits
                    </span>
                  </div>

                  <div className="cvv-box">
                    <label htmlFor="cvv">
                      <span>CVV</span>
                    </label>
                    <input
                      id="cvv"
                      name="user-cvv"
                      type="text"
                      onChange={(e) =>
                        setFormData({ ...formData, cvv: e.target.value })
                      }
                      value={formData.cvv}
                    />
                    <span id="cvv-hint" className="cvv-hint hint">
                      CVV must be 3 digits
                    </span>
                  </div>
                </div>

                <div className="expiration-box">
                  <div className="month-box">
                    <label htmlFor="exp-month">
                      <span>Expiration Date</span>
                    </label>
                    <div className="select-arrow">
                      <select
                        id="exp-month"
                        name="user-exp-month"
                        onChange={(e) =>
                          setFormData({ ...formData, expMonth: e.target.value })
                        }
                        value={formData.expMonth}
                      >
                        <option hidden="">Select Date</option>
                        <option value="1">01 - January</option>
                        <option value="2">02 - February</option>
                        <option value="3">03 - March</option>
                        <option value="4">04 - April</option>
                        <option value="5">05 - May</option>
                        <option value="6">06 - June</option>
                        <option value="7">07 - July</option>
                        <option value="8">08 - August</option>
                        <option value="9">09 - September</option>
                        <option value="10">10 - October</option>
                        <option value="11">11 - November</option>
                        <option value="12">12 - December</option>
                      </select>
                      <i className="fa-solid fa-angle-down"></i>
                    </div>
                  </div>

                  <div className="year-box">
                    <label htmlFor="exp-year">
                      <span>Expiration Year</span>
                    </label>
                    <div className="select-arrow">
                      <select
                        id="exp-year"
                        name="user-exp-year"
                        onChange={(e) =>
                          setFormData({ ...formData, expYear: e.target.value })
                        }
                        value={formData.expYear}
                      >
                        <option hidden="">Select Year</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                      </select>
                      <i className="fa-solid fa-angle-down"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {formData.paymentType === "paypal" && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.1, ease: [0.04, 0.62, 0.23, 0.69] }}
          >
            <div id="paypal" className="paypal">
              <h3>PayPal</h3>
              <p>
                If you selected the PayPal option we&apos;ll take you to
                Paypal&apos;s site to set up your billing information, when you
                click “Submit” below.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {formData.paymentType === "bitcoin" && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.1, ease: [0.04, 0.62, 0.23, 0.69] }}
          >
            <div id="bitcoin" className="bitcoin">
              <h3>Bitcoin</h3>
              <p>
                If you selected the Bitcoin option we&apos;ll take you to the
                Coinbase site to set up your billing information. Due to the
                nature of exchanging Bitcoin, all Bitcoin transactions will be
                final.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </fieldset>
  );
};

PaymentInfo.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default PaymentInfo;

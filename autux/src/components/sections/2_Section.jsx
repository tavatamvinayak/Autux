import React from "react";

function SecondSection() {
  return (
    <div>
      <section id="convertkit" className="section_home-signup">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="cta46_component">
                <div className="cta46_card">
                  <div className="max-width-large text-center-on-mobile">
                    <div className="margin-bottom margin-xsmall">
                      <h2 className="heading-style-h3">
                        Want to know, how we do it?
                      </h2>
                    </div>
                    <p className="text-size-medium">
                      Join our free lists of guides, templates &amp; insights.
                    </p>
                  </div>
                  <div className="cta46_form-block w-form">
                    <form
                      id="wf-form-email_address"
                      name="wf-form-email_address"
                      data-name="email_address"
                      action="https://app.kit.com/forms/7463169/subscriptions"
                      method="post"
                      className="cta46_form"
                      data-wf-page-id="67416bf9ad9706da53302248"
                      data-wf-element-id="28e3ec2f-4bb4-ec72-ebbf-c1ff35e62a01"
                      aria-label="email_address"
                    >
                      <div className="signup-form-wrapper">
                        <input
                          className="form_input w-input"
                          maxLength="256"
                          name="email_address"
                          data-name="email_address"
                          placeholder="Enter your email"
                          type="email"
                          id="email_address-3"
                          required=""
                        />
                        <input
                          type="submit"
                          data-wait="Please wait..."
                          className="button is-wide w-button"
                          value="Subscribe"
                        />
                      </div>
                      <div className="text-size-regular text-align-center">
                        (Check your inbox after you subscribe)
                      </div>
                    </form>
                    <div
                      className="form_message-success-wrapper w-form-done"
                      tabIndex="-1"
                      role="region"
                      aria-label="email_address success"
                    >
                      <div className="form_message-success">
                        <div className="success-text">
                          Thank you! Your submission has been received!
                        </div>
                      </div>
                    </div>
                    <div
                      className="form_message-error-wrapper w-form-fail"
                      tabIndex="-1"
                      role="region"
                      aria-label="email_address failure"
                    >
                      <div className="form_message-error">
                        <div className="error-text">
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SecondSection;

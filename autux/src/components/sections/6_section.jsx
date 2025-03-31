import React from "react";
import { motion } from "motion/react";

function Six_section() {
  return (
    <div className="overflow-hidden">
      <section id="process" className="section_home-horizontal-scroll pt-20">
        <div className="camera-2">
          <div className="">
            <div className="text-align-center">
              <div className="max-width-large align-center">
                <div className="margin-bottom margin-small">
                  <div className="text-style-tagline is-dark pt-20">
                    Process
                  </div>
                </div>
                <div className="margin-bottom margin-small">
                  <h2>
                    Simple{" "}
                    <span className="text-highlight is-black">
                      5-step process
                    </span>{" "}
                    to make your brand{" "}
                    <span className="text-highlight is-black">Go Big!</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="px-10 lg:px-0">
            {/* animation slide  */}
            <div className="">
              <motion.div
                 className="py-[50px] md:py-[100px] "
                animate={{ x: window.innerWidth > 768 ? -1200 : -200 }}
                
                whileInView={{ x: 0, transition: { duration: 0.5 } }}
              >
                <div className="container-medium">
                  <div className="process_slide">
                    <div
                      id="w-node-ce44f8bf-7712-609a-ccda-35c58962650a-53302248"
                      className="process_slide-image-wrapper"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/67416bf9ad9706da53302213/674e8d4c285fe7082ab92fce_5-steps-01.svg"
                        loading="lazy"
                        alt=""
                        className="process-image"
                      />
                    </div>
                    <div
                      id="w-node-ce44f8bf-7712-609a-ccda-35c58962650c-53302248"
                      className="process_slide-content"
                    >
                      <div className="margin-bottom margin-small">
                        <div className="process_number-large">01</div>
                      </div>
                      <div className="margin-bottom margin-small">
                        <h3>Strategy and foundation</h3>
                      </div>
                      <div className="margin-bottom margin-small">
                        <p>
                          The process begins by getting out what’s in your head,
                          out of your head. We give you 100% clarity after
                          taking short interviews, researching your ICP,
                          building a brand story and other assets, helping you
                          gain crystal clarity about your brand’s content
                          direction
                        </p>
                      </div>
                      <div className="output_wrapper">
                        <div>
                          <strong>Output:</strong> Strategy, brand story, and
                          trust profile
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="py-[50px] md:py-[100px] "
                animate={{ x: window.innerWidth > 768 ? 1200 : 200 }}
                whileInView={{ x: 0, transition: { duration: 0.5 } }}
              >
                <div className="container-medium">
                  <div className="process_slide">
                    <div
                      id="w-node-_668bf92c-5632-90b5-6001-17743821444a-53302248"
                      className="process_slide-image-wrapper"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/67416bf9ad9706da53302213/674e8d4c782cbe65981ea6e1_5-steps-02.svg"
                        loading="lazy"
                        alt=""
                        className="process-image"
                      />
                    </div>
                    <div
                      id="w-node-_668bf92c-5632-90b5-6001-17743821444c-53302248"
                      className="process_slide-content"
                    >
                      <div className="margin-bottom margin-small">
                        <div className="process_number-large">02</div>
                      </div>
                      <div className="margin-bottom margin-small">
                        <h3>Content Design</h3>
                      </div>
                      <div className="margin-bottom margin-small">
                        <p>
                          Consistency means trust and with a solid foundation we
                          will design the visual guidelines for editing your
                          content. This builds authority and trust already
                          warranted by your expertise.
                          <br />
                          <br />
                          Already have a brand? We will build a complimentary
                          visual identity specific to videos
                        </p>
                      </div>
                      <div className="output_wrapper">
                        <div>
                          <strong>Output:</strong> Visual identity
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                 className="py-[50px] md:py-[100px] "
                animate={{ x: window.innerWidth > 768 ? -1200 : -200 }}
                whileInView={{ x: 0, transition: { duration: 0.5 } }}
              >
                <div className="container-medium">
                  <div className="process_slide">
                    <div
                      id="w-node-_80d76626-e0fe-f8ab-aea2-7ca3489dbb7e-53302248"
                      className="process_slide-image-wrapper"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/67416bf9ad9706da53302213/674e8d4c285fe7082ab92fd3_5-steps-03.svg"
                        loading="lazy"
                        alt=""
                        className="process-image"
                      />
                    </div>
                    <div
                      id="w-node-_80d76626-e0fe-f8ab-aea2-7ca3489dbb80-53302248"
                      className="process_slide-content"
                    >
                      <div className="margin-bottom margin-small">
                        <div className="process_number-large">03</div>
                      </div>
                      <div className="margin-bottom margin-small">
                        <h3>Pre-Production</h3>
                      </div>
                      <div className="margin-bottom margin-small">
                        <p>
                          This is where you invest 1 hour a week and record a
                          podcast with an industry expert, interview with our
                          team, or record long-form videos from the scripts we
                          send.
                          <br />
                          <br />
                          No overthinking, no confusion - Always create with
                          confidence
                        </p>
                      </div>
                      <div className="output_wrapper">
                        <div>
                          <strong>Output:</strong> Systematic scheduling process
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                 className="py-[50px] md:py-[100px] "
                animate={{ x: window.innerWidth > 768 ? 1200 : 200 }}
                whileInView={{ x: 0, transition: { duration: 0.5 } }}
              >
                <div className="container-medium">
                  <div className="process_slide">
                    <div
                      id="w-node-_29563453-b395-1462-f766-fa49611370ef-53302248"
                      className="process_slide-image-wrapper"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/67416bf9ad9706da53302213/674e8d4d7db69f17aac23a7f_5-steps-04.svg"
                        loading="lazy"
                        alt=""
                        className="process-image"
                      />
                    </div>
                    <div
                      id="w-node-_29563453-b395-1462-f766-fa49611370f1-53302248"
                      className="process_slide-content"
                    >
                      <div className="margin-bottom margin-small">
                        <div className="process_number-large">04</div>
                      </div>
                      <div className="margin-bottom margin-small">
                        <h3>Post-Production</h3>
                      </div>
                      <div className="margin-bottom margin-small">
                        <p>
                          We take all the raw content and our team turns it into
                          authority-driven content that builds trust for your
                          brand at scale. We create and post 20 videos a month
                          on every platform mainly - Instagram, YouTube, and
                          Linkedin
                        </p>
                      </div>
                      <div className="output_wrapper">
                        <div>
                          <strong>Output:</strong> 5 videos every week
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="py-[50px] md:py-[100px] "
                animate={{ x: window.innerWidth > 768 ? -1200 : -200 }}
                whileInView={{ x: 0, transition: { duration: 0.5 } }}
              >
                <div className="container-medium">
                  <div className="process_slide">
                    <div
                      id="w-node-_711c07ad-e66e-c248-c22d-3e5ad88dcbf6-53302248"
                      className="process_slide-image-wrapper"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/67416bf9ad9706da53302213/674e8d4c1ca3b15ecc6701f4_5-steps-05.svg"
                        loading="lazy"
                        alt=""
                        className="process-image make-small"
                      />
                    </div>
                    <div
                      id="w-node-_711c07ad-e66e-c248-c22d-3e5ad88dcbf8-53302248"
                      className="process_slide-content"
                    >
                      <div className="margin-bottom margin-small">
                        <div className="process_number-large">05</div>
                      </div>
                      <div className="margin-bottom margin-small">
                        <h3>Backend automation</h3>
                      </div>
                      <div className="margin-bottom margin-small">
                        <p>
                          If you sell info-products we set automation and
                          backend systems to predictably convert your followers
                          into paying customers.
                        </p>
                      </div>
                      <div className="output_wrapper">
                        <div>
                          <strong>Output:</strong> Consistent organic leads
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export default Six_section;

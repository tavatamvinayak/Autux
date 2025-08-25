import React from 'react'
import Cards_small from '../Carousel/Cards_small'

function Hero() {
  return (
    <div>
      <section className="section_home-hero">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="spacer-xlarge"></div>

              <div className="home-hero_component">
                <div className="margin-bottom margin-huge">
                  <div className="text-align-center">
                    <div className="max-width-xlarge align-center on-hero">
                      <div className="margin-bottom margin-small">
                        <div className="text-style-tagline">
                          Video-First Personal Branding
                        </div>
                      </div>

                      <div className="margin-bottom margin-small">
                        <div className="home_hero-heading-wrapper">
                          <h1
                            data-w-id="e894891e-0fd3-249a-2ff0-a1e06cf29e4c"
                            style={{
                              color: "white",
                              transform:
                                "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                          >
                            We build organic content engines for
                          </h1>
                        </div>

                        <div className="spacer-tiny hide-tablet"></div>

                        <div className="home_hero-heading-wrapper">
                          <h1
                            data-w-id="27bfb7fe-7e53-3779-6ecc-7a62daf3a059"
                            style={{
                              color: "white",
                              transform:
                                "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                          >
                            <span className="text-span">
                              Entrepreneurs &amp; VCs
                            </span>
                          </h1>
                        </div>
                      </div>

                      <div className="max-width-large align-center">
                        <p className="text-size-medium text-color-grey">
                          We help online entrepreneurs &amp; VCs build
                          distribution with organic videos, which predictably
                          bring them more leads and build trust in their market
                          segment.
                        </p>
                      </div>

                      <div className="margin-top margin-medium">
                        <div className="button-group is-center">
                          <div className="glowing-wrapper glowing-wrapper-active">
                            <div className="glowing-wrapper-animations">
                              <div className="glowing-wrapper-glow"></div>

                              <div className="glowing-wrapper-mask-wrapper">
                                <div className="glowing-wrapper-mask"></div>
                              </div>
                            </div>

                            <div className="glowing-wrapper-borders-masker">
                              <div className="glowing-wrapper-borders"></div>
                            </div>
                            <a
                              href="#typeform"
                              className="glowing-wrapper-button w-inline-block"
                            >
                              <div className="button-text">Book a Call</div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
        <div className=" md:-mt-40"> {/* ent-vc-badges-component */}
          <main className=" w-full ">
            <Cards_small />
          </main>
        </div>
      </section>
    </div>
  )
}

export default Hero

import React from "react";

export default function Why_learn_with() {
    return (
        <div className="py-10">
            <div className="mx-auto  max-w-7xl  p-6 lg:px-8">
                <div className="title-description flex justify-center flex-col items-center">
                    <h3>
                        <span className="inline-block  text-center  font-extrabold text-6xl  bg-gradient-to-r from-[#F7C7FF] to-[#FFD3E5] bg-clip-text text-transparent">
                            Why learn with AutuX?
                        </span>
                    </h3>

                    <p className="text-sm text-gray-500 text-center py-5">
                        At Flux Academy, we pledge to uphold the highest standards in the
                        quality of our courses, 8-week expert <br /> support, and a thriving
                        community of designers. We pride ourselves on providing:
                    </p>
                </div>
                <div className="">
                    <div className="md:gap-x-16 md:grid-rows-[auto]  md:grid-cols-[1fr_1fr] md:auto-cols-[1fr] items-center md:grid flex flex-col justify-center">
                        <img
                            className="why-learn_image w-[400px] h-[400px] md:w-[600px] md:h-[600px]"
                            src="https://cdn.prod.website-files.com/64f7e0efa0923cf471f9417c/65acf3e4d3baf277b87e18b3_framer-why-image.webp"

                        />
                        <ul

                        >
                            <li className="pb-3 " style={{
                                backgroundImage: 'url(https://cdn.prod.website-files.com/64f7e0efa0923cf471f9417c/6508ee1cd0a34085d14622ca_list-item-icon.svg)',
                                backgroundPosition: '0 2px',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '1.25rem',
                                paddingLeft: '2.125rem',
                            }}>
                                <p className="text-white">
                                    Up-To-Date Content
                                </p>
                                <p className="text-medium text-sm text-gray-400">
                                    Regular updates ensure you stay ahead of the curve with the
                                    latest Framer features (even years from now).
                                </p>
                            </li>
                            <li className="pb-3" style={{
                                backgroundImage: 'url(https://cdn.prod.website-files.com/64f7e0efa0923cf471f9417c/6508ee1cd0a34085d14622ca_list-item-icon.svg)',
                                backgroundPosition: '0 2px',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '1.25rem',
                                paddingLeft: '2.125rem',
                            }}>
                                <p className="text-white">
                                    8-Week Private Mentoring
                                </p>
                                <p className="text-medium text-sm text-gray-400">
                                    Our mentors are industry professionals with years of
                                    experience, ready to support your learning journey.
                                </p>
                            </li>
                            <li className="pb-3" style={{
                                backgroundImage: 'url(https://cdn.prod.website-files.com/64f7e0efa0923cf471f9417c/6508ee1cd0a34085d14622ca_list-item-icon.svg)',
                                backgroundPosition: '0 2px',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '1.25rem',
                                paddingLeft: '2.125rem',
                            }}>
                                <p className="text-white">
                                    Practical &amp; Actionable
                                </p>
                                <p className="text-medium text-sm text-gray-400">
                                    Immediately apply what you learn through real-world projects.
                                    Gain skills you can use on the job from day one.
                                    <br />
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

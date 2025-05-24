"use client";
import React, { useState } from "react";
import Head from "next/head";
import ApplicationPopup from "@/components/common/ApplicationPopup";

export default function HRManagerPage() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <Head>
        <title>After Sales Support Officer Role | Our Company</title>
        <meta
          name="description"
          content="Learn about the HR Manager position at our company"
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
       

          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            {/* Role Header */}
            <div className="bg-primary px-6 py-8 text-white">
              <h1 className="text-3xl font-bold">
                After Sales Support Officer
              </h1>
              <p className="mt-2 text-blue-100">
                after-sales service provided by a company to its customers
              </p>
            </div>

            {/* Main Content */}
            <div className="px-6 py-8 md:flex">
              {/* Left Column - Main Description */}
              <div className="md:w-2/3 md:pr-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Role Overview
                </h2>
                <p className="text-gray-600 mb-6">
                  In today’s fast-paced recruitment world, the role of an After
                  Sales Support Officer is crucial in ensuring a seamless
                  experience for both workers and clients. As a vital link
                  between the sales and support teams in source countries, this
                  position focuses on coordinating the smooth arrival of workers
                  and delivering exceptional ongoing support to our valued
                  clients. Your dedication helps build trust and satisfaction,
                  turning recruitment into a long-term partnership rather than
                  just a transaction.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                  Why This Role Matters
                </h2>
                <p className="text-gray-600 mb-6">
                  This role requires excellent communication skills and cultural
                  sensitivity, as you will be liaising with diverse teams and
                  individuals across different countries. You will manage
                  expectations, troubleshoot challenges, and provide timely
                  updates to ensure that everyone involved feels informed and
                  supported throughout the process. Your efforts will directly
                  impact the positive experience of workers settling into new
                  environments and clients receiving the talent they need.
                </p>
                <p className="text-gray-600 mb-6">
                  Moreover, the After Sales Support Officer plays a strategic
                  part in identifying areas for improvement within the
                  post-placement process. By collecting feedback and
                  collaborating with internal teams, you help shape policies and
                  solutions that enhance efficiency and satisfaction. Your
                  insight ensures that the recruitment process doesn’t end at
                  placement but continues with a strong support system that
                  fosters retention and growth.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                  Strategic Partnership Building
                </h2>
                <p className="text-gray-600 mb-6">
                  If you are detail-oriented, proactive, and passionate about
                  client care, this is the perfect opportunity for you to thrive
                  in a dynamic environment. By working closely with
                  cross-functional teams, you’ll play an essential role in
                  resolving issues quickly, enhancing worker integration, and
                  maintaining strong client relationships.
                </p>
                <p className="text-gray-600">
                  This is more than just a job, it&apos;s a leadership
                  opportunity to shape an organization from the inside out.
                  You&apos;ll be surrounded by a supportive leadership team, a
                  collaborative work environment, and the tools you need to
                  drive meaningful change.
                </p>
              </div>

              {/* Right Column - Key Details */}
              <div className="md:w-1/3 mt-8 md:mt-0">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Key Details
                  </h3>

                  <div className="mb-6">
                    <h4 className="font-bold text-primary">
                      Ready to Optimize the Future of Recruitment?
                    </h4>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Results-oriented with B2B sales experience
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Confident, persuasive communicator
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Strategic and creative approach
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        CRM and sales analytics experience
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-700">
                      Key Responsibilities
                    </h4>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-blue-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Find and secure new clients
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-blue-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Promote recruitment solutions
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-blue-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Negotiate contracts
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-blue-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Conduct market research
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-700">Benefits</h4>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-yellow-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Supportive team environment
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-yellow-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Ongoing training
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-yellow-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Performance incentives
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-yellow-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Unlimited growth potential
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-100  rounded-lg p-4 mb-6">
                    <h4 className="font-medium text-gray-700 mb-2">
                      Ready to take the next step in your career?
                    </h4>
                    <p className="text-gray-600  text-sm">
                      Ready to contribute to a company that values your skills
                      and offers growth? Apply now and become a key player in
                      transforming recruitment support services!
                    </p>
                  </div>
                  <button
                    onClick={() => setShowPopup(true)}
                    className="w-full bg-primary-secondary text-primary hover:bg-primary hover:text-white font-bold py-3 px-4 rounded-lg transition duration-300">
                    Apply. Shine. Succeed
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showPopup && <ApplicationPopup onClose={() => setShowPopup(false)} />}
    </>
  );
}

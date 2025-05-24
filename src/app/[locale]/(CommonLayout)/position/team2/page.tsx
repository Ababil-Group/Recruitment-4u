"use client";
import React, { useState } from "react";
import Head from "next/head";
import ApplicationPopup from "@/components/common/ApplicationPopup";

export default function SeniorRecruitmentPage() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <Head>
        <title>Senior Recruitment Consultant | Our Company</title>
        <meta
          name="description"
          content="Learn about the Senior Recruitment Consultant position at our company"
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <button className="mb-8 flex items-center text-blue-600 hover:text-blue-800">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to all roles
          </button>

          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            {/* Role Header */}
            <div className="bg-primary px-6 py-8 text-white">
              <h1 className="text-3xl font-bold">
                Senior Recruitment Consultant
              </h1>
              <p className="mt-2 text-purple-100">
                Strategic role in talent acquisition
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
                  In the dynamic world of talent acquisition, the role of a
                  Senior Recruitment Consultant stands out as a strategic pillar
                  in any high-performing recruitment team. Unlike junior
                  recruiters who focus primarily on sourcing and screening,
                  senior consultants operate on a higher level bringing years of
                  industry expertise, strategic insight, and leadership to the
                  table.
                </p>
                <p className="text-gray-600 mb-6">
                  They manage the full recruitment life cycle with precision,
                  while also mentoring junior staff, handling key client
                  accounts, and driving business development efforts.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                  Dual Role of a Senior Consultant
                </h2>
                <p className="text-gray-600 mb-6">
                  A Senior Recruitment Consultant plays a dual role: that of a
                  top-tier recruiter and a trusted advisor. They are
                  instrumental in shaping hiring strategies, aligning
                  recruitment efforts with market trends, and ensuring the
                  agency consistently delivers high-quality talent.
                </p>
                <p className="text-gray-600 mb-6">
                  Their responsibilities go beyond placements - they nurture
                  long-term relationships with clients, provide guidance to
                  less-experienced team members, and contribute significantly to
                  the agency&apos;s growth. From negotiating contracts to
                  identifying new opportunities for collaboration, their impact
                  is both immediate and far-reaching.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                  What Sets This Role Apart
                </h2>
                <p className="text-gray-600 mb-6">
                  What truly sets a Senior Recruitment Consultant apart is a
                  combination of emotional intelligence, resilience, and deep
                  market knowledge. They possess strong interpersonal and
                  communication skills, enabling them to build trust with both
                  candidates and clients.
                </p>
                <p className="text-gray-600">
                  Their ability to anticipate hiring needs and offer tailored
                  solutions makes them invaluable assets to any organization.
                  Ultimately, a Senior Recruitment Consultant is more than just
                  an experienced recruiter; they are a strategic partner who
                  transforms the hiring process into a competitive advantage.
                </p>
              </div>

              {/* Right Column - Key Details */}
              <div className="md:w-1/3 mt-8 md:mt-0">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Key Details
                  </h3>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-700">
                      Responsibilities
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
                        Manage full recruitment life cycle
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
                        Mentor junior team members
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
                        Handle key client accounts
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
                        Drive business development
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-700">Requirements</h4>
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
                        Years of recruitment experience
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
                        Strategic mindset
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
                        Exceptional communication skills
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
                        Deep market knowledge
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-700">
                      Key Attributes
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
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                        Emotional intelligence
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-blue-500  mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                        Resilience
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
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                        Leadership ability
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-blue-500  mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                        Business development skills
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-100  rounded-lg p-4 mb-6">
                    <h4 className="font-medium text-gray-700 mb-2">
                      Ready to take your recruitment career to the next level?
                    </h4>
                    <p className="text-gray-600  text-sm">
                      We&apos;re looking for experienced, passionate, and
                      strategic-minded individuals to join our team as Senior
                      Recruitment Consultants. If you thrive on mentoring
                      others, managing key accounts, and making an impact this
                      role is for you.
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

"use client";
import React, { useState } from "react";
import Head from "next/head";
import ApplicationPopup from "@/components/common/ApplicationPopup";

export default function OfficeManagerPage() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <Head>
        <title>Branch Manager / Office Manager | Our Company</title>
        <meta
          name="description"
          content="Learn about the Branch Manager position at our company"
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            {/* Role Header */}
            <div className="bg-primary px-6 py-8 text-white">
              <h1 className="text-3xl font-bold">
                Branch Manager / Office Manager
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
                  Are you ready to lead with purpose and passion? We’re looking
                  for a dynamic and experienced{" "}
                  <strong>Branch Manager / Office Manager</strong>
                  to join our team and oversee the daily operations of one of
                  our branch locations. This is a key leadership role that
                  requires a strategic thinker with a hands-on approach and a
                  strong drive to deliver results. As the head of the branch,
                  you’ll be responsible for managing sales targets, overseeing
                  recruitment efforts, and ensuring the administrative side of
                  the office runs like clockwork. You’ll be at the center of it
                  all motivating your team, building client relationships, and
                  driving performance. We’re seeking someone who thrives in a
                  fast-paced environment, possesses excellent communication and
                  organizational skills, and has a proven track record in a
                  management role ideally within recruitment, staffing, or
                  sales. In return, we offer a competitive salary,
                  performance-based bonuses, and a supportive culture that
                  values your contributions and encourages professional growth.
                  If you&apos;re someone who wants to lead, grow, and make a
                  meaningful impact, we want to hear from you.
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
                      Ready to take the next step in your career?
                    </h4>
                    <p className="text-gray-600  text-sm">
                      Apply now and let’s build success together.
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

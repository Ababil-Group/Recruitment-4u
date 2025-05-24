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
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            {/* Role Header */}
            <div className="bg-primary px-6 py-8 text-white">
              <h1 className="text-3xl font-bold">
                Recruitment Administrator / Office Administrator
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
                  Are you organized, detail-oriented, and passionate about
                  helping others find the right opportunities? We’re looking for
                  a Recruitment Administrator / Office Administrator to join our
                  fast-paced, client-focused team.
                </p>
                <p className="text-gray-600 mb-6">
                  In this role, you&apos;ll be the backbone of our recruitment
                  operations managing crucial documentation, submitting work
                  permit applications, and ensuring smooth aftersales
                  communication with our valued clients. You won’t just be
                  handling paperwork; you’ll be contributing directly to
                  life-changing job placements and supporting the seamless
                  experience we promise both employers and candidates.
                </p>
                <p className="text-gray-600 mb-6">
                  From day one, you’ll play a vital role in maintaining
                  compliance, ensuring timely submissions, and keeping every
                  file in perfect order. You&apos;ll liaise with clients,
                  agencies, and government bodies making your mark as the go-to
                  person who ensures no detail is overlooked. Your efficiency
                  and reliability will directly influence the speed and success
                  of our placements.
                </p>
                <p className="text-gray-600 mb-6">
                  We’re not just looking for someone who can follow a checklist.
                  We want someone who thinks two steps ahead, spots potential
                  delays before they happen, and brings a solutions-focused
                  mindset to every challenge. If you’re the kind of person who
                  gets satisfaction from crossing off to-do lists and thrives in
                  a structured environment, you’ll love this role.
                </p>

                <p className="text-gray-600 mb-6">
                  Beyond administrative tasks, your contribution will have real
                  human impact ensuring candidates get placed smoothly,
                  employers remain informed and satisfied, and processes run
                  like clockwork. You’ll be a critical part of a mission-driven
                  team that values communication, excellence, and
                  accountability.
                </p>
                <p className="text-gray-600">
                  If you&apos;re ready to take ownership of a meaningful role,
                  grow in a supportive team, and make a real impact in the
                  recruitment industry this is your chance.
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
                      Apply now and let’s build success stories together!
                    </h4>
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

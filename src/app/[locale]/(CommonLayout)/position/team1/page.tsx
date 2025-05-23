"use client";
import React from "react";
import Head from "next/head";

export default function SalesManagerPage() {
  return (
    <>
      <Head>
        <title>Sales Manager Role | Our Company</title>
        <meta
          name="description"
          content="Learn about the Sales Manager position at our company"
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <button
            // onClick={() => setIsExpanded(false)}
            className="mb-8 flex items-center text-blue-600 hover:text-blue-800">
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
              <h1 className="text-3xl font-bold">Sales Manager</h1>
              <p className="mt-2 text-blue-100">
                Leadership role with strategic impact
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
                  In today&apos;s fast-paced business landscape, sales is more
                  than just closing deals; it&apos;s about driving
                  transformation, empowering people, and building a sustainable
                  path for growth. This is where the role of a Sales Manager
                  becomes not just important, but essential.
                </p>
                <p className="text-gray-600 mb-6">
                  As a Sales Manager, you won&apos;t just be managing a team,
                  you&apos;ll be leading it with strategy, vision, and a
                  results-driven mindset. This role blends leadership with
                  hands-on involvement, giving you the opportunity to oversee a
                  high-performing sales team while also directly managing key
                  accounts and major deals.
                </p>
                <p className="text-gray-600 mb-6">
                  You&apos;ll work hand-in-hand with recruitment leadership to
                  align the sales approach with broader organizational goals,
                  ensuring that every effort contributes meaningfully to the
                  company&apos;s success.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                  What Sets This Role Apart
                </h2>
                <p className="text-gray-600 mb-6">
                  What sets this role apart is its unique blend of strategic
                  planning and people leadership. Sales Managers are at the
                  forefront of revenue generation, responsible for developing
                  and executing innovative strategies, mentoring team members,
                  and staying ahead of industry trends.
                </p>
                <p className="text-gray-600 mb-6">
                  Your insight into market movements and competitor activity
                  will play a key role in shaping the company&apos;s approach.
                  Ideal candidates will bring proven experience in sales or
                  business development, strong communication and negotiation
                  skills, and a sharp, analytical mindset. Leadership
                  experience, especially in the recruitment or service industry,
                  will be a major plus.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                  Rewards & Benefits
                </h2>
                <p className="text-gray-600 mb-6">
                  Beyond the responsibilities, the Sales Manager role offers
                  substantial rewards. It&apos;s a career-defining opportunity
                  with a clear path to executive growth, performance-based
                  bonuses, and the chance to influence core business decisions.
                </p>
                <p className="text-gray-600">
                  You&apos;ll be part of a vibrant, collaborative team
                  environment where your ideas are valued and your impact is
                  visible. If you&apos;re ready to lead with purpose, drive
                  change, and take your career to the next level, this could be
                  the perfect fit.
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
                        Lead and manage sales team
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
                        Directly manage key accounts
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
                        Develop sales strategies
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
                        Collaborate with leadership
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
                        Proven sales experience
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
                        Leadership skills
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
                        Strong communication
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
                        Analytical mindset
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
                        Career growth path
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
                        Performance bonuses
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
                        Influence business decisions
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
                        Collaborative environment
                      </li>
                    </ul>
                  </div>

                  <button className="w-full bg-primary-secondary text-primary hover:bg-primary hover:text-white font-bold py-3 px-4 rounded-lg transition duration-300">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

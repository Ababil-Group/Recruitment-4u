"use client";
import React from "react";
import Head from "next/head";

export default function SalesRepresentativePage() {
  return (
    <>
      <Head>
        <title>Sales Representative | Our Company</title>
        <meta
          name="description"
          content="Learn about the Sales Representative position at our company"
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
              <h1 className="text-3xl font-bold">Sales Representative</h1>
              <p className="mt-2 text-blue-100">
                High-impact role driving business growth
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
                  Are you a go-getter with a passion for people, a hunger for
                  success, and the confidence to turn a &quot;maybe&quot; into a
                  &quot;yes&quot;? Then you might be the Sales Representative
                  we&apos;re looking for! At our recruitment agency, we
                  don&apos;t just fill positions, we build bridges between
                  exceptional talent and growing companies. And now, we&apos;re
                  ready to grow, too, with your help.
                </p>
                <p className="text-gray-600 mb-6">
                  In this high-impact role, you&apos;ll be at the forefront of
                  our expansion efforts. Your core responsibilities will include
                  finding and securing new clients, promoting our full range of
                  recruitment and HR solutions, and negotiating contracts that
                  deliver value for all parties. You&apos;ll focus on lead
                  generation, cold and warm outreach, market research, and
                  conversion strategies that elevate our brand and drive
                  sustainable growth.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                  Strategic Partnership Building
                </h2>
                <p className="text-gray-600 mb-6">
                  But this is more than just sales, it&apos;s about strategy,
                  innovation, and building long-term partnerships. You&apos;ll
                  collaborate closely with our internal teams to ensure that
                  clients receive not just candidates, but solutions that
                  transform their workforce. Whether it&apos;s a startup looking
                  for its first hire or an enterprise scaling fast, you&apos;ll
                  be the one opening doors and creating opportunities.
                </p>
                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                  {" "}
                  We’re looking for someone who is:
                </h2>
                <ul className=" list-disc ml-6 space-y-2">
                  <li className="flex items-start">
                    <p className="text-gray-600">
                      Results-oriented with a proven track record in B2B sales
                    </p>
                  </li>
                  <li className="flex items-start">
                    <p className="text-gray-600">
                      Confident, persuasive, and an excellent communicator
                    </p>
                  </li>
                  <li className="flex items-start">
                    <p className="text-gray-600">
                      Strategic in approach and creative in execution
                    </p>
                  </li>
                  <li className="flex items-start">
                    <p className="text-gray-600">
                      Comfortable using CRM tools and sales analytics to
                      optimize performance
                    </p>
                  </li>
                  <li className="flex items-start">
                    <p className="text-gray-600">
                      Motivated by targets, KPIs, and the thrill of achieving
                      goals
                    </p>
                  </li>
                </ul>
                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                  Why Join Us?
                </h2>
                <p className="text-gray-600 mb-6">
                  You&apos;ll be part of a supportive, fast-paced, and
                  collaborative team that values your voice and ideas. We offer
                  ongoing training, performance incentives, and the chance to
                  shape your own success story. If you&apos;re looking for a
                  career where your contributions matter and your growth
                  potential is unlimited this is it.
                </p>
                <p className="text-gray-600">
                  Ready to sell a service you truly believe in? Ready to join a
                  team that celebrates your wins?
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
                      We&apos;re Looking For
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

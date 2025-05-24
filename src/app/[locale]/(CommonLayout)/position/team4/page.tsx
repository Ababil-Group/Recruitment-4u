"use client";
import React, { useState } from "react";
import Head from "next/head";
import ApplicationPopup from "@/components/common/ApplicationPopup";

export default function OperationsManagerPage() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <Head>
        <title>Operations Manager Role | Our Company</title>
        <meta
          name="description"
          content="Learn about the Sales Representative position at our company"
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            {/* Role Header */}
            <div className="bg-primary px-6 py-8 text-white">
              <h1 className="text-3xl font-bold">
                Recruitment Operations Manager
              </h1>
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
                  In the fast-paced world of recruitment, success doesn’t just
                  come from finding great talent, it comes from having the right
                  systems in place to support the entire hiring journey. That’s
                  why we’re looking for a{" "}
                  <strong>Recruitment Operations Manager</strong> who’s
                  passionate about process excellence, data-driven decisions,
                  and operational impact.
                </p>
                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                  Why This Role Matters
                </h2>
                <p className="text-gray-600 mb-6">
                  As our Recruitment Operations Manager, you&apos;ll be the
                  engine behind our talent acquisition function. You&apos;ll
                  lead the charge in managing internal hiring tools,
                  streamlining processes, and ensuring full compliance with
                  local and international hiring regulations. In other words
                  you’ll be the glue that holds it all together and the
                  strategist that takes us further.
                </p>
                <p className="text-gray-600 mb-6">
                  This isn’t just an admin role. It’s a{" "}
                  <strong>mission-critical position</strong> that directly
                  influences the quality, speed, and effectiveness of our
                  recruitment process.
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
                  What You’ll Do
                </h2>
                <ul className=" list-disc ml-6 space-y-2">
                  <li className="flex items-start">
                    <p className="text-gray-600">
                      Own and optimize all recruitment systems, including ATS,
                      HRIS integrations, and reporting dashboards.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <p className="text-gray-600">
                      Design, document, and improve workflows for sourcing,
                      screening, interviewing, and onboarding.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <p className="text-gray-600">
                      Ensure our recruitment practices remain compliant with
                      legal standards and ethical hiring policies.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <p className="text-gray-600">
                      Analyze hiring metrics and provide actionable insights for
                      smarter decisions.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <p className="text-gray-600">
                      Implement new tools and technologies to elevate candidate
                      and recruiter experience.
                    </p>
                  </li>
                </ul>
                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                  What You Bring
                </h2>
                <ul className=" list-disc ml-6 space-y-2">
                  <li className="flex items-start">
                    <p className="text-gray-600">
                      Proven experience in recruitment operations, talent
                      acquisition, or HR project management.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <p className="text-gray-600">
                      A strong grasp of compliance practices, process design,
                      and recruitment metrics.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <p className="text-gray-600">
                      Tech-savviness and familiarity with modern recruitment
                      tools like Greenhouse, Lever, Workday, or BambooHR.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <p className="text-gray-600">
                      A proactive mindset, attention to detail, and the ability
                      to think both critically and strategically.
                    </p>
                  </li>
                </ul>
                <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                  Why Join Us?
                </h2>
                <p className="text-gray-600 mb-6">
                  At Recruitment 4U, we believe that people are the heart of
                  every great business and so is the system that brings them in.
                  You’ll be joining a vibrant, forward-thinking team where your
                  ideas are valued, your growth is supported, and your work
                  makes a visible impact.
                </p>
                <p className="text-gray-600">
                  This is your chance to shape the future of how we hire not
                  just for today, but for what comes next.
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

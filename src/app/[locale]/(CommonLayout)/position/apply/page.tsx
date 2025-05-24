"use client";
import React, { useState } from "react";
import Head from "next/head";

export default function JobApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    citizenship: "",
    residence: "",
    email: "",
    phone: "",
    position: "",
    workplace: "",
    salary: "",
    cv: null,
    remarks: "",
    privacyAgreement: false,
    dataRetention: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox" && "checked" in e.target) {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else if (type === "file" && "files" in e.target) {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).files?.[0] ?? null,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <>
      <Head>
        <title>Job Application | Our Company</title>
        <meta name="description" content="Apply for a job with our company" />
      </Head>

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Apply for a Job
            </h1>
            <p className="text-lg text-gray-600">
              We&apos;ll connect you with the right employer
            </p>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            <form onSubmit={handleSubmit} className="p-6 sm:p-8">
              <div className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Personal Information
                  </h2>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        Name and surname*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="citizenship"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        Citizenship*
                      </label>
                      <input
                        type="text"
                        id="citizenship"
                        name="citizenship"
                        required
                        value={formData.citizenship}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="residence"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        Place of residence/stay*
                      </label>
                      <input
                        type="text"
                        id="residence"
                        name="residence"
                        required
                        value={formData.residence}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        Email address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        Phone number*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Job Preferences */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Job Preferences
                  </h2>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="position"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        Desired job position*
                      </label>
                      <select
                        id="position"
                        name="position"
                        required
                        value={formData.position}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 text-primary rounded-md focus:ring-blue-500 focus:border-blue-500">
                        <option className="text-primary" value="">Select a position</option>
                        <option className="text-primary" value="Sales Manager">Sales Manager</option>
                        <option className="text-primary" value="Senior Recruitment Consultant">
                          Senior Recruitment Consultant
                        </option>
                        <option className="text-primary" value="Sales Representative">
                          Sales Representative
                        </option>
                        <option className="text-primary" value="Recruitment Operations Manager">
                          Recruitment Operations Manager
                        </option>
                        <option className="text-primary" value="Branch Manager / Office Manager">
                          Branch Manager / Office Manager
                        </option>
                        <option className="text-primary" value="Director / Managing Director">
                          Director / Managing Director
                        </option>
                        <option className="text-primary" value="Recruitment Administrator / Office Administrator">
                          Recruitment Administrator / Office Administrator
                        </option>
                        <option className="text-primary" value="Marketing Manager">
                          Marketing Manager
                        </option>
                        <option className="text-primary" value="HR Manager">HR Manager</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="workplace"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        Desired place of work
                      </label>
                      <input
                        type="text"
                        id="workplace"
                        name="workplace"
                        value={formData.workplace}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="salary"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        Expected salary (40 hours of work per week)
                      </label>
                      <input
                        type="text"
                        id="salary"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cv"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        Please attach your CV*
                      </label>
                      <input
                        type="file"
                        id="cv"
                        name="cv"
                        required
                        onChange={handleChange}
                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        accept=".pdf,.doc,.docx"
                      />
                    </div>
                  </div>
                </div>

                {/* Remarks */}
                <div>
                  <label
                    htmlFor="remarks"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Remarks
                  </label>
                  <textarea
                    id="remarks"
                    name="remarks"
                    rows={4}
                    value={formData.remarks}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Checkboxes */}
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="privacyAgreement"
                        name="privacyAgreement"
                        type="checkbox"
                        required
                        checked={formData.privacyAgreement}
                        onChange={handleChange}
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="privacyAgreement"
                        className="font-medium text-gray-700">
                        I confirm that I have read, understood and agreed to the
                        privacy and data processing terms and conditions located
                        at the bottom of the page.*
                      </label>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="dataRetention"
                        name="dataRetention"
                        type="checkbox"
                        checked={formData.dataRetention}
                        onChange={handleChange}
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="dataRetention"
                        className="font-medium text-gray-700">
                        I authorize Recruitment 4U to retain my personal data
                        for a period of 60 months for the purpose of notifying
                        me about future employment opportunities, as well as to
                        assess my satisfaction with current working conditions
                        and understand my expectations for future roles.
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary bg-primary-secondary hover:bg-primary hover:text-white duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Submit Application
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

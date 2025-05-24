"use client";

import React from "react";

interface Props {
  onClose: () => void;
}
export default function ApplicationPopup({ onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Ready to impress?
        </h2>

        <div className="space-y-4 text-gray-600">
          <p>
            Email your CV to{" "}
            <a
              className="font-semibold"
              href="mailto:career@Recruitment4u.co"
            >
              career@Recruitment4u.co
            </a>{" "}
            with your desired position in the subject line.
          </p>
          <p>A cover letter helps us see what makes you shine!</p>
          <p className="text-sm text-gray-500">
            By applying, you consent to us storing your details for up to 24
            months, in line with EU data protection laws.
          </p>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 cursor-pointer py-2 bg-primary-secondary text-primary  rounded-md hover:bg-primary hover:text-white duration-300">
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { motion } from "framer-motion";
import RequiredLabel from "../../components/RequiredLabel";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const countries = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Netherlands",
  "Singapore",
  "UAE",
  "Japan",
  "China",
  "Brazil",
  "South Africa",
];

const JobApply = () => {
  const [phone, setPhone] = useState("");
  const [showFullView, setShowFullView] = useState(false);

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white w-full max-w-5xl rounded-2xl shadow-xl p-10"
      >
        <h2 className="text-xl font-semibold text-[#292c44] mb-6">
          Personal Information
        </h2>

        {/* Name */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* First Name */}
          <div className="flex flex-col">
            <RequiredLabel text="First Name" />
            <input
              type="text"
              className="input"
              placeholder="First Name"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <RequiredLabel text="Last Name" />

            <input
              type="text"
              className="input"
              placeholder="Last Name"
            />
          </div>
        </div>

        {/* Address */}
        <div className="mb-8">
          {/* Left-side title */}

          <div className="flex items-center gap-1 mb-4">
            <h3 className="text-lg font-semibold text-[#292c44]">
              Address
            </h3>
            <span className="text-red-500">*</span>
          </div>

          <div className="space-y-4">
            {/* Street Address */}
            <div className="flex flex-col">
              <input
                type="text"
                className="input"
                placeholder="Street Address"
              />
            </div>

            {/* City & State */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <input
                  type="text"
                  className="input"
                  placeholder="City"
                />
              </div>

              <div className="flex flex-col">
                <input
                  type="text"
                  className="input"
                  placeholder="Province / State"
                />
              </div>
            </div>

            {/* Zip & Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <input
                  type="text"
                  className="input"
                  placeholder="Postal / Zip Code"
                />
              </div>

              <div className="flex flex-col">
                <select className="input">
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country}>{country}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>


        {/* Phone */}
        <div className="mb-6">
          <div className="flex items-center gap-1 mb-4">
            <h3 className="text-lg font-semibold text-[#292c44]">
              Phone Number
            </h3>
            <span className="text-red-500">*</span>
          </div>

          <PhoneInput
            country={"in"}
            value={phone}
            onChange={setPhone}
            inputStyle={{
              width: "100%",
              height: "46px",
              borderRadius: "10px",
              border: "1px solid #d1d5db",
            }}
          />
        </div>

        {/* Email */}
        <div className="flex items-center gap-1 mb-4">
          <h3 className="text-lg font-semibold text-[#292c44]">
            Email
          </h3>
          <span className="text-red-500">*</span>
        </div>

        <input
          type="email"
          className="input mb-10"
          placeholder="company@gmail.com"
        />

        {/* Resume Upload */}
        <h2 className="text-xl font-semibold text-[#292c44] mb-6">
          Documents
        </h2>

        {/* Resume */}
        <div className="mb-8">
          <div className="flex items-center gap-1 mb-3">
            <h3 className="text-sm font-medium text-gray-800">
              Resume (PDF) – Max 2MB
            </h3>
            <span className="text-red-500">*</span>
          </div>

          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-[#292c44] transition">
            <p className="text-sm font-medium text-gray-700">
              Browse resume
            </p>
            <p className="text-xs text-gray-500 mt-1">
              or, Just drop it here
            </p>

            <input
              type="file"
              accept="application/pdf"
              className="hidden"
              id="resumeUpload"
            />
            <label htmlFor="resumeUpload" className="block w-full h-full cursor-pointer" />
          </div>
        </div>

        {/* Cover Letter */}
        <div className="mb-10">
          <div className="flex items-center gap-1 mb-2">
            <label className="text-sm font-medium text-gray-800">
              Cover Letter
            </label>
            <span className="text-red-500">*</span>
          </div>

          <textarea
            rows={7}
            placeholder="Write your cover letter here..."
            className="w-full border border-gray-300 rounded-xl p-4 outline-none 
               focus:border-[#292c44] resize-none"
          />
        </div>
        <h3 className="text-xl font-semibold text-[#292c44] mb-6">
          Other Information
        </h3>

        {/* Date of Birth */}
        <div className="mb-6">
          <div className="flex items-center gap-1 mb-2">
            <label className="text-sm font-medium text-gray-800">
              Date of Birth
            </label>
            <span className="text-red-500">*</span>
          </div>

          <input
            type="date"
            className="input"
          />
        </div>

        {/* Gender & Race / Ethnicity */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-800 mb-2">
            Gender and Race/Ethnicity
          </p>
          
          <p className="text-sm text-gray-600 mb-3">
            We are required by law to collect certain race & ethnicity information.
            The categories are:
          </p>

          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>
              Hispanic or Latino/Latinx – A person of Cuban, Mexican, Puerto Rican,
              South or Central American, or other Spanish culture or origin regardless
              of race.
            </li>
            <li>
              White (Not Hispanic or Latino/Latinx) – A person having origins in any
              of the original peoples of Europe, the Middle East, or North Africa.
            </li>
          </ul>
        </div>

        {/* Gender Select */}
        <div className="mb-10">
          <div className="flex items-center gap-1 mb-2">
            <label className="text-sm font-medium text-gray-800">
              What gender are you?
            </label>
            <span className="text-red-500">*</span>
          </div>

          <select className="input">
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Non-binary</option>
            <option>Prefer not to say</option>
          </select>
        </div>


        {/* ================= SUBMIT ================= */}
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 bg-[#292c44] text-white rounded-lg font-medium"
          >
            Submit Application
          </motion.button>
        </div>
      </motion.div>

      {/* ================= INPUT STYLES ================= */}
      <style>
        {`
          .input {
            width: 100%;
            height: 46px;
            border-radius: 10px;
            border: 1px solid #d1d5db;
            padding: 0 14px;
            outline: none;
          }
          .input:focus {
            border-color: #292c44;
          }
        `}
      </style>
    </section>
  );
};

export default JobApply;

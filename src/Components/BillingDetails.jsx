import { useState } from "react";

const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "India",
  "Japan",
  "South Africa",
  "Brazil",
  "China",
  "Mexico",
  "Italy",
  "Spain",
  "Russia",
  "Netherlands",
  "Sweden",
  "Norway",
  "Denmark",
  "Switzerland",
];

const BillingDetails = ({ differentAddress = false }) => {
  const [selectedCountry, setSelectedCountry] = useState("");

  return (
    <div className="flex w-full flex-col gap-2">
      <input
        type="text"
        placeholder={!differentAddress ? "Your Name" : "Recipient Name"}
        className="border border-gray-300 p-4 outline-0"
      />
      <input
        type="email"
        placeholder="Email Address"
        className="border border-gray-300 p-4 outline-0"
      />
      <input
        type="number"
        placeholder="Phone Number"
        className="[&::-moz-appearance:textfield] appearance-none border border-gray-300 p-4 outline-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
      <input
        type="text"
        placeholder="Company Name"
        className="border border-gray-300 p-4 outline-0"
      />
      <select
        className="w-full border border-gray-300 bg-white p-4 outline-0"
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option value="" disabled className="text-gray-400">
          Select a country
        </option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="State"
        className="border border-gray-300 p-4 outline-0"
      />
      <input
        type="text"
        placeholder="City"
        className="border border-gray-300 p-4 outline-0"
      />
      <textarea
        placeholder={
          !differentAddress
            ? "Enter your address here..."
            : "Enter recipient address here..."
        }
        className="h-[200px] resize-none border border-gray-300 p-4 outline-0"
      />
    </div>
  );
};

export default BillingDetails;

"use client";
import React, { useState } from "react";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "General Inquiry",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setResponseMessage("Your message has been sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          topic: "General Inquiry",
          message: "",
        });
      } else {
        setResponseMessage(data.message || "Failed to send message.");
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-orange-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Get in Touch</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We’re here to assist you with any inquiries.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
            />
          </div>

          {/* Topic Selection */}
          <div className="col-span-2">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="topic">
              Select a Topic
            </label>
            <select
              id="topic"
              value={formData.topic}
              onChange={handleChange}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
            >
              <option>General Inquiry</option>
              <option>Support</option>
              <option>Partnership</option>
              <option>Other</option>
            </select>
          </div>

          {/* Message */}
          <div className="col-span-2">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-700 transition-colors duration-300 font-semibold text-lg"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>

          {/* Response Message */}
          {responseMessage && (
            <div className="col-span-2 text-center text-green-600 font-semibold mt-4">
              {responseMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactUsPage;

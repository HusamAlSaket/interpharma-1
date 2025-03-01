import React from "react";

const ContactUsPage = () => {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Title and Description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Get in Touch</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We’re here to assist you with any inquiries.
          </p>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* First Name and Last Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="Your first name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="Your last name"
            />
          </div>

          {/* Email and Phone Number */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              placeholder="Your phone number"
            />
          </div>

          {/* Select a Topic */}
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="topic">
              Select a Topic
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="topic"
            >
              <option>General Inquiry</option>
              <option>Support</option>
              <option>Partnership</option>
              <option>Other</option>
            </select>
          </div>

          {/* How Did You Hear About Us */}
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">How did you hear about us?</label>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input type="radio" id="search" name="source" className="mr-2" />
                <label htmlFor="search">Search Engine</label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="referral" name="source" className="mr-2" />
                <label htmlFor="referral">Referral</label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="socialMedia" name="source" className="mr-2" />
                <label htmlFor="socialMedia">Social Media</label>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows={5}
              placeholder="Your message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center col-span-2">
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUsPage;

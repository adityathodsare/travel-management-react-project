import React from "react";

function Contact() {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="text-center p-10 mt-20">
        <h1 className="text-4xl font-bold text-blue-600">Contact Us</h1>
        <p className="mt-4 text-gray-700">
          Have questions? Reach out to us anytime. We're here to help!
        </p>
        <div className="mt-6">
          <p className="text-lg text-gray-600 mb-4">
            For any queries, you can contact us at:
          </p>
          <p className="text-xl font-semibold text-blue-500 mb-4">
            Email: support@happytravel.com
          </p>
          <p className="text-xl font-semibold text-blue-500 mb-6">
            Customer Care: +1 (800) 123-4567
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

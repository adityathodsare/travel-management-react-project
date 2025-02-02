function About() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <div className="text-center p-10 flex-grow">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">About Us</h1>
        <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
          Welcome to{" "}
          <span className="font-semibold text-blue-400">HappyTravel.com</span>!
          We are a premier travel booking platform that strives to make your
          travel experience unforgettable. Whether you're looking for a flight,
          hotel, or an entire vacation package, we offer competitive prices and
          a variety of options to suit your needs.
        </p>
        <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
          At HappyTravel, we believe in making travel accessible, affordable,
          and convenient for all our customers. With our user-friendly platform,
          you can easily browse and book your next vacation, whether it's a
          weekend getaway or an international adventure.
        </p>
        <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
          Our services include:
        </p>
        <ul className="list-disc list-inside text-gray-300 max-w-3xl mx-auto text-lg mt-4">
          <li>Flight bookings to top destinations around the world</li>
          <li>
            Hotel reservations for any type of stay – from budget to luxury
          </li>
          <li>Vacation packages with special deals and discounts</li>
          <li>24/7 customer support to assist you with your travel needs</li>
        </ul>
        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          We aim to provide a seamless booking experience and help you create
          memories that will last a lifetime. Join thousands of satisfied
          customers who trust HappyTravel for all their travel needs.
        </p>
      </div>

      <footer className="bg-gray-800 text-white py-4 fixed bottom-0 w-full">
        <div className="text-center">
          <p className="text-sm">
            HappyTravel.com &copy; 2025. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default About;

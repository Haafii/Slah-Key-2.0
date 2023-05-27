import React from 'react';
import Header from "./components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex">
      {/* Profile Section */}
      <div className="w-1/2 bg-gray-100 p-8">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        <div className="flex items-center mb-4">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src="images/profile-picture.jpg"
            alt="Profile"
          />
          <div>
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-gray-600">Software Engineer</p>
          </div>
        </div>
        {/* Additional profile details can be added here */}
      </div>

      {/* Form Section */}
      <div className="w-1/2 bg-white p-8">
        <form>
          <div className="mb-4">
            <input
              type="text"
              id="height"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your height"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="lastName"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your weight"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
    
  );
};

export default Home;

import React, { useState } from 'react';
import Header from "./components/Header";

const Home = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHeight = e.target.elements.height.value;
    const newWeight = e.target.elements.weight.value;
    setHeight(newHeight);
    setWeight(newWeight);
  };

  const handleInputChange = () => {
    setShowDetails(false);
  };

  const handleButtonClick = () => {
    setShowDetails(true);
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row">
        {/* Profile Section */}
        <div className="w-full md:w-1/2 bg-stone-300 p-8">
          <h2 className="text-3xl font-bold mb-4">Profile</h2>
          <div className="flex items-center mb-4">
            <img
              className="w-20 h-20 rounded-full mr-4"
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
        <div className="w-full md:w-1/2 bg-gray-300 p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                id="height"
                name="height"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your height"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="weight"
                name="weight"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your weight"
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
              onClick={handleButtonClick}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {showDetails && (
        <div className="flex h-1/2 bg-gray-200 p-4 rounded items-center flex-col ">
          <p className="text-gray-600 text-sm">Height: {height} cm</p>
          <p className="text-gray-600 text-sm">Weight: {weight} kg</p>

          <ul className="mt-4">
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
            {/* Add more list items as needed */}
          </ul>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 mt-4 px-4 rounded-md" >
            Get Started
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;

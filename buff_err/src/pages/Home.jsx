import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import { Link } from "react-router-dom";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const Home = () => {

  const [username, setUsername] = useState("");
  // Retrieve the user ID from local storage
  const userId = localStorage.getItem('userId');

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `bearer ${userId}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://rr-api-00ld.onrender.com/users/me/", requestOptions);
        const result = await response.json();
        setUsername(result.name);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);


  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const isCompleted = true;

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

  function DietListItem({ itemName, isCompleted, onToggle }) {
    return (
      <li>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={onToggle}
          className="mr-2"
        />
        {isCompleted ? (
          <CheckIcon className="mr-2 text-green-500" />
        ) : (
          <ClearIcon className="mr-2 text-red-500" />
        )}
        {itemName}
      </li>
    );
  }



  // function WorkoutListItem({ itemName, isCompleted, onToggle }) {
  //   return (
  //     <li>

  //       {isCompleted ? (
  //         <CheckIcon className="mr-2 text-green-500" />
  //       ) : (
  //         <ClearIcon className="mr-2 text-red-500" />
  //       )}
  //       {itemName}
  //     </li>
  //   );
  // }


  const [completedList, setCompletedList] = useState([]);

  const handleToggle = (index) => {
    const updatedList = [...completedList];
    updatedList[index] = !updatedList[index];
    setCompletedList(updatedList);
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
              <h3 className="text-lg font-semibold">{username}</h3>
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
        <div className="flex bg-gray-200 p-4 rounded items-center flex-col ">
          <p className="text-gray-600 text-sm">Height: {height} cm</p>
          <p className="text-gray-600 text-sm">Weight: {weight} kg</p>
          <div className='flex flex-col md:flex-row justify-evenly w-full'>
            <div>
              <h2 className="text-lg font-bold mb-2">Today's Workout</h2>
              <ul className="mt-4">
                <li>
                  {isCompleted ? (
                    <CheckIcon className="mr-2 text-green-500" />
                  ) : (
                    <ClearIcon className="mr-2  text-red-500" />
                  )}
                  Pushup 10 times
                </li>
                <li>
                  {isCompleted ? (
                    <CheckIcon className="mr-2 text-green-500" />
                  ) : (
                    <ClearIcon className="mr-2  text-red-500" />
                  )}
                  List Item 1
                </li>
                <li>
                  {isCompleted ? (
                    <CheckIcon className="mr-2 text-green-500" />
                  ) : (
                    <ClearIcon className="mr-2  text-red-500" />
                  )}
                  List Item 1
                </li>
                {/* Add more list items as needed */}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold mb-2">Today's Diet</h2>
              <ul className="mt-4">
                <DietListItem
                  itemName="don't drink water today"
                  isCompleted={completedList[0]}
                  onToggle={() => handleToggle(0)}
                />
                <DietListItem
                  itemName="don't sleep today"
                  isCompleted={completedList[1]}
                  onToggle={() => handleToggle(1)}
                />
                <DietListItem
                  itemName="don't eat food today"
                  isCompleted={completedList[2]}
                  onToggle={() => handleToggle(2)}
                />
                {/* Add more ListItems and corresponding array elements as needed */}
              </ul>
            </div>
          </div>

          <Link to={"workout"}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 mt-4 px-4 rounded-md" >
              Get Started
            </button>
          </Link>

        </div>
      )}
    </div>
  );
};

export default Home;

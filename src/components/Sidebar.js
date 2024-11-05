import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/Slices/AuthSlice';

const Sidebar = ({ setCurrentChat }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get the current user from the Redux store
  const user = useSelector((state) => state.auth.user);
 console.log("user" ,user);
  const handleLogout = () => {
    dispatch(logout());
  };

  const handleSubmit = () => {
    navigate('/template');
  };

  return (
    <div className="w-1/4 bg-gray-800 text-white flex flex-col p-4 h-screen overflow-y-auto">
      {/* Header and Chats */}
      <div className="flex-grow">
        <Link to="/chat" className="block p-2 mb-4 text-lg font-medium text-white underline">
          CHATS
        </Link>

        <div className="space-y-2">
          {/* Display the user's name dynamically */}
          <button onClick={() => setCurrentChat(user.email)} className="block w-full p-2 text-left rounded hover:bg-gray-700">
            {user ? user.email : 'Contact 1'}
          </button>
          <button onClick={() => setCurrentChat('chat2')} className="block w-full p-2 text-left rounded hover:bg-gray-700">
            Contact 2
          </button>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="space-y-2 mt-4">
        <button onClick={handleSubmit} className="w-full p-2 bg-blue-500 rounded hover:bg-blue-600">
          Template Creation
        </button>
        <button onClick={handleLogout} className="w-full p-2 bg-red-500 rounded hover:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

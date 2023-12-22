// import {  FaHome, } from "react-icons/fa";
// import { MdTask } from "react-icons/md";
// import { NavLink, Outlet } from "react-router-dom";

// const Dashboard = () => {
//   return (
//     <div className="flex bg-[#F6F6F6]">
//       {/* dashboard side bar */}
//       <div className="w-64 min-h-screen bg-green-200 text-black">
//         <h1 className="p-6">
//           <span className="font-bold">Task Management</span> <br /> Platform
//         </h1>
//         <ul className="menu p-4">
//           <li>
//             <NavLink to="/dashboard/userHome">
//               <FaHome></FaHome>
//               User Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/dashboard/createTask">
//               <MdTask></MdTask>
//               Create Task
//             </NavLink>
//           </li>
//           <div className="divider"></div>
//           <li>
//             <NavLink to="/">
//               <FaHome></FaHome>
//               Home
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//       {/* dashboard content */}
//       <div className="flex-1 p-8">
//         <Outlet></Outlet>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaAlignJustify, FaHome, FaTimes } from "react-icons/fa";
import { MdTask } from "react-icons/md";

import useAuth from "../Hooks/useAuth";
import { FaArrowsToDot } from "react-icons/fa6";

const Dashboard = () => {
  const { user } = useAuth();
  const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 1024);
  const [showToggleBtn, setShowToggleBtn] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    setShowToggleBtn(!showToggleBtn);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
    setShowToggleBtn(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth >= 1024);
      setShowToggleBtn(true);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`flex ${showSidebar ? "" : "lg:pl-64"}`}>

      {showToggleBtn && (
        <button
          className="absolute left-4 z-50 px-2 text-white lg:hidden"
          onClick={toggleSidebar}
        >
          <FaAlignJustify className="text-red-500 text-3xl " />
        </button>
      )}


      {showSidebar && (
        <button
          className="absolute top-4 right-4 z-50 p-2 text-white lg:hidden"
          onClick={closeSidebar}
        >
          <FaTimes className="text-red-500 text-3xl" />
        </button>
      )}

      {showSidebar && (
        <div className="lg:w-64 min-h-screen bg-blue-200 text-black font-bold">
          <ul className="menu p-4">
            {user ? (
              <>
                <div>
                  <div className="flex justify-center items-center">
                    <div className="avatar">
                      <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} alt="User Avatar" />
                      </div>
                    </div>
                  </div>
                  <div className=" text-center text-2xl font-semibold py-2">
                    <li>{user.displayName}</li>
                  </div>
                </div>

                <li>
                  <NavLink to="/dashboard/userHome">
                    <FaHome></FaHome>
                    User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/createTask">
                    <MdTask></MdTask> Create Task
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/todoList">
                  <FaArrowsToDot /> ToDo List
                  </NavLink>
                </li>
              </>
            ) : null}
            <div className="divider"></div>
            <>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
            </>
          </ul>
        </div>
      )}

      {/* Dashboard content */}
      <div className="flex-1 p-8 bg-white">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;



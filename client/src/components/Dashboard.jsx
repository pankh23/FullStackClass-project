

// import { useState, useEffect } from "react";
// import axios from "axios";
// import './Dashboard.css'; // Import the CSS file for the background image and animations

// function Dashboard() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get("http://localhost:4000/users");
//         setUsers(response.data);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div className="dashboard-container fade-in">
//       <div className="bg-white bg-opacity-75 p-10 rounded-lg shadow-lg max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold mb-6 text-center animate-bounce">User Dashboard</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border-collapse border border-gray-400">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2 border border-gray-400">Name</th>
//                 <th className="px-4 py-2 border border-gray-400">Email</th>
//                 <th className="px-4 py-2 border border-gray-400">Phone</th>
//                 <th className="px-4 py-2 border border-gray-400">Age</th>
//                 <th className="px-4 py-2 border border-gray-400">Gender</th>
//                 <th className="px-4 py-2 border border-gray-400">DOB</th>
//                 <th className="px-4 py-2 border border-gray-400">Address</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user, index) => (
//                 <tr key={index} className="bg-gray-100 border-b border-gray-400 hover:bg-gray-200">
//                   <td className="px-4 py-2 border border-gray-400">{user.name}</td>
//                   <td className="px-4 py-2 border border-gray-400">{user.email}</td>
//                   <td className="px-4 py-2 border border-gray-400">{user.phone}</td>
//                   <td className="px-4 py-2 border border-gray-400">{user.age}</td>
//                   <td className="px-4 py-2 border border-gray-400">{user.gender}</td>
//                   <td className="px-4 py-2 border border-gray-400">{user.dob}</td>
//                   <td className="px-4 py-2 border border-gray-400">{user.address}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

import { useState, useEffect } from "react";
import axios from "axios";
import './Dashboard.css'; // Import the CSS file for the background image and animations

function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:4000/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="dashboard-container fade-in">
      <div className="dashboard-content">
        <h2 className="text-3xl font-bold mb-6 text-center animate-bounce">User Dashboard</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-collapse border-black border-2">
            <thead>
              <tr>
                <th className="px-4 py-2 border-black border-2">Name</th>
                <th className="px-4 py-2 border-black border-2">Email</th>
                <th className="px-4 py-2 border-black border-2">Phone</th>
                <th className="px-4 py-2 border-black border-2">Age</th>
                <th className="px-4 py-2 border-black border-2">Gender</th>
                <th className="px-4 py-2 border-black border-2">DOB</th>
                <th className="px-4 py-2 border-black border-2">Address</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="bg-gray-100 border-b border-black hover:bg-gray-200">
                  <td className="px-4 py-2 border-black border-2">{user.name}</td>
                  <td className="px-4 py-2 border-black border-2">{user.email}</td>
                  <td className="px-4 py-2 border-black border-2">{user.phone}</td>
                  <td className="px-4 py-2 border-black border-2">{user.age}</td>
                  <td className="px-4 py-2 border-black border-2">{user.gender}</td>
                  <td className="px-4 py-2 border-black border-2">{user.dob}</td>
                  <td className="px-4 py-2 border-black border-2">{user.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

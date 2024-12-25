

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import './Registration.css'; // Import the CSS file

// function Registration() {
//   const [userData, setUserData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     gender: "",
//     age: "",
//     dob: "",
//     address: "",
//     password: "",
//     confirmPassword: ""
//   });

//   const [verificationCode, setVerificationCode] = useState("");
//   const [emailSent, setEmailSent] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   const sendVerificationEmail = async () => {
//     if (userData.password !== userData.confirmPassword) {
//       setErrorMessage("Passwords do not match.");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:4000/send-email", {
//         email: userData.email,
//       });
//       setEmailSent(true);
//       setErrorMessage("");
//     } catch (error) {
//       console.error("Error sending email:", error);
//       setErrorMessage("Failed to send verification email. Please try again.");
//     }
//   };

//   const verifyCode = async () => {
//     try {
//       const response = await axios.post("http://localhost:4000/verify-code", {
//         ...userData,
//         code: verificationCode,
//       });

//       if (response.status === 200) {
//         navigate("/dashboard");
//       }
//     } catch (error) {
//       console.error("Error verifying code:", error);
//       setErrorMessage("Invalid verification code. Please try again.");
//       setVerificationCode("");
//     }
//   };

//   return (
//     <div className="registration-container">
//       <div className="registration-content">
//         <div className="registration-form">
//           <h2 className="text-center">Register here</h2>
//           <div className="form-row">
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter Name"
//               value={userData.name}
//               onChange={handleInputChange}
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter Email"
//               value={userData.email}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-row">
//             <input
//               type="text"
//               name="phone"
//               placeholder="Enter Phone"
//               value={userData.phone}
//               onChange={handleInputChange}
//             />
//             <input
//               type="text"
//               name="age"
//               placeholder="Enter Age"
//               value={userData.age}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-row">
//             <input
//               type="date"
//               name="dob"
//               placeholder="Enter DOB"
//               value={userData.dob}
//               onChange={handleInputChange}
//             />
//             <input
//               type="text"
//               name="address"
//               placeholder="Enter Address"
//               value={userData.address}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-row">
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter Password"
//               value={userData.password}
//               onChange={handleInputChange}
//             />
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               value={userData.confirmPassword}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="form-row">
//             <label>
//               Gender:
//               <input
//                 type="radio"
//                 name="gender"
//                 value="Male"
//                 checked={userData.gender === "Male"}
//                 onChange={handleInputChange}
//               />
//               Male
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="Female"
//                 checked={userData.gender === "Female"}
//                 onChange={handleInputChange}
//               />
//               Female
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="Prefer not to say"
//                 checked={userData.gender === "Prefer not to say"}
//                 onChange={handleInputChange}
//               />
//               Prefer not to say
//             </label>
//           </div>
//           {emailSent ? (
//             <div className="form-row">
//               <input
//                 type="text"
//                 placeholder="Enter Verification Code"
//                 value={verificationCode}
//                 onChange={(e) => setVerificationCode(e.target.value)}
//               />
//               <button onClick={verifyCode}>Verify Code</button>
//             </div>
//           ) : (
//             <button onClick={sendVerificationEmail}>Send Verification Email</button>
//           )}
//           {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Registration;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Registration.css'; // Import the CSS file

function Registration() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    age: "",
    dob: "",
    address: "",
    password: "",
    confirmPassword: ""
  });
  const [verificationCode, setVerificationCode] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const sendVerificationEmail = async () => {
    if (userData.password !== userData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      await axios.post("http://localhost:4000/send-email", {
        email: userData.email,
      });
      setEmailSent(true);
      setErrorMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage("Failed to send verification email. Please try again.");
    }
  };

  const verifyCode = async () => {
    try {
      const response = await axios.post("http://localhost:4000/verify-code", {
        ...userData,
        code: verificationCode,
      });

      if (response.status === 200) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error verifying code:", error);
      setErrorMessage("Invalid verification code. Please try again.");
      setVerificationCode("");
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-content">
        <div className="registration-form">
          <h2 className="text-center">Register here</h2>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={userData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={userData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              name="phone"
              placeholder="Enter Phone"
              value={userData.phone}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="age"
              placeholder="Enter Age"
              value={userData.age}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-row">
            <input
              type="date"
              name="dob"
              placeholder="Enter DOB"
              value={userData.dob}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Enter Address"
              value={userData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-row">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={userData.password}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={userData.confirmPassword}
              onChange={handleInputChange}
            />
          </div>

          Gender:
          <div className="form-row radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={userData.gender === "Male"}
                onChange={handleInputChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={userData.gender === "Female"}
                onChange={handleInputChange}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Prefer not to say"
                checked={userData.gender === "Prefer not to say"}
                onChange={handleInputChange}
              />
              Prefer not to say
            </label>
          </div>
          {emailSent ? (
            <div className="form-row">
              <input
                type="text"
                placeholder="Enter Verification Code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
              <button onClick={verifyCode}>Verify Code</button>
            </div>
          ) : (
            <button onClick={sendVerificationEmail}>Send Verification Email</button>
          )}
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default Registration;

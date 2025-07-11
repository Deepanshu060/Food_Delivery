// import React, { useState } from 'react';
// import './LoginPopup.css';
// import { assets } from '../../assets/assets';

// const LoginPopup = ({ setShowLogin }) => {
//   const [currState, setCurrState] = useState('Sign Up');
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const handleInputChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (currState === 'Sign Up' && formData.name.trim() === '') {
//       alert('Please enter your name.');
//       return;
//     }
//     if (!formData.email.trim() || !formData.password.trim()) {
//       alert('Please fill in all required fields.');
//       return;
//     }

//     if (currState === 'Sign Up') {
//       alert('Account created successfully!');
//       setCurrState('Login'); 
//       setFormData({ name: '', email: '', password: '' });
//     } else {
//       alert('Logged in successfully!');
//       setShowLogin(false); // ✅ Close popup
//     }
//   };

//   return (
//     <div className='login-popup'>
//       <div className="login-popup-container">
//         <div className="login-popup-title">
//           <h2>{currState}</h2>
//           <img
//             onClick={() => setShowLogin(false)}
//             src={assets.cross_icon}
//             alt="Close"
//           />
//         </div>

//         <form onSubmit={handleSubmit}>
//           <div className="login-popup-inputs">
//             {currState === 'Sign Up' && (
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//               />
//             )}
//             <input
//               type="email"
//               name="email"
//               placeholder="Your email"
//               value={formData.email}
//               onChange={handleInputChange}
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleInputChange}
//             />
//           </div>

//           <button type="submit">
//             {currState === 'Login' ? 'Login' : 'Create account'}
//           </button>
//         </form>

//         <div className="login-popup-condition">
//           <input type="checkbox" id="terms" />
//           <label htmlFor="terms">
//             By continuing, I agree to the terms of use & privacy policy.
//           </label>
//         </div>

//         {currState === 'Login' ? (
//           <p>
//             Create a new account?{' '}
//             <span onClick={() => setCurrState('Sign Up')}>Click here</span>
//           </p>
//         ) : (
//           <p>
//             Already have an account?{' '}
//             <span onClick={() => setCurrState('Login')}>Login here</span>
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoginPopup;
// src/components/LoginPopup/LoginPopup.jsx
import React, { useState, useContext } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('Sign Up');
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const { setUserInitial } = useContext(StoreContext);

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currState === 'Sign Up' && !formData.name.trim()) {
      alert('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !formData.password.trim()) {
      alert('Please fill in all required fields.');
      return;
    }

    if (currState === 'Sign Up') {
      alert('Account created successfully!');
      setCurrState('Login');
      setFormData({ name: '', email: '', password: '' });
    } else {
      alert('Logged in successfully!');
      const initial = formData.name
        ? formData.name.trim()[0].toUpperCase()
        : formData.email.trim()[0].toUpperCase();
      setUserInitial(initial);
      setShowLogin(false);
    }
  };

  return (
    <div className='login-popup'>
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="login-popup-inputs">
            {currState === 'Sign Up' && (
              <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleInputChange} />
            )}
            <input type="email" name="email" placeholder="Your email" value={formData.email} onChange={handleInputChange} />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
          </div>

          <button type="submit">{currState === 'Login' ? 'Login' : 'Create account'}</button>
        </form>

        <div className="login-popup-condition">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            By continuing, I agree to the terms of use & privacy policy.
          </label>
        </div>

        <p>
          {currState === 'Login'
            ? <>Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click here</span></>
            : <>Already have an account? <span onClick={() => setCurrState('Login')}>Login here</span></>}
        </p>
      </div>
    </div>
  );
};

export default LoginPopup;

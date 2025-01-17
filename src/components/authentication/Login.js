// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [error, setError] = useState('');
//   const [password, setPassword] = useState('');
//   const [usernameError, setUsernameError] = useState(false); // State variable for username error
//   const [passwordError, setPasswordError] = useState(false); // State variable for password error
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   const handleLogin = () => {
//     setUsernameError(false);
//     setPasswordError(false);
//     setError('');
//     // Check if username and password are correct
//     if (username.trim() === '') {
//       setUsernameError(true);
//       return;
//     }
//     if (password.trim() === '') {
//       setPasswordError(true);
//       return;
//     }

//     if (username === 'admin' && password === 'root') {
//       // If correct, grant access and redirect to blog page
//       localStorage.setItem('user', 'admin');
//       localStorage.setItem('login', true);
//       navigate('/'); // Redirect to the blog page
//     } else{

//     // Retrieve users from local storage and parse JSON string
//     const users = JSON.parse(localStorage.getItem('users'));
//     if (!users || !Array.isArray(users)) {
//       setError('Login failed, please contact admin');
//       return;
//     }
//     const foundUser = users.find(user => user.username === username);
//     if(foundUser){
//       if(foundUser.enabled){
    
//           if (username === 'TA' && password === 'mpass') {
//             // If correct, grant access and redirect to blog page
//             localStorage.setItem('TA', 'moderator');
//             localStorage.setItem('user', 'TA');
//             localStorage.setItem('login', true);
//             navigate('/'); // Redirect to the blog page
//           } else if (username === 'kevin' && password === 'spass') {
//             // If correct, grant access and redirect to blog page
//             localStorage.setItem('user', 'kevin');
//             localStorage.setItem('login', true);
//             navigate('/'); // Redirect to the blog page
//           } else {
//             // If incorrect, display error message
//             setError('Incorrect username or password');
//           }
//         }
//           else {
//             // User is disabled, display error message
//             setError('Your account has been disabled. Please contact the administrator.');
//           }
//       } else {
//         // User not found, display error message
//         setError('User not found. Please check your username.');
//       }
//     }
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
//       <Typography variant="h5" gutterBottom>Login</Typography> {/* Login heading */}
//   {error && (
//     <Card style={{ marginBottom: '16px' }}>
//       <CardContent>{error}</CardContent>
//     </Card>
//   )}
//   <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%', marginTop: '16px' }}>
//     <TextField
//       style={{ marginBottom: '8px', width: '100%' }}
//       label="Username"
//       variant="outlined"
//       value={username}
//       required
//       onChange={(e) => setUsername(e.target.value)}
//       error={usernameError} // Show error if username is empty
//       helperText={usernameError ? 'Username is required' : ''}
//     />
//     <TextField
//       style={{ marginBottom: '8px', width: '100%' }}
//       label="Password"
//       type="password"
//       variant="outlined"
//       value={password}
//       required
//       onChange={(e) => setPassword(e.target.value)}
//       error={passwordError} // Show error if password is empty
//       helperText={passwordError ? 'Password is required' : ''}
//     />
//     <Button
//       style={{ marginTop: '16px', width: '100%' }}
//       variant="contained"
//       color="primary"
//       onClick={handleLogin}
//     >
//       Login
//     </Button>
//   </form>
// </div>
//   );
// }

// export default Login;
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import photo from '../mainpage.png';
import photo1 from '../Education-Top-10-UK-Blogs.jpg';

function Login() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State variable for password visibility
  const navigate = useNavigate();

  const handleLogin = () => {
    setUsernameError(false);
    setPasswordError(false);
    setError('');

    if (username.trim() === '') {
      setUsernameError(true);
      return;
    }
    if (password.trim() === '') {
      setPasswordError(true);
      return;
    }

    if (username === 'admin' && password === 'root') {
      localStorage.setItem('user', 'admin');
      localStorage.setItem('login', true);
      navigate('/');
    } else {
      const users = JSON.parse(localStorage.getItem('users'));
      if (!users || !Array.isArray(users)) {
        setError('Login failed, please contact admin');
        return;
      }
      const foundUser = users.find((user) => user.username === username);
      if (foundUser) {
        if (foundUser.enabled) {
          if (username === 'TA' && password === 'change') {
            localStorage.setItem('TA', 'moderator');
            localStorage.setItem('user', 'TA');
            localStorage.setItem('login', true);
            navigate('/');
          } else if (username === 'kevin' && password === '1234') {
            localStorage.setItem('user', 'kevin');
            localStorage.setItem('login', true);
            navigate('/');
          } else {
            setError('Incorrect username or password');
          }
        } else {
          setError(
            'Your account has been disabled. Please contact the administrator.'
          );
        }
      } else {
        setError('User not found. Please check your username.');
      }
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div
      style={{
        position: 'relative', // Make the parent container relative
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f0f0',
        backgroundImage: `url(${photo1})`, // Set background image
        backgroundSize: 'cover', // Cover the entire container
        backgroundRepeat: 'no-repeat', // Do not repeat the image
      }}
    >
      {/* Overlay div for the background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(173, 216, 230, 0.5)', // Light blue color with transparency
          backdropFilter: 'saturate(180%) blur(20px)', // Additional blur effect
        }}
      ></div>
      {/* Content of the login page */}
      <div
        style={{
          zIndex: 1, // Ensure the content appears above the overlay
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative', // Make this container relative to allow stacking
        }}
      >
        <Typography variant='h5' gutterBottom>
          Login
        </Typography>
        {error && (
          <Card style={{ marginBottom: '16px' }}>
            <CardContent>{error}</CardContent>
          </Card>
        )}
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            marginTop: '16px',
          }}
        >
          <TextField
            style={{ marginBottom: '8px', width: '100%' }}
            label='Username'
            variant='outlined'
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
            error={usernameError}
            helperText={usernameError ? 'Username is required' : ''}
          />
          <TextField
            style={{ marginBottom: '8px', width: '100%' }}
            label='Password'
            type={showPassword ? 'text' : 'password'}
            variant='outlined'
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
            helperText={passwordError ? 'Password is required' : ''}
            InputProps={{
              endAdornment: (
                <IconButton onClick={handleTogglePasswordVisibility} edge='end'>
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              ),
            }}
          />
          <Button
            style={{ marginTop: '16px', width: '50%' }}
            variant='contained'
            color='primary'
            onClick={handleLogin}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;

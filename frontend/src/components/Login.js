import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../static/login.scss'
import Navigation from './Navigation'
import api from '../API/api'

function Login() {

    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
          const response = await api.post('/auth/signup', { username, email, password });
          console.log('Signup successful', response.data);
          // Handle successful signup (e.g., show a success message, switch to login)
        } catch (error) {
          console.error('Signup error', error.response.data);
          // Handle signup error (e.g., show error message)
        }
      };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          console.log('Attempting login with username:', username);
          const response = await api.post('/auth/login', { username, password });
          console.log('Login successful', response.data);
          localStorage.setItem('token', response.data.token);
          navigate('/main')
          // Handle successful login (e.g., redirect to dashboard)
        } catch (error) {
          console.error('Login error', error.response.data);
          // Handle login error (e.g., show error message)
        }
      };

  return (
    <div className='login-container'>
       <Navigation />
        <div className='login-body'>
            <div className="main">  	
            <input type="checkbox" id="chk" aria-hidden="true" />
            <div className="signup">
                <form onSubmit={handleSignup}>
                    <label htmlFor="chk" aria-hidden="true">Sign up</label>
                    <input type="text" name="txt" placeholder="User name" required="" 
                        value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="email" name="email" placeholder="Email" required="" 
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" name="pswd" placeholder="Password" required="" 
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button>Sign up</button>
                </form>
            </div>
            <div className="login">
                <form onSubmit={handleLogin}>
                    <label htmlFor="chk" aria-hidden="true">Login</label>
                    <input type="text" name="txt" placeholder="User name" required="" 
                        value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" name="pswd" placeholder="Password" required="" 
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button>Login</button>
                </form>
            </div>
            </div>
        </div>
    
    
    </div>
    
    
  )
}

export default Login

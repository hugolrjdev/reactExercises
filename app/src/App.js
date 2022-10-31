import {useRef} from 'react'
import './App.css';

function App() {

  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmit = (evt) => {
    evt.preventDefault();
    const dataLogin = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    console.log(dataLogin)
  }

  return (
    <form action="" onSubmit={onSubmit}>
      <label htmlFor="user">User</label>
      <input 
        type="email"
        name="email"
        id="user"
        ref={emailRef} 
        />
      
      <label htmlFor="password">Password</label>
        <input 
          type="password"
          name="password"
          id="password"
          ref={passwordRef} 
          />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;

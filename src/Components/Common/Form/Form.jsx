import { useState } from 'react';
import './Form.css';
import CardForm from './CardForm';

const Form = () => {
 
  const [user, setUser] = useState({
    name: '',
    email: '',
  });
  const [error, setError] = useState(false);
  const [mostrar, setMostrar] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.name.trim().length >= 5 && emailRegex.test(user.email)) {
      setMostrar(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div >
      {mostrar ? (
        <CardForm  user={user}/>
      ) : (
        <form  onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            onChange={handleOnchange}
          />
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleOnchange}
          />
          <button type="submit" className='btn-form'>Submit</button>
          {error && (
            <>
            <p className="err">**Please verify your information again**</p>

            
            </>
          )}
        </form>
      )}
    </div>
  );
};

export default Form;

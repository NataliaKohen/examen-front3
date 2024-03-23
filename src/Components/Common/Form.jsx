import { useState } from 'react';
import '../../index.css';

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [user, setUser] = useState({
    name: '',
    lastName: '',
    email: '',
  });
  const [error, setError] = useState(false);
  const [mostrar, setMostrar] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    setMostrar(true);
    if (!user.name.length >= 5 ||!user.lastName || !emailRegex.test(user.email)) {
      setError(true);
    } else {
      setError(false);
    }
  };
  
  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      {mostrar ? (
        <h3>
          **Gracias {user.name} {user.lastName}, te contactaremos cuando antes
          vía mail**
        </h3>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleOnchange}
          />
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            onChange={handleOnchange}
          />
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleOnchange}
          />
          <button type="submit">Submit</button>

          {error && <p>**Por favor verifique su información nuevamente**</p>}
        </form>
      )}
    </div>
  );
};

export default Form;
// Nombre completo (con longitud mayor a 5)
// Email (con formato correcto de email)
// En caso de haber un error mostrar el siguiente mensaje de error: **Por favor verifique su información nuevamente**
// Una vez "enviado"( no se envía a ningún servidor pero podemos mostrar por consola los datos submiteados) el formulario deberán mostrar un mensaje de éxito que contenga el siguiente formato: **Gracias _[nombre del usuario]_, te contactaremos cuando antes vía mail**
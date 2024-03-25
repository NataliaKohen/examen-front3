import Form from '../Components/Common/Form';
import {useDentistState} from '../Components/utils/global.context'
import '../index.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const { state } = useDentistState();

  return (
    <main className={state.theme}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </main>
  );
};

export default Contact;



const CardForm = ({user}) => {
  const capitalizedName = user.name.charAt(0).toUpperCase() + user.name.slice(1);
  return (
    <h3>
    **Gracias {capitalizedName} , te contactaremos cuando antes vía mail**
  </h3>
  )
}

export default CardForm

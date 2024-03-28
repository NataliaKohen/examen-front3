

const CardForm = ({user}) => {
  const capitalizedName = user.name.charAt(0).toUpperCase() + user.name.slice(1);
  return (
    <h3 className="message">
    ** Thank you {capitalizedName} , we will contact you as soon as possible via email **
  </h3>
  )
}

export default CardForm

import "../../index.css"
import { useDentistState } from "../utils/global.context"

const Footer = () => {
  const{state,dispatch}=useDentistState()
  return (
    <footer className={state.theme ==='light'? 'light':'dark'}>
        <p>Powered by</p>
        <img src="/images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer

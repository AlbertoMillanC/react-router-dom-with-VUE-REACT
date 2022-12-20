import { Link } from "react-router-dom"


const footer = () => {
  return (
    <footer className="footer">
        <div>Copyright 2021</div>
        <Link to ="#">Términos de uso</Link>
        <Link to ="#">Política de privacidad</Link>
        <img src="/logo.png" alt="Logo" />
    </footer>
  
  )
}

export default footer

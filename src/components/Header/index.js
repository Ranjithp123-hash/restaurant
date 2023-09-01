import {Link} from "react-router-dom"
import { FiSearch } from 'react-icons/fi'
import './index.css'

const Header = () => {

    return (
        <ul className="list-container">
        <Link to="/"><li className="list-item">HOME</li></Link>
        <Link to ="/about"><li className="list-item">ABOUT US</li></Link>
        <Link to ="/offer"><li className="list-item">OFFER</li></Link>
        <Link to ="/menu"><li className="list-item">MENU</li></Link>
        <Link to ="/team"><li className="list-item">TEAM</li></Link>
        <Link to ="/blog"><li className="list-item">BLOG</li></Link>
        <Link to ="/gallery"><li className="list-item">GALLERY</li></Link>
        <Link to ="/contact"><li className="list-item">CONTACT</li></Link>
        <li className="list-item"><FiSearch/></li>
        </ul>
    )
}
export default Header
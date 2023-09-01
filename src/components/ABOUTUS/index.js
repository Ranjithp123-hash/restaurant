import Header from "../Header"

import './index.css'
import sign from '../images/about_sign.png'

const ABOUTUS = () => {

    return(
    <div className="about-container">
         <h1 className="head">OUR Story</h1>
        <Header/>
        <div className="container">
       
        <div>        
        <p className="description">Menc non elit libero. Quisque massa porta ut placerat lentesque non mdiam. Nam convallis porta rhoncus. Maecenas varius eget trupis
            suscipit porta sapien tinc Mauris tempor libero fringilla or ci vivrra faucibue fringilla orci vivrra faucibus. Integer ullamcorper erat 
            in tellus efficitur, quis porta sapien tincidunt. Nunc mattis lectus sed semper semper.
        </p>
        <p className="description">Quisque sit amet turpis et elementum facilisis. Quisque sed placerat libero. Pellentesque nec tellus sollicitudin lingula non, tristique nibh Donec vitae turpis sagittis, cursus nunc ac, aliquet nunc. Donec viverra vel massa at posuere. Aliquam et fringilla qugue consequat sem, 
        eu ornares viverra veleso massa at posuere. Aliquam et fringilla augue.
        </p>
        </div>
        <img className="sign" src={sign} alt="signature"/>
        </div>
        
    </div>
    )
}

export default ABOUTUS
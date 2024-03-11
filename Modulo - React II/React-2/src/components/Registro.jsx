import React, {useState} from 'react'
import Formulario from './Formulario'
import SocialButton from './SocialButton'
import Alert from './Alert'
import  './Style.css'


export default function Registro() {
        const [alertMessage, setAlertMessage] = useState('');
        const [alertType, setAlertType] = useState('');
      
        const handleAlert = (message, type) => {
          setAlertMessage(message);
          setAlertType(type);
        };

    
  
    return (
    <div className='Carta'>
      <div className='Redes'>
      <SocialButton icon="fab fa-facebook"/>
      <SocialButton icon="fab fa-twitter" />
      <SocialButton icon="fab fa-google" />
      </div>
      <Formulario handleRegister={handleAlert} />
      {alertMessage && <Alert message={alertMessage} type={alertType} />}
      
    </div>
  )
};


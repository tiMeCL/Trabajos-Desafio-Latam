import React, {useState} from 'react'
import Formulario from './Formulario'
import SocialButton from './SocialButton'
import Alert from './Alert'



export default function Registro() {
        const [alertMessage, setAlertMessage] = useState('');
        const [alertType, setAlertType] = useState('');
      
        const handleAlert = (message, type) => {
          setAlertMessage(message);
          setAlertType(type);
        };

    
  
    return (
    <div>
      <SocialButton icon="fab fa-facebook"/>
      <SocialButton icon="fab fa-twitter" />
      <SocialButton icon="fab fa-google" />
      <Formulario handleRegister={handleAlert} />
      {alertMessage && <Alert message={alertMessage} type={alertType} />}
      
    </div>
  )
};


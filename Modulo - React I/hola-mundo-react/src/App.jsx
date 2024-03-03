import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Footer from './components/Footer.jsx';
import Header from './components/header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './components/MyCard.jsx';



function App() {
  

  return (
    <>
    
      
      
      <Header title = "Adopta un Perrito!"/>
       
       <div className='espacioCarta'>
      <MyCard
      image = "https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg"
      title = "Milo"
      descripcion = "Conoce a Luna, tu nueva mejor amiga: Luna es una cachorra dulce y juguetona que ha pasado sus primeros meses de vida buscando un hogar donde pueda compartir su amor y alegría. Esta pequeña peluda tiene ojos brillantes y una cola que no para de moverse, esperando ansiosamente la oportunidad de convertirse en tu compañera de aventuras."
      color="danger"
      text=" Luna"
      />

      <MyCard
      image = "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg"
      title = "Milo"
      descripcion = "Max: tu fiel compañero de por vida: Max es un cachorro inteligente y leal que está listo para formar parte de tu familia. Este pequeño amigo de cuatro patas tiene una personalidad juguetona y un corazón lleno de afecto, esperando encontrar un hogar donde pueda crecer y prosperar. ¿Te gustaría ser el héroe que rescata a Max y le brinda un hogar para siempre?"
      color="primary"
      text=" Max"
      />

     
      <MyCard
      image = "https://media.istockphoto.com/id/1783732377/es/foto/gal%C3%A9s-corgi-cardigan-lindo-cachorro-de-perro-esponjoso-divertidos-animales-felices-sobre-fondo.jpg?s=1024x1024&w=is&k=20&c=_9dDy9en2voVx5WGRkDH7Ls7gMcdPxRHUH7XCDwmjb4="
      title = "Milo"
      descripcion = "Lola es una cachorra valiente que ha superado muchas adversidades en su corta vida. Abandonada en las calles, esta pequeña luchadora ha encontrado refugio en nuestro centro de adopción, donde ha demostrado ser una compañera cariñosa y leal. ¿Estás listo para darle a Lola la oportunidad de ser amada y cuidada en un hogar lleno de amor?"
      color="success"
      text=" Lola"
      />

<MyCard
      image = "https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_1280.jpg"
      title = "Milo"
      descripcion = "La historia de Cooper te espera: Cooper es un cachorro lleno de energía y entusiasmo que está buscando a su compañero humano perfecto. Este pequeño travieso tiene una personalidad encantadora y un espíritu aventurero, listo para embarcarse en nuevas y emocionantes aventuras a tu lado.¿Te gustaría ser su confidente?
      "
      color="info"
      text=" Cooper"
      />


     </div>
      
      <Footer/>

      
      
    </>
  )
}

export default App

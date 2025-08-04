
import './App.css';
import Testimonio from '../src/componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio 
        nombre="Emma Bostian"
        pais="Suecia"
        cargo="Ingeniera de Software"
        empresa="Spotify"
        testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify"
        imagen="Emma"/>

        <Testimonio 
        nombre="Sarah Chima"
        pais="Nigeria"
        cargo="Ingeniera de Software"
        empresa="ChatDesk"
        testimonio="freeCodeCamp me ayudó a conseguir un trabajo como ingeniera de software en una empresa de tecnología. Me enseñó a programar y me dio la confianza para aplicar a trabajos. Ahora trabajo en una empresa que me permite crecer y aprender todos los días."
        imagen="Sarah"/>
        <Testimonio 
        nombre="Shawn Wang"
        pais="Singapur"       
        cargo="Ingeniero de Software"
        empresa="Amazon"
        testimonio="Siempre he querido ser ingeniero de software, pero nunca supe por dónde empezar. freeCodeCamp me proporcionó una base sólida en programación y me ayudó a conseguir un trabajo en Amazon. Estoy muy agradecido por todo lo que he aprendido y por la comunidad de apoyo que he encontrado aquí."
        imagen="Shawn"/>
         <Testimonio 
        nombre="Shawn Wang"
        pais="Singapur"       
        cargo="Ingeniero de Software"
        empresa="Amazon"
        testimonio="Siempre he querido ser ingeniero de software, pero nunca supe por dónde empezar. freeCodeCamp me proporcionó una base sólida en programación y me ayudó a conseguir un trabajo en Amazon. Estoy muy agradecido por todo lo que he aprendido y por la comunidad de apoyo que he encontrado aquí."
        imagen="Shawn"/>
         <Testimonio 
        nombre="Shawn Wang"
        pais="Singapur"       
        cargo="Ingeniero de Software"
        empresa="Amazon"
        testimonio="Siempre he querido ser ingeniero de software, pero nunca supe por dónde empezar. freeCodeCamp me proporcionó una base sólida en programación y me ayudó a conseguir un trabajo en Amazon. Estoy muy agradecido por todo lo que he aprendido y por la comunidad de apoyo que he encontrado aquí."
        imagen="Shawn"/>
        
     </div>

    </div>
  );
}

export default App;

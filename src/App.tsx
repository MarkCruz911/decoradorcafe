import { useState } from 'react'
import './App.css'
import CafeOscuro from './CafeOscuro';
import CremaDecorator from './CremaDecorador';
import AzucarDecorator from './AzucarDecorador';
import HieloDecorator from './HieloDecorador';
import CafeBlanco from './CafeBlanco';
import CafeBase from './CafeBase';


function App() {
  
  const [cafes,setCafe]=useState("oscuro");
  const [tipocafe,setTipocafe]=useState("oscuro");
  const[cafePreparado,setCafePreparado]=useState("");
  const[costo,setCosto]=useState(10);
  const estiloDiv = {
    background: 'linear-gradient(to right, #ffecd2, #fcb69f)',
    // Puedes agregar más propiedades de estilo según sea necesario
    padding: '20px',
    borderRadius: '10px',
};


  let caf:CafeBase = new CafeBase();
  let [decorado,setDecorado]=useState<any>(caf);


  const prepararCafe=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    setCafe(e.target.value);
    console.log(e.target.value);
  }

  const tipoCafe=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    setTipocafe(e.target.value);
    console.log(e.target.value);
  }


  const nuevoCafe = ()=>{
    window.location.reload();
    let cafe: CafeOscuro = new CafeOscuro();
    
    setDecorado(cafe);
  }


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    let cafe: CafeBase = new CafeBase();
 
    if(tipocafe==="oscuro"){
       cafe = new CafeOscuro();
       console.log("antes de hacer setDecorador",cafe);
       setDecorado(cafe);
       setTipocafe("otro");
       console.log(cafe.preparar);
    }

    if(tipocafe==="blanco"){
       cafe = new CafeBlanco();
       console.log("antes de hacer setDecorador",cafe);
       setDecorado(cafe);
       setTipocafe("otro");
       console.log(cafe.preparar);
    }
    
    if(cafes === "conCrema"){
      cafe = new CremaDecorator(decorado);
      setDecorado(cafe);
    }else if(cafes==="conAzucar"){
      cafe = new AzucarDecorator(decorado);
      setDecorado(cafe);
    }else if(cafes ==="conHielo"){
      cafe = new HieloDecorator(decorado);
      setDecorado(cafe);
    }
    setCafePreparado(cafe.preparar());
    setCosto(cafe.costo());
    console.log(cafe.preparar());
    return cafe.preparar();
  };

  return (
    <>
      <div style={estiloDiv}>
        <h2>Cafe Decorado</h2>
       <p>{costo}$</p>
       <p>{decorado?.preparar()}</p>

        {cafes ==="normal" && (
          <img style={{ width: '300px', height: '250px' }} src="data:image/jpeg;base64,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" alt="" />
        )}
        {cafes ==="conCrema" &&(
          <img src="https://chefeel.com/chefgeneralfiles/2022/05/CAF-880x880.jpg" alt=""style={{ width: '300px', height: '250px' }} /> 
        )}

        {cafes ==="conAzucar" &&(
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4kZXTonNMeXOLU4XXuGschFugZZAPD6vjg&usqp=CAU" alt=""style={{ width: '300px', height: '250px' }} />
        )}

        {cafes ==="conHielo" &&(
          <img src="https://www.cafrancocinas.com/wp-content/uploads/2019/06/infrusionfriacafeabril19.jpg" alt="" style={{ width: '300px', height: '250px' }}/> 
        )}
        

        <form action="" onSubmit={handleSubmit}>
          <p>Elegir con que decorar y Tipo de Cafe</p>
          <select onChange={prepararCafe}>
            <option value="normal"></option>
            <option value="conCrema">Crema +5$</option>
            <option value="conAzucar">Azucar +10$</option>
            <option value="conHielo">Hielo +5$</option>
          </select>
          <select onChange={tipoCafe}>
            <option value=""></option>
            <option value="oscuro">Cafe Oscuro</option>
          </select>
          <button type="submit">DECORAR</button>
        </form>
        <button onClick={nuevoCafe}>Nuevo Cafe</button>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'



function HesapYap(){

 const [firstnumber, setfirstNumber] = useState('');
 const [secondNumber, setsecondNumber] = useState('');
 const [result, setResult] = useState('');


 function toplama(){
  const sayi1 = Number(firstnumber);
  const sayi2 = Number(secondNumber);

  setResult(sayi1 + sayi2);
 }

 function cikarma(){
  const sayi1 = Number(firstnumber);
  const sayi2 = Number(secondNumber);

  setResult(sayi1 - sayi2);
 }

 function carpma(){
  const sayi1 = Number(firstnumber);
  const sayi2 = Number(secondNumber);

  setResult(sayi1 * sayi2);
 }

 function bolme(){
  const sayi1 = Number(firstnumber);
  const sayi2 = Number(secondNumber);
  if(sayi2 !==0){
    setResult(sayi1 / sayi2);
  }else{
    ByteLengthQueuingStrategy('Bir sayı 0 a bölünemez')
  }
 }
 
function first(e){
  setfirstNumber(e.target.value);
}
function second(e){
  setsecondNumber(e.target.value);
}
 
  return (

    <div className='hesapMakinesi'>
      
      <div className='inputs'>
        <input type="text" placeholder='Sayı girin' value={firstnumber} onChange={first} />
        <input type="text" placeholder='Sayı girin' value={secondNumber} onChange={second} />
      </div>
      <div className='islemler'>
      <button className='toplama' onClick={toplama}>+</button>
      <button className='cıkarma' onClick={cikarma}>-</button>
      <button className='bölme' onClick={bolme}>/</button>
      <button className='carpma' onClick={carpma}>*</button>
      </div>

     
      <div className='result'> Sonuç: {result} </div>
    </div>
    )
  
}



// function HesapYap(){

//   const [display, setDisplay] = useState('');
//   let sonuc = 0;

//   function handleButtonClick(value){
//     value = Number(value);
//     setDisplay(display + value);
//     console.log(display)
//   }

//   function result(value){
    
//     if(value == '+'){
//       for (const a of display) {
//         sonuc += Number(a); 
//         console.log(a);
//         console.log(display)
        
//       }
//     }

//     if(value == '-'){
//       sonuc = Number(display - value);
      
//         console.log(sonuc)
//       }

//     }

  


//   return (
//       <div className="hesapMakinesi">
//         <div className="display">{display}</div>
//         <div className="tuslar">
//           <button onClick={() => handleButtonClick('7')}>7</button>
//           <button onClick={() => handleButtonClick('8')}>8</button>
//           <button onClick={() => handleButtonClick('9')}>9</button>
//           <button onClick={() => result('+')}>+</button>
//           <button onClick={() => handleButtonClick('4')}>4</button>
//           <button onClick={() => handleButtonClick('5')}>5</button>
//           <button onClick={() => handleButtonClick('6')}>6</button>
//           <button onClick={() => result('-')}>-</button>
//           <button onClick={() => handleButtonClick('1')}>1</button>
//           <button onClick={() => handleButtonClick('2')}>2</button>
//           <button onClick={() => handleButtonClick('3')}>3</button>
//           <button onClick={() => result('*')}>*</button>
//           <button onClick={() => handleButtonClick('0')}>0</button>
//           <button>=</button>
//           <button>C</button>
//           <button onClick={() => result('/')}>/</button>
//         </div>
//       </div>
//   )
// }

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'></div>
    <HesapYap/>
    </>
  )
}

export default App

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import Card from './Components/Card'
import  './App.css'

function App() {
  return (
    <div className='box'>
      <Card src="https://www.damensch.com/_next/image?url=https%3A%2F%2Fadn.damensch.com%2Fwp-content%2Fuploads%2F2018%2F04%2FCrust-olive-S-Hoodie-9.jpg&w=1080&q=75" title="hoody"/>
      <Card src="https://images.bestsellerclothing.in/data/JJ/26-sep-2022/299444304_g0.jpg?width=488&height=650&mode=fill&fill=blur&format=auto" title="suits" />
      <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq--5cTXaQ1XB4_RRElon0KEsa0Xsq6n0W8g&usqp=CAU" title=" hat"  />
      <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTED5aFLbE-EUfqIroYLH_wQsZpWZI1f7_NEw&usqp=CAU" title="kids formal"  />
    </div>
  );
}

export default App;

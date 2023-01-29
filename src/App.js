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
      <Card src="https://media.gq.com/photos/5ab151dcd668df704470b18f/master/w_1600%2Cc_limit/Not-Normal-High-Fashion-Gets-Serious-About-Regular-Clothes-20-Edit.jpg" title="hoody"/>
      <Card src="https://i.pinimg.com/736x/84/c9/d0/84c9d020084a91120bda3955ebc2efcc.jpg" title="suits" />
      <Card src="https://i.pinimg.com/originals/ab/51/e8/ab51e8f1190e046b42f6ee85d12a6ac1.jpg" title=" hat"  />
      <Card src="https://www.next.us/nxtcms/resource/image/5395876/portrait_ratio4x5/560/700/d58f1cb164e524236fdba7c1e384ba20/DAC926074BE386A633219EE29AEE8543/boys-formal-pants.jpg" title="kids formal"  />
    </div>
  );
}

export default App;
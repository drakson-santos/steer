// import './App.css';
// import LoginComponent from './pages/login';
// import Routes from './routers/router';

// function App() {
//   return (
//     <div id="App">
//       <Routes />
// 		  {/* <LoginComponent /> */}
//     </div>
//   );
// }




// export default App;



import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/usuario">Usuario</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const Sobre = () => {
  return (
    <div>
      <h1>Sobre</h1>
      <Link to="/">retornar a página inicial</Link>
    </div>
  );
}


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Sobre />} path="/sobre" />
      </Routes>
    </BrowserRouter>
  )
}



export default function App() {
  return (
    <AppRoutes />
  );
}
// import { CardList } from "./components/CardList";
// import { Clients } from "./components/Clients";
import { useContext } from "react";
import { createContext } from "react";
import { Login } from "./components/Login";
import { ShowDocument } from "./components/ShowDocument";
import { SuggestionList } from "./components/SuggestionList";
import { SuggestionListExternal } from "./components/SuggestionListExternal";
import { SuggestionListInternal } from "./components/SuggestionListInternal";
import { NavBar } from "./components/NavBar";
import { Table } from "./components/Table";
import { AppRouter } from "./routers/AppRouter";
// import { Counter } from "./components/Counter";

import "./styles/App.css";

function App() {
  const usersOnline = useContext(0);
  return (
    <div className="App">
      {/* <h1>Titulo</h1>
      <button className="btn btn-primary">Secso</button>
      <hr />
       */}
      {/* <Table /> */}
      <AppRouter />

      {/* <ShowDocument /> */}
      {/* <SuggestionList /> */}
      {/* <SuggestionListInternal /> */}
      {/* <NavBar /> */}
      {/* <Login /> */}
      {/* <Clients /> */}
      {/* <Counter />
      <Counter /> */}
      {/* <button className="btn btn-primary">
        <img src="assets/firsts/house.png" alt="house" />
        Texto
      </button> */}
      {/* Esto de abajo por ahora no lo ocupo */}
      {/* <button style={{ background: "" }}>Texto2</button> */}
      {/* <input type="image" src="./assets/firsts/house.png" alt="" /> */}
    </div>
  );
}

export default App;

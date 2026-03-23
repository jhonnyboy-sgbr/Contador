import React from "react";  
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import "./App.css";

// ACTIONS
const INCREMENTAR = "INCREMENTAR";
const DECREMENTAR = "DECREMENTAR";

const incrementar = () => ({ type: INCREMENTAR });
const decrementar = () => ({ type: DECREMENTAR });

// REDUCER
const estadoInicial = { contador: 0 };

function reducer(state = estadoInicial, action) {
  switch (action.type) {
    case INCREMENTAR:
      return { contador: state.contador + 1 };
    case DECREMENTAR:
      return { contador: state.contador - 1 };
    default:
      return state;
  }
}

// STORE
const store = createStore(reducer);

// COMPONENTE
function Contador() {
  const contador = useSelector((state) => state.contador);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1 className="title">🔥 Contador Redux</h1>

      <div className="box">
        <button
          className="button"
          onClick={() => dispatch(decrementar())}
        >
          -
        </button>

        <span className="numero">{contador}</span>

        <button
          className="button"
          onClick={() => dispatch(incrementar())}
        >
          +
        </button>
      </div>
    </div>
  );
}

// APP PRINCIPAL
function App() {
  return (
    <Provider store={store}>
      <Contador />
    </Provider>
  );
}

export default App;
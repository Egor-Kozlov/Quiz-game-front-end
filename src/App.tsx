import Numbers from "./components/Number";
import './App.scss'

function App() {
  return (
    <div className="container">
      <div className="lobby-container">
        <div className="pin-game">
          <h1>Game PIN:</h1>
          <Numbers />
          <button className="start-button">Chuck</button>
        </div>
      </div>
    </div>
  )
}

export default App;

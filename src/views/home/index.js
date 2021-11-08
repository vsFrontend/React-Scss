import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./logo.svg" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/404" className="btn">
          404
        </Link>
      </header>
    </div>
  )
}

export default Home

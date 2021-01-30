import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { MoviesList } from "./movies/MoviesList"
import { MovieDetail } from "./movies/MovieDetail"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/movie/:id">
            <MovieDetail />
          </Route>
          <Route path="/">
            <MoviesList />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

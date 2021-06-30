import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/home/home'

function App () {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
        </Switch>
      </Router>

    </div>
  )
}

export default App

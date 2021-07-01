import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import Home from './pages/home/home'
import Login from './pages/login/login'

function App () {
  return (
    <div >
      <Router>
        <Switch>
        <Route
              exact
              path='/'
              render={props => {
                const token = 11
                return token ? <Redirect to='/admin/info' /> : <Login {...props} />
              }}
            />

          <Route path='/admin'
          render={props => {
            return <Home {...props}></Home>
          }}
          >

          </Route>
          <Route exact path='/login' component={Login}></Route>

        </Switch>
      </Router>

    </div>
  )
}

export default App

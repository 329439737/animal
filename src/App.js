import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import Home from './pages/home/home'
import Login from './pages/login/login'
import { GetSeeion } from './assets/img/unit/com.js'
function App () {
  return (
    <div >
      <Router>
        <Switch>
        <Route
              exact
              path='/'
              render={props => {
                const token = GetSeeion('setinfo')
                return token ? <Redirect to='/admin/info' /> : <Login {...props} />
              }}
            />

         <Route path='/admin'
          render={props => {
            const token = GetSeeion('setinfo')
            return token ? <Home {...props}></Home> : <Redirect to='/'></Redirect>
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

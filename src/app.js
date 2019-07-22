import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HaikusIndex from './components/haikus/HaikusIndex'
import HaikusShow from './components/haikus/HaikusShow'
import HaikuSubmit from './components/haikus/HaikuSubmit'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Nav from './components/common/Nav'
import Footer from './components/common/Footer'
import './style.scss'





const App = () => {
  return (
    <BrowserRouter>
      <main>
        <div>
          <Nav />
          <Switch>

            <Route path="/submit" component={HaikuSubmit} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path='/haikus/:id' component={HaikusShow} />
            <HaikusIndex />

          </Switch>
          <Footer/>
        </div>
      </main>
    </BrowserRouter>

  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

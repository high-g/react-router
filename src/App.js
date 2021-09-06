import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <h1>Hello React Router</h1>
      <ul>
        <li>
          <NavLink activeClassName="active" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="contact">
            Contact
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

const Home = () => {
  return <h2>Home</h2>
}

const About = () => {
  return <h2>About</h2>
}

const Contact = () => {
  return <h2>Contact</h2>
}

const NotFound = () => {
  return <h2>Not found</h2>
}

export default App

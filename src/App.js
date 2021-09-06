import { BrowserRouter, Route, Switch, NavLink, useParams } from 'react-router-dom'
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
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/post/1">
            Post
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/posts">
            Posts
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
        <Route path="/post/:id" component={Post} />
        <Route path="/posts" component={Posts} />
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

const Posts = () => {
  return <h2>Posts</h2>
}

const Post = () => {
  const { id } = useParams()
  return <h2>Post {id}</h2>
}

const NotFound = () => {
  return <h2>Not found</h2>
}

export default App

import { BrowserRouter, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <h1>Hello React Router</h1>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
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

export default App

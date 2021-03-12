import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router, Switch, BrowserRouter } from 'react-router-dom';
import config from "../config";

const Home = () => {
  const [home, setHome] = useState(null);
  const history = useHistory();
  const logout = () => {
    /* eslint-disable */
    const toLogout = confirm("Are you sure to logout ?");
    /* eslint-enable */
    if (toLogout) {
      localStorage.clear();
      history.push("/login");
    }
  };
  useEffect(() => {
    fetch(`${config.baseUrl}/home`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then(({ error, data }) =>
        error ? history.push("/login") : setHome(data)
      );
  }, [history]);
  return (
    // <Router>
    <>
      <BrowserRouter>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/users">Users</Link>
            <Link
              className="nav-link cursor-pointer"
              onClick={() => logout()}
            >
              Logout
            </Link>
          </Nav>
        </Navbar>
        <h3>Home</h3>
      </BrowserRouter>

    </>
  )
}

export default Home;
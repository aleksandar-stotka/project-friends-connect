/* eslint-disable jsx-a11y/heading-has-content */
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Project from "./pages/project/Project";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Sidebar from "./components/sidebar/Sidebar";

import { useAuthContext } from "./hooks/useAuthContext";
import Header from "./components/header/Header";
import About from "./pages/about/About";

import ChatRoom from "./pages/chatRoom/ChatRoom";
import UserProjects from "./pages/personalProjects/UserProjects";
import Home from "./pages/Home/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div>
      
      {authIsReady && (
        <BrowserRouter>
        {user && <Sidebar/>}
          <div>
            <Switch>
              <Route exact path="/">
                <Header />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route path="/dashboard">
                {!user && <Redirect to="/dashboard" />}
                {user && <Dashboard />}
              </Route>
              <Route path="/create">
                {!user && <Redirect to="/login" />}
                {user && <Create />}
              </Route>
              <Route path="/projects/:id">
                {!user && <Redirect to="/login" />}
                {user && <Project />}
              </Route>
              c
              <Route path="/login">
                {user && <Redirect to="/home" />}
                {!user && <Login />}
              </Route>
              <Route path="/signup">
                {user && <Redirect to="/home" />}
                {!user && <Signup />}
              </Route>
              <Route path="/chatroom">
                {!user && <Redirect to="/home" />}
                {user && <ChatRoom />}
              </Route>
              <Route path="/header">
                <Header />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/personal">
                {!user && <Redirect to="/home" />}
                {user && <UserProjects />}
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
  //{user && <OnlineUsers />}
}

export default App;

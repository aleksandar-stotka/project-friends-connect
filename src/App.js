/* eslint-disable jsx-a11y/heading-has-content */
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Project from "./pages/project/Project";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { useAuthContext } from "./hooks/useAuthContext";
import OnlineUsers from "./components/onlineUsers/OnlineUsers";
import Header from "./components/header/Header";
import About from "./pages/about/About";


import { useCollection } from "./hooks/useCollection";

import ChatRoom from "./pages/chatRoom/ChatRoom";
import UserProjects from "./pages/personalProjects/UserProjects";

function App() {
  const { documents } = useCollection("projects");
  setTimeout(() => {}, 5000);

  const { user, authIsReady } = useAuthContext();
  return (
    <div >
       
    
     
      {authIsReady && (
        <BrowserRouter>
           <Navbar /> 
          
          <div className="min-h-screen flex items-center justify-center ">
          
            
         
          
         

            <Switch>
              <Route exact path="/">
                {!user && <Redirect to="/header" />}
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
              <Route path="/login">
                {user && <Redirect to="/" />}
                {!user && <Login />}
              </Route>
              <Route path="/signup">
                {user && <Redirect to="/" />}
                {!user && <Signup />}
              </Route>
              <Route path="/chatroom">
                {!user && <Redirect to="/" />}
                {user && <ChatRoom />}
              </Route>
              <Route path="/header">
                <Header />
              </Route>
              <Route path="/about">
                <About />
              </Route>

              <Route path="/personal">
                {!user && <Redirect to="/" />}
                {user && <UserProjects />}
              </Route>
            </Switch>
          </div>
          {user && <OnlineUsers />}
          {user && <Sidebar/>}
        </BrowserRouter>
      )}
     
    </div>
  );
}

export default App;

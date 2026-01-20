import React from 'react';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Login from './Components/Login/Login.jsx';
import Home from './Components/Home.jsx';
import CreateRegistration from './Components/Login/CreateRegistration.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { UserProvider } from './Components/UserContext.jsx';
import ProtectedRouter from './helpers/ProtectedRouters.jsx';
import MyAccount from './Components/User/MyAccount.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRouter>
                  <Home />
                </ProtectedRouter>
              }
            ></Route>
            <Route path="Login/*" element={<Login />}></Route>
            <Route
              path="CreateRegistration"
              element={<CreateRegistration />}
            ></Route>
            <Route
              path="MyAccount/*"
              element={
                <ProtectedRouter>
                  <MyAccount />
                </ProtectedRouter>
              }
            ></Route>
            <Route
              path="Feed/*"
              element={
                <ProtectedRouter>
                  <MyAccount />
                </ProtectedRouter>
              }
            ></Route>
          </Routes>
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

import QuestionList from "./Components/QuestionList";
import Home from "./Pages/HomePage";
import Header from "./layout/Header";
import About from './Pages/About';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import React from "react";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path = "/Home" element = {<Home />}>  </Route>
          <Route path = "/About" element = {<About />}> </Route>
          <Route path = "/Quizzes/:test" element = {<QuestionList />}> </Route>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;

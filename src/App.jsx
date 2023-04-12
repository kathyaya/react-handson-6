import { Route, Routes } from "react-router-dom";
import ContactUS from "./Components/ContactUS";
import Edit from "./Components/Edit";
import Home from "./Components/Home";
import Navigation from "./Components/Routing/Navigation";
import Students from "./Components/Students";
import StudentContext from "./Components/StudentContextapi";
import { useState } from "react";
import AddStudent from "./Components/AddStudent";

function App() {
  const [Data, setData] = useState([
    {name:"Rushi",age:24,course:"FSE WEB",batch:"EA18"},
    {name:"fase",age:24,course:"FSE Java",batch:"EA10"},
    {name:"Ravi",age:24,course:"FSE Python",batch:"EA18"},
    {name:"Raju",age:30,course:"ITUS",batch:"2014"},
    {name:"shyam",age:29,course:"Mcom",batch:"2016"},
    {name:"Babu",age:50,course:"DopeherTak",batch:"2010"}
  ]);
  return (
    <div >
      <Navigation/>
      <StudentContext.Provider value={{entries: Data, UpdateFunction:setData}}>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Student" element={<Students/>}></Route>
          <Route path="/ContactUS" element={<ContactUS/>}></Route>
          <Route path="/Edit" element={<Edit/>}></Route>
          <Route path="/AddStudent" element={<AddStudent/>}></Route>
        </Routes>
      </StudentContext.Provider>
    </div>
  );
}

export default App;
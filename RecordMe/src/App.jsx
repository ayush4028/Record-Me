import { useState } from "react";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from '@mui/icons-material/Delete';
import Btn from '@mui/material/Button';

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data,{
      name: name,
      email: email
    }])
    setName("")
    setEmail("")
  } 
  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1)
    setData([...arr])
  }

  return (
    <div className="flex flex-col">
      <Header />

      {/* Form Section */}
      <div className="flex justify-center m-5 space-x-3">
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <Button onClick={addData} variant="contained">
          Add
          <AddIcon />
        </Button>
      </div>
        {/* Displaying section */}
        <div className="flex justify-center">
          <div className="flex items-center space-x-52 bg-gray-200 p-3 rounded-md shadow-md w-[37rem]">
            <h4>Name</h4>
            <h4>Email</h4>
            <h4>Remove</h4>
          </div>
        </div>
        {
            data.map((element, index) => {
               return(
                <div className="mx-[29.5rem]">
                <div key={index} className="flex items-center space-x-52 bg-orange-200 p-3 w-[37rem] overflow-auto ">
                  <h4>{element.name}</h4>
                  <h4>{element.email}</h4>
                  <Btn onClick={() => removeItem(index)} variant="contained" color="error">
                      <DeleteIcon />
                  </Btn>
                  
                </div>
              </div>
               )
            })
          }
    </div>
            
  );
}

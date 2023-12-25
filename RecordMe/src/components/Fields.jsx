import React from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const Fields = ({name,email,index}) => {
  return (
    <div className="mx-[29.5rem]">
      <div className="flex items-center space-x-52 bg-orange-200 p-3 w-[37rem] overflow-auto ">
        <h4>{name}</h4>
        <h4>{email}</h4>
        <Button variant="contained" color="error">
            <DeleteIcon />
        </Button>
        
      </div>
    </div>
  );
};

export default Fields;

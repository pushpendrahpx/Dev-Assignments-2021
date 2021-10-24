import React from 'react';
let defaultValues = {
    user:{},
    islogged:false
  };

let MainContext = React.createContext(defaultValues);
export default MainContext;
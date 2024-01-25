import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button,Text } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Postlogin } from "../../Redux/AuthRedux/action";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const error=useSelector((store)=>store.userData.error)
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const [input, setInput] = useState('')
  const [pass,setPass]=useState("");
  const handleInputChange = (e) => setInput(e.target.value)
  const handleSubmit=()=>{   
    dispatch(Postlogin({email:input,password:pass})) 
     check()
 }
 const user=useSelector((store)=>store.userData.user)
 const check=()=>{
  console.log(user.token)
  if(user.token!==undefined){
      
    alert("login Success")
    navigate("/",{replace:true})
 
 }
 else{
    
    if(error===undefined||error!==""){
      alert("entered email or password is wrong")
    }
    }
  }
  return (
    <Box style={{"width":"40%","margin":"auto","margin-top":"5%"}}>
      <h1>LogIn</h1>
      <FormControl>
        <FormLabel style={{"fontWeight":"bold"}}>Email</FormLabel>
        <Input type="email" placeholder="Enter your email" onChange={handleInputChange} />
      </FormControl>
      <FormControl>
        <FormLabel style={{"fontWeight":"bold"}}>Password</FormLabel>
        <Input type="password" placeholder="Enter your password"  onChange={(e)=>setPass(e.target.value)}/>
      </FormControl>
      <Button colorScheme="blue" onClick={handleSubmit}>Login</Button>
      <Link  to="/signup"><Text fontWeight={"bold"} fontSize={"25px"} id="belwtxt" color={"blue"}>Don't have an account? Join The daredevils</Text></Link>
    </Box>
  );
};

export default Login;

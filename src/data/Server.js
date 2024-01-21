import DataStore from "./DataStore";
export const CheckLogin=async(name,password)=>{
    try{
const response=await fetch('http://localhost:8787/login',{
  method:'post',
  body:JSON.stringify({name,password}),
  headers:{
    "Content-Type":"application/json"
  }
})
if(response.status===200){
  console.log("good")
  DataStore.setIsLogin(true);
}
else
console.log("not good")
    }
    catch(error){
console.log(error,"error")
    }
  }
  
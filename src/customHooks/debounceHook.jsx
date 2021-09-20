import React,{useEffect,useState} from 'react'

const useDebounce = (value , timeout , callback) => {

 const [timer, setTimer] = useState(null)

 const cleartimeOut =()=>{
  if(timer){
   clearTimeout(timer)
  }
 }
 useEffect(() => {
  cleartimeOut()
  if (value && callback) {
   const newTimer = setTimeout(callback,timeout);
   setTimer(newTimer)
  }
 }, [value])
}

export default useDebounce

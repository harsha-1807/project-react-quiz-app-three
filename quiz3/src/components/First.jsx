import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ScoreContext, ScoreProvider } from './Context/Score'
import { useState } from 'react'
const First = () => {
  const {score,setScore} = useContext(ScoreContext)
  return (
    <div style={{backgroundColor:"#3B2F7F",display: "flex",flexDirection:"column",alignItems: "center" ,width : "100vw",height:"100vh",justifyContent: "center"}} onLoad={() => {}}>
        <h2 style={{color:"white"}}>Quiz App</h2>
       <Link to={"/2"}><button style={{
            width: "150px",marginTop: "30px",backgroundColor:"green"
        }} onClick={() => {
          setScore(0)
        }}>S T A R T</button></Link> 
    </div>
  )
}

export default First
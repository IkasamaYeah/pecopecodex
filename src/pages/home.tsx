import {Button} from "@mui/material"
import { Link } from "react-router-dom"
import React,{ useEffect } from "react"

export function Home () {
    
  return(<>
    <h1>Pecopecodexxxxxxxx</h1>
    <div>
      <Link to={`/dictionary`}><Button>図鑑</Button></Link>
      <Link to={`/combination`}><Button>配合</Button></Link>
    </div>
  </>)
}
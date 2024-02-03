import {Button} from "@mui/material"
import styled from "@emotion/styled"
import { Link } from "react-router-dom"

export function Home () {
  return(<>
    <h1>Pecodex</h1>
    <div>
      <Link to={`/dictionary`}><Button>図鑑</Button></Link>
      <Link to={`/combination`}><Button>配合</Button></Link>
    </div>
  </>)
}
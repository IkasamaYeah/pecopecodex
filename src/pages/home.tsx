import {Button} from "@mui/material"
import styled from "@emotion/styled"

const TextButton = styled(Button)`
  text-transform: none;
`

export function Home () {
  return(<>
    <h1>Pecodex</h1>
    <TextButton>text</TextButton>
    <Button variant="contained">作業適正</Button>
    <Button variant="outlined">配合</Button>
  </>)
}
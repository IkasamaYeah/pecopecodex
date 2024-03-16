import Logo from "../images/PalIcon/pekodon.png"
import styled from "@emotion/styled"
import { Link } from "react-router-dom"

const HeaderWrapper = styled.div`
  height: 60px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  padding-left: 10vw;
  padding-right: 10vw;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 100;
  opacity: 0.9;
`

const StyledLogo = styled.img`
  height: 50px;
`

const SiteList = styled.ul`
  display: flex;
`

const ListComponent = styled.li`
  margin-left: 1vw;
  margin-right: 1vw;
`

export function Header () {
  return(<>
    <HeaderWrapper>
      <Link to={`/`}><StyledLogo src={Logo} alt="Logo"/></Link>
      <SiteList>
        <ListComponent><Link to={`/dictionary`}>図鑑</Link></ListComponent>
        <ListComponent><Link to={`/combination`}>配合</Link></ListComponent>
        <ListComponent><Link to={`/inheritationtest`}>継承</Link></ListComponent>
      </SiteList>
    </HeaderWrapper>
  </>)
}
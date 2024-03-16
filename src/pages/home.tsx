import styled from "@emotion/styled"
import background from "../images/Background/Palworld_Paldeck_03.png"
import { Link } from "react-router-dom"

const HomeWrapper = styled.div`
  padding-top:60px;
`

const BackgroundImageWrapper = styled.div`
  background-color: black;
`

const BackgroundImage = styled.img`
  display: block;
  width: 100%;
  max-height: 100vh;
  opacity: 0.4;
`

const HeadingWrapper = styled.div`
  position: relative;
`

const StyledH1 = styled.h1`
  position: absolute;
  top: 1vw;
  left: 6vw;
  color: white;
  font-size:6vw ;
  text-shadow: 1px 2px 3px #000000;
`

const StyledH2 = styled.h2`
  position: absolute;
  top: 8vw;
  left: 6vw;
  color: white;
  font-size: 2vw;
  text-shadow: 1px 2px 3px #000000;
`

const DetailWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: absolute;
  top: 15vw;
  color: white;
  text-shadow: 1px 2px 3px #000000;
`

const GridContainer = styled.div`
`

const StyledH3 = styled.h3`
  font-size: 1.5vw;
  padding-bottom: 0.5vw;
`

const StyledP = styled.p`
  font-size: 1vw;
`

export function Home () {
  return(<>
    <HomeWrapper>
      <HeadingWrapper>
        <BackgroundImageWrapper>
          <BackgroundImage src={background}/>
        </BackgroundImageWrapper>
          <StyledH1>Pecopecodex</StyledH1>
          <StyledH2>オープンワールドサバイバル「Palworld」に特化した攻略情報サイト</StyledH2>
          <DetailWrapper>
        <GridContainer>
          <Link to={`/dictionary`}><StyledH3>図鑑</StyledH3></Link>
          <StyledP>作業適正やドロップアイテム、</StyledP>
          <StyledP>属性別に絞り込み出来るページです。</StyledP>
        </GridContainer>
        <GridContainer>
          <Link to={`/combination`}><StyledH3>配合</StyledH3></Link>
          <StyledP>｢親にするパル｣、｢作りたいパル｣を選択することで</StyledP>
          <StyledP>配合表を一覧表示します</StyledP>
        </GridContainer>
        <GridContainer>
          <Link to={`inheritationtest`}><StyledH3>継承</StyledH3></Link>
          <StyledP>現在持っているスキルを目当てのパルに継承する際、</StyledP>
          <StyledP>どのように配合していけばいいのかをリスト表示します</StyledP>
        </GridContainer>
      </DetailWrapper>
      </HeadingWrapper>
    </HomeWrapper>
  </>)
}
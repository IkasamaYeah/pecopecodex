import React from "react";
import styled from "@emotion/styled";
import { PalData } from "../components/paldata"
import { Button } from "@mui/material";
import { useState } from "react";
import Hiokoshi from "../images/WorkIcon/hiokoshi.png"
import Tanemaki from "../images/WorkIcon/tane.png"
import Tesagyou from "../images/WorkIcon/hand.png"
import Bassai from "../images/WorkIcon/bassai.png"
import Seiyaku from "../images/WorkIcon/seiyaku.png"
import Unpan from "../images/WorkIcon/unpan.png"
import Mizuyari from "../images/WorkIcon/mizuyari.png"
import Hatsuden from "../images/WorkIcon/hatuden.png"
import Saisyuu from "../images/WorkIcon/saisyuu.png"
import Saikutsu from "../images/WorkIcon/saikutsu.png"
import Reikyaku from "../images/WorkIcon/reikyaku.png"
import Houboku from "../images/WorkIcon/houboku.png"
import Neutral from "../images/TypeIcon/Neutral.png"
import Fire from "../images/TypeIcon/Fire.png"
import Water from "../images/TypeIcon/Water.png"
import Ice from "../images/TypeIcon/Ice.png"
import Thunder from "../images/TypeIcon/Thunder.png"
import Grass from "../images/TypeIcon/Grass.png"
import Earth from "../images/TypeIcon/Earth.png"
import Dark from "../images/TypeIcon/Dark.png"
import Dragon from "../images/TypeIcon/Dragon.png"

const DictionaryContainer = styled.div`
  margin-top: 1vw;
`
const TableContainer = styled.div `
  display: flex;
  margin-top: 1vw;
  justify-content: center;
`
const FilteringContainer = styled.div`
  margin-top: 1vw;
  display: block;
`

const WorkFilteringContainer = styled.div`
`

const TypeFilterContainer = styled.div`
  img{
    display:inline-block;
    width: 35px;
    height: 35px;
  }
`

const StyledTable = styled.table`
  width: 50%;
  border-collapse: collapse;
`

const TableBody = styled.tbody`
`

const TableRay = styled.tr`
  &:nth-child(odd) {
    background-color: #ffffff;
  }

  &:nth-child(even) {
    background-color: #eefcff;
  }
`

const TableData = styled.td`
  padding: 10px;
  line-height: 30px;
  vertical-align: middle;
  border-width: 1px;
  border-color: #cccccc;
`

export function Dictionary() {
  const [typeFilter, setTypeFilter] = useState("All")
  const [workFilter, setWorkFilter] = useState("All")

  const handleTypeFilterClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    const value = (event.currentTarget as HTMLButtonElement).value;
    setTypeFilter(value);
  }
  
  const handleWorkFilterClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    const value = (event.currentTarget as HTMLButtonElement).value;
    setWorkFilter(value);
  }

  const filteredData = PalData.filter((datum) => {
    const hasTypeMatch = typeFilter === "All" || datum.type.includes(typeFilter);

    const hasWorkMatch =
      workFilter === "All" ||
      (datum.work.length > 0 && datum.work.some((work) => work.kind.includes(workFilter)));

    return hasTypeMatch && hasWorkMatch;
  });

  return (<>
    <DictionaryContainer>
      <h1>パル図鑑</h1>
      <FilteringContainer>
        <WorkFilteringContainer>
          <Button onClick={handleWorkFilterClick} value="All">全</Button>
          <Button onClick={handleWorkFilterClick} value="火起こし"><img src={Hiokoshi} alt="火起こし" /></Button>
          <Button onClick={handleWorkFilterClick} value="種まき"><img src={Tanemaki} alt="種まき" /></Button>
          <Button onClick={handleWorkFilterClick} value="手作業"><img src={Tesagyou} alt="手作業" /></Button>
          <Button onClick={handleWorkFilterClick} value="伐採"><img src={Bassai} alt="伐採" /></Button>
          <Button onClick={handleWorkFilterClick} value="製薬"><img src={Seiyaku} alt="製薬" /></Button>
          <Button onClick={handleWorkFilterClick} value="運搬"><img src={Unpan} alt="運搬" /></Button>
          <Button onClick={handleWorkFilterClick} value="水やり"><img src={Mizuyari} alt="水やり" /></Button>
          <Button onClick={handleWorkFilterClick} value="発電"><img src={Hatsuden} alt="発電" /></Button>
          <Button onClick={handleWorkFilterClick} value="採集"><img src={Saisyuu} alt="発電" /></Button>
          <Button onClick={handleWorkFilterClick} value="採掘"><img src={Saikutsu} alt="採掘" /></Button>
          <Button onClick={handleWorkFilterClick} value="冷却"><img src={Reikyaku} alt="冷却" /></Button>
          <Button onClick={handleWorkFilterClick} value="放牧"><img src={Houboku} alt="放牧" /></Button>
        </WorkFilteringContainer>
        <TypeFilterContainer>
          <Button onClick={handleTypeFilterClick} value="All">全</Button>
          <Button onClick={handleTypeFilterClick} value="無"><img src={Neutral} alt="無" /></Button>
          <Button onClick={handleTypeFilterClick} value="炎"><img src={Fire} alt="炎" /></Button>
          <Button onClick={handleTypeFilterClick} value="水"><img src={Water} alt="水" /></Button>
          <Button onClick={handleTypeFilterClick} value="氷"><img src={Ice} alt="氷" /></Button>
          <Button onClick={handleTypeFilterClick} value="雷"><img src={Thunder} alt="雷" /></Button>
          <Button onClick={handleTypeFilterClick} value="草"><img src={Grass} alt="草" /></Button>
          <Button onClick={handleTypeFilterClick} value="地"><img src={Earth} alt="地" /></Button>
          <Button onClick={handleTypeFilterClick} value="闇"><img src={Dark} alt="闇" /></Button>
          <Button onClick={handleTypeFilterClick} value="竜"><img src={Dragon} alt="竜" /></Button>
        </TypeFilterContainer>
      </FilteringContainer>
      <TableContainer>
        <StyledTable>
          <TableBody>
            {filteredData.map(datum =>
              <TableRay key={datum.id}>
                <TableData>{datum.id}</TableData>
                <TableData>{datum.name}</TableData>
                <TableData>{datum.type.join("/")}</TableData>
                <TableData>{datum.work.map((work,index) => (
                  <div key={index}>{work.kind}
                    {work.level}
                  </div>
                ))}</TableData>
                <TableData>{datum.item.map((item,index) => (
                  <div key={index}>{item}</div>
                ))}
                </TableData>
              </TableRay>
            )}
          </TableBody>
        </StyledTable>
      </TableContainer>
    </DictionaryContainer>
  </>)
}
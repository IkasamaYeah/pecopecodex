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
import Hatsuden from "../images/WorkIcon/hatsuden.png"
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
  
  margin-top: 60px;
`
const TableContainer = styled.div`
  display: flex;
  margin-top: 1vw;
  justify-content: center;
`
const FilteringContainer = styled.div`
  margin:auto;
  width: 50%;
`

const WorkFilteringContainer = styled.div`
  margin-top: 1vw;
  display: flex;
  justify-content: space-between;
  overflow-wrap: break-word;
`

const WorkFilterIcon = styled.img`
  word-wrap: break-word;
  height: 30px;
  object-fit: contain;
`

const TypeFilterContainer = styled.div`
  margin-top: 1vw;
  display: flex;
  justify-content: space-between;
`

const TypeFilterIcon = styled.img`
  height: 40px;
  object-fit: contain;
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

const IconImage = styled.img`
  height: 50px;
  object-fit: contain;
`

const WorkImage = styled.img`
`

const TypeImage = styled.img`
  height: 40px;
  object-fit: contain;
`

const WorkLevelContainer = styled.div`
  margin-top: 1vw;
  display: flex;
  justify-content: space-between;
`

export function Dictionary() {
  const [typeFilter, setTypeFilter] = useState("All")
  const [workFilter, setWorkFilter] = useState("All")
  const [hiokoshiLevelFilter, setHiokoshiLevelFilter] = useState("0")
  const [tanemakiLevelFilter, setTanemakiLevelFilter] = useState("0")
  const [tesagyouLevelFilter, setTesagyouLevelFilter] = useState("0")
  const [bassaiLevelFilter, setBassaiLevelFilter] = useState("0")
  const [seiyakuLevelFilter, setSeiyakuLevelFilter] = useState("0")
  const [unpanLevelFilter, setUnpanLevelFilter] = useState("0")
  const [mizuyariLevelFilter, setMizuyariLevelFilter] = useState("0")
  const [hatsudenLevelFilter, setHatsudenLevelFilter] = useState("0")
  const [saisyuuLevelFilter, setSaisyuuLevelFilter] = useState("0")
  const [saikutsuLevelFilter, setSaikutsuLevelFilter] = useState("0")
  const [reikyakuLevelFilter, setReikyakuLevelFilter] = useState("0")
  const [houbokuLevelFilter, setHoubokuLevelFilter] = useState("0")


  const handleTypeFilterClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    const value = (event.currentTarget as HTMLButtonElement).value;
    setTypeFilter(value);
  }

  const handleWorkFilterClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    const value = (event.currentTarget as HTMLButtonElement).value;
    setWorkFilter(value);
  }

  const handleHiokoshiLevelFilterClick: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = (event.currentTarget.value);
    setHiokoshiLevelFilter(value)
  }

  const handleTanemakiLevelFilterClick: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = (event.currentTarget.value);
    setTanemakiLevelFilter(value)
  }

  const handleTesagyouLevelFilterClick: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = (event.currentTarget.value);
    setTesagyouLevelFilter(value)
  }

  const handleBassaiLevelFilterClick: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = (event.currentTarget.value);
    setBassaiLevelFilter(value)
  }

  const handleSeiyakuLevelFilterClick: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = (event.currentTarget.value);
    setSeiyakuLevelFilter(value)
  }

  const handleUnpanLevelFilterClick: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = (event.currentTarget.value);
    setUnpanLevelFilter(value)
  }

  const handleMizuyariLevelFilterClick: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = (event.currentTarget.value);
    setMizuyariLevelFilter(value)
  }

  const handleHatsudenLevelFilterClick: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = (event.currentTarget.value);
    setHatsudenLevelFilter(value)
  }

  const handleSaisyuuLevelFilterClick: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = (event.currentTarget.value);
    setSaisyuuLevelFilter(value)
  }

  const handleSaikutsuLevelFilterClick: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = (event.currentTarget.value);
    setSaikutsuLevelFilter(value)
  }

  const handleReikyakuLevelFilterClick: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = (event.currentTarget.value);
    setReikyakuLevelFilter(value)
  }

  const handleHoubokuLevelFilterClick: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = (event.currentTarget.value);
    setHoubokuLevelFilter(value)
  }

  const filteredData = PalData.filter((datum) => {
    const hasTypeMatch = typeFilter === "All" || datum.type.includes(typeFilter);

    const hasWorkMatch =
      workFilter === "All" ||
      (datum.work.length > 0 && datum.work.some((work) => work.kind.includes(workFilter)));

    const hasHiokoshiLevelMatch =
      hiokoshiLevelFilter === "0" ||
      (datum.work.some((work) => work.kind.includes(Hiokoshi) &&
        (hiokoshiLevelFilter ? work.level >= parseInt(hiokoshiLevelFilter) : true)
      ))

    const hasTanemakiLevelMatch =
      tanemakiLevelFilter === "0" ||
      (datum.work.some((work) => work.kind.includes(Tanemaki) &&
        (tanemakiLevelFilter ? work.level >= parseInt(tanemakiLevelFilter) : true)
      ))

    const hasTesagyouLevelMatch =
      tesagyouLevelFilter === "0" ||
      (datum.work.some((work) => work.kind.includes(Tesagyou) &&
        (tesagyouLevelFilter ? work.level >= parseInt(tesagyouLevelFilter) : true)
      ))

    const hasBassaiLevelMatch =
      bassaiLevelFilter === "0" ||
      (datum.work.some((work) => work.kind.includes(Bassai) &&
        (bassaiLevelFilter ? work.level >= parseInt(bassaiLevelFilter) : true)
      ))

    const hasSeiyakuLevelMatch =
      seiyakuLevelFilter === "0" ||
      (datum.work.some((work) => work.kind.includes(Seiyaku) &&
        (seiyakuLevelFilter ? work.level >= parseInt(seiyakuLevelFilter) : true)
      ))

    const hasUnpanLevelMatch =
      unpanLevelFilter === "0" ||
      (datum.work.some((work) => work.kind.includes(Unpan) &&
        (unpanLevelFilter ? work.level >= parseInt(unpanLevelFilter) : true)
      ))

    const hasMizuyariLevelMatch =
      mizuyariLevelFilter === "0" ||
      (datum.work.some((work) => work.kind.includes(Mizuyari) &&
        (mizuyariLevelFilter ? work.level >= parseInt(mizuyariLevelFilter) : true)
      ))

    const hasHatsudenLevelMatch =
      hatsudenLevelFilter === "0" ||
      (datum.work.some((work) => work.kind.includes(Hatsuden) &&
        (hatsudenLevelFilter ? work.level >= parseInt(hatsudenLevelFilter) : true)
      ))

    const hasSaisyuuLevelMatch =
      saisyuuLevelFilter === "0" ||
      (datum.work.some((work) => work.kind.includes(Saisyuu) &&
        (saisyuuLevelFilter ? work.level >= parseInt(saisyuuLevelFilter) : true)
      ))

    const hasSaikutsuLevelMatch =
      saikutsuLevelFilter === "0" ||
      (datum.work.some((work) => work.kind.includes(Saikutsu) &&
        (saikutsuLevelFilter ? work.level >= parseInt(saikutsuLevelFilter) : true)
      ))

    const hasReikyakuLevelMatch =
      reikyakuLevelFilter === "0" ||
      (datum.work.some((work) => work.kind.includes(Reikyaku) &&
        (reikyakuLevelFilter ? work.level >= parseInt(reikyakuLevelFilter) : true)
      ))

    const hasHoubokuLevelMatch =
      houbokuLevelFilter === "0" ||
      (datum.work.some((work) => work.kind.includes(Houboku) &&
        (houbokuLevelFilter ? work.level >= parseInt(houbokuLevelFilter) : true)
      ))

    return hasTypeMatch && hasWorkMatch && hasHiokoshiLevelMatch && hasTanemakiLevelMatch && hasTesagyouLevelMatch && hasBassaiLevelMatch && hasSeiyakuLevelMatch && hasUnpanLevelMatch && hasMizuyariLevelMatch && hasHatsudenLevelMatch
      && hasSaisyuuLevelMatch && hasSaikutsuLevelMatch && hasReikyakuLevelMatch && hasHoubokuLevelMatch;
  });

  return (<>
    <DictionaryContainer>
      <h1>パル図鑑</h1>
      <FilteringContainer>
        <WorkFilteringContainer>
          <Button onClick={handleWorkFilterClick} value="All">全</Button>
          <Button onClick={handleWorkFilterClick} value={Hiokoshi}><WorkFilterIcon src={Hiokoshi} alt="火起こし" /></Button>
          <Button onClick={handleWorkFilterClick} value={Tanemaki}><WorkFilterIcon src={Tanemaki} alt="種まき" /></Button>
          <Button onClick={handleWorkFilterClick} value={Tesagyou}><WorkFilterIcon src={Tesagyou} alt="手作業" /></Button>
          <Button onClick={handleWorkFilterClick} value={Bassai}><WorkFilterIcon src={Bassai} alt="伐採" /></Button>
          <Button onClick={handleWorkFilterClick} value={Seiyaku}><WorkFilterIcon src={Seiyaku} alt="製薬" /></Button>
          <Button onClick={handleWorkFilterClick} value={Unpan}><WorkFilterIcon src={Unpan} alt="運搬" /></Button>
          <Button onClick={handleWorkFilterClick} value={Mizuyari}><WorkFilterIcon src={Mizuyari} alt="水やり" /></Button>
          <Button onClick={handleWorkFilterClick} value={Hatsuden}><WorkFilterIcon src={Hatsuden} alt="発電" /></Button>
          <Button onClick={handleWorkFilterClick} value={Saisyuu}><WorkFilterIcon src={Saisyuu} alt="採集" /></Button>
          <Button onClick={handleWorkFilterClick} value={Saikutsu}><WorkFilterIcon src={Saikutsu} alt="採掘" /></Button>
          <Button onClick={handleWorkFilterClick} value={Reikyaku}><WorkFilterIcon src={Reikyaku} alt="冷却" /></Button>
          <Button onClick={handleWorkFilterClick} value={Houboku}><WorkFilterIcon src={Houboku} alt="放牧" /></Button>
        </WorkFilteringContainer>
        <TypeFilterContainer>
          <Button onClick={handleTypeFilterClick} value="All">全</Button>
          <Button onClick={handleTypeFilterClick} value={Neutral}><TypeFilterIcon src={Neutral} alt="無" /></Button>
          <Button onClick={handleTypeFilterClick} value={Fire}><TypeFilterIcon src={Fire} alt="炎" /></Button>
          <Button onClick={handleTypeFilterClick} value={Water}><TypeFilterIcon src={Water} alt="水" /></Button>
          <Button onClick={handleTypeFilterClick} value={Ice}><TypeFilterIcon src={Ice} alt="氷" /></Button>
          <Button onClick={handleTypeFilterClick} value={Thunder}><TypeFilterIcon src={Thunder} alt="雷" /></Button>
          <Button onClick={handleTypeFilterClick} value={Grass}><TypeFilterIcon src={Grass} alt="草" /></Button>
          <Button onClick={handleTypeFilterClick} value={Earth}><TypeFilterIcon src={Earth} alt="地" /></Button>
          <Button onClick={handleTypeFilterClick} value={Dark}><TypeFilterIcon src={Dark} alt="闇" /></Button>
          <Button onClick={handleTypeFilterClick} value={Dragon}><TypeFilterIcon src={Dragon} alt="竜" /></Button>
        </TypeFilterContainer>
        <WorkLevelContainer>
          <select name="hiokoshi" id="hiokoshi-select" onChange={handleHiokoshiLevelFilterClick}>
            <option value="0">火起し</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <select name="tanemaki" id="tanemaki-select" onChange={handleTanemakiLevelFilterClick}>
            <option value="0">種まき</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <select name="tesagyou" id="tesagyou-select" onChange={handleTesagyouLevelFilterClick}>
            <option value="0">手作業</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <select name="bassai" id="bassai-select" onChange={handleBassaiLevelFilterClick}>
            <option value="0">伐採</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <select name="seiyaku" id="seiyaku-select" onChange={handleSeiyakuLevelFilterClick}>
            <option value="0">製薬</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <select name="unpan" id="unpan-select" onChange={handleUnpanLevelFilterClick}>
            <option value="0">運搬</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <select name="mizuyari" id="mizuyari-select" onChange={handleMizuyariLevelFilterClick}>
            <option value="0">水やり</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <select name="hatsuden" id="hatsuden-select" onChange={handleHatsudenLevelFilterClick}>
            <option value="0">発電</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <select name="saisyuu" id="saisyuu-select" onChange={handleSaisyuuLevelFilterClick}>
            <option value="0">採集</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <select name="saikutsu" id="saikutsu-select" onChange={handleSaikutsuLevelFilterClick}>
            <option value="0">採掘</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <select name="reikyaku" id="reikyaku-select" onChange={handleReikyakuLevelFilterClick}>
            <option value="0">冷却</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <select name="houboku" id="houboku-select" onChange={handleHoubokuLevelFilterClick}>
            <option value="0">放牧</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </WorkLevelContainer>
      </FilteringContainer>
      <TableContainer>
        <StyledTable>
          <TableBody>
            {filteredData.map(datum =>
              <TableRay key={datum.id}>
                <TableData>{datum.id}</TableData>
                <TableData ><IconImage src={datum.icon} alt={datum.name} /><p>{datum.name}</p></TableData>
                <TableData>{datum.type.map((type, index) => (
                  <TypeImage src={type} />
                ))}</TableData>
                <TableData>{datum.work.map((work, index) => (
                  <div key={index}>
                    <WorkImage src={work.kind} alt="作業" />
                    {work.level}
                  </div>
                ))}</TableData>
                <TableData>{datum.item.map((item, index) => (
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
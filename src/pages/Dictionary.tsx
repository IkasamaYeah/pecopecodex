import React from "react";
import {PalData} from "../components/paldata"
import { Button } from "@mui/material";
import { useState } from "react";

export function Dictionary () {
    const [typeFilter,setTypeFilter] = useState("All")
    const [workFilter,setWorkFilter] = useState("All")

    const handleWorkFilterClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
      const value = (event.target as HTMLButtonElement).value;
      setWorkFilter(value)
    }

    const handleTypeFilterClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
      const value = (event.target as HTMLButtonElement).value;
      setTypeFilter(value)
    }
    
    const filteredData = PalData.filter((datum) => {
      const hasTypeMatch = typeFilter === "All" || datum.type.includes(typeFilter);
      
      const hasWorkMatch =
        workFilter === "All" ||
        (datum.work.length > 0 && datum.work.some((work) => work.kind.includes(workFilter)));
    
      return hasTypeMatch && hasWorkMatch;
    });

  return (<>
    <h1>パル図鑑</h1>
    <div id="work"> 
      <Button onClick={handleWorkFilterClick} value="All">全</Button>
      <Button onClick={handleWorkFilterClick} value="火起こし">火起こし</Button>
      <Button onClick={handleWorkFilterClick} value="種まき">種まき</Button>
      <Button onClick={handleWorkFilterClick} value="手作業">手作業</Button>
      <Button onClick={handleWorkFilterClick} value="伐採">伐採</Button>
      <Button onClick={handleWorkFilterClick} value="製薬">製薬</Button>
      <Button onClick={handleWorkFilterClick} value="運搬">運搬</Button>
      <Button onClick={handleWorkFilterClick} value="水やり">水やり</Button>
      <Button onClick={handleWorkFilterClick} value="発電">発電</Button>
      <Button onClick={handleWorkFilterClick} value="採集">採集</Button>
      <Button onClick={handleWorkFilterClick} value="採掘">採掘</Button>
      <Button onClick={handleWorkFilterClick} value="冷却">冷却</Button>
      <Button onClick={handleWorkFilterClick} value="放牧">放牧</Button>
    </div>
    <div id="type">
      <Button onClick={handleTypeFilterClick} value="All">全</Button>
      <Button onClick={handleTypeFilterClick} value="無">無</Button>
      <Button onClick={handleTypeFilterClick} value="炎">炎</Button>
      <Button onClick={handleTypeFilterClick} value="水">水</Button>
      <Button onClick={handleTypeFilterClick} value="氷">氷</Button>
      <Button onClick={handleTypeFilterClick} value="雷">雷</Button>
      <Button onClick={handleTypeFilterClick} value="草">草</Button>
      <Button onClick={handleTypeFilterClick} value="地">地</Button>
      <Button onClick={handleTypeFilterClick} value="闇">闇</Button>
      <Button onClick={handleTypeFilterClick} value="竜">竜</Button>
    </div>
    <table>
      <thead>
        <tr>
          <th>図鑑No</th>
          <th>名前</th>
          <th>属性</th>
          <th>作業適正</th>
          <th>ドロップ</th>
        </tr>
      </thead>
      <tbody>
      {filteredData.map(datum =>
        <tr key={datum.id}>
          <td>{datum.id}</td>
          <td>{datum.name}</td>
          <td>{datum.type[0]}{datum.type[1]}</td>
          <td>{datum.work.map((work) => (
            <div key={work.kind}>{work.kind}
              {work.level}
            </div>
          ))}</td>
          <td>{datum.item.join(",")}</td>
        </tr>
        )}
      </tbody>
    </table>
  </>)
}
import { PalData } from "../components/paldata"
import { useState } from "react"

export function Combination() {
  const [pedigree, setPedigree] = useState("")

  const handlePedigreeSelect: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = (event.currentTarget.value)
    setPedigree(value)
  }

  return (<>
    <h1>配合検索</h1>
    <div>
      <select name="" id="" onChange={handlePedigreeSelect}>
        {PalData.map((pedigree) =>
          <option value={pedigree.name}>{pedigree.name}</option>
        )}
      </select>
    </div>
    {PalData.filter(pal => pal.parent.flat().find(p => p === pedigree)!== undefined).map((filterdPal,index)=>
    <div key={index}>
      <img src={filterdPal.icon} alt={filterdPal.name} />
      <p>{filterdPal.name}</p>
      <p>配合方法</p>
      {filterdPal.parent.map(([a,b]) =>
      <div key={index}>
        <p>{a}</p>
        <p>{b}</p>
      </div>
      )}
    </div>
    )}
  </>)
}
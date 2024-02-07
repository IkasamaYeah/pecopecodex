import { PalData } from "../components/paldata"
import { useState } from "react"
import styled from "@emotion/styled"

const PalIcon = styled.img`
  display: inline-block;
  width: 80px;
`

const ParentSelector = styled.select`
  margin-top: 1vw;
`

const ResultCombinationWrapper = styled.div`
  margin-top: 1vw;
`

export function Combination() {
  const [pedigree, setPedigree] = useState("")

  const handlePedigreeSelect: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = (event.currentTarget.value)
    setPedigree(value)
  }

  return (<>
    <h1>配合検索</h1>

    {/* 配合の親決め */}
    <div>
      <ParentSelector name="" id="" onChange={handlePedigreeSelect}>
        {PalData.map((pedigree) =>
          <option value={pedigree.name}>{pedigree.name}</option>
        )}
      </ParentSelector>
    </div>

    {/*配合表*/}
    {PalData.filter(pal => pal.parent.flat().find(p => p === pedigree))                   // PalData の parent プロパティをフラット化 ⇒ .find で pedigree と一致する要素を検索 ⇒ その要素を含んだオブジェクトのみを新しい配列として、パラメータpalに配列として格納(.filter)
      .map((filteredPal, index) =>                                                        // フィルタリングされた配列を .map で単一のオブジェクトとして再配置
        <div key={index}>
          {filteredPal.parent.filter(filteredParent => filteredParent.includes(pedigree)) // filteredPal の parent プロパティに pedigree が含まれるオブジェクトのみをフィルタリング
            .map(([b]) => {                                                            // filterdParent の配列内の要素を a,b として再配置
              const parentA = PalData.find(parent => parent.name === pedigree)
              const parentB = PalData.find(parent => parent.name === b)
              return (
                <ResultCombinationWrapper key={index}>
                  <p><PalIcon src={parentA?.icon} alt={parentA?.name} />{parentA?.name}＋<PalIcon src={parentB?.icon} alt={parentB?.name} />{parentB?.name}＝<PalIcon src={filteredPal.icon} alt={filteredPal.name} />{filteredPal.name}</p>
                </ResultCombinationWrapper>
              )
            })}
        </div>
      )}
  </>)
}
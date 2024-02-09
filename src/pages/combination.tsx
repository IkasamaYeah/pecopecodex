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

const ReverseSelector = styled.select`
`

const InheritationSelector = styled.select`
`

const ResultInheritationWrapper = styled.div`
`

export function Combination() {
  const [pedigree, setPedigree] = useState("")

  const [reverse, setReverse] = useState("")
  
  const [inheritingPal, setInheritingPal] = useState("")
  const inheritingPalObj = PalData.find(pal => pal.name === inheritingPal)
  
  const [inheritedPal,setInheritedPal] = useState("")
  const inheritedPalObj = PalData.find(pal => pal.name === inheritedPal)
  const inheritedPalParentObj = inheritedPalObj?.parent.map(([a,b]) => ([PalData.find(pal => pal.name === a),PalData.find(pal => pal.name === b)]))

  const firstChildrens = PalData.filter(pal => pal.parent.flat().find(p => p === inheritingPal))                           //parentプロパティを参照し、継承元のパルの名前が含まれているものをフィルタリングしfirstChildrenに格納
  const secondChildrens = PalData.filter(pal => pal.parent.flat().find(p => firstChildrens.map(f => f.name).includes(p)))  //firstChildrenの名前が含まれているものを格納
  const thirdChildrens = PalData.filter(pal => pal.parent.flat().find(p => secondChildrens.map(f => f.name).includes(p)))  //secondChildrenの名前が含まれているものを格納
  const fourthChildrens = PalData.filter(pal => pal.parent.flat().find(p => thirdChildrens.map(f => f.name).includes(p)))  //thirdChildrenの名前が含まれているものを格納

  const handlePedigreeSelect: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = (event.currentTarget.value)
    setPedigree(value)
  }

  const handleReverseSelect: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = (event.currentTarget.value)
    setReverse(value)
  }

  const handleinheritingPalSelector: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = (event.currentTarget.value)
    setInheritingPal(value)
  }

  const handleinheritedPalSelector: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = (event.currentTarget.value)
    setInheritedPal(value)
  }

  return (<>
    <h1>配合検索</h1>

    {/* 親指定配合 */}
    <div>
      <ParentSelector name="" id="" onChange={handlePedigreeSelect}>
        <option value="">親にするパルを選択</option>
        {PalData.map((pedigree) =>
          <option value={pedigree.name}>{pedigree.name}</option>
        )}
      </ParentSelector>
    </div>

    {/* リストの結果表示 */}
    {PalData.filter(pal => pal.parent.flat().find(p => p === pedigree))                   // PalData の parent プロパティをフラット化 ⇒ .find で pedigree と一致する要素を検索 ⇒ その要素を含んだオブジェクトのみを新しい配列として、パラメータpalに配列として格納(.filter)
      .map((filteredPal, index) =>                                                        // フィルタリングされた配列を .map で単一のオブジェクトとして再配置
        <div key={index}>
          {filteredPal.parent.filter(filteredParent => filteredParent.includes(pedigree)) // filteredPal の parent プロパティに pedigree が含まれるオブジェクトのみをフィルタリング
            .map(([a, b]) => {                                                             // filterdParent の配列内の要素を a,b として再配置
              const parentA = PalData.find(parent => parent.name === a)
              const parentB = PalData.find(parent => parent.name === b)
              return (
                <ResultCombinationWrapper key={index}>
                  <p><PalIcon src={parentA?.icon} alt={parentA?.name} />{parentA?.name}＋<PalIcon src={parentB?.icon} alt={parentB?.name} />{parentB?.name}＝<PalIcon src={filteredPal.icon} alt={filteredPal.name} />{filteredPal.name}</p>
                </ResultCombinationWrapper>
              )
            })}
        </div>
      )}

    {/* 逆引き検索 */}
    <div>
      <ReverseSelector name="" id="" onChange={handleReverseSelect}>
        <option value="">作りたいパルを選択</option>
        {PalData.map((reverseSearch) =>
          <option value={reverseSearch.name}>{reverseSearch.name}</option>
        )}
      </ReverseSelector>
    </div>

    {/* リストの結果表示 */}
    {PalData.find(pal => pal.name === reverse)?.parent.map(([a, b]) => {
      const parentA = PalData.find(parent => parent.name === a)
      const parentB = PalData.find(parent => parent.name === b)
      return (
        <ResultCombinationWrapper>
          <p>
            <PalIcon src={parentA?.icon} alt={parentA?.name} />
            {parentA?.name}
            ＋
            <PalIcon src={parentB?.icon} alt={parentB?.name} />
            {parentB?.name}
          </p>
        </ResultCombinationWrapper>
      )
    })}

    {/* 継承配合 */}
      {/* 親決め */}
      <InheritationSelector  name="" id="" onChange={handleinheritingPalSelector}>
        <option value="">継承元のパルを選択</option>
        {PalData.map((inheritationParent) => 
          <option value={inheritationParent.name}>{inheritationParent.name}</option>
        )}
      </InheritationSelector>
      
      {/* 作りたいパル決め */}
      <InheritationSelector name="" id="" onChange={handleinheritedPalSelector}>
        <option value="">継承先のパルを選択</option>
        {PalData.map((InheritedChild)=>
          <option value={InheritedChild.name}>{InheritedChild.name}</option>
        )}
      </InheritationSelector>

      {/* リストの結果表示 */}
      <ResultInheritationWrapper>
        {inheritedPalParentObj?.map(([a,b])=>
          <p>{a?.name}+{b?.name}</p>
        )}
      </ResultInheritationWrapper>
  </>)
}
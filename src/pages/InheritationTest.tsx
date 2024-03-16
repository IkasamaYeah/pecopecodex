import { useState, useEffect } from "react"
import { PalData, PalDataItem } from "../components/paldata"
import styled from "@emotion/styled"
import Kakeru from "../images/x.png"
import ikoru from "../images/=.png"

const Wrapper = styled.div`
  margin-top: 60px;
  padding-top: 1vw;
`

const InheritedChildWrapper = styled.div`
  margin-top: 1vw;
`

const InheritedChildSelector = styled.select`
`

const ParentSelectorWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1vw;
`

const ParentASelector = styled.select`
  
`

const ParentBSelector = styled.select`

`

const ResultWrapper = styled.div`
  margin-top: 1vw;
`

const PalIcon = styled.img`
  height:5vw;
  object-fit: contain;
`

const OperatorIcon = styled.img`
  height: 2vw;
`

const InheritationWrapper = styled.div`
  margin-top: 1vw;
  margin-bottom: 1vw;
  margin-left: 30vw;
  margin-right: 30vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  place-items: center;
  border: 1px;
`

export const InheritationTest: React.FC = () => {
  const [sourceParentAName, setSourceParentAName] = useState < string > ()
  const [sourceParentBName, setSourceParentBName] = useState < string > ()
  const [sourceParentA, setSourceParentA] = useState < PalDataItem > ()
  const [sourceParentB, setSourceParentB] = useState < PalDataItem > ()
  const [inheritedChildName, setInheritedChildName] = useState < string > ()
  const inheritedChild = PalData.find(pal => pal.name === inheritedChildName)
  const inheritedChildParentsArray = inheritedChild?.parent

  const findPal = (name: string) => {
    const pal = PalData.find(p => p.name === name)
    if (!pal) throw new Error('Invalid pal name');
    return pal;
  }

  const firstParent = [sourceParentAName, sourceParentBName]
  const filteredFirstChild = PalData.find(pal => pal.parent.some(tuple => tuple.sort().join() === firstParent.sort().join()))

  const secondChild = PalData.find(pal => pal.parent.some(([a, b]) => (a === sourceParentAName && b === sourceParentBName) || (a === sourceParentBName && b === sourceParentAName)))
  const secondParents = PalData.filter(pal => pal.parent.flat().find(p => p === filteredFirstChild?.name))
  const filteredSecondChilds = secondParents?.map(pal => ({
    ...pal,
    parent: pal.parent.filter(tuple => tuple.includes(filteredFirstChild?.name ?? "")).map(([a, b]) => [findPal(a), findPal(b)])
  }))
  const secondGenerationCheck = filteredSecondChilds.find(pal => pal?.name === inheritedChildName)

  const thirdParents = PalData.filter(pal => pal.parent.flat().find(p => p === secondChild?.name))
  const thirdGenerationCheck = thirdParents.filter(pal => inheritedChildParentsArray?.flat().some(p => p === pal.name))
  const filteredThirdGeneration = thirdGenerationCheck.map(pal => ({
    ...pal,
    parent: pal?.parent.filter(tuple => tuple.includes(secondChild?.name ?? "")).flat().filter(pal => pal !== secondChild?.name).map(findPal)
  }))
  const filteredThirdChildren = {
    ...inheritedChild,
    parent: inheritedChild?.parent.filter(tuple => {
      return tuple.some(name => {
        return thirdGenerationCheck.some(pal => pal.name === name)
      })
    }).map(([a, b]) => [findPal(a), findPal(b)])
  }

  console.log(filteredThirdGeneration)



  useEffect(() => {
    if (sourceParentAName) setSourceParentA(findPal(sourceParentAName));
    if (sourceParentBName) setSourceParentB(findPal(sourceParentBName));
  }, [sourceParentAName, sourceParentBName])

  const handleSourceParentAName: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = (event.currentTarget.value)
    setSourceParentAName(value)
  }

  const handleSourceParentBName: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = (event.currentTarget.value)
    setSourceParentBName(value)
  }

  const handleInheritedChildName: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = (event.currentTarget.value)
    setInheritedChildName(value)
  }


  return (<>
    <Wrapper>
      <h1>継承配合</h1>
      <InheritedChildWrapper>
        <p>作りたいパル</p>
        <InheritedChildSelector onChange={handleInheritedChildName}>
          <option>―――――</option>
          {PalData.map(inheritedPal =>
            <option value={inheritedPal.name}>{inheritedPal.name}</option>
          )}
        </InheritedChildSelector>
      </InheritedChildWrapper>

      <ParentSelectorWrapper>
        <p>継承元1</p>
        <ParentASelector onChange={handleSourceParentAName}>
          <option value="">―――――</option>
          {PalData.map(parentA =>
            <option key={parentA.name}>{parentA.name}</option>
          )}
        </ParentASelector>
        <p>継承元2</p>
        <ParentBSelector onChange={handleSourceParentBName}>
          <option value="">―――――</option>
          {PalData.map(parentB =>
            <option value={parentB.name}>{parentB.name}</option>
          )}
        </ParentBSelector>
      </ParentSelectorWrapper>

      <ResultWrapper>
        {filteredFirstChild?.name === inheritedChildName &&
          <InheritationWrapper>
              <PalIcon src={sourceParentA?.icon} alt={sourceParentA?.name} />
              <OperatorIcon src={Kakeru} alt="x" />
              <PalIcon src={sourceParentB?.icon} alt={sourceParentB?.name} />
              <OperatorIcon src={ikoru} alt="="/>
              <PalIcon src={inheritedChild?.icon} alt={inheritedChild?.name} />
          </InheritationWrapper>
        }
        {filteredFirstChild?.name !== inheritedChildName && secondGenerationCheck &&
          <div>
            <p>配合1回目</p>
            <InheritationWrapper>
              <PalIcon src={sourceParentA?.icon} alt={sourceParentA?.name} />
              <OperatorIcon src={Kakeru} alt="x" />
              <PalIcon src={sourceParentB?.icon} alt={sourceParentB?.name} />
              <OperatorIcon src={ikoru} alt="=" />
              <PalIcon src={filteredFirstChild?.icon} alt={filteredFirstChild?.name} />
            </InheritationWrapper>
            <p>配合2回目</p>
            {secondGenerationCheck?.parent.map(([a, b]) =>
              <InheritationWrapper>
                <PalIcon src={a?.icon} alt={a?.name} />
                <OperatorIcon src={Kakeru} alt="x" />
                <PalIcon src={b?.icon} alt={b?.name} />
                <OperatorIcon src={ikoru} alt="=" />
                <PalIcon src={inheritedChild?.icon} alt={inheritedChild?.name} />
              </InheritationWrapper>
            )}
          </div>
        }
        {filteredFirstChild?.name !== inheritedChildName &&  filteredThirdChildren  &&
          <div>
            <p>配合1回目</p>
            <InheritationWrapper>
              <PalIcon src={sourceParentA?.icon} alt={sourceParentA?.name} />
              <OperatorIcon src={Kakeru} alt="x" />
              <PalIcon src={sourceParentB?.icon} alt={sourceParentB?.name} />
              <OperatorIcon src={ikoru} alt="=" />
              <PalIcon src={filteredFirstChild?.icon} alt={filteredFirstChild?.name} />
            </InheritationWrapper>
            <p>配合2回目</p>
            {filteredThirdGeneration.map(pal => pal.parent.map(p =>
              <InheritationWrapper>
                <PalIcon src={secondChild?.icon} alt={secondChild?.name} />
                <OperatorIcon src={Kakeru} alt="x" />
                <PalIcon src={p?.icon} alt={p?.name} />
                <OperatorIcon src={ikoru} alt="=" />
                <PalIcon src={pal?.icon} alt={pal?.name} />
              </InheritationWrapper>
            ))}
            <p>配合3回目</p>             
            {filteredThirdChildren?.parent?.map(([a, b]) =>
              <InheritationWrapper> 
                  <PalIcon src={a?.icon} alt={a?.name} />
                  <OperatorIcon src={Kakeru} alt="x" />
                  <PalIcon src={b?.icon} alt={b?.name} />
                  <OperatorIcon src={ikoru} alt="=" />
                  <PalIcon src={inheritedChild?.icon} alt={inheritedChild?.name} />
              </InheritationWrapper>
              )}
          </div>
        }
      </ResultWrapper>
    </Wrapper>
  </>)
}
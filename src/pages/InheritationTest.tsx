import { useState , useEffect  } from "react"
import { PalData , PalDataItem } from "../components/paldata"
import styled from "@emotion/styled"

const Wrapper = styled.div`

`

const ParentASelector = styled.select`

`

const ParentBSelector = styled.select`

`

const InheritedChildSelector = styled.select`

`

export const InheritationTest:React.FC = () => {
  const [sourceParentAName,setSourceParentAName] = useState<string>()
  const [sourceParentBName,setSourceParentBName] = useState<string>()
  const [sourceParentA,setSourceParentA] = useState<PalDataItem>()
  const [sourceParentB,setSourceParentB] = useState<PalDataItem>()
  const [inheritedChildName,setInheritedChildName] = useState<string>()
  const inheritedChild = PalData.find(pal => pal.name === inheritedChildName)

  const findPal = (name:string) => {
    const pal = PalData.find(p => p.name === name)
    if (!pal) throw new Error('Invalid pal name');
    return pal;
  }

  const firstParent = [sourceParentAName,sourceParentBName]
  const filteredFirstChild = PalData.find(pal => pal.parent.some(tuple => tuple.sort().join() === firstParent.sort().join()))

  const secondParents = PalData.filter(pal => pal.parent.flat().find(p => p === filteredFirstChild?.name))
  const filteredSecondChilds = secondParents?.map(pal => ({
    ...pal,
    parent: pal.parent.filter(tuple => tuple.includes(filteredFirstChild?.name ?? "")).map(([a, b]) => [findPal(a), findPal(b)])
  }))
  const secondGenerationCheck = filteredSecondChilds.find(pal => pal?.name === inheritedChildName)

  console.log(secondGenerationCheck)


  useEffect(()=> {
    if(sourceParentAName) setSourceParentA(findPal(sourceParentAName));
    if(sourceParentBName) setSourceParentB(findPal(sourceParentBName));
  },[sourceParentAName,sourceParentBName])

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


  return(<>
    <Wrapper>
      <div>
        <p>継承先</p>
        <InheritedChildSelector onChange={handleInheritedChildName}>
          <option>―――――</option>
          {PalData.map(inheritedPal =>
          <option value={inheritedPal.name}>{inheritedPal.name}</option>  
          )}
        </InheritedChildSelector>
      </div>
      <div>
        <p>継承元1</p>
        <ParentASelector onChange={handleSourceParentAName}>
          <option value="">―――――</option>
          {PalData.map(parentA =>
            <option key={parentA.name}>{parentA.name}</option>
            )}
        </ParentASelector>
      </div>
      <div>
        <p>継承元2</p>
        <ParentBSelector onChange={handleSourceParentBName}>
          <option value="">―――――</option>
          {PalData.map(parentB =>
            <option value={parentB.name}>{parentB.name}</option>
            )}
        </ParentBSelector>
      </div>
      
      <div>
        {filteredFirstChild && filteredFirstChild.name === inheritedChildName  &&
        <div>
          <p>
            <img src={sourceParentA?.icon} alt={sourceParentA?.name} />
            +
            <img src={sourceParentB?.icon} alt={sourceParentB?.name} />
            =
            <img src={inheritedChild?.icon} alt={inheritedChild?.name} />
          </p>
        </div>
        }
        {filteredFirstChild?.name !== inheritedChildName && secondGenerationCheck &&
          <div>
            <p>
              <img src={sourceParentA?.icon} alt={sourceParentA?.name} />
              +
              <img src={sourceParentB?.icon} alt={sourceParentB?.name} />
              =
              <img src={filteredFirstChild?.icon} alt={filteredFirstChild?.name} />
            </p>
              {secondGenerationCheck?.parent.map(([a,b]) => 
              <div>
                <p><img src={a?.icon} alt={a?.name} />+<img src={b?.icon} alt={b?.name}/>=<img src={inheritedChild?.icon} alt={inheritedChild?.name} /></p>
              </div>
              )}
          </div>
        }
      </div>
    </Wrapper>
  </>)
}
import {FC, useEffect, useState} from "react";
import {PalData, PalDataItem} from "../components/paldata";
import styled from "@emotion/styled";

const findPal = (name: string) => {
  const pal = PalData.find(p => p.name === name);
  if (!pal) throw new Error('Invalid pal name');
  return pal;
};

export const Inheritetion: FC = () => {
  const [inheritationPalName, setInheritationPalName] = useState<string>();
  const [inheritationPal, setInheritationPal] = useState<PalDataItem>();
  const [sourcePalName, setSourcePalName] = useState<string>();
  const [sourcePal, setSourcePal] = useState<PalDataItem>();
  const [parents, setParents] = useState<[PalDataItem, PalDataItem][][] | undefined>()

  useEffect(() => {
    if (inheritationPalName) setInheritationPal(findPal(inheritationPalName));
  }, [inheritationPalName]);

  useEffect(() => {
    if (sourcePalName) setSourcePal(findPal(sourcePalName));
  }, [sourcePalName]);

  useEffect(() => {
    if (inheritationPal) {
      const parents: [PalDataItem, PalDataItem][][] = [];
      const nodes = inheritationPal.parent.filter(([a,b])=> a !== b).map(([a, b]) => [findPal(a), findPal(b)])
        .map(([a, b]) => [{self: a, parent: a.parent.filter(([a,b])=> a !== b).map(([a, b]) => [findPal(a), findPal(b)])}, {
          self: b, parent: b.parent.filter(([a,b])=> a !== b).map(([a, b]) => [findPal(a), findPal(b)])
        }]
          .map(ps => ({
            ...ps,
            parent: ps.parent.filter(([a,b])=> a !== b).map(([a, b]) => [{self: a, parent: a.parent.filter(([a,b])=> a !== b).map(([a, b]) => [findPal(a), findPal(b)])}, {
              self: b, parent: b.parent.filter(([a,b])=> a !== b).map(([a, b]) => [findPal(a), findPal(b)])
            }])
          })))

      let count = 0;
      nodes.forEach(([a, b]) => {
        parents.length <= count ? parents.push([[a.self, b.self]]) : parents[count].push([a.self, b.self]);
        a.parent.forEach(([a, b]) => {
          parents.length <= count ? parents.push([[a.self, b.self]]) : parents[count].push([a.self, b.self]);
          a.parent.forEach(([a, b]) => {
            parents.length <= count ? parents.push([[a, b]]) : parents[count].push([a, b]);
            count++;
          })
          b.parent.forEach(([a, b]) => {
            parents.length <= count ? parents.push([[a, b]]) : parents[count].push([a, b]);
            count++;
          })
        })
        b.parent.forEach(([a, b]) => {
          parents.length <= count ? parents.push([[a.self, b.self]]) : parents[count].push([a.self, b.self]);
          a.parent.forEach(([a, b]) => {
            parents.length <= count ? parents.push([[a, b]]) : parents[count].push([a, b]);
            count++;
          })
          b.parent.forEach(([a, b]) => {
            parents.length <= count ? parents.push([[a, b]]) : parents[count].push([a, b]);
            count++;
          })
        })
      })
      setParents(parents);
    }
  }, [inheritationPal]);

  return (<div>
    <select onChange={e => e.target.value !== '継承先パル' && setInheritationPalName(e.target.value)}>
      <option>継承先パル</option>
      {PalData.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
    </select>

    <select onChange={e => e.target.value !== '継承元パル' && setSourcePalName(e.target.value)}>
      <option>継承元パル</option>
      {PalData.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
    </select>

    {parents?.filter(p => p.flat().slice(1).some(_p => _p.id === sourcePal?.id)).map((route, index) => <Wrap key={index}>
      {index} {inheritationPal?.name} {route.map(([a, b], i) => <p key={i}>= {a.name} + {b.name}</p>)}
    </Wrap>)}
  </div>)
};

const Wrap = styled.div`
  display: flex;
`

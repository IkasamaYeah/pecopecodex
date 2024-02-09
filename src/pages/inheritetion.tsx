import {FC, useEffect, useState} from "react";
import {PalData, PalDataItem} from "../components/paldata";
import styled from "@emotion/styled";

const findPal = (name: string) => {
  const pal = PalData.find(p => p.name === name); //PalDataのnameプロパティから引数に渡されたnameと同一のものを検索
  if (!pal) throw new Error('Invalid pal name');  //palがundefinedの場合エラー
  return pal;
};

export const Inheritetion: FC = () => {
  const [inheritationPalName, setInheritationPalName] = useState<string>();
  const [inheritationPal, setInheritationPal] = useState<PalDataItem>();
  const [sourcePalName, setSourcePalName] = useState<string>();
  const [sourcePal, setSourcePal] = useState<PalDataItem>();
  const [parents, setParents] = useState<[PalDataItem, PalDataItem][][] | undefined>()

  useEffect(() => {
    if (inheritationPalName) setInheritationPal(findPal(inheritationPalName)); //inheritationPalNameがtrueならfindPal関数の引数にinheritationPalNameを渡して検索
  }, [inheritationPalName]);                                                   //useEffectのトリガー

  useEffect(() => {
    if (sourcePalName) setSourcePal(findPal(sourcePalName));                  //上のsourcePalName版
  }, [sourcePalName]);

  useEffect(() => {
    if (inheritationPal) {
      const parents: [PalDataItem, PalDataItem][][] = [];
      const nodes = inheritationPal.parent.filter(([a,b])=> a !== b) //aとbが同名の物を排除
        .map(([a, b]) => [findPal(a), findPal(b)])                   //排除された後のparent配列に対してfindPal関数を実行=>配列の文字列データをオブジェクトに変換
          .map(([a, b]) => [
                            {self: a, parent: a.parent.filter(([a,b])=> a !== b).map(([a, b]) => [findPal(a), findPal(b)])}, //上で作られた配列内のオブジェクトを展開し,selfプロパティにそれぞれaとb,
                            {self: b, parent: b.parent.filter(([a,b])=> a !== b).map(([a, b]) => [findPal(a), findPal(b)])}  //parentプロパティに同名の物を排除した後にfindPal関数をparent内の文字列配列に実行しオブジェクト化
                           ]
            .map(ps => ({
              ...ps,
              parent: ps.parent.filter(([a,b])=> a !== b) //aとbが同名の物を排除
                .map(([a, b]) => [
                                  {self: a, parent: a.parent.filter(([a,b])=> a !== b).map(([a, b]) => [findPal(a), findPal(b)])}, //上と同じ処理を施し第三世代までのオブジェクトデータを参照できるように加工
                                  {self: b, parent: b.parent.filter(([a,b])=> a !== b).map(([a, b]) => [findPal(a), findPal(b)])}
                                 ]
                    )
                        }))
              )

      let count = 0;
      nodes.forEach(([a, b]) => {
        parents.length <= count ? parents.push([[a.self, b.self]]) : parents[count].push([a.self, b.self]);   //parents配列の中にnodes配列内のaオブジェクトとbオブジェクトのselfの値を格納
        a.parent.forEach(([a, b]) => {                                                                        //nodesオブジェクトのparentプロパティ内の各配列に対して関数実行
          parents.length <= count ? parents.push([[a.self, b.self]]) : parents[count].push([a.self, b.self]); //上と同じ処理
          a.parent.forEach(([a, b]) => {
            parents.length <= count ? parents.push([[a, b]]) : parents[count].push([a, b]);                   //上と同じ処理
            count++;
          })
          b.parent.forEach(([a, b]) => {
            parents.length <= count ? parents.push([[a, b]]) : parents[count].push([a, b]);                   //上と同じ処理
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

    {parents?.filter(p => p.flat().slice(1).some(_p => _p.id === sourcePal?.id)).map((route, index) => 
    <Wrap key={index}>
      {index} {inheritationPal?.name} {route.map(([a, b], i) => <p key={i}>= {a.name} + {b.name}</p>)}
    </Wrap>)}
  </div>)
};

const Wrap = styled.div`
  display: flex;
`

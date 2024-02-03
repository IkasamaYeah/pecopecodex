type PalDataItem = {
  name: string;
  id: string;
  type: string[];
  work: WorkKind[];
  item: string[];
}

type WorkKind = {
  kind: string;
  level: number;
}



const PalData: PalDataItem[] = [
  {
    name: "モコロン",
    id: " 1",
    type: ["無"],
    work: [
      { kind: "手作業", level: 1 },
      { kind: "運搬", level: 1 },
      { kind: "放牧", level: 1 }
    ],
    item: ["羊毛", "モコロンの羊肉"]
  },
  {
    name: "ツッパニャン",
    id: " 2",
    type: ["無"],
    work: [
      { kind: "手作業", level: 1 },
      { kind: "採集1", level: 1 },
      { kind: "採掘1", level: 1 },
      { kind: "運搬1", level: 1 }],
    item: ["赤いベリー"]
  },
  {
    name: "タマコッコ",
    id: " 3",
    type: ["無"],
    work: [
      { kind: "採集", level: 1 },
      { kind: "放牧1", level: 1 }
    ],
    item: ["卵", "タマコッコの鶏肉"]
  },
  {
    name: "クルリス",
    id: " 4",
    type: ["草"],
    work: [
      { kind: "種まき", level: 1 },
      { kind: "手作業1", level: 1 },
      { kind: "伐採", level: 1 },
      { kind: "製薬", level: 1 },
      { kind: "採集", level: 1 }
    ],
    item: ["ベリーの種", "低品質の医薬品"]
  },
  {
    name: "キツネビ",
    id: " 5",
    type: ["炎"],
    work: [
      { kind: "火起こし", level: 1 }
    ],
    item: ["皮", "発火器官"]
  },
  {
    name: "カモノスケ",
    id: " 6",
    type: ["水"],
    work: [
      {kind:"手作業",level:1},
      {kind:"運搬",level:1},
      {kind:"水やり",level:1}
    ],
    item: ["皮", "パルの体液"]
  },
  {
    name: "ボルトラ",
    id: " 7",
    type: ["雷"],
    work: [
      {kind:"手作業1",level:1},
      {kind:"運搬1",level:1},
      {kind:"水やり1",level:1}
    ],
    item: ["発電器官"]
  },
  {
    name: "エテッパ",
    id: " 8",
    type: ["草"],
    work: [
      {kind:"種まき",level:1},
      {kind:"手作業",level:1},
      {kind:"伐採",level:1},
      {kind:"運搬",level:1},
      {kind:"採集",level:1}],
    item: ["キノコ"]
  },
  {
    name: "ヒノコジカ",
    id: " 9",
    type: ["炎"],
    work: [
      {kind:"火起こし",level:1}
    ],
    item: ["発火器官", "皮"]
  },
  {
    name: "ペンタマ",
    id: " 10",
    type: ["水", "氷"],
    work: [
      {kind:"手作業",level:1},
      {kind:"運搬",level:1},
      {kind:"水やり",level:1},
      {kind:"冷却",level:1}
    ],
    item: ["氷結器官", "皮"]
  }, {
    name: "キャプペン",
    id: "11",
    type: ["水", "氷"],
    work: [
      {kind:"手作業2",level:2},
      {kind:"運搬2",level:2},
      {kind:"水やり2",level:2},
      {kind:"採掘2",level:2},
      {kind:"冷却2",level:2},
    ],
    item: ["氷結器官", "キャプペンの羽飾り"],
  }, {
    name: "パチグリ",
    id: "12",
    type: ["雷"],
    work: [
      {kind:"発電",level:1}
    ],
    item: ["発電器官"],
  }, {
    name: "コチグリ",
    id: "12B",
    type: ["氷"],
    work: [
      {kind:"冷却",level:1}
    ],
    item: ["氷結器官"],
  }, {
    name: "ナエモチ",
    id: "13",
    type: ["草", "地"],
    work: [
      {kind:"種まき",level:1}
    ],
    item: ["ベリーの種", "ナエモチの葉っぱ"],
  }, {
    name: "タマモ",
    id: "14",
    type: ["無"],
    work: [
      {kind:"採集",level:1},
      {kind:"牧場",level:1}
    ],
    item: ["皮", "骨"],
  }, {
    name: "ホウロック",
    id: "15",
    type: ["闇"],
    work: [
      {kind:"採集",level:1}
    ],
    item: ["繊維", "高度な技術書"],
  }, {
    name: "チョロゾウ",
    id: "16",
    type: ["水"],
    work: [
      {kind:"水やり",level:1}
    ],
    item: ["パルの体液"],
  }, {
    name: "ンダコアラ",
    id: "17",
    type: ["闇"],
    work: [
      {kind:"手作業",level:1},
      {kind:"運搬",level:1},
      {kind:"採掘",level:1},
    ],
    item: ["毒腺"],
  }, {
    name: "ミルフィ―",
    id: "18",
    type: ["無"],
    work: [
      {kind:"採集",level:1},
      {kind:"放牧",level:1}
    ],
    item: ["羊毛"],
  }, {
    name: "ネムラム",
    id: "19",
    type: ["闇"],
    work: [
      {kind:"手作業",level:1},
      {kind:"運搬",level:1},
      {kind:"採集",level:1}
    ],
    item: ["毒腺", "小さなパルのソウル"],
  }, {
    name: "イノボウ",
    id: "20",
    type: ["地"],
    work: [
      {kind:"採掘",level:1}
    ],
    item: ["イノボウの猪肉", "皮", "骨"],
  }, {
    name: "ルナティ",
    id: "21",
    type: ["闇"],
    work: [
      {kind:"採集",level:1}
    ],
    item: ["皮", "小さなパルのソウル"],
  }, {
    name: "モグルン",
    id: "22",
    type: ["地"],
    work: [
      {kind:"手作業",level:1},
      {kind:"運搬",level:1},
      {kind:"採掘",level:1}
    ],
    item: ["皮"],
  }, {
    name: "ヤミイカ",
    id: "23",
    type: ["闇"],
    work: [
      {kind:"運搬",level:2},
      {kind:"採集",level:1}
    ],
    item: [""],
  }, {
    name: "ニャオテト",
    id: "24",
    type: ["闇"],
    work: [
      {kind:"放牧",level:1}
    ],
    item: ["金貨"],
  }, {
    name: "チルテト",
    id: "24B",
    type: ["氷"],
    work: [
      {kind:"冷却",level:1},
      {kind:"放牧",level:1}
    ],
    item: ["氷結器官", "サファイア"],
  }, {
    name: "ルミカイト",
    id: "25",
    type: ["水"],
    work: [
      {kind:"運搬",level:1},
      {kind:"水やり1",level:1}
    ],
    item: ["パルの体液"],
  }, {
    name: "ガウルフ",
    id: "26",
    type: ["無"],
    work: [
      {kind:"採集",level:1}
    ],
    item: ["皮", "ルビー", "金貨"],
  }, {
    name: "クルットリ",
    id: "27",
    type: ["無"],
    work: [
      {kind:"採集",level:1}
    ],
    item: ["火薬", "クルットリの羽"],
  }, {
    name: "ポプリーナ",
    id: "28",
    type: ["草"],
    work: [
      {kind:"種まき",level:1},
      {kind:"手作業",level:1},
      {kind:"製薬",level:1},
      {kind:"運搬",level:1},
      {kind:"採集",level:1}
    ],
    item: [""],
  }, {
    name: "ミルカルビ",
    id: "29",
    type: ["無"],
    work: [
      {kind:"放牧",level:1}
    ],
    item: ["ミルカルビの牛肉", "ミルク"],
  }, {
    name: "イバラヒメ",
    id: "30",
    type: ["草"],
    work: [
      {kind:"種まき",level:1},
      {kind:"手作業",level:1},
      {kind:"製薬",level:2},
      {kind:"運搬",level:1},
      {kind:"採集",level:1}
    ],
    item: ["小麦の種", "レタスの種"],
  }, {
    name: "シャーキッド",
    id: "31",
    type: ["水"],
    work: [
      {kind:"手作業",level:1},
      {kind:"運搬",level:1},
      {kind:"水やり",level:2}
    ],
    item: ["パルの体液"],
  }, {
    name: "シャーマンダー2",
    id: "31B",
    type: ["炎"],
    work: [
      {kind:"火起こし",level:2},
      {kind:"手作業",level:1},
      {kind:"運搬",level:1}
    ],
    item: ["発火器官"],
  }, {
    name: "シメナワ",
    id: "32",
    type: ["地"],
    work: [
      {kind:"手作業",level:1},
      {kind:"運搬",level:1},
      {kind:"採集",level:1}
    ],
    item: ["繊維"],
  }, {
    name: "オバケナワ",
    id: "32B",
    type: ["氷"],
    work: [
      {kind:"手作業",level:1},
      {kind:"運搬",level:2},
      {kind:"採集",level:1},
      {kind:"冷却",level:1}
    ],
    item: ["氷結器官", "繊維"],
  }, {
    name: "ササゾー",
    id: "33",
    type: ["草"],
    work: [
      {kind:"手作業",level:2},
      {kind:"伐採",level:2},
      {kind:"運搬",level:3}
    ],
    item: ["キノコ", "皮", "トマトの種"],
  }, {
    name: "ライゾー",
    id: "33B",
    type: ["雷"],
    work: [
      {kind:"手作業",level:2},
      {kind:"伐採",level:2},
      {kind:"運搬",level:3},
      {kind:"発電",level:2}
    ],
    item: ["キノコ", "発電器官", "皮"],
  }, {
    name: "メリポップ",
    id: "34",
    type: ["無"],
    work: [
      {kind:"放牧",level:1}
    ],
    item: ["わたあめ", "上質なパルオイル"],
  }, {
    name: "ベリゴート",
    id: "35",
    type: ["草"],
    work: [
      {kind:"種まき",level:2},
      {kind:"放牧",level:2}
    ],
    item: ["ベリゴートの香草肉", "赤いベリー", "角"],
  }, {
    name: "メルパカ",
    id: "36",
    type: ["無"],
    work: [
      {kind:"放牧",level:1}
    ],
    item: ["羊毛", "皮"],
  }, {
    name: "ツノガミ",
    id: "37",
    type: ["無"],
    work: [
      {kind:"伐採",level:2}
    ],
    item: ["ツノガミの鹿肉", "皮", "角"],
  }, {
    name: "ヤマガミ",
    id: "37B",
    type: ["地"],
    work: [
      {kind:"伐採",level:2}
    ],
    item: ["ツノガミの鹿肉", "皮", "角"],
  }, {
    name: "ホークウィン",
    id: "38",
    type: ["無"],
    work: [
      {kind:"採集",level:2}
    ],
    item: ["皮"],
  }, {
    name: "ヒメウサ",
    id: "39",
    type: ["無"],
    work: [
      {kind:"手作業",level:1},
      {kind:"運搬",level:1},
      {kind:"採集",level:1}
    ],
    item: ["皮", "きれいな花"],
  }, {
    name: "ヘルゴート",
    id: "40",
    type: ["炎", "闇"],
    work: [
      {kind:"火起こし",level:1},
      {kind:"手作業",level:2},
      {kind:"運搬",level:2},
      {kind:"採掘",level:1}],
    item: ["角", "皮"],
  }, {
    name: "アビスゴート",
    id: "40B",
    type: ["闇"],
    work: [
      {kind:"手作業",level:2},
      {kind:"運搬",level:2},
      {kind:"採掘",level:1}
    ],
    item: ["角", "皮"],
  }, {
    name: "パピテフ",
    id: "41",
    type: ["草"],
    work: [
      {kind:"種まき",level:2},
      {kind:"製薬",level:1}
    ],
    item: ["ハチミツ", "レタスの種", "小麦の種"],
  }, {
    name: "ブルフェルノ",
    id: "42",
    type: ["炎"],
    work: [
      {kind:"火起こし",level:2},
      {kind:"伐採",level:1}
    ],
    item: ["角", "発火器官"],
  }, {
    name: "トドドドン",
    id: "43",
    type: ["地"],
    work: [
      {kind:"運搬",level:1},
      {kind:"水やり",level:1},
      {kind:"採掘",level:2}
    ],
    item: ["トドドドンの魚肉", "上質なパルオイル"],
  }, {
    name: "マスクロウ",
    id: "44",
    type: ["闇"],
    work: [
      {kind:"伐採",level:1}
    ],
    item: ["骨", "毒腺", "小さなパルのソウル"],
  }, {
    name: "ダリザード",
    id: "45",
    type: ["闇"],
    work: [
      {kind:"手作業",level:1},
      {kind:"運搬",level:1},
      {kind:"採集",level:1}
    ],
    item: ["銅の鍵", "銀の鍵"],
  }, {
    name: "チリザード",
    id: "45B",
    type: ["炎"],
    work: [
      {kind:"火起こし",level:1},
      {kind:"手作業",level:1},
      {kind:"運搬",level:1},
      {kind:"採集",level:1}
    ],
    item: ["発火器官", "銀の鍵"],
  }, {
    name: "ツキカゲ",
    id: "46",
    type: ["闇"],
    work: [
      {kind:"手作業",level:1}
    ],
    item: ["骨"],
  }, {
    name: "エアムルグ",
    id: "47",
    type: ["無"],
    work: [
      {kind:"採集",level:1}
    ],
    item: ["エアムルグの鶏肉", "皮"],
  }, {
    name: "フェザーロ",
    id: "48",
    type: ["草"],
    work: [
      {kind:"種まき",level:1},
      {kind:"手作業",level:2},
      {kind:"伐採",level:1},
      {kind:"製薬",level:1},
      {kind:"運搬",level:2},
      {kind:"採集",level:2}
    ],
    item: ["小麦の種", "矢"],
  }, {
    name: "サンドロ",
    id: "48B",
    type: ["雷"],
    work: [
      {kind:"手作業",level:2},
      {kind:"伐採",level:1},
      {kind:"製薬",level:1},
      {kind:"運搬",level:2},
      {kind:"採集",level:2}
    ],
    item: ["小麦の種", "矢"],
  }, {
    name: "ゴリレイジ",
    id: "49",
    type: ["無"],
    work: [
      {kind:"手作業",level:1},
      {kind:"伐採",level:2},
      {kind:"運搬",level:3}
    ],
    item: ["皮", "骨"],
  }, {
    name: "ビーナイト",
    id: "50",
    type: ["草"],
    work: [
      {kind:"種まき",level:1},
      {kind:"手作業",level:1},
      {kind:"伐採",level:1},
      {kind:"製薬",level:1}, 
      {kind:"運搬",level:2},
      {kind:"採集",level:1},
      {kind:"放牧",level:1}
    ],
    item: ["ハチミツ"],
  }, {
    name: "クインビーナ",
    id: "51",
    type: ["草"],
    work: [
      {kind:"種まき",level:2},
      {kind:"手作業",level:2},
      {kind:"伐採",level:1},
      {kind:"製薬",level:2},
      {kind:"採集",level:2}
    ],
    item: ["ハチミツ", "クインビーナの杖"],
  }, {
    name: "ニャンギマリ",
    id: "52",
    type: ["無"],
    work: [
      {kind:"採集",level:2}
    ],
    item: ["上質なパルオイル"],
  }, {
    name: "コモップ",
    id: "53",
    type: ["氷"],
    work: [
      {kind:"採集",level:1},
      {kind:"冷却",level:1}
    ],
    item: ["羊毛"],
  }, {
    name: "ドンモップ",
    id: "54",
    type: ["氷"],
    work: [
      {kind:"採集",level:2},
      {kind:"冷却",level:2}
    ],
    item: ["羊毛"],
  }, {
    name: "オコチョ",
    id: "55",
    type: ["氷", "竜"],
    work: [
      {kind:"採集",level:1},
      {kind:"冷却",level:1}
    ],
    item: ["皮"],
  }, {
    name: "ライコーン",
    id: "56",
    type: ["雷"],
    work: [
      {kind:"伐採",level:1},
      {kind:"発電",level:2}
    ],
    item: ["皮", "発電器官", "角"],
  }, {
    name: "フブキツネ",
    id: "57",
    type: ["氷"],
    work: [
      {kind:"冷却",level:2}
    ],
    item: ["皮", "氷結器官"],
  }, {
    name: "サラブレイズ",
    id: "58",
    type: ["炎"],
    work: [
      {kind:"火起こし",level:2},
      {kind:"伐採",level:1}
    ],
    item: ["発火器官", "皮"],
  }, {
    name: "サラブラック",
    id: "58B",
    type: ["炎", "闇"],
    work: [
      {kind:"火起こし",level:2},
      {kind:"伐採",level:1}
    ],
    item: ["発火器官", "皮"],
  }, {
    name: "ツララジカ",
    id: "59",
    type: ["氷"],
    work: [
      {kind:"伐採",level:2}
    ],
    item: ["ツララジカの鹿肉", "角", "皮", "氷結器官"],
  }, {
    name: "イヌズマ",
    id: "60",
    type: ["雷"],
    work: [
      {kind:"発電",level:2}
    ],
    item: ["発電器官"],
  }, {
    name: "シラヌイ",
    id: "61",
    type: ["炎"],
    work: [
      {kind:"火起こし",level:2}
    ],
    item: ["皮", "発火器官"],
  }, {
    name: "カミナラシ",
    id: "62",
    type: ["雷"],
    work: [
      {kind:"手作業",level:1},
      {kind:"運搬",level:1},
      {kind:"発電",level:1}
    ],
    item: ["発電器官"],
  }, {
    name: "ミステリア",
    id: "63",
    type: ["無"],
    work: [
      {kind:"手作業",level:3},
      {kind:"運搬",level:1},
      {kind:"採集",level:1}
    ],
    item: ["パルジウムの欠片"],
  }, {
    name: "アロアリュー",
    id: "64",
    type: ["草", "竜"],
    work: [
      {kind:"種まき",level:2},
      {kind:"伐採",level:2}
    ],
    item: ["小麦の種"],
  }, {
    name: "ビリビリュー",
    id: "64B",
    type: ["雷", "竜"],
    work: [
      {kind:"伐採",level:2},
      {kind:"発電",level:2}
    ],
    item: ["トマトの種"],
  }, {
    name: "シーペント",
    id: "65",
    type: ["水"],
    work: [
      {kind:"水やり",level:2}
    ],
    item: ["パルの体液"],
  }, {
    name: "スナペント",
    id: "65B",
    type: ["地"],
    work: [
      {kind:"採集",level:1}
    ],
    item: ["パルの体液"],
  }, {
    name: "ソルレイス",
    id: "66",
    type: ["闇"],
    work: [
      {kind:"採集",level:2},
      {kind:"採掘",level:1}
    ],
    item: ["骨", "小さなパルのソウル"],
  }, {
    name: "ドリタス",
    id: "67",
    type: ["地"],
    work: [
      {kind:"採掘",level:3}
    ],
    item: ["金属鉱石", "上質なパルオイル"],
  }, {
    name: "ニャンバット",
    id: "68",
    type: ["闇"],
    work: [
      {kind:"運搬",level:2},
      {kind:"採集",level:2},
      {kind:"採掘",level:2}
    ],
    item: ["皮", "小さなパルのソウル"],
  }, {
    name: "ラブマンダー",
    id: "69",
    type: ["無"],
    work: [
      {kind:"手作業",level:2},
      {kind:"製薬",level:1},
      {kind:"運搬",level:2},
      {kind:"採掘",level:1}
    ],
    item: ["キノコ", "ケーキ", "あやしいジュース", "おかしなジュース"],
  }, {
    name: "ラヴィ",
    id: "70",
    type: ["炎"],
    work: [
      {kind:"火起こし",level:1},
      {kind:"手作業",level:1},
      {kind:"運搬",level:1},
      {kind:"放牧",level:1}
    ],
    item: ["発火器官", "上質なパルオイル"],
  }, {
    name: "カバネドリ",
    id: "71",
    type: ["炎", "闇"],
    work: [
      {kind:"火起こし",level:1},
      {kind:"運搬",level:3}
    ],
    item: ["骨", "ルビー", "金貨"],
  }, {
    name: "シロカバネ",
    id: "71B",
    type: ["氷", "闇"],
    work: [
      {kind:"運搬",level:3},
      {kind:"冷却",level:2}
    ],
    item: ["骨", "氷結器官", "サファイア"],
  }, {
    name: "ツジギリ",
    id: "72",
    type: ["炎"],
    work: [
      {kind:"火起こし",level:2},
      {kind:"手作業",level:1},
      {kind:"伐採",level:3},
      {kind:"運搬",level:2},
      {kind:"採集",level:1}
    ],
    item: ["骨", "金属インゴット"],
  }, {
    name: "ライバード",
    id: "73",
    type: ["雷"],
    work: [
      {kind:"運搬",level:3},
      {kind:"発電",level:2},
      {kind:"採集",level:1}
    ],
    item: ["発電器官"],
  }, {
    name: "イグニクス",
    id: "74",
    type: ["炎"],
    work: [
      {kind:"火起こし",level:3},
      {kind:"運搬",level:3}
    ],
    item: ["発火器官"],
  }, {
    name: "クレメーオ",
    id: "75",
    type: ["闇"],
    work: [
      {kind:"手作業",level:2},
      {kind:"製薬",level:2},
      {kind:"運搬",level:2}
    ],
    item: ["皮", "クレメーオ", "高度な技術書"],
  }, {
    name: "フォレーナ",
    id: "76",
    type: ["炎"],
    work: [
      {kind:"火起こし",level:2},
      {kind:"手作業",level:3},
      {kind:"運搬",level:2}
    ],
    item: ["発火器官", "高度な技術書"],
  }, {
    name: "ラべロット",
    id: "77",
    type: ["草"],
    work: [
      {kind:"種まき",level:2},
      {kind:"手作業",level:3},
      {kind:"伐採",level:2},
      {kind:"運搬",level:2},
      {kind:"採集",level:3}
    ],
    item: ["皮", "骨"],
  }, {
    name: "ヴィオレッタ",
    id: "78",
    type: ["草"],
    work: [
      {kind:"種まき",level:2},
      {kind:"手作業",level:3},
      {kind:"製薬",level:3},
      {kind:"運搬",level:2},
      {kind:"採集",level:2}
    ],
    item: [""],
  }, {
    name: "シルキーヌ",
    id: "79",
    type: ["氷"],
    work: [
      {kind:"製薬",level:2},
      {kind:"冷却",level:2},
      {kind:"放牧",level:1}
    ],
    item: ["上質な布", "氷結器官"],
  }, {
    name: "シルフィア",
    id: "80",
    type: ["竜"],
    work: [
      {kind:"伐採",level:2}
    ],
    item: ["上質なパルオイル"],
  }, {
    name: "シルディア",
    id: "80B",
    type: ["水", "竜"],
    work: [
      {kind:"伐採",level:2},
      {kind:"水やり",level:3}
    ],
    item: ["上質なパルオイル"],
  }, {
    name: "ケルピス",
    id: "81",
    type: ["水"],
    work: [
      {kind:"水やり",level:1}
    ],
    item: ["ケルピスの魚肉", "パルの体液"],
  }, {
    name: "マグピス",
    id: "81B",
    type: ["炎"],
    work: [
      {kind:"火起こし",level:1}
    ],
    item: ["ケルピスの魚肉", "発火器官"],
  }, {
    name: "アズレーン",
    id: "82",
    type: ["水", "竜"],
    work: [
      {kind:"水やり",level:3}
    ],
    item: ["布"],
  }, {
    name: "ツンドラ―",
    id: "83",
    type: ["氷"],
    work: [
      {kind:"手作業",level:1},
      {kind:"伐採",level:2},
      {kind:"冷却",level:3}
    ],
    item: [""],
  }, {
    name: "ゴクエンオ",
    id: "84",
    type: ["炎"],
    work: [
      {kind:"火起こし",level:3},
      {kind:"伐採",level:2}
    ],
    item: ["発火器官"],
  }, {
    name: "シンエンオ",
    id: "84B",
    type: ["炎", "闇"],
    work: [
      {kind:"火起こし",level:3},
      {kind:"伐採",level:2}
    ],
    item: ["発火器官"],
  }, {
    name: "ぺコドン",
    id: "85",
    type: ["水", "竜"],
    work: [
      {kind:"運搬",level:1},
      {kind:"水やり",level:2}
    ],
    item: ["上質なパルオイル"],
  }, {
    name: "パリピドン",
    id: "85B",
    type: ["雷", "竜"],
    work: [
      {kind:"運搬",level:1},
      {kind:"発電",level:3}
    ],
    item: ["上質なパルオイル", "発電器官", "サファイア"],
  }, {
    name: "ラプラドン",
    id: "86",
    type: ["草"],
    work: [
      {kind:"種まき",level:3}
    ],
    item: ["ラプラドンの恐竜肉", "トマトの種"],
  }, {
    name: "スプラドン",
    id: "86B",
    type: ["水"],
    work: [
      {kind:"水やり",level:3}
    ],
    item: ["ラプラドンの恐竜肉", "レタスの種"],
  }, {
    name: "フラリーナ",
    id: "87",
    type: ["草"],
    work: [
      {kind:"種まき",level:3},
      {kind:"手作業",level:2},
      {kind:"製薬",level:2},
      {kind:"運搬",level:1},
      {kind:"採集",level:1}
    ],
    item: ["きれいな花"],
  }, {
    name: "ボルカノン",
    id: "88",
    type: ["炎", "地"],
    work: [
      {kind:"火起こし",level:3},
      {kind:"採掘",level:3}
    ],
    item: ["発火器官"],
  }, {
    name: "フロスカノン",
    id: "88B",
    type: ["氷", "地"],
    work: [
      {kind:"採掘",level:3},
      {kind:"冷却",level:3}
    ],
    item: ["氷結器官"],
  }, {
    name: "アルパオー",
    id: "89",
    type: ["無"],
    work: [
      {kind:"採集",level:1}
    ],
    item: ["羊毛"],
  }, {
    name: "アオパオー",
    id: "89B",
    type: ["氷"],
    work: [
      {kind:"採集",level:1},
      {kind:"冷却",level:3}
    ],
    item: ["羊毛", "氷結器官"],
  }, {
    name: "グランモス",
    id: "90",
    type: ["草"],
    work: [
      {kind:"種まき",level:2},
      {kind:"伐採",level:2},
      {kind:"採掘",level:2}
    ],
    item: ["上質なパルオイル", "皮", "グランモスの巨獣肉"],
  }, {
    name: "ブリザモス",
    id: "90B",
    type: ["氷"],
    work: [
      {kind:"伐採",level:2},
      {kind:"採掘",level:2},
      {kind:"冷却",level:2}
    ],
    item: ["上質なパルオイル", "皮", "グランモスの巨獣肉"],
  }, {
    name: "ヒエティ",
    id: "91",
    type: ["氷"],
    work: [
      {kind:"手作業",level:2},
      {kind:"伐採",level:3},
      {kind:"運搬",level:4},
      {kind:"冷却",level:2}
    ],
    item: ["きれいな花", "氷結器官"],
  }, {
    name: "トロピティ",
    id: "91B",
    type: ["草"],
    work: [
      {kind:"種まき",level:1},
      {kind:"手作業",level:1},
      {kind:"伐採",level:3},
      {kind:"運搬",level:4}
    ],
    item: ["レタスの種", "トマトの種", "きれいな花"],
  }, {
    name: "グラクレス",
    id: "92",
    type: ["草", "地"],
    work: [
      {kind:"種まき",level:1},
      {kind:"手作業",level:1},
      {kind:"伐採",level:2},
      {kind:"運搬",level:3}
    ],
    item: ["ハチミツ"],
  }, {
    name: "ムラクモ",
    id: "93",
    type: ["無"],
    work: [
      {kind:"伐採",level:2}
    ],
    item: ["皮", "角"],
  }, {
    name: "ヤミトバリ",
    id: "94",
    type: ["闇"],
    work: [
      {kind:"製薬",level:3}
    ],
    item: ["布", "小さなパルのソウル"],
  }, {
    name: "フェスキー",
    id: "95",
    type: ["竜"],
    work: [
      {kind:"手作業",level:1},
      {kind:"運搬",level:3},
      {kind:"採集",level:2},
      {kind:"採掘",level:2}
    ],
    item: ["上質なパルオイル"],
  }, {
    name: "ボルカイザー",
    id: "96",
    type: ["炎"],
    work: [
      {kind:"火起こし",level:3},
      {kind:"採掘",level:4}
    ],
    item: ["石炭", "発火器官"],
  }, {
    name: "ヘルガルダ",
    id: "97",
    type: ["闇"],
    work: [
      {kind:"運搬",level:3}
    ],
    item: ["毒腺", "中くらいのパルのソウル"],
  }, {
    name: "ジオラーヴァ",
    id: "98",
    type: ["闇", "竜"],
    work: [
      {kind:"手作業",level:1},
      {kind:"採掘",level:4}
    ],
    item: ["パルメタルインゴット", "ピュアクォーツ"],
  }, {
    name: "デスティング",
    id: "99",
    type: ["地", "闇"],
    work: [
      {kind:"伐採",level:2},
      {kind:"採掘",level:3}
    ],
    item: ["石炭", "毒腺"],
  }, {
    name: "アヌビス",
    id: "100",
    type: ["地"],
    work: [
      {kind:"手作業",level:4},
      {kind:"運搬",level:2},
      {kind:"採掘",level:3}
    ],
    item: ["骨", "大きなパルのソウル", "革新的な技術書"],
  }, {
    name: "レヴィドラ",
    id: "101",
    type: ["水", "竜"],
    work: [
      {kind:"水やり",level:4}
    ],
    item: [""],
  }, {
    name: "アグニドラ",
    id: "101B",
    type: ["炎", "竜"],
    work: [
      {kind:"火起こし",level:4}
    ],
    item: ["上質なパルオイル", "発火器官"],
  }, {
    name: "スザク",
    id: "102",
    type: ["炎"],
    work: [
      {kind:"火起こし",level:3}
    ],
    item: ["発火器官"],
  }, {
    name: "シヴァ",
    id: "102B",
    type: ["水"],
    work: [
      {kind:"水やり",level:3}
    ],
    item: [""],
  }, {
    name: "エレパンダ",
    id: "103",
    type: ["雷"],
    work: [
      {kind:"手作業",level:2},
      {kind:"伐採",level:2},
      {kind:"運搬",level:3},
      {kind:"発電",level:3}
    ],
    item: ["発電器官", "皮"],
  }, {
    name: "リリクイン",
    id: "104",
    type: ["草"],
    work: [
      {kind:"種まき",level:4},
      {kind:"手作業",level:3},
      {kind:"製薬",level:3},
      {kind:"採集",level:2}
    ],
    item: ["低品質の医薬品", "綺麗な花", "革新的な技術書"],
  }, {
    name: "ルナクイン",
    id: "104B",
    type: ["闇"],
    work: [
      {kind:"手作業",level:3}, 
      {kind:"製薬",level:3},
      {kind:"採集",level:2}
    ],
    item: ["低品質の医薬品", "綺麗な花", "革新的な技術書"],
  }, {
    name: "ホルス",
    id: "105",
    type: ["炎"],
    work: [
      {kind:"火起こし",level:3},
      {kind:"運搬",level:3}
    ],
    item: ["発火器官"],
  }, {
    name: "ボルゼクス",
    id: "106",
    type: ["雷", "竜"],
    work: [
      {kind:"手作業",level:2},
      {kind:"運搬",level:3},
      {kind:"発電",level:4}
    ],
    item: ["発火器官"],
  }, {
    name: "ゼノグリフ",
    id: "107",
    type: ["闇"],
    work: [
      {kind:"採集",level:3}
    ],
    item: ["パルメタルインゴット", "カーボン繊維", "革新的な技術書"],
  }, {
    name: "セイントール",
    id: "108",
    type: ["無"],
    work: [
      {kind:"伐採",level:2},
      {kind:"採掘",level:2}
    ],
    item: [""],
  }, {
    name: "ベイントール",
    id: "109",
    type: ["闇"],
    work: [
      {kind:"伐採",level:2},
      {kind:"採掘",level:2}
    ],
    item: [""],
  }, {
    name: "グレイシャル",
    id: "110",
    type: ["氷"],
    work: [
      {kind:"冷却",level:4}
    ],
    item: [""],
  }, {
    name: "グレイシャドウ",
    id: "111",
    type: ["闇"],
    work: [
      {kind:"採集",level:4}
    ],
    item: ["ピュアクォーツ", "大きなパルのソウル"],
  }, {
    name: "ジェッドラン",
    id: "112",
    type: ["竜"],
    work: [
      {kind:"採集",level:3}
    ],
    item: [""],
  }
]

export { PalData };
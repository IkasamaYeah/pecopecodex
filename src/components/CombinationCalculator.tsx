import { PalData } from "./paldata";

export function CombinationCalculator () {
  PalData.map((partner) => {
  const resultMokoron = partner.id === "1" || partner.id === "2"

  const resultTsuppanyan = partner.id === "2" || partner.id === "18"

  const resultTamakokko = partner.id === "3"

  const resultKururisu = partner.id === "4" || partner.id === "14" || partner.id === "24" || partner.id === "32B"
                    })};
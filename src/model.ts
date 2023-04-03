// @ts-ignore
const math = window["math"];

import { Matrix2D, PopulationState } from "./types";

export class EulerLotkaVolterraModel {

    private interactionMatrix: Matrix2D = [];
    private intrinsicGrowthRateMatrix: Matrix2D = [];
    private initialPopulationMatrix: Matrix2D = [];
    private speciesCount: number;

    constructor(initPop: Matrix2D, intrinsicGrowthRates: Matrix2D, interactionMatrix: Matrix2D, speciesCount: number) {
        this.initialPopulationMatrix = initPop;
        this.intrinsicGrowthRateMatrix = intrinsicGrowthRates;
        this.interactionMatrix = interactionMatrix;
        this.speciesCount = speciesCount;
    }

    public runSimulation = (delta_t: number, max_t: number): PopulationState[] => {

        let lastPop = this.initialPopulationMatrix;

        let simulationData: PopulationState[] = [];

        for (let t = delta_t; t < max_t; t += delta_t) {

            console.log(math.add(this.intrinsicGrowthRateMatrix, math.multiply(this.interactionMatrix, lastPop)))
            // console.log(`dx/dt: ${math.dotMultiply(math.add(this.intrinsicGrowthRateMatrix, math.multiply(this.interactionMatrix, lastPop)), lastPop)}`);

            let thisState = math.add(lastPop, math.dotMultiply(delta_t, math.dotMultiply(math.add(this.intrinsicGrowthRateMatrix, math.multiply(this.interactionMatrix, lastPop)), lastPop)));
            lastPop = thisState;
            simulationData.push({population: thisState, time: t});

        }

        
        return simulationData;
    }

}

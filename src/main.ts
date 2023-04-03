import { EulerLotkaVolterraModel } from "./model";

const model = new EulerLotkaVolterraModel([[0.1],[1],[1],[1]], [[1],[1],[1],[1]], [[-0.5,0.2,0,0],[-0.5,-0.4,0.2,0],[0,-0.4,-0.5,0.2],[0,0,-0.4,-0.2]], 4);

console.log(model.runSimulation(0.005, 5));
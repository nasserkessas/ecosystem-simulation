// @ts-ignore
const Chart = window["Chart"];

import { EulerLotkaVolterraModel } from "./model";

const model = new EulerLotkaVolterraModel([[0.1], [1], [1], [1]], [[1], [1], [1], [1]], [[-0.5, 0.2, 0, 0], [-0.5, -0.4, 0.2, 0], [0, -0.4, -0.5, 0.2], [0, 0, -0.4, -0.2]], 4);

const simulationData = model.runSimulation(0.005, 5);

let times: number[] = [];
let population1: number[] = [];
let population2: number[] = [];
let population3: number[] = [];
let population4: number[] = [];

for (let t of simulationData) {
    times.push(t.time);
    population1.push(t.population[0][0]);
    population2.push(t.population[1][0]);
    population3.push(t.population[2][0]);
    population4.push(t.population[3][0]);
}

const ctx = document.getElementById('chart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: times   ,
        datasets: [{
            label: 'Species 1',
            data: population1,
            borderWidth: 0.1
        }, {
            label: 'Species 2',
            data: population2,
            borderWidth: 0.1
        }, {
            label: 'Species 3',
            data: population3,
            borderWidth: 0.1
        }, {
            label: 'Species 4',
            data: population4,
            borderWidth: 0.1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
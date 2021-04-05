const express = require('express');
const router = express.Router();
const { asyncHandler } = require("../utils")
const {one, A} = require("../trains")

//Gives a user the ability to plan a trip, including transfers
router.get("/detail/:id(\\d+)", asyncHandler(async (req, res, next) => {
    //get the from and to of the current user's trip information.
    //using graph data structure and traverse from station to to station and get all the possible routes.
    // send the data to the user. So user can pick which one to plan.
    //example.
    /*
    If a user wants to go to station #7 and he is currently located at station #A
    He can start at A - B - C - D - 5(transfer) - 6 - 7
    His ticket might look something like
    ticket = {
        departure: station A,
        arrival : station 7,
        transfer: [
                    {
                        transfer_from: line alphabet,
                        transfer_to: line number
                    }
                ],
        eta: 10
    }
    */

    function traverseStations(origin, start, end, transfer={}, eta=0, visited={}) {
        let key = start.name;
        if (key in visited) return false;
        if (start.name === end) {
            return {
                departure: `station ${origin.name}`,
                arrival : `station ${end}`,
                transfer,
                eta
            }
        }

        visited[key] = true;
        let neighbors = start.neighbors;

        for (let i = 0; i < neighbors.length; i ++) {
            let neighbor = neighbors[i];
            if (neighbor.line !== start.line && !(neighbor.name in visited)){
                transfer = {
                    transfer_from: `${start.line}`,
                    transfer_to: `${neighbor.line}`
                }
            }

           let recurResult = traverseStations(origin, neighbor, end, transfer, eta + neighbor.eta, visited)
           if (recurResult) {
               return recurResult
           }

        }
        return false;
    }
    let start =A;
    let end = 'D';
    let result = traverseStations(start, start, end);

    // {
    //     departure: 'station A',
    //     arrival: 'station seven',
    //     transfer: { transfer_from: 'alphabet', transfer_to: 'number' },
    //     eta: 60
    //   }

    res.json(result)
}))

module.exports = router;

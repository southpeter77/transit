const express = require('express');
const router = express.Router();
const {asyncHandler} = require("../utils")

const trains = {
    train1: {
        departure:'station A',
        departedTime: '11:30',
        arrival: 'station K',
        estimatedArrivalTime: '12:15',
        delay: 0
    },
    train2: {
        departure:'station C',
        departedTime: '11:30',
        arrival: 'station K',
        estimatedArrivalTime: '12:00',
        delay: 10
    },
    train3: {
        departure:'station E',
        departedTime: '1:30',
        arrival: 'station K',
        estimatedArrivalTime: '12:10',
        delay: 0
    },
}


//#1 A user can look up when a train is coming to a station
router.get("/:id(\\d+)/allTrains", asyncHandler( async (req,res,next) => {
    //grab data from trains and show estimated time of arrival to each trains.
    //const data = fetch('from data right here using req.params.id')
    //example below

    //We only need to provide the estimated time of arrival to the station.
    // just grab each train's estimatedArrivalTime and send it back to front.

    const arrivalTimes = Object.values(trains).map(each=>{
        if (each.delay) {
            return `${each.estimatedArrivalTime} (delay ${each.delay} minutes)`
        }else{
            return each.estimatedArrivalTime
        }
    });
    res.json(arrivalTimes);
}))

//show whether a train stop is busy at a particular time or currently
router.get("/busy", asyncHandler(async(req,res,next) => {
    /**
     Train will have properties like below.
     In order to get the busy or not busy of current/particular time, I'd be able to calculate it by grabbing all the train within certain time window and numbers.
     For example, within 15 mins and train count of 3
     train3: {
            departure:'station E',
            departedTime: '1:30',
            arrival: 'station K',
            estimatedArrivalTime: '1:10',
            delay: 0
        },
     */
    let currentTime = [12,00]
    const totalTrainAtGiveTime = Object.values(trains).filter(each=>{
        let arrivingTime = each.estimatedArrivalTime.split(':')
        let time = [arrivingTime[0], arrivingTime[1]];
        if (Math.abs(Number(time[0]) - currentTime[0]) <=1 && Math.abs(Number(time[1] - currentTime[1] <= 15))){
            return each
        }
    })
    if (totalTrainAtGiveTime.length >= 3) {
        res.json("Very busy")
    }else {
        res.json("Not very busy")
    }
}))

module.exports = router;

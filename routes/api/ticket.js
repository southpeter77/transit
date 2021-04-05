const express = require('express');
const router = express.Router();
const { asyncHandler } = require("../utils")


//A user can buy train tickets
router.get("/buy", asyncHandler( async(req,res,next) =>{
    //get the detail information from trip's api data.
    //use the data to calculate price.
    //return the data.

    //data and payment are from req.body
    const data =    
    {
            departure: 'station A',
            arrival: 'station seven',
            transfer: { transfer_from: 'alphabet', transfer_to: 'number' },
            eta: 60
          }
    
    const payment = 10;
    
    // purchase
    const purchasedDataResult = purchase(data, payment)
    function purchase (data, payment) {
        // some logics here to do purchase or other system.
        data['activate'] = false;
        data['price'] = payment
        data['paid'] = true;
        return data
    }
    console.log("zasdf")
    res.json(purchasedDataResult)
}))

// A user can find their current or past ticket
router.get("/all",asyncHandler(async(req,res,next) =>{
    //grab from the database.
    //SELECT * FROM tickets
    //JOIN tickets ON ticket.id = user.ticket_ids
    //WHERE user_id = 1
    const allTickets = {
        ticket1 : {
            "departure": "station A",
            "arrival": "station seven",
            "transfer": {
                "transfer_from": "alphabet",
                "transfer_to": "number"
            },
            "eta": 60,
            "activate": true,
            "price": 10,
            "paid": true
        },
        ticket2 : {
            "departure": "station B",
            "arrival": "station seven",
            "transfer": {
                "transfer_from": "alphabet",
                "transfer_to": "number"
            },
            "eta": 50,
            "activate": true,
            "price": 10,
            "paid": true
        },
        ticket3 :{
            "departure": "station C",
            "arrival": "station seven",
            "transfer": {
                "transfer_from": "alphabet",
                "transfer_to": "number"
            },
            "eta": 40,
            "activate": false,
            "price": 10,
            "paid": true
        }
    }
    res.json(allTickets)
}))

//A user can activate a ticket when the conductor comes to their train car
router.put("/activate", asyncHandler(async(req,res,next) => {
    //get user's ticket data from req.body.
    //go to the databse to change the activate on the ticket.
    //UPDATE tickets
    //SET activate = true
    //JOIN tickets ON ticket.id = user.ticket_ids
    //WHERE user_id = 1
    
    const ticket = {
        "departure": "station C",
        "arrival": "station seven",
        "transfer": {
            "transfer_from": "alphabet",
            "transfer_to": "number"
        },
        "eta": 40,
        "activate": true,
        "price": 10,
        "paid": true
    }
    res.json(ticket)
}))

module.exports = router;

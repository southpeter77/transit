## 1. npm install

## 2. npm start ( will run the server)

## 3. test each api. (I used postman to test)

-----------
|Path|HTTP Verb|Meaning|
|-|-|-|
|/api/station/:id/allTrains|GET|A user can look up when a train is coming to a station|
|/api/station/busy|GET|show whether a train stop is busy at a particular time or currently|
|/api/ticket/buy|GET|A user can buy train tickets|
|/api/ticket/all|GET|A user can find their current or past ticket|
|/api/ticket/activate|PUT|A user can activate a ticket when the conductor comes to their train car|
|/api/trip/detail/:id|GET|Gives a user the ability to plan a trip, including transfers|
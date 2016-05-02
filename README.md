# FOOD ORDERING APP

A food ordering app built with MongoDB and Angular. 

Node provides the RESTful API. Angular provides the frontend and accesses the API. MongoDB stores like a hoarder.

## Requirements

- [Node and npm](http://nodejs.org)
- MongoDB: Make sure you have your own local or remote MongoDB database URI configured in `config/database.js`

## Installation

1. Clone the repository: `git clone git@github.com:coder121/hungryHackerChallenge.git`
2. Install the application: `npm install`
3. Place your own MongoDB URI in `config/database.js`
3. Start the server: `node server.js`
4. View in browser at `http://localhost:3030`

## Task

This repo corresponds to food ordering on [gesto](https://stackedit.io/viewer#!url=https://drive.google.com/uc?id=0BzhyPB16kZZ0dnlxU1lKckRMVDQ)

## API
1. GET	/api/food	`Get all of the food items in the order`
2. POST	/api/food	`Create a single food item`
3. DELETE	/api/food/:food_id	`Delete a single food item`
4. GET	/api/total	`Total the price of all food items (use 7.5% for tax)`




Happy Ordering!

![Food-Ordering](http://i.imgur.com/zaMvOt6.png?1)

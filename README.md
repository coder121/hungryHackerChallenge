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

This repo corresponds to food ordering task [gesto](https://stackedit.io/viewer#!url=https://drive.google.com/uc?id=0BzhyPB16kZZ0dnlxU1lKckRMVDQ)

## API
1. GET	/api/food	`Get all of the orders`
2. POST	/api/food	`Create a single order`
3. DELETE	/api/food/:food_id	`Delete a single order`
4. GET	/api/total	`Total the price of all orders (use 7.5% for tax)`

## Bonus
1. GET	/api/menu	`Return all the menu items`
2. POST /api/menu   `Create a single menu item`
3. POST /api/menu/all  `Create menu item from list of items`




Happy Ordering!

![Food-Ordering](http://i.imgur.com/zaMvOt6.png?1)

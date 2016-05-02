var Order = require('./models/order');
var Menu= require('./models/menu');

function getOrder(res) {
    Order.find(function (err, Orders) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }
       
        res.json(Orders); // return all Order in JSON format
    });
}
;

function getMenu(res) {
    Menu.find(function (err, menuItems) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }
       
        res.json(menuItems); // return all Order in JSON format
    });
}
;


function getTotal(res) {
  Order.find(function (err, Orders) {
        
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }
        var subTotal=0;
        for (var i=0;i<Orders.length;i++){
            subTotal+=Orders[i]['total'];
        }
        var taxPercent=7.5;
        var tax=(taxPercent/100)*subTotal;
        var estimatedTotal=subTotal+tax;
        
       res.json({"subTotal":subTotal,"estimatedTotal":estimatedTotal,"tax":tax});// return all Order in JSON format
    });
  
};

module.exports = function (app) {
    
      app.get('/api/total', function (req, res) {
        // use mongoose to get all Orders in the database
         getTotal(res);
      
          
          
          
        
    });

    // api ---------------------------------------------------------------------
    // get all Orders
    app.get('/api/food', function (req, res) {
        // use mongoose to get all Orders in the database
        getOrder(res);
    });

    // create Order and send back all Orders after creation
    app.post('/api/food', function (req, res) {

        // create a Order, information comes from AJAX request from Angular
        Order.create({
            foodName: req.body.foodName,
            price:req.body.price,
            quantity:req.body.quantity,
            total:req.body.total,
            done: false
        }, function (err, Order) {
            if (err)
                res.send(err);

            // get and return all the Orders after you create another
            getOrder(res);
        });

    });

    // delete a Order
    app.delete('/api/food/:food_id', function (req, res) {
        Order.remove({
            _id: req.params.food_id
        }, function (err, Order) {
            if (err)
                res.send(err);

            getOrder(res);
        });
    });
    
       app.get('/api/menu', function (req, res) {
        // use mongoose to get all Orders in the database
         getMenu(res);
       });
      app.post('/api/menu', function (req, res) {

        // create a Order, information comes from AJAX request from Angular
        Menu.create({
            foodName: req.body.foodName,
            price:req.body.price,
            done: false
        }, function (err, Order) {
            if (err)
                res.send(err);
            getMenu(res);
        });

    });
    
    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
    
    


};
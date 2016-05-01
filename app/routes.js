var Food = require('./models/food');

function getFood(res) {
    Food.find(function (err, Foods) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }
       
        res.json(Foods); // return all Food in JSON format
    });
}
;


function getTotal(res) {
  Food.find(function (err, Foods) {
        
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }
        var subTotal=0;
        for (var i=0;i<Foods.length;i++){
            subTotal+=Foods[i]['price'];
        }
        var taxPercent=7.5;
        var tax=(taxPercent/100)*subTotal;
        var estimatedTotal=subTotal+tax;
        
       res.json({"subTotal":subTotal,"estimatedTotal":estimatedTotal,"tax":tax});// return all Food in JSON format
    });
  
};

module.exports = function (app) {
    
      app.get('/api/total', function (req, res) {
        // use mongoose to get all Foods in the database
         var result=getTotal(res);
      
          
          
          
        
    });

    // api ---------------------------------------------------------------------
    // get all Foods
    app.get('/api/food', function (req, res) {
        // use mongoose to get all Foods in the database
        getFood(res);
    });

    // create Food and send back all Foods after creation
    app.post('/api/food', function (req, res) {

        // create a Food, information comes from AJAX request from Angular
        Food.create({
            foodName: req.body.foodName,
            price:req.body.price,
            done: false
        }, function (err, Food) {
            if (err)
                res.send(err);

            // get and return all the Foods after you create another
            getFood(res);
        });

    });

    // delete a Food
    app.delete('/api/food/:food_id', function (req, res) {
        Food.remove({
            _id: req.params.food_id
        }, function (err, Food) {
            if (err)
                res.send(err);

            getFood(res);
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
    
    


};
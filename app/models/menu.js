var mongoose = require('mongoose');

module.exports = mongoose.model('Menu', {
    foodName: {
        type: String,
        default: ''
    },
    price:{
    	type:Number
    	
    }
  
});
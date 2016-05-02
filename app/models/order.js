var mongoose = require('mongoose');

module.exports = mongoose.model('Order', {
    foodName: {
        type: String,
        default: ''
    },
    price:{
    	type:Number
    	
    },
    quantity:{
        type:Number,
        default:1
    },
    total:{
        type:Number
    }
});
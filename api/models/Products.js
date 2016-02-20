/**
 * Products.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
//var Waterline = require('waterline');
 module.exports = {


  attributes: {

   toJSON: function() {


 purchaseinvoice_count=0;
 orders_count=0;
       var obj = this.toObject();

       //Üründen depoya kaç adet satın alındığı alınıyor
       
       sails.models.purchaseinvoice.find({'product_id':obj.id,'store_id':obj.store_id},function (err, purchaseinvoice) {

           for(var k in purchaseinvoice) {

               purchaseinvoice_count = purchaseinvoice_count + purchaseinvoice[k].total;
            }

           console.log("alınan" + obj.name.tr +" "+purchaseinvoice_count);
          

       })

      
       sails.models.order.find({'product_id':obj.id,'store_id':obj.store_id},function (err, order) {

           for(var k in order) {

               orders_count = orders_count + order[k].total;
           }
           
           console.log("satılan "+obj.name.tr +" "+ orders_count);

       })

      /*
       //Ürünün kaç adet satıldığı alınıyor
       store_count = "0";
       sails.models.store.find({'product_id':obj.id,'store_id':obj.store_id},function (err, s_count) {
       store_count=s_count
       console.log(s_count);
       })
      */

       return obj;

   }



  }







}




# Getir Web Api
Kullanılan npm paketleri : sails-js, sails-mongo, waterlock

Web Api conroller erişimleri config/policies.js içinden yönetilecek

Web Api List;<br>
Store List : http://localhost:1337/store/<br>
Product Categories List  : http://localhost:1337/categories/<br>
Product  List  : http://localhost:1337/products/<br>
User Create : http://localhost:1337/user/create<br>
User Login : http://localhost:1337/auth/login<br>
User Get  Json Web Token : http://localhost:1337/user/jwt<br>
Depolar için ürün alım servisi : http://localhost:1337/purchaseInvoice/create<br>
Order Create : http://localhost:1337/order/create<br>

Ürün Kategorileri ve Ürünlerde Localization var örnek datalar<br>

#Categories
{
    "_id" : ObjectId("56c84411ac00cc6359f45467"),
    "parentId" : "0",
    "name" : {
        "tr" : "Evcil Hayvan",
        "en" : "Pet"
    },
    "description" : {
        "tr" : "Evcil Hayvan",
        "en" : "Pet"
    },
    "createdAt" : ISODate("2016-02-20T10:39:03.673Z"),
    "updatedAt" : ISODate("2016-02-20T10:39:03.673Z")
}


#Products
{
    "_id" : ObjectId("56c8418f0b4110ad0539c2a1"),
    "categories_id" : "56c842470b4110ad0539c2a3",
    "store_id" : "56c848cd0b4110ad0539c2a7",
    "name" : {
        "tr" : "Tat Ketçap (200 g)",
        "en" : "Tat Ketchup (200 g)"
    },
    "description" : {
        "tr" : "Tat Ketçap (200 g)",
        "en" : "Tat Ketchup (200 g)"
    },
    "image" : {
        "0" : "tat1.jpg",
        "1" : "tat2.jpg"
    },
    "unitPrice" : 9.5,
    "createdAt" : ISODate("2016-02-20T10:35:59.648Z"),
    "updatedAt" : ISODate("2016-02-20T10:35:59.648Z")
}
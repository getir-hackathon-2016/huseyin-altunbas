/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    restricted: function function_name(req, res) {
        res.ok("login olundu...");
    },
    open: function (req, res) {
        res.ok("acik fonksiyon...");
    },
    jwt: function (req, res) {
        res.ok("Token Gecerli..");
    }
};


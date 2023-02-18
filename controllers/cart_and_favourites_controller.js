// const cartModel = require("../../models/cart_schema");
// const favouritesModel = require("../../models/favourites_schema");

const cartModel = require("../models/cart_schema");
const favouritesModel = require("../models/favourites_schema");

const cartAndFavuritesProductController = {
  //   products

  //  cart products api

  // cart products get api

  getCartProduct: async (req, res, next) => {
    const { uid } = req.params;
    const _uid = uid;
    cartModel.find({ uid: _uid }, (err, data) => {
      if (err) {
        console.log(` cart product get err : ${err}`);
        res.json({
          message: `err : ${err}`,
        });
        throw err;
      } else {
        res.json(data);
        console.log("data running");
      }
    });
  },

  //   cart product post api

  postCartProduct: async (req, res) => {
    const { title, price } = req.body.product;

    title && price
      ? cartModel.create(req.body, (error, data) => {
          if (error) {
            res.json({
              message: " add plantify cart products error.",
            });
          } else {
            res.json({
              message: `plantify cart products`,
              data,
            });
            console.log("plantify cart products data ");
          }
        })
      : null;
  },

  // favourites product api

  // favourites product get api

  getFavouritesProduct: async (req, res, next) => {
    const { uid } = req.params;
    const _uid = uid;
    favouritesModel.find({ uid: _uid }, (err, data) => {
      if (err) {
        console.log(`err : ${err}`);
        res.json({
          message: `err : ${err}`,
        });
        throw err;
      } else {
        res.json({
          message: `plantify favourites products`,
          data,
        });
        console.log("plantify favourites products data ");
      }
    });
  },

  //   favourites product post api

  postFavouritesProduct: async (req, res) => {
    console.log("body", req.body);
    favouritesModel.create(req.body, (error, data) => {
      if (error) {
        // res.send("error", error);
        res.json({
          message: "favourites products error.",
        });
      } else {
        res.json({
          message: "favourites product added successfully.",
          data,
        });
      }
    });
  },
};

module.exports = cartAndFavuritesProductController;

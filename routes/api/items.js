const express = require("express");
const router = express.Router();

const Item = require("../../models/Item");

//@route    GET api/items
//@desc     Get all items
//@access   Public
router.get("/", (req, res) => {
  Item.find()
    .then(items => console.log(res.json(items)))
    .catch(err => console.log(err));
});

//@route    POST api/items
//@desc     Create an item
//@access   Public
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
  newItem.save().then(item => console.log(res.json(item)));
});

//@route    DELETE api/items
//@desc     DELETE an items
//@access   Public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id).then(item =>
    item
      .remove()
      .then(() => res.json({ success: true }))
      .catch(err => res.status(404).json({ success: false }))
  );
});

module.exports = router;

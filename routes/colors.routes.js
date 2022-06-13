const {Router} = require("express");
const Colors = require("../models/Colors");
const router = Router();

router.get('/colors', async (req, res) => {
  try {
    const colors = await Colors.find({});
    res.json(colors)
  } catch (e) {
    res.status(500).json( { message: 'Что-то пошло не так, попробуйте снова' })
  }
});

router.put('/update/:id', async (req, res) => {
    try {
      const { header, color1, color2, color3, color4, color5, color6, color7, color8} = req.body;
      await Colors.updateOne(
        { _id: req.params.id },
      { $set: { header, color1, color2, color3, color4, color5, color6, color7, color8 }},
      { upsert: true }
      )

      res.status(201).json({ message: 'Цвета изменены', colors: {color1, color2, color3, color4, color5, color6, color7, color8} })

    } catch (e) {
      console.log(e);
      res.status(500).json( { message: 'Что-то пошло не так, попробуйте снова' })
    }
  }
);

module.exports = router;
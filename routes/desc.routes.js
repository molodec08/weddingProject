const {Router} = require("express");
const Description = require("../models/Description");
const auth = require('../middleware/auth.middleware');
const router = Router();

router.get('/last-desc', async (req, res) => {
  try {
    const desc = await Description.findOne().sort('-date');
    res.json(desc)
  } catch (e) {
    res.status(500).json( { message: 'Что-то пошло не так, попробуйте снова' })
  }
});

router.get('/all-revision', async (req, res) => {
  try {
    const desc = await Description.find().sort('-date');
    res.json(desc)
  } catch (e) {
    res.status(500).json( { message: 'Что-то пошло не так, попробуйте снова' })
  }
});

router.post(
  '/create',
  [],
  async (req, res) => {
    try {
      const { header, desc } = req.body;
      const description = new Description({ header, desc });

      await description.save()

      res.status(201).json({ message: 'Описание события добавлено', description })

    } catch (e) {
      console.log(e);
      res.status(500).json( { message: 'Что-то пошло не так, попробуйте снова' })
    }
  }
);

module.exports = router;
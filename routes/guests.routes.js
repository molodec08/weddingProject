const {Router} = require("express");
const fs = require("fs");
const auth = require('../middleware/auth.middleware');
const Guests = require("../models/Guests");
const router = Router();

// /api/guests/create
router.post(
  '/create',
  [],
  async (req, res) => {
    try {
      const { name, desc, img, active } = req.body;
      const newGuest = new Guests({ name, desc, img, active });

      await newGuest.save()

      res.status(201).json({ message: 'Гость добавлен' })

    } catch (e) {
      console.log(e);
      res.status(500).json( { message: 'Что-то пошло не так, попробуйте снова' })
    }
  }
);

router.post(
  '/upload-file',
  [],
  async (req, res) => {
    try {
      const file = req.files.file;

      const path1 = `./client/public/img/${file.name}`;
      const path2 = `./client/dist/img/${file.name}`;

      if (fs.existsSync(path1)) {
        return res.status(400).json({message: "Файл с таким именем уже существует"})
      }

      await file.mv(path1);
      function copyFile(source, target) {
        return new Promise(function(resolve, reject) {
          const rd = fs.createReadStream(source);
          rd.on('error', rejectCleanup);
          const wr = fs.createWriteStream(target);
          wr.on('error', rejectCleanup);
          function rejectCleanup(err) {
            rd.destroy();
            wr.end();
            reject(err);
          }
          wr.on('finish', resolve);
          rd.pipe(wr);
        });
      }
      await copyFile(path1, path2)

      res.status(201).json(`../img/${file.name}`);

    } catch (e) {
      res.status(500).json( { message: 'Что-то пошло не так, попробуйте снова', error: e })
    }
  }
);

router.get('/', async (req, res) => {
  try {
    const guests = await Guests.find({});
    res.json(guests);
  } catch (e) {
    res.status(500).json( { message: 'Что-то пошло не так, попробуйте снова' })
  }
});

router.get('/:id', async (req, res) => {
  try {
    const guest = await Guests.findById(req.params.id);
    res.json(guest);
  } catch (e) {
    res.status(500).json( { message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { name, desc, img, active } = req.body;
    await Guests.updateOne(
      { _id: req.params.id },
      { $set: { name: name, desc: desc, img: img, active: active } }
    )
    res.status(201).json({ message: 'Информация о госте обновлена' });
  } catch (e) {
    res.status(500).json( { message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.delete('/:id', async (req, res) => {
    try {
      await Guests.findOneAndDelete({_id: req.params.id});

      const guests = await Guests.find({});
      res.json(guests);
    } catch (e) {
      res.status(500).json( { message: 'Что-то пошло не так, попробуйте снова' })
    }
});

module.exports = router;
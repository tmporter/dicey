// /api/games
const router = require("express").Router();
const Game = require("../../data/models/Game");
const fs = require("fs");
const multer = require("multer");
const { generateGameUrl } = require("../../helpers/gameHelpers");

const upload = multer();

// GET /api/games
router.get("/", async (req, res) => {
   try {
      const games = await Game.find();
      return res.status(200).send({ games });
   } catch (error) {
      console.error(error);
      return res.status(500).send({ message: "An error occurred fetching the games." });
   }
});

// GET /api/games/id
router.get("/:id", async (req, res) => {
   try {
      const { id } = req.params;
      const game = await Game.findOne({ id });
      return res.status(200).send({ game });
   } catch (error) {
      console.error(error);
      return res.status(500).send({ message: "An error occurred fetching the game." });
   }
});

// POST /api/games
router.post("/", upload.single("gameFile"), async (req, res) => {
   console.log(req.body);
   const { game } = req.body;

   console.log(game);
   console.log(req.file);

   // todo: validation

   const newGame = new Game({
      id: generateGameUrl(game.title),
      title: game.title,
      author: "ya boi", // todo: this should be current user. get from token?
      description: game.description,
      thumbnail: game.thumbnail
      // file: fs.readFileSync(req.files[0].path)
   });

   try {
      await newGame.save();
      const games = await Game.find();
      return res.status(200).send({ games });
   } catch (error) {
      console.error(error);
      return res.status(500).send({ message: "An error occurred saving this game." });
   }
});

module.exports = router;

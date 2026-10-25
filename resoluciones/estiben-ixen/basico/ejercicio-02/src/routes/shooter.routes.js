const { Router } = require("express");
const {
  getInfo,
  getLoadouts,
  getLoadoutById,
  postLoadout
} = require("../controllers/shooter.controller");

const router = Router();

router.get("/", getInfo);
router.get("/loadouts", getLoadouts);
router.get("/loadouts/:id", getLoadoutById);
router.post("/loadouts", postLoadout);

module.exports = router;

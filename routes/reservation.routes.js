const express = require("express");
const router = express.Router();
const controller = require("../controllers/reservation.controller");

router.post("/", controller.createReservation);
router.get("/", controller.getAllReservations);
router.get("/:id", controller.getReservationById);
router.delete("/:id", controller.deleteReservation);

module.exports = router;

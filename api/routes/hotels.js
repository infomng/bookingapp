import express from "express";
const router = express.Router();
import {
  createHotel,
  deleteHotel,
  updateHotel,
  getHotel,
  getHotels,
  countByCity,
  countByType,
  getHotelRooms
} from "../controllers/hotels.js";

//CREATE
router.post("/", createHotel);



//UPDATE
router.put("/:id", updateHotel);
//DELETE

router.delete("/:id", deleteHotel);

//GET
router.get("/find/:id", getHotel);


//GET ALL
router.get("/", getHotels);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);









export default router;

import express from "express";
const router = express.Router();
import Hotel from "../models/Hotel.js";
import {
  createHotel,
  deleteHotel,
  updateHotel,
  getHotel,
  getHotels,
} from "../controllers/hotels.js";

//CREATE
router.post("/", createHotel);



//UPDATE
router.put("/:id", updateHotel);
//DELETE

router.delete("/:id", deleteHotel);

//GET
router.get("/:id", getHotel);


//GET ALL
router.get("/", getHotels);




export default router;

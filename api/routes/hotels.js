import express from "express";
const router = express.Router();
import Hotel from "../models/Hotel.js"

//CREATE 
router.post("/", async (req,res) => {
    const newHotel = new Hotel(req.body);

    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    }

catch(err) {
    res.status(500).json(err);
}
}
)
//UPDATE
router.put("/:id", async (req,res) => {
    try{
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true});
    res.status(200).json(updatedHotel); 
    }catch(err) {
        res.status(500).json(err);
    }

});
//DELETE

router.delete("/:id", async (req,res) => {
    try{
     await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("hotel has been deleted");
    }catch(err) {
        res.status(500).json(err);

    };

});
//GET 
router.findOne("/:id", async (req,res) => {
    try{
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);

    }catch(err) {
        res.status(500).json(err);
    }
});
//GET ALL
router.find("/", async (req, res) => {
  try {
    const hotels = await Hotel.find(req.params.id);
    res.status(200).json(hotels);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;

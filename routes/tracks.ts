import express from 'express';

const router = express.Router();
let tracks = require("../db");


//All tracks

router.get("/tracks", async (req, res) => {
  try {
    res.status(200).json({
      tracks
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});

//Given a track id return the associated track details.

router.get("/tracks/:id", async (req, res) => {
  let { id } = (req as any).params;
  id = Number(id);
  try {
    let track = tracks.find((track: { id: any; }) => track.id === id);
    res.status(200).json({
      data: track
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});


// //Given an artist name return the details of the associated tracks

router.get("/artists/:artist", async (req, res) => {
  let { artist } = req.params;
  artist = String(artist);
  try {
    let track = tracks.find((track: { artist: any; }) => track.artist === artist);
    res.status(200).json({
      data: track
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});


//   //Given an artist name return the details of the associated tracks (as query)

//   router.get("/artists", async (req, res) => {
//     let { artist } = req.query;
//     artist = String(artist);
//     try {
//       let track = tracks.find((artist: any) => track.artist === artist);
//       res.status(200).json({
//         data: track
//       });
//     } catch (err) {
//       res.status(400).json({
//         message: "Some error occured",
//         err
//       });
//     }
//   });


module.exports = router;


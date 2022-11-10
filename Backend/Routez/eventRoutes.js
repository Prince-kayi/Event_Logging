const express = require("express");
const Events = require("../Models/Events")

const router = express.Router();

router.post("/register", (req, res) => {
   const SignedUpUser = new Events({
      practitionerId: req.body.practitionerId,
      name: req.body.name,
      surname: req.body.surname,
      jobDescription: req.body.jobDescription
   });
   SignedUpUser.save()
      .then(data => {
         res.json(data)
      })
      .catch(error => {
         res.json(error)
      }
      )
});
router.post("/admin", (req, res) => {
   const AdminUser = new Events({
     adminId:req.body.adminId
   });
   AdminUser.save()
      .then(data => {
         res.json(data)
      })
      .catch(error => {
         res.json(error)
      }
      )
});
router.post("/admit", (req, res) => {
   const AdmitUser = new Events({
      ward: req.body.ward,
      admission: req.body.admission
   });
   AdmitUser.save()
      .then(data => {
         res.json(data)
      })
      .catch(error => {
         res.json(error)
      }
      )
});
router.get('/events', async (req, res) => {
   let results = await Events.find({});
   res.status(200).send(results);
});

module.exports = router;
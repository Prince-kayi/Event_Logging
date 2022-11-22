const express = require("express");
const Pratitioner = require("../Models/Practitioner");
const Adminision = require("../Models/Adminisions");
const Result = require("../Models/Result");
const Treatment = require("../Models/Treatment");
const Diagonsi = require("../Models/Diagonsi");
const Patient = require("../Models/Patient");
const Administration = require("../Models/Administration");
const router = express.Router();

router.post("/register", (req, res) => {
   const practitioner = new Pratitioner({
      practitionerId: req.body.practitionerId,
      name: req.body.name,
      surname: req.body.surname,
      jobDescription:req.body.jobDescription
   });
   practitioner.save()
      .then(data => {
         res.json(data)
      })
      .catch(error => {
         res.json(error)
      }
      )
});
router.post("/admin", (req, res) => {
   const administration = new Administration({
      Id: req.body.Id
   });
   console.log(req.body.id);
   administration.save()
      .then(data => {
         res.json(data)
      })
      .catch(error => {
         res.json(error)
      }
      )
});
router.post("/results", (req, res) => {
   const result = new Result({
      option: req.body.option
   });
   console.log(req.body.id);
   result.save()
      .then(data => {
         res.json(data)
      })
      .catch(error => {
         res.json(error)
      }
      )
});
router.post("/admit", (req, res) => {
   const adminision = new Adminision({
      ward: req.body.ward,
      admission: req.body.admission
   });
   adminision.save()
      .then(data => {
         res.json(data)
      })
      .catch(error => {
         res.json(error)
      }
      )
});
router.post("/treat", (req, res) => {
   const treatment = new Treatment({
      option: req.body.option
   });
   treatment.save()
      .then(data => {
         res.json(data)
      })
      .catch(error => {
         res.json(error)
      }
      )
});
router.post("/type", (req, res) => {
   const diagonsi = new Diagonsi({
      option: req.body.option
   });
   diagonsi.save()
      .then(data => {
         res.json(data)
      })
      .catch(error => {
         res.json(error)
      }
      )
});router.post("/login", (req, res) => {
   const patient = new Patient({
      patientId: req.body.patientId,
      vitalReadings: req.body.vitalReadings
   });
   patient.save()
      .then(data => {
         res.json(data)
      })
      .catch(error => {
         res.json(error)
      }
      )
});
router.get('/csv', async (req, res) => {
   let results = await Pratitioner.find({});
   res.write("PRACTIONERID, FIRSTNAME, LASTNAME, DATE ");
   
   res.end();
});

module.exports = router;
import * as express from 'express';
import Incident from '../models/incident';

let router = express.Router();

router.get('/', (req, res) => {
  Incident.find()
  .then((incidents)=> res.json(incidents))
  .catch((err)=> res.json(err));
});

router.get('/:id', (req, res) => {
  Incident.findOne({_id: req.params.id})
  .then((incident)=> res.json(incident))
  .catch((err)=> res.json(err));
});

router.post('/', (req, res)=> {
  let incident = new Incident();
  incident.id = req.body.id;
  incident.incidentDetails = req.body.incidentDetails;
  incident.save()
  .then((newIncident)=> res.json(newIncident))
  .catch((err)=> res.json(err));
});

router.put('/:id', (req, res) => {
  Incident.findOne({_id: req.params.id})
  .then((incident)=> {
    incident.id = req.body.id;
    incident.incidentDetails = req.body.incidentDetails;
    incident.save()
      .then((incident)=> res.json(incident))
      .catch((err)=> res.json(err));
  })
  .catch((err)=> res.json(err));
});

  router.delete('/:id', (req, res)=> {
    Incident.remove({_id: req.params.id})
    .then((house)=> res.json(house))
    .catch((err)=> res.json(err));
  });

  export default router;

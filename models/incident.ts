import * as mongoose from 'mongoose';
import {IncidentDetails} from './incidentDetails';
import incidentDetailsSchema from './incidentDetails';

export interface Incident extends mongoose.Document {
id: string;
incidentDetails: IncidentDetails[];
}

let incidentSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  incidentDetails: {
    type: [incidentDetailsSchema]
  }
});

export default mongoose.model<Incident>('Incident', incidentSchema);

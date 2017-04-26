import * as mongoose from 'mongoose';

export interface IncidentDetails extends mongoose.Document {
  employeeFirstName: string;
  employeeLastName: string;
  dateOfIncident: number;
  followUpNeeded: boolean;
}

let incidentDetailsSchema = new mongoose.Schema({
  employeeFirstName: {
    type: String,
    required: false
  },
  employeeLastName: {
    type: String,
    required: false
  },
  dateOfIncident: {
    type: Number,
    required: false
  },
  followUpNeeded: {
    type: Boolean,
    required: true
  }
});

export default incidentDetailsSchema;

namespace lnproject.Controllers{

  export class updateIncidentController {
    public incident;
    public incidentDetails;

    static $inject = ['incidentService', '$state', '$stateParams']

    constructor(private incidentService, private $state, private $stateParams){
      this.incident = incidentService.getIncident($stateParams.id);
    }

    public addIncidentDetails() {
      let newIncidentDetails = {employeeFirstName:'', employeeLastName:'', dateOfIncident: 0, followUpNeeded: 0};
      newIncidentDetails.employeeFirstName = this.incidentDetails.employeeFirstName;
      newIncidentDetails.employeeLastName = this.incidentDetails.employeeLastName;
      newIncidentDetails.dateOfIncident = this.incidentDetails.dateOfIncident;
      newIncidentDetails.followUpNeeded = this.incidentDetails.followUpNeeded;
      this.incidentDetails.employeeFirstName = '';
      this.incidentDetails.employeeLastName = '';
      this.incidentDetails.dateOfIncident = 0;
      this.incidentDetails.followUpNeeded = 0;
    }

    public cancel(){
      this.$state.go('incident', {id: this.incident._id});
    }

    public saveIncident(){
      this.incidentService.updateIncident(this.incident._id, this.incident)
      .then(()=> this.$state.go('incident', {id: this.incident._id}))
      .catch((err)=> console.error(err));
    }
  }
}

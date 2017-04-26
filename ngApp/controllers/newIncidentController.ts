namespace lnproject.Controllers {

  export class newIncidentController {
    public incident;
    public incidentDetails;

    static $inject = ['incidentService', '$state']

    constructor(private incidentService, private $state){
      this.incident={};
      this.incident.incidentDetails = [];
    }

    public addIncidentDetails(){
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

    public saveIncident(){
      this.incidentService.createIncident(this.incident)
      .then(()=> this.$state.go('incidents'))
      .catch((err)=> console.error(err));
    }
  }
}

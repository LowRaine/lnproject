namespace lnproject.Controllers{

  export class incidentsController {
    public incidents;

    static $inject = ['incidentService', '$state'];

    constructor(private incidentService, private $state){
      this.incidents = incidentService.getAllIncidents();
    }

    public createNewIncident(){
      this.$state.go('newIncident');
    }

    public getIncident(id){
      this.$state.go('incident', {id: id});
    }
  }
}

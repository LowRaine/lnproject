namespace lnproject.Controllers {

  export class IncidentController{
    public incident;

    static $inject = ['IncidentService', '$stateParams', '$state'];

    constructor(private incidentService, $stateParams, private $state){
      this.incident = incidentService.getIncident($stateParams.id);
    }

    public deleteIncident(){
      this.incidentService.deleteIncident(this.incident._id)
      .this(()=> this.$state.go('incidents'))
      .catch((err)=> console.error(err));
    }

    public updateIncident(){
      this.$state.go('updateIncident', {id: this.incident._id});
    }
  }
}

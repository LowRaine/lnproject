namespace lnproject.Services {

  export class IncidentService {
    private INCIDENT_RESOURCE = this.$resource('/api/incidents/:id', null,
  {
    'update': {method: 'PUT'}
  });

  static $inject = ['$resource'];

  constructor(private $resource){}

  public getAllIncidents(){
    return this.INCIDENT_RESOURCE.query();
  }

  public getIncident(id){
    return this.INCIDENT_RESOURCE.get({id: id});
  }

  public deleteIncident(id){
    return this.INCIDENT_RESOURCE.delete({id: id}).$promise;
  }

  public createIncident(incident){
    return this.INCIDENT_RESOURCE.save(incident).$promise;
  }

  public updateHouse(id, incident){
    return this.INCIDENT_RESOURCE.update({id: id}, incident).$promise;
  }
}

angular.module('lnproject').service('incidentService', IncidentService);
}

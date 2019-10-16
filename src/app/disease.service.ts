import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DiseaseService {

  options = {
    headers:  new HttpHeaders({
      'Accept': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  listDiseasesAndDrugs() {
    return this.http.get('/api/diseaseordrug', this.options);
  }

  listDiseasesByDrug(drugIri: any) {
    return this.http.get('/api/disease?drug_id=' + drugIri, this.options);
  }

  getDiseases(iri: any) {
    return this.http.get('/api/disease/' + iri, this.options);
  }

  getDiseasePhenotypes(diseaseIri: any) {
    return this.http.get('/api/disease/' + diseaseIri + '/phenotype', this.options);
  }

  getDiseaseDrugs(diseaseIri: any) {
    return this.http.get('/api/disease/' + diseaseIri + '/drug', this.options);
  }

  getDiseaseProcedures(diseaseIri: any) {
    return this.http.get('/api/disease/' + diseaseIri + '/procedure', this.options);
  }
}
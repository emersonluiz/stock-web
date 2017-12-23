import { DocumentService } from './../../document/document.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { StateService } from './../../state/state.service';
import { CompanyService } from './../../company/company.service';
import { EmployeeService } from './../employee.service';
import { JobPositionService } from './../../jobPosition/job-position.service';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent implements OnInit {

  employee = {
    id:null, name:null, company:null, 
    jobPosition:null, admission:null, costCenter:null, 
    birth:null, address:null, city:null, postalCode:null,
    phone:null, phoneMobile:null, phoneBusiness:null, phoneOther:null,
    email:null, emailBusiness:null, emailOther:null,
    state:null, document:null, issueDate: null, expirationDate:null, 
    number:null, valid:null, place:null, type:null, initialDate:null,
    finalDate:null, vacationInitialDate:null, vacationFinalDate:null,
    validTraining:null, documents:[], trainings:[], vacations:[]
  };
  companies: any = [];
  jobPositions: any = [];
  states: any = [];
  documents: any = [];

  constructor(private router: Router, 
              private route: ActivatedRoute,
              private companyService: CompanyService,
              private jobPositionService: JobPositionService,
              private stateService: StateService,
              private documentService: DocumentService,
              private employeeService: EmployeeService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        let id = params["id"];

        this.loadCompany(null);
        this.loadJobPosition(null);
        this.loadState(null);
        this.loadDocument(null);
        
        if (id !== undefined && id !== '') {
          this.loadEmployee(id);
        }
      }
    );
  }

  clear() {
    this.employee = {
      id:null, name:null, company:null, 
      jobPosition:null, admission:null, costCenter:null, 
      birth:null, address:null, city:null, postalCode:null,
      phone:null, phoneMobile:null, phoneBusiness:null, phoneOther:null,
      email:null, emailBusiness:null, emailOther:null,
      state:null, document:null, issueDate: null, expirationDate:null, 
      number:null, valid:null, place:null, type:null, initialDate:null,
      finalDate:null, vacationInitialDate:null, vacationFinalDate:null,
      validTraining: null, documents:[], trainings:[], vacations:[]
    };
  }

  loadEmployee(id: string) {
    this.employeeService.get(id).subscribe(
      rtn => {
        this.employee.id = rtn.id;
        this.employee.name = rtn.name;
        this.loadCompany(rtn.company.id);
        this.loadJobPosition(rtn.jobPosition.id);
        this.employee.birth = ((rtn.birthDate !== null) ? new Date(rtn.birthDate) : null);
        this.employee.admission = ((rtn.admissionDate !== null) ? new Date(rtn.admissionDate) : null);
        this.employee.costCenter = rtn.costCenter;
        if(rtn.address !== null) {
          this.employee.address = rtn.address.address;
          this.employee.city = rtn.address.city;
          this.employee.postalCode = rtn.address.zipCode;
          this.loadState(rtn.address.state.code);
        }

        if(rtn.documents !== null) {
          this.employee.documents = rtn.documents;
        }

        if(rtn.trainings !== null) {
          this.employee.trainings = rtn.trainings;
        }

        if(rtn.vacations !== null) {
          this.employee.vacations = rtn.vacations;
        }

        if(rtn.phones !== null) {
          rtn.phones.forEach(item => {
            switch (item.type) {
              case "Fixo":
                this.employee.phone = item.number;
                break;

              case "Celular":
                this.employee.phoneMobile = item.number;
                break;

              case "Comercial":
                this.employee.phoneBusiness = item.number;
                break;

              case "Outro":
                this.employee.phoneOther = item.number;
                break;
            }
          });
        }

        if(rtn.emails !== null) {
          rtn.emails.forEach(item => {
            switch (item.type) {
              case "Particular":
                this.employee.email = item.email;
                break;

              case "Comercial":
                this.employee.emailBusiness = item.emailBusiness;
                break;

              case "Outro":
                this.employee.emailOther = item.emailOther;
                break;
            }
          });
        }
      }
    );
  }

  loadCompany(companyId: number) {
    this.companyService.list().subscribe(
      rtn => {
        this.companies = rtn;
        if(companyId !== null) {
          this.employee.company = companyId;
        }
      }
    );
  }

  loadJobPosition(jobPositionId: number) {
    this.jobPositionService.list().subscribe(
      rtn => {
        this.jobPositions = rtn;
        if(jobPositionId !== null) {
          this.employee.jobPosition = jobPositionId;
        }
      }
    );
  }

  loadState(stateCode: string) {
    this.stateService.list().subscribe(
      rtn => {
        this.states = rtn;
        if(stateCode !== null) {
          this.employee.state = stateCode;
        }
      }
    );
  }

  loadDocument(documentId: string) {
    this.documentService.list().subscribe(
      rtn => {
        this.documents = rtn;
        if(documentId !== null) {
          this.employee.document = documentId;
        }
      }
    );
  }

  onClose() {
    this.router.navigate(['employee']);
  }

  onDelete(item: any, list: any[]) {
    let el: number = null
    
    for(let i=0; i<list.length; i++) {
      if(list[i] === item) {
        el = i;
        break;
      }
    }
    if(el !== null) {
      list.splice(el, 1);
    }

  }

  onAddDocument() {
    this.documents.forEach(item => {
      if(item.id === this.employee.document) {
        this.employee.documents.push({document:{id:this.employee.document, name:item.name}, 
          issueDate:this.employee.issueDate, expirationDate: 
          this.employee.expirationDate, validity: this.employee.valid,
          number: this.employee.number
        });
      }
    });
  }

  onAddTraining() {
    this.employee.trainings.push({place:this.employee.place, 
      type:this.employee.type, initialDate: this.employee.initialDate, 
      finalDate: this.employee.finalDate, valid:this.employee.validTraining
    })
  }

  onAddVacation() {
    this.employee.vacations.push({initialDate: this.employee.vacationInitialDate, finalDate: this.employee.vacationFinalDate});
  }

  onSave() {
    let employee = {name: this.employee.name, 
      company: {id: this.employee.company}, 
      jobPosition: {id: this.employee.jobPosition}, 
      admissionDate:this.employee.admission, 
      costCenter:this.employee.costCenter, 
      birthDate:this.employee.birth,
      documents:[],
      emails:[],
      phones:[],
      trainings:[],
      vacations:[],
      address:null
    };

    if(this.employee.address !== null || this.employee.city !== null || this.employee.postalCode !== null) {
      employee.address = {
        address: this.employee.address, 
        city: this.employee.city, 
        zipCode: this.employee.postalCode
      }
      if(this.employee.state != null) {
        employee.address.state = {code: this.employee.state}
      }
    }

    if(this.employee.phone !== null) {
      employee.phones.push({number:this.employee.phone, type:'Fixo'});
    }

    if(this.employee.phoneMobile !== null) {
      employee.phones.push({number:this.employee.phoneMobile, type:'Celular'});
    }

    if(this.employee.phoneBusiness !== null) {
      employee.phones.push({number:this.employee.phoneBusiness, type:'Comercial'});
    }

    if(this.employee.phoneOther !== null) {
      employee.phones.push({number:this.employee.phoneOther, type:'Outro'});
    }

    if(this.employee.email !== null) {
      employee.emails.push({email:this.employee.email, type:'Particular'});
    }

    if(this.employee.emailBusiness !== null) {
      employee.emails.push({email:this.employee.emailBusiness, type:'Comercial'});
    }

    if(this.employee.emailOther !== null) {
      employee.emails.push({email:this.employee.emailOther, type:'Outro'});
    }

    if(this.employee.documents.length > 0) {
      employee.documents = this.employee.documents;
    }

    if(this.employee.trainings.length > 0) {
      employee.trainings = this.employee.trainings;
    }

    if(this.employee.vacations.length > 0) {
      employee.vacations = this.employee.vacations;
    }

    if(this.employee.id != null) {
      this.employeeService.update(this.employee.id, employee).subscribe(
        rtn => {
          console.log("Updated", rtn);
          this.clear();
          this.router.navigate(['employee']);
        }
      );
    } else {
      this.employeeService.create(employee).subscribe(
        rtn => {
          console.log("Created", rtn);
          this.clear();
          this.router.navigate(['employee']);
        }
      );
    }
  }
}

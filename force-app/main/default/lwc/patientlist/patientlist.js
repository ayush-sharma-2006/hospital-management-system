import { LightningElement, wire } from 'lwc';
import getpatients from '@salesforce/apex/PatientController.getpatients';

export default class PatientList extends LightningElement {

    patients = [];
    filteredPatients = [];
    searchTerm = '';

    columns = [
        {
            label: 'Patient Name',
            fieldName: 'Name__c',
            type:'text'
        },
        {
            label: 'Age',
            fieldName: 'Age__c',
            type: 'number'
        },
        {
            label: 'Gender',
            fieldName: 'Gender__c'
        },
        {
            label: 'Blood Group',
            fieldName: 'Blood_Group__c'
        },
        {
            label: 'Mobile no',
            fieldName: 'Mobile_no__c',
            type: 'phone'
        },
        {
            label: 'Address',
            fieldName: 'Address__c',
            type: 'text'
        }
    ];

    @wire(getpatients)
    wiredPatients({ data, error }) {

        if (data) {
            this.patients = data;
            this.filteredPatients = data;
        }

        if (error) {
            console.error(error);
        }
    }

    handleSearch(event) {

        this.searchTerm = event.target.value.toLowerCase();

        this.filteredPatients = this.patients.filter(patient => {

            return patient.Name__c
                .toLowerCase()
                .includes(this.searchTerm);

        });
    }
}
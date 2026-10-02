import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class patient_registration extends LightningElement {

    handleSuccess(event) {

        const toastEvent = new ShowToastEvent({
            title: 'Success',
            message: 'Patient registered successfully!',
            variant: 'success'
        });

        this.dispatchEvent(toastEvent);
    }

    handleError(event) {

        const toastEvent = new ShowToastEvent({
            title: 'Error',
            message: 'Unable to register patient.',
            variant: 'error'
        });

        this.dispatchEvent(toastEvent);
    }
}
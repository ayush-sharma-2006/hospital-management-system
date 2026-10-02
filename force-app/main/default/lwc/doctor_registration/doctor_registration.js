import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class Doctor_registration extends LightningElement {
    handleSuccess(event) {
    
            const toastEvent = new ShowToastEvent({
                title: 'Success',
                message: 'doctor registered successfully!',
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
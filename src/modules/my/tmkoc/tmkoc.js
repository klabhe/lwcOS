import { LightningElement, api, track} from 'lwc';

export default class ComboboxBasic extends LightningElement {

    //Boolean tracked variable to indicate if modal is open or not default value is false as modal is closed when page is loaded 
    @track isModalOpen;

    @api get options() {
        return [
            { label: 'Gada', value: 'gada' },
            { label: 'Mehta', value: 'mehta' },
            { label: 'Bhide', value: 'bhide' },
            { label: 'Sodhi', value: 'sodhi' },
            { label: 'Hathi', value: 'hathi' },
            { label: 'Recurring Characters', value: 'recurring' },
            { label: 'Cameo Characters', value: 'cameo' }
        ];
    }

    @api handleChange(event) {
        this.value = event.detail.value;
        console.log('jkl here' + this.value);
        this.isModalOpen = true;
    }
    
    @api closeModal() {
        // to close modal set isModalOpen tarck value as false
        this.isModalOpen = false;
        this.value = null;
        console.log('kl' + this.value);
    }
}

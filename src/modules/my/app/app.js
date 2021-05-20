import { LightningElement, track} from 'lwc';

export default class App extends LightningElement { 
    @track kheloBaccho = true;
    @track familyDiv = false;  

    kheloBacchoClick() {           
        this.kheloBaccho = false;
        this.familyDiv = true;      
    }
    
    back() {           
        this.familyDiv = false;
        this.kheloBaccho = true;      
    }  
}  

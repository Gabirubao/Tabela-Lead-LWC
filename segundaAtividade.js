import { LightningElement, wire } from 'lwc';
import getListOpp from '@salesforce/apex/segundaAtividade.getListOpp'

export default class SegundaAtividade extends LightningElement {
    opps;
    error;
    columns = [
        {label:'Nome', fieldName:'Name'},
        {label:'Valor', fieldName:'Amount'},
        {label:'Fase', fieldName:'StageName'},
        {label:'Data de Criação', fieldName:'CreatedDate'},
    ]
    @wire(getListOpp)wiredOpportunity({error, data}){
        if(data){
            this.opps = data;
            this.error = undefined;
            console.log(data);
        }else if(error){
            this.error = error;
            this.opps = undefined;
        }
    }

}

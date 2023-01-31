import { LightningElement,api } from 'lwc';
import renderAsPdf from '@salesforce/apex/pdfGeneratorLWC.generatePDF'; 

export default class PdfDemo extends LightningElement {
    @api recordId
    imageUrl = 'https://i.natgeofe.com/n/487a0d69-8202-406f-a6a0-939ed3704693/african-lion.JPG'
    invoiceData={
        invoiceNo:'123',
        invoiceCreated:'January 1, 2019',
        invoiceDue:'January 10, 2020',
        companyName:'Sparksuite, Inc.',
        address1:'12345 Sunny Road',
        address2:' Sunnyville, CA 12345'
    }
    clientData={
        client:'Acme Corp',
        username:'John Doe',
        email:'john@example.com'
    }
    services=[
        {name:'Consultant fee', amount:1000.00},
        {name:'Website design', amount:300.00},
        {name:'Hosting (3 months)', amount:75.00}
    ]

    get totalAmount()
    {
     return this.services.reduce((total, services) =>{return total+ services.amount },0)
    }

    pdfHandler()
    {
        let content = this.template.querySelector('.container')
        console.log('PDF ')
        renderAsPdf({recordId:this.recordId, htmlData:content.outerHTML}).then((result)=> {console.log(result)}).catch((error)=> {console.error(error)})
        

    }
}
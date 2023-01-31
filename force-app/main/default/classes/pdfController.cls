public with sharing class pdfController {
    public string pdfText{get;set;}

    public pdfController() {
        pdfText = String.escapeSingleQuotes(ApexPages.currentPage().
        getParameters().
        get('pdfText'));
    }
}

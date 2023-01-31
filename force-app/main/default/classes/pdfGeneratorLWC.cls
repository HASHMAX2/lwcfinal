public with sharing class pdfGeneratorLWC {
    @AuraEnabled
    public static Attachment generatePDF(Id recordId, String htmlData){
        try {
            Pagereference page = Page.renderAsPdf;
            page.getParameters().put('pdfText',htmlData);
            Contact c = new Contact(Id=recordId);
            Attachment objAttachment = new Attachment();
            objAttachment.name = 'invoice.pdf';
            objAttachment.ParentId= c.Id;
            objAttachment.Body= page.getContentaspdf();
            objAttachment.IsPrivate = false;
            insert objAttachment;
            return objAttachment;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
           
        }
    }
}

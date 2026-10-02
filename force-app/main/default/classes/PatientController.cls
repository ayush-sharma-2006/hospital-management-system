public with sharing class PatientController {
     @AuraEnabled(cacheable=true)
     public static List<patient__c> getpatients(){
            return [
            SELECT Id,
                   Name__c,
                   Age__c,
                   Gender__c,
                   Blood_Group__c,
                   Mobile_no__c,
                   Address__c
            FROM Patient__c
            ORDER BY CreatedDate DESC
        ];
     }
}
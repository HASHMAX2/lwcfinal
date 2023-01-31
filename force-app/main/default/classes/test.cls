public with sharing class test {
    public test() {
        List<Account> lAcc =  [SELECT id from Account LIMIT 5];
    }
}

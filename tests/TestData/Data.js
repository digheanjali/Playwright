const mydata = require('@playwright/test')
exports.customTest = mydata.test.extend({
    testdataForContactUs: {
        fstName: "Siya",
        lstNAme: "Pawase",
        email: "Siya.pawase@gmail.com",
        msg: "I am learning playwright with js",
        SucessMsg: "Thank You for your Message!"
    }
})
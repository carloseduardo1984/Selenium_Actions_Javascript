const {Given, Then, When, Before, After} = require('@cucumber/cucumber')


Before(function () {
    console.log('Inside Before')
});

After(function () {
    console.log('Inside After')
   
});

When('I add {int} and {int}', function (int, int2) {
    console.log('Test1')

    });


Then('the result should be {int}', function (int) {
    console.log('Test2')

});

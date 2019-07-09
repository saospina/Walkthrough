
describe('Name of the group', function() {
    
    it('Some tests here', function() {
        browser.get("https://qaclickacademy.github.io/protocommerce/");
        element(by.name("name")).sendKeys("Sergio Ospina");
        element(by.css("input[name='email']")).sendKeys("sergio.ospina@outlook.com");
        element(by.id("exampleInputPassword1")).sendKeys("password2");
        element(by.css("input[type='checkbox']")).click();
        element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
        element.all(by.name("inlineRadioOptions")).get(0)



    });
        
});
    
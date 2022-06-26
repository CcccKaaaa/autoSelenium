const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const by = require('selenium-webdriver/lib/by');
async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();

//Đăng nhập 
    
var congPort = 'http://27.71.231.140/dist/#/page/signin'
var taiKhoan = 'admin'
var matKhau = 'abc@1234!abc'
    await driver.get(congPort);
    driver.manage().window().maximize()
    await driver.findElement(By.css("input[type=text]")).sendKeys(taiKhoan)
    await driver.findElement(By.css("input[type=password]")).sendKeys(matKhau, Key.RETURN)
let tieuDe = driver.findElement(By.css('a[href="#"]'))
    await driver.wait(until.elementIsVisible(tieuDe))
    console.log('1.Dang nhap thanh cong')
/**Thêm mới DM
 * Đến danh mục
 * Check trùng
 * Mở hộp thoại thêm mới
 * Thêm nội dung > lưu
 * Check thành công
 */

//Xóa thêm mới vừa thêm




// End
  
  //await driver.quit()
  }
example(); 

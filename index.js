// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  newdriver=Object.assign({}, driver, { [key]: value });
  return newdriver;
}
 function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver
 }

 function deleteFromDriverByKey(driver, key){
   let newdriver=Object.assign({}, driver);
   delete newdriver.name;
   return newdriver
 }
 function destructivelyDeleteFromdriverByKey(driver, key){
   delete driver[key];
   return driver
 }

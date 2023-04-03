// Write your solution in this file!
 const employee = {
    name: "Christopher Smith",
    streetAddress: "70 LinconStreet"
 };
 function updateEmployeeWithKeyAndValue(object,key,value) {
    const updatedObject = {...object};
    updatedObject[key] = value;
    return updatedObject;

 }function destructivelyUpdateEmployeeWithKeyAndValue(object,key,value) {
    object[key] = value;
    return object;
 }
 function deleteFromEmployeeByKey(object,key) {
    const newObject = {...object};
    delete newObject[key];
    return newObject;
 }
 function destructivelyDeleteFromEmployeeByKey(object,key) {
    delete object[key];
    return object;
 }
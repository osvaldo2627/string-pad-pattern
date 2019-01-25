

/*const { padPattern } = require("./index");
const testStringArray = [ "file-1.js", "file-100.js", "file-11.js", "other_string" ]
    ,pattern = "file-(?var).js" //string pattern for example "salary_(?var)_group_a"
    ,padLength = 5             //expected lengh of the paded region specified in the pattern
    ,padString = '0'            //character or characters to pad the string
    ,padRight = false;          //apply padding to the right, defualt to false

const expectedResult = [ 'file-00001.js','file-00100.js','file-00011.js','other_1string' ];

let testResultArray = testStringArray.map( item =>{
    return padPattern( item, pattern, padLength, padString );
});


JSON.stringify(testResultArray)===JSON.stringify(expectedResult)  ?
                                 console.log('TEST SUCCESS') : console.log('TEST FAIL');*/



                                 const stringPadder = require("./index");

const testString = "file-1.js"
    ,pattern = "file-(?var).js" //string pattern for example "salary_(?var)_group_a"
    ,padLength = 5             //expected lengh of the paded region specified in the pattern
    ,padString = '0'            //character or characters to pad the string
    ,padRight = false;          //apply padding to the right, defualt to false

let result = stringPadder.padPattern(testString, pattern, padLength, padString);

console.log(result);
//should print file-0001.js


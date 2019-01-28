### Simple way to add padding to one string following a gived pattern.

# Define a pattern:

To define a pattern just add "(?var)" on the section of the pattern where the pad should apply on it.



# How to use it:
```
npm install string-pad-pattern
```

```
const stringPadder = require("string-pad-pattern");

const testString = "file-1.js"
    ,pattern = "file-(?var).js" //string pattern for example "salary_(?var)_group_a"
    ,padLength = 5             //expected lenght of the paded region specified by the pattern
    ,padString = '0'            //character or characters to pad the string
    ,padRight = false;          //apply padding to the right, defualt to false

let result = stringPadder.padPattern(testString, pattern, padLength, padString);

console.log(result);
//output  file-00001.js

```

# Test

```
npm test

```




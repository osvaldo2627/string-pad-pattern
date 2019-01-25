## String pad pattern provides a simple way to pad an string following a simple patter.

# Define a pattern:

To define a pattern just add "(?var)" on the section of the pattern where the pad should apply on it.

# How to use it:
```
const stringPadder = required("string-pad-pattern");

const testString = "file-1.js"
    ,pattern = "file-(?var).js" //string pattern for example "salary_(?var)_group_a"
    ,padLength = 5             //expected lengh of the paded region specified in the pattern
    ,padString = '0'            //character or characters to pad the string
    ,padRight = false;          //apply padding to the right, defualt to false

let result = stringPadder.padPattern(pattern, padLength, padString);

console.log(result);
//should print file-0001.js

```

# Test

```
npm test

```




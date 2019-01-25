

//pattern must be on the way of "file-(?).json"
module.exports = {

    /**
    * @param {string} text to be padded .
    * @param {string}  pattern string pattern for example file-(?var).json
    * @param {int}  padLength expected lengh of the string after pad.
    * @param {string}  padString character or characters to pad the string
    * @param {boolean}  padRight apply padding to the right, defualt to false
    * 
    */
    padPattern:(text, pattern, padLength=5, padString ='0', padRight=false )=>{
        let regPattern = pattern.replace('(?var)', "(\\w*)");
        regPattern =  new RegExp(regPattern);

        let result = regPattern.exec(text);
        if (Array.isArray(result) && result[1]){
            let  padRes = padRight ? result[1].padEnd(padLength, padString) : result[1].padStart(padLength, padString);

            return pattern.replace('(?var)', padRes);
        }
        return text;
    }

};
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cypressTypeScriptPreprocessor = require("./cy-ts-preprocessor")
require('cypress-xpath');

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
module.exports = on => {
  on("file:preprocessor", cypressTypeScriptPreprocessor)
}





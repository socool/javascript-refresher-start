// CH17 1. normal import
// import {apiKey} from './util.js';

// CH17 2. default import
// import apiKey from './util.js';

// CH17 3. import multiple variable and default variable
// import {abc as bbb,apiKey} from './util.js'
// import anyName from './util.js'

// console.log(apiKey,":",bbb,"default var:",anyName);

// CH17 4. import *
import * as util from "./util.js";

console.log(util.default, ":", util.abc, ":", util.apiKey);

// CH18 revisting varibale & values
// use let can change value
let userMessage = "Hello world";
userMessage = "Goodbye world";

const customerMessage = "Hi there";
//customerMessage = "Bye there"; // found type error is read-only

console.log(userMessage);

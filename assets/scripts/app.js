// 1. normal import
// import {apiKey} from './util.js';

// 2. default import
// import apiKey from './util.js';

// 3. import multiple variable and default variable
// import {abc as bbb,apiKey} from './util.js'
// import anyName from './util.js'

// console.log(apiKey,":",bbb,"default var:",anyName);

// 4. import *
import * as util from "./util.js";

console.log(util.default, ":", util.abc, ":", util.apiKey);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readEnv = void 0;
const dotenv_1 = require("dotenv");
class EnvVarReadError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
    }
}
function readEnv(key, description = "") {
    (0, dotenv_1.config)();
    const env = process.env[key];
    if (description && typeof description === 'string') {
        console.log(`['${key}'] ${description}`);
    }
    else {
        console.log(`['${key}'] No description added.`);
    }
    if (process.env.NODE_ENV === 'development') {
        console.log(`\t: '${env}'`);
    }
    if (!env) {
        throw new EnvVarReadError(`Failed to read environmental variable '${key}'.`);
    }
    else {
        console.log(`Successfully read environmental variable '${key}'.`);
    }
    return env;
}
exports.readEnv = readEnv;
function test() {
    console.log("\n-- RUNNING TEST --\n");
    readEnv('PUBLIC_NAME', 'Api key required to read public name for a package.');
    readEnv('PUBLIC_API_KEY');
    console.log("\n-- ENDING TEST --\n");
}
test();
// -- RUNNING TEST --
// ['PUBLIC_NAME'] Api key required to read public name for a package.
// Successfully read environmental variable 'PUBLIC_NAME'.
// JOHNDOE
// ['PUBLIC_API_KEY'] No description added.
// Successfully read environmental variable 'PUBLIC_API_KEY'.
// Te1st2aP3iK4eY5
// -- ENDING TEST --

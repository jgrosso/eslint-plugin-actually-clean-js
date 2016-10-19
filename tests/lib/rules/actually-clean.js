/**
 * @fileoverview Ensure JS is _actually_ clean
 * @author Joshua Grosso
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/actually-clean"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("actually-clean", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "// Anything",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});

/**
 * @fileoverview Ensure JS is _actually_ clean
 * @author Joshua Grosso
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Ensure JS is _actually_ clean",
            category: "Possible Errors",
            recommended: true
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
        return {
          Program: (node) => context.report({
            message: 'Any JS is unclean JS.',
            node
          })
        };
    }
};

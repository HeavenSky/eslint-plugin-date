module.exports = {
	create: context => ({
		CallExpression: node => {
			const { type: method, name } = node.callee;
			const { type, value } = node.arguments[0] || {};
			if (method === "Identifier" && name === "require" &&
				type === "Literal" && /^date-fns/.test(value)) {
				context.report(node, "no require date-fns");
			} else if (method === "Import" && /* 不支持,后续再看 */
				type === "Literal" && /^date-fns/.test(value)) {
				context.report(node, "no dynamic import date-fns");
			}
		},
		ImportDeclaration: node => {
			const { type, value } = node.source;
			if (type === "Literal" && /^date-fns/.test(value)) {
				context.report(node, "no import date-fns");
			}
		},
	}),
	meta: {
		docs: {
			description: "Deprecate usage of date-fns",
		},
		type: "problem",
	},
};
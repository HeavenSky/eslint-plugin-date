module.exports = {
	create: context => ({
		NewExpression: node => {
			const { name } = node.callee;
			const { length } = node.arguments;
			if (/^Date$/.test(name) && !length) {
				context.report(node, "no new Date() expression");
			}
		},
	}),
	meta: {
		docs: {
			description: "Deprecate usage of new Date() expression",
		},
		type: "problem",
	},
};
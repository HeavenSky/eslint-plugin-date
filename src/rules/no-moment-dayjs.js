module.exports = {
	create: context => ({
		CallExpression: node => {
			const { type: method, name } = node.callee;
			const { type, value } = node.arguments[0] || {};
			if (method === "Identifier" && name === "require" &&
				type === "Literal" && /^(moment|dayjs)/.test(value)) {
				context.report(node, "no require moment or dayjs");
			} else if (method === "Import" && /* 不支持,后续再看 */
				type === "Literal" && /^(moment|dayjs)/.test(value)) {
				context.report(node, "no dynamic import moment or dayjs");
			} else if (/^(moment|dayjs)$/.test(name)) {
				context.report(node, "no constructor moment or dayjs");
			}
		},
		ImportDeclaration: node => {
			const { type, value } = node.source;
			if (type === "Literal" && /^(moment|dayjs)/.test(value)) {
				context.report(node, "no import moment or dayjs");
			}
		},
		NewExpression: node => {
			const { name } = node.callee;
			if (/^(moment|dayjs)$/.test(name)) {
				context.report(node, "no new constructor moment or dayjs");
			}
		},
	}),
	meta: {
		docs: {
			description: "Deprecate usage of moment or dayjs",
		},
		type: "problem",
	},
};
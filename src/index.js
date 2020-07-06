const noDateFns = require("./rules/no-date-fns");
const noMomentDayjs = require("./rules/no-moment-dayjs");
const noNewDateWithArgs = require("./rules/no-new-date-with-args");
const noNewDateWithoutArgs = require("./rules/no-new-date-without-args");

module.exports = {
	configs: {
		error: {
			plugins: ["date"],
			rules: {
				"date/no-date-fns": "error",
				"date/no-moment-dayjs": "off",
				"date/no-new-date-with-args": "error",
				"date/no-new-date-without-args": "error",
			},
		},
		recommended: {
			plugins: ["date"],
			rules: {
				"date/no-date-fns": "off",
				"date/no-moment-dayjs": "off",
				"date/no-new-date-with-args": "error",
				"date/no-new-date-without-args": "off",
			},
		},
		warn: {
			plugins: ["date"],
			rules: {
				"date/no-date-fns": "warn",
				"date/no-moment-dayjs": "off",
				"date/no-new-date-with-args": "error",
				"date/no-new-date-without-args": "warn",
			},
		},
	},
	rules: {
		"no-date-fns": noDateFns,
		"no-moment-dayjs": noMomentDayjs,
		"no-new-date-with-args": noNewDateWithArgs,
		"no-new-date-without-args": noNewDateWithoutArgs,
	},
};
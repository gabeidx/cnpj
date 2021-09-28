export default {
	extensions: {
		ts: 'module',
	},
	nodeArguments: ['--loader=ts-node/esm'],
	nonSemVerExperiments: {
		nextGenConfig: true,
		configurableModuleFormat: true,
	},
}

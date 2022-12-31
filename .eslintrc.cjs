module.exports = {
	root: true,
	env: {
		node: true,
		es2022: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['tsconfig.json'],
	},
	plugins: ['@typescript-eslint'],
	extends: [
		// Common
		'eslint:recommended',
		'plugin:import/recommended',
		// TS
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:@typescript-eslint/strict',
		// Prettier
		'plugin:prettier/recommended',
	],
	ignorePatterns: [
		'**/node_modules',
		'**/build',
		'**/.eslintrc.cjs',
		'**/.prettierrc.cjs',
		'**/commitlint.config.cjs',
		'**/vitest.config.ts',
	],
	rules: {
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				alphabetize: { order: 'asc', caseInsensitive: true },
			},
		],
		'object-shorthand': ['error', 'always'],
		'no-console': 'error',
		'@typescript-eslint/explicit-function-return-type': 'error',
	},
}

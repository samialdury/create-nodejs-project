import { main } from './main'

describe('Main', () => {
	it('Should run project', () => {
		vi.mock('./config', () => {
			return {
				init: () => null,
			}
		})

		vi.mock('./logger', () => {
			return {
				init: () => null,
				logger: {
					info: () => null,
				},
			}
		})

		main()
	})
})

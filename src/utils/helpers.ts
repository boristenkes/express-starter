export const delay = (ms: number) =>
	new Promise(resolve => setTimeout(resolve, ms))

export function isEmpty(value: unknown): value is [] | Record<string, never> {
	if (!value || typeof value !== 'object') return true

	const { length } = isArray(value) ? value : Object.keys(value)

	return length === 0
}

export const { isArray } = Array

export const formatStringId = (id: number) => {
	const idString = id.toString()
	if (idString.length <= 3) {
		const paddedId = idString.padStart(3, '0')
		return `#${paddedId}`
	}
	return `#${idString}`
}

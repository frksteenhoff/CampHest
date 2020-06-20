export type HesteObject = {
	id: number, 
	name: string, 
	imgPath: string, 
	slogan: string,
	desc: string
}

export type FrontPageType = {
	id: number, 
	header: string, 
	desc: string
}

export type HorseDescription = {
	name: string,
	alias?: string,
	funFact: string,
	slogan: string, 
	yearsAtRoskilde: string[],
	imageUrl: string
}
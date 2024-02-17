export interface ProjectInterface {
    id: number,
	title: string,
    image: string,
    descriptionShort: textLocale,
}

type textLocale = {
    en: string,
    ru: string,
}

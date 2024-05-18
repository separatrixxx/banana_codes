export interface ProjectInterface {
    id: number,
    titleId: string,
	title: textLocale,
    image?: string,
    descriptionShort: textLocale,
    descriptionFull: textLocale,
    problem: textLocale,
    link?: string,
    stack: string,
    notALink?: boolean,
    emoji: string,
    color: string,
}

export type textLocale = {
    en: string,
    ru: string,
}

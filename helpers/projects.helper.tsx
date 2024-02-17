import { ProjectInterface } from "../interfaces/project.interface";


export function getProjects(): ProjectInterface[] {
    const project1: ProjectInterface =  {
        id: 0,
        title: "GEMUANI",
        image: "/GemuaniImg.webp",
        descriptionShort: {
            en: 'Website for a Georgian plant for the production of freeze-dried fruits and berries',
            ru: 'Сайт грузинского завода по производству сублимированных фруктов и ягод',
        }
    };

    const project2: ProjectInterface =  {
        id: 0,
        title: "АВАНГАРД",
        image: "/GemuaniImg.webp",
        descriptionShort: {
            en: 'Landing page for the leader in the production of wet wipes in Russia',
            ru: 'Лендинг для лидера по производству влажных салфеток в России',
        }
    };

    return [project1, project2];
}

import { ProjectInterface } from "../interfaces/project.interface";


export function getProjects(): ProjectInterface[] {
    const project1: ProjectInterface =  {
        id: 0,
        title: "GEMUANI",
        image: "/GemuaniImg.webp",
    };

    const project2: ProjectInterface =  {
        id: 1,
        title: "GEMUANI",
        image: "/GemuaniImg.webp",
    };

    return [project1, project2];
}

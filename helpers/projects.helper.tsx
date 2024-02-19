import { ProjectInterface } from "../interfaces/project.interface";


export function getProjects(): ProjectInterface[] {
    const project1: ProjectInterface = {
        id: 0,
        titleId: 'gemuani',
        title: {
            en: 'GEMUANI',
            ru: 'GEMUANI',
        },
        image: '/GemuaniVideo.mp4',
        descriptionShort: {
            en: 'Website for a Georgian plant for the production of freeze-dried fruits and berries',
            ru: 'Сайт грузинского завода по производству сублимированных фруктов и ягод',
        },
        descriptionFull: {
            en: 'Gemuani specializes in producing healthy and delicious freeze-dried fruits and vegetables, utilizing 100% natural Georgian produce. Located in Western Georgia, their facility uses advanced freeze-drying technology to preserve nutrients and flavors. Since its inception in 2011, Gemuani has achieved significant milestones, including Global GAP and IFS certifications. Their products are recognized globally for their quality and are aimed at health-conscious consumers',
            ru: 'Gemuani специализируется на производстве полезных и вкусных сублимированных фруктов и овощей, используя 100% натуральные грузинские продукты. На их предприятии, расположенном в Западной Грузии, используется передовая технология сублимационной сушки для сохранения питательных веществ и вкусов. С момента своего создания в 2011 году компания Gemuani добилась значительных успехов, включая получение сертификатов Global GAP и IFS. Их продукция признана во всем мире за свое качество и ориентирована на потребителей, заботящихся о своем здоровье',
        },
        problem: {
            en: 'The company came to us with two main problems: the site design was outdated and written using opencart. Gemuani wanted to see a beautiful and modern portal with a landing page, online store, blog and other sections, which on the one hand would reflect Georgian culture and traditions, but on the other hand, keep up with the times',
            ru: 'Компания обратилась к нам с двумя основными проблемами: дизайн сайта устарел и написан с использованием opencart. Гемуани хотел видеть красивый и современный портал с лендингом, интернет-магазином, блогом и другими разделами, который, с одной стороны, отражал бы грузинскую культуру и традиции, но с другой – идущий в ногу со временем',
        },
        link: 'gemuani.com',
        stack: 'react | next.js | typescript | nest.js | css',
    };

    const project2: ProjectInterface = {
        id: 1,
        titleId: 'avangard',
        title: {
            en: 'AVANGARD',
            ru: 'АВАНГАРД',
        },
        image: '/AvangardVideo.mp4',
        descriptionShort: {
            en: 'Landing page for the leader in the production of wet wipes in Russia',
            ru: 'Лендинг для лидера по производству влажных салфеток в России',
        },
        descriptionFull: {
            en: 'The Avangard company is the leader in the production of wet wipes in Russia. Their factories are equipped with high-quality European equipment, modern production management technologies and a well-functioning quality control system. Every year they produce up to 36 thousand tons of spunlace of various structures and densities and 260 million packages of wet wipes',
            ru: 'Компания «Авангард» — лидер по производству влажных салфеток в России. Их заводы оснащены высококачественным европейским оборудованием, современными технологиями управления производством и отлаженной системой контроля качества. Ежегодно они производят до 36 тысяч тонн спанлейса различной структуры и плотности и 260 миллионов упаковок влажных салфеток',
        },
        problem: {
            en: 'The company urgently needed a redesign of the landing page, since the old one was absolutely terrible. The technical specifications were as simple as possible: to make it beautiful. It was also necessary to transfer all the main sections from the old site to the new one',
            ru: 'Компании срочно нужен был редизайн лендинга, так как старый был совсем ужасным. Техническое задание было максимально простым: чтобы было красиво. Также нужно было перенести все основные разделы со старого сайта на новый',
        },
        link: 'avangardge.com',
        stack: 'react | next.js | typescript | css',
    };

    const project3: ProjectInterface = {
        id: 2,
        titleId: 'kommo_crm',
        title: {
            en: 'KOMMO CRM',
            ru: 'KOMMO CRM',
        },
        descriptionShort: {
            en: 'Integration of Kommo CRM and development of an admin panel for 7club.com.br',
            ru: 'Интеграция Kommo CRM и разработка панели администратора для 7club.com.br',
        },
        descriptionFull: {
            en: '7CLub is a CRM consulting for small and medium businesses, providing several solutions for your manufacturer. It is a digital hub where you can find everything you need for your online presence, from your brand concept to websites, networking, creation, engagement and achievement management',
            ru: '7CLub — это CRM-консалтинг для малого и среднего бизнеса, предоставляющий несколько решений для вашего производителя. Это цифровой центр, где вы можете найти все необходимое для вашего присутствия в Интернете, от концепции вашего бренда до веб-сайтов, сетей, управления созданием, взаимодействием и достижениями',
        },
        problem: {
            en: 'For our partner from Brazil, we developed integration with Kommo CRM, as well as an admin panel for monitoring and managing processes. Kommo CRM is a service that provides services for storing customer data, from the moment the first application is received until the very last order. Customer data here is well structured and collected in a convenient file cabinet',
            ru: 'Для нашего партнёра из Бразилии мы разработали интеграцию с Kommo CRM, а также панель администратора для мониторинга и управления процессами. Kommo CRM — это сервис, который предоставляет услуги по хранению данных о клиентах, начиная с момента поступления первой заявки и до самого последнего заказа. Данные о клиентах здесь хорошо структурированы и собраны в удобную картотеку',
        },
        link: 'panel.7club.com.br',
        stack: 'react | next.js | typescript | nest.js | kommo crm | css',
    };

    const project4: ProjectInterface = {
        id: 3,
        titleId: 'secolina',
        title: {
            en: 'SECOLINA',
            ru: 'SECOLINA',
        },
        descriptionShort: {
            en: 'Development of an ecosystem with fully built-out business processes',
            ru: 'Разработка экосистемы с полностью выстроенными бизнес-процессами',
        },
        descriptionFull: {
            en: 'Secolina provides the best home growing equipment at the best price. The Sekolina store specializes in selling high-quality and reliable equipment while providing the best service. In our assortment you will find the best products, the production of which is carried out in compliance with strict quality standards. Despite the high quality of lamps, awnings and tools, the range we offer is distinguished by low prices',
            ru: 'Secolina предоставляет лучшее оборудование для домашнего гровинга по лучшей цене. Магазин Sekolina специализируется на продаже качественного и надежного оборудования с предоставлением лучшего сервиса. В нашем ассортименте Вы найдете лучшую продукцию, производство которой осуществляется с соблюдением строгих стандартов качества. Несмотря на высокое качество ламп, тентов и инструментов, предлагаемый нами ассортимент отличается низкими ценами',
        },
        problem: {
            en: 'Secolina approached us to develop an ecosystem for business automation, as well as to improve their website. It was necessary to create a backend system and integrate with Kommo CRM, fix bugs, add various mechanics, and so on',
            ru: 'Secolina обратилась к нам за разработкой экосистемы для автоматизации бизнеса, а также для того, чтобы мы доработали их сайт. Необходимо было создать бэкенд-систему и провести интеграцию с Kommo CRM, исправить баги, добавить различные механики и так далее',
        },
        link: 'sekolina.com',
        stack: 'typescript | nest.js | kommo crm | php | javascript | css',
    };

    const project5: ProjectInterface = {
        id: 4,
        titleId: 'geo_banks',
        title: {
            en: 'GEO BANKS',
            ru: 'GEO BANKS',
        },
        descriptionShort: {
            en: 'Development of integrations for clients Bank of Georgia, TBC Bank and Credo Bank',
            ru: 'Разработка интеграций для клиентов Bank of Georgia, TBC Bank и Credo Bank',
        },
        descriptionFull: {
            en: '',
            ru: '',
        },
        problem: {
            en: '',
            ru: '',
        },
        stack: 'typescript | nest.js',
        notALink: true,
    };

    return [project1, project2, project3, project4, project5];
}

export function getProjectByTitleId(titleId: string | string[] | undefined): ProjectInterface {
    const projectsList: ProjectInterface[] = getProjects();

    let project: ProjectInterface = {
        id: 0,
        titleId: '',
        title: {
            en: '',
            ru: '',
        },
        image: '',
        descriptionShort: {
            en: '',
            ru: '',
        },
        descriptionFull: {
            en: '',
            ru: '',
        },
        problem: {
            en: '',
            ru: '',
        },
        link: '',
        stack: '',
    };

    for (let p of projectsList) {
        if (p.titleId === titleId) {
            project = p;

            break;
        }
    }

    return project;
}

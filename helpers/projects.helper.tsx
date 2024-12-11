import { ProjectInterface } from "../interfaces/project.interface";


export function getProjects(): ProjectInterface[] {
    const colors: string[] = ['#F04D23', '#00A6FF', '#4850E2', '#00FF7B', '#0099FF', '#9ABEE0',
        '#00B2E3', '#CC8358', '#D01120', '#00412D', '#FFBE03',
    ];

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
        emoji: '🥝',
        color: colors[0],
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
        emoji: '🤧',
        color: colors[1],
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
        emoji: '🦾',
        color: colors[2],
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
        emoji: '🌱',
        color: colors[3],
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
        emoji: '🏦',
        color: colors[4],
    };

    const project6: ProjectInterface = {
        id: 5,
        titleId: 'techunit',
        title: {
            en: 'TechUnit',
            ru: 'TechUnit',
        },
        image: '/TechUnitVideo.mp4',
        descriptionShort: {
            en: 'Website for TechUnit, a project management company in healthcare',
            ru: 'Сайт для TechUnit — компании проектного управления в сфере здравоохранения',
        },
        descriptionFull: {
            en: 'Our studio had the privilege of creating a modern, user-friendly website for TechUnit, a project management company specializing in healthcare solutions. TechUnit focuses on medical devices, food supplements, and skincare products, offering end-to-end services for brand launches and business growth. Their team evaluates projects, identifies potential investors, and develops actionable strategies to help their clients succeed. The website we designed emphasizes TechUnit’s collaborative approach and their commitment to expanding possibilities in the healthcare industry',
            ru: 'Наша студия разработала современный и удобный сайт для компании TechUnit, занимающейся проектным управлением в сфере здравоохранения. TechUnit специализируется на медицинских устройствах, пищевых добавках и продуктах по уходу за кожей, предоставляя полный спектр услуг для запуска брендов и увеличения продаж. Команда TechUnit проводит оценку проектов, находит подходящих инвесторов и разрабатывает четкие стратегии для достижения успеха клиентов. Сайт, созданный нами, подчеркивает их командный подход и стремление к расширению возможностей в индустрии здравоохранения',
        },
        problem: {
            en: 'TechUnit approached us with a request to design a landing page that would reflect their corporate identity and effectively communicate the core information about the company. The goal was to create a sleek and professional portal aligned with their branding and business objectives',
            ru: 'Компания TechUnit обратилась к нам с запросом на разработку лендинга, который отражал бы их фирменный стиль и содержал ключевую информацию о компании. Основной задачей было создание стильного и профессионального портала, соответствующего их бренду и бизнес-целям',
        },
        link: 'techunit.cz',
        stack: 'react | next.js | typescript | css',
        emoji: '🫧',
        color: colors[5],
    };

    const project7: ProjectInterface = {
        id: 6,
        titleId: 'signal',
        title: {
            en: 'SIGNAL',
            ru: 'SIGNAL',
        },
        image: '/SignalVideo.mp4',
        descriptionShort: {
            en: 'Website for SIGNAL, a car rental company in Georgia',
            ru: 'Сайт для SIGNAL — компании по аренде автомобилей в Грузии',
        },
        descriptionFull: {
            en: 'Our studio developed a comprehensive and user-friendly platform for SIGNAL, a car rental company based in Georgia. The platform allows users to browse and select vehicles, calculate delivery options, and send rental requests. We focused on creating a seamless experience that combines functionality and aesthetic appeal, tailored to SIGNAL’s specific business needs and the local market',
            ru: 'Наша студия разработала полноценную и удобную платформу для компании SIGNAL, предоставляющей услуги аренды автомобилей в Грузии. Платформа позволяет пользователям выбирать автомобили, рассчитывать стоимость доставки и отправлять заявки на аренду. Мы сделали акцент на создании функционального и визуально привлекательного решения, соответствующего бизнес-задачам SIGNAL и особенностям локального рынка',
        },
        problem: {
            en: 'SIGNAL approached us with a request to create a complete platform for car selection and rental, including delivery cost calculation and a rental request system. The goal was to design a modern, user-centric solution that supports their growing business in Georgia',
            ru: 'Компания SIGNAL обратилась к нам с запросом на разработку полноценной платформы для выбора и аренды автомобилей, включая расчёт стоимости доставки и систему отправки заявок. Основной задачей было создание современного решения, ориентированного на удобство пользователей и поддерживающего растущий бизнес компании в Грузии',
        },
        link: 'signal-car-rental.vercel.app',
        stack: 'react | next.js | typescript | strapi | redux | css',
        emoji: '🚗',
        color: colors[6],
    };

    const project8: ProjectInterface = {
        id: 7,
        titleId: 'divo',
        title: {
            en: 'Divo',
            ru: 'Divo',
        },
        image: '/DivoVideo.mp4',
        descriptionShort: {
            en: 'Mini app for Telegram – Divo, an economic simulation game',
            ru: 'Мини-приложение для Telegram — Divo, экономическая игра',
        },
        descriptionFull: {
            en: 'Our studio created a Telegram mini app called Divo, an engaging economic simulation game. Players can select models, earn Divo coins, and manage their in-game finances. The app features deposits, a friend system, a clicker mechanic, and daily tasks, providing users with a dynamic and interactive experience',
            ru: 'Наша студия разработала мини-приложение для Telegram под названием Divo — увлекательную экономическую игру. Пользователи могут выбирать моделей, зарабатывать диво-коины и управлять своими игровыми финансами. Приложение включает в себя систему депозитов, друзей, механику кликера и ежедневные задания, предлагая пользователям динамичный и интерактивный опыт',
        },
        problem: {
            en: 'The client approached us with the idea of creating an economic simulation game for Telegram. The goal was to develop a mini app with engaging features like model selection, virtual currency, deposits, and daily tasks to ensure high user engagement',
            ru: 'Клиент обратился к нам с идеей создания экономической игры для Telegram. Основной задачей было разработать мини-приложение с увлекательным функционалом, включающим выбор моделей, виртуальную валюту, депозиты и ежедневные задания, чтобы обеспечить высокий уровень вовлеченности пользователей',
        },
        link: 't.me/divo_fashion_bot',
        stack: 'react | next.js | typescript | redux | redis | postgresql | css',
        emoji: '💄',
        color: colors[7],
    };  
    
    const project9: ProjectInterface = {
        id: 8,
        titleId: 'accent',
        title: {
            en: 'Accent',
            ru: 'Акцент',
        },
        image: '/AccentVideo.mp4',
        descriptionShort: {
            en: 'Telegram mini app for an online school preparing students for exams',
            ru: 'Мини-приложение для Telegram — онлайн-школа подготовки к ЕГЭ',
        },
        descriptionFull: {
            en: 'Our studio developed a Telegram mini app called Accent, designed for an online school specializing in preparation for various exams, including the Unified State Exam (EGE). The platform provides a unified solution for multiple subjects, allowing students to solve problems, track their progress with detailed statistics, receive answers from teachers, and purchase subscriptions for extended access. The app ensures an intuitive and engaging learning experience for students',
            ru: 'Наша студия разработала мини-приложение для Telegram под названием «Акцент» для онлайн-школы, специализирующейся на подготовке к различным экзаменам, включая ЕГЭ. Платформа представляет собой единое решение для нескольких предметов, предоставляя пользователям возможность решать задачи, отслеживать прогресс с помощью статистики, получать ответы от учителей и оформлять подписку для расширенного доступа. Приложение обеспечивает интуитивный и увлекательный процесс обучения для школьников',
        },
        problem: {
            en: 'The client approached us with the goal of creating a unified platform for their online school in Telegram. The app needed to support multiple subjects, provide features like problem-solving, progress tracking, teacher feedback, and subscription management to enhance the learning process and user engagement',
            ru: 'Клиент обратился к нам с целью создания единой платформы для своей онлайн-школы в Telegram. Приложение должно было поддерживать несколько предметов, предоставлять функционал для решения задач, отслеживания прогресса, получения обратной связи от учителей и управления подписками, чтобы улучшить процесс обучения и вовлеченность пользователей',
        },
        link: 't.me/accentune_bot',
        stack: 'react | next.js | typescript | redux | redis | postgresql | css',
        emoji: '🎓',
        color: colors[8],
    };

    const project10: ProjectInterface = {
        id: 9,
        titleId: 'prioritet',
        title: {
            en: 'Prioritet',
            ru: 'Приоритет',
        },
        image: '/PrioritetVideo.mp4',
        descriptionShort: {
            en: 'Web portal for OOO "Prioritet Snab" with advanced features for buyers and sellers',
            ru: 'Веб-портал для ООО "Приоритет Снаб" с расширенным функционалом для покупателей и продавцов',
        },
        descriptionFull: {
            en: 'Our studio developed a web portal for OOO "Prioritet Snab," designed to streamline the purchasing and selling processes for both buyers and sellers. The platform includes personalized accounts, smart search functionality, product purchasing, favorites, shopping carts, and advanced filters. This solution enhances user experience and optimizes the interaction between all participants in the marketplace.',
            ru: 'Наша студия разработала веб-портал для ООО "Приоритет Снаб," предназначенный для оптимизации процессов покупки и продажи для покупателей и продавцов. Платформа включает в себя персонализированные кабинеты, умный поиск, возможность покупки товаров, избранное, корзину и продвинутые фильтры. Это решение улучшает пользовательский опыт и оптимизирует взаимодействие всех участников на платформе.',
        },
        problem: {
            en: 'The client approached us with the task of creating a comprehensive portal for managing buyer and seller interactions. The system needed to include personal accounts, intelligent search capabilities, shopping features, favorites, carts, and robust filtering options to enhance usability and functionality.',
            ru: 'Клиент обратился к нам с задачей создать полноценный портал для управления взаимодействием покупателей и продавцов. Система должна была включать персонализированные кабинеты, интеллектуальный поиск, функционал для покупок, избранное, корзину и продвинутые фильтры для повышения удобства и функциональности.',
        },
        link: 'prioritet-portal.vercel.app',
        stack: 'react | next.js | typescript | redux | redis | postgresql | css',
        emoji: '🌱',
        color: colors[9],
    };

    const project11: ProjectInterface = {
        id: 10,
        titleId: 'banana_vpn',
        title: {
            en: 'banana.vpn',
            ru: 'banana.vpn',
        },
        image: '/BananaVPNVideo.mp4',
        descriptionShort: {
            en: 'Telegram mini app for managing VPN subscriptions',
            ru: 'Мини-приложение для Telegram для управления подписками на VPN',
        },
        descriptionFull: {
            en: 'Our studio developed banana.vpn, a Telegram mini app designed to manage VPN subscriptions. This app allows users to download the launcher, manage their subscriptions, and control connected devices. As our own in-house project, banana.vpn showcases our ability to create robust, user-friendly solutions tailored to modern digital needs.',
            ru: 'Наша студия разработала banana.vpn — мини-приложение для Telegram, предназначенное для управления подписками на VPN. Приложение позволяет скачивать лаунчер, управлять подписками и контролировать подключенные устройства. Это наш собственный проект, демонстрирующий нашу способность создавать надёжные и удобные решения, отвечающие современным цифровым потребностям.',
        },
        problem: {
            en: 'As an in-house project, our goal was to create a versatile and user-friendly solution for managing VPN subscriptions. The app needed to include features such as a launcher download, subscription management, and device control, ensuring seamless functionality for users.',
            ru: 'Как собственный проект, наша задача заключалась в создании универсального и удобного решения для управления подписками на VPN. Приложение должно было включать такие функции, как скачивание лаунчера, управление подписками и контроль подключённых устройств, обеспечивая бесперебойную работу для пользователей.',
        },
        link: 't.me/banana_codes_vpn_bot',
        stack: 'react | next.js | typescript | redux | redis | postgresql | css',
        emoji: '🍌',
        color: colors[10],
    };    

    return [project1, project2, project3, project4, project5, project6, project7,
        project8, project9, project10, project11];
}

export function getProjectByTitleId(titleId: string | string[] | undefined): ProjectInterface {
    const projectsList: ProjectInterface[] = getProjects();

    return projectsList.filter(p => p.titleId === titleId)[0];
}

import {gitHubLink} from "../header/header-items";

export const menuItems = [
    {
        title: 'Каналы',
        links: [
            {
                title: 'GitHub',
                external: true,
                link: gitHubLink
            },
            {
                title: 'Telegram',
                external: true,
                link: 'https://telegram.com'
            },
            {
                title: 'Discord',
                external: true,
                link: ''
            },
            {
                title: 'VK',
                external: true,
                link: ''
            }
        ]
    },
    {
        title: 'Документация',
        links: [
            {
                title: 'Быстрый старт',
                external: false,
                link: '/quick-start'
            },
            {
                title: 'Книга рецептов',
                external: false,
                link: '/cook-book'
            }
        ]
    },
]
export const siteConfig: SiteConfig = {
    title: "Hi! Nothiny",
    language: "zh",
    description: "Nothiny's personal blog. Powered by Astro Blog Theme Blur.",
    keywords: "Nothiny, blog, personal blog, Astro, Astro Blog Theme Blur",
    author: "Nothiny",
    avatar: "/avatar.png",
    favicon: "/favicon.png",
    site: "https://nothiny.github.io",

    page_size: 10,
}

export const navBarConfig: NavBarConfig = {
    links: [
        {
            name: 'Projects',
            url: '/projects'
        },
        {
            name: 'Links',
            url: '/links'
        },
        {
            name: 'About',
            url: '/about'
        }
    ]
}

export const socialLinks: SocialLink[] = [
    // https://icon-sets.iconify.design/material-symbols/
    {
        label: 'GitHub',
        icon: 'mdi-github',
        url: 'https://github.com/Nothiny'
    },
    {
        label: 'Email',
        icon: 'material-symbols:mail-rounded',
        url: 'mailto:eliaukz07@gmail.com'
    }
]

interface SiteConfig {
    title: string
    language: string
    description: string
    keywords: string
    author: string
    avatar: string
    favicon: string
    site: string

    page_size: number
    twikoo_uri?: string     // https://twikoo.js.org/
}

interface NavBarConfig {
    links: {
        name: string
        url: string
        target?: string
    }[]
}

interface SocialLink {
    label: string
    icon: string
    url: string
}

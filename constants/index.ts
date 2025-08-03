export const navbarLinks = [
    {
        route: '/',
        label: 'Home'
    },
    {
        route: '/about',
        label: 'About'
    },
    {
        route: '/work',
        label: 'Work'
    },
    {
        route: '/services',
        label: 'Services'
    },
    {
        route: '/contact',
        label: 'Contact'
    },
]

export const projects = [
    {
        id: 'story',
        name: 'ZERO | STORY',
        thumbnail: '/projects/story.png',
        techStack: ['Next.js', 'Convex', 'Clerk', 'Stripe', 'TypeScript', 'Tailwind CSS'],
        description: 'A storytelling platform where users can read stories for free and purchase audio narrations. Features user authentication, payment processing, and content management.',
        year: '2023',
        service: 'SaaS Platform',
        link: 'ashishstory.vercel.app',
        videoUrl: "/placeholder.svg?height=400&width=800&text=Story+Demo+Video",
        showcaseImages: [
            "/placeholder.svg?height=600&width=800&text=Story+Homepage",
            "/placeholder.svg?height=600&width=800&text=Story+Library",
            "/placeholder.svg?height=600&width=800&text=Audio+Player",
            "/placeholder.svg?height=600&width=800&text=Payment+Flow",
            "/placeholder.svg?height=600&width=800&text=User+Dashboard",
        ],
    },
    {
        id: 'portfolio',
        name: 'ZERO | PORTFOLIO',
        thumbnail: '/projects/portfolio.png',
        techStack: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript', 'Vercel'],
        description: 'A modern portfolio website showcasing projects and skills with smooth animations, responsive design, and optimized performance.',
        year: '2023',
        service: 'Portfolio Website',
        link: 'ashishport.vercel.app',
        videoUrl: "/placeholder.svg?height=400&width=800&text=Portfolio+Demo+Video",
        showcaseImages: [
            "/placeholder.svg?height=600&width=800&text=Portfolio+Homepage",
            "/placeholder.svg?height=600&width=800&text=Projects+Gallery",
            "/placeholder.svg?height=600&width=800&text=About+Section",
            "/placeholder.svg?height=600&width=800&text=Contact+Form",
            "/placeholder.svg?height=600&width=800&text=Mobile+View",
        ],
    },
    {
        id: 'hub',
        name: 'ZERO | HUB',
        thumbnail: '/projects/zerohub.png',
        techStack: ['Next.js', 'Express.js', 'Prisma', 'PostgreSQL', 'Payload CMS', 'Docker', 'AWS EC2', 'NGINX', 'Stripe', 'Razorpay'],
        description: 'A SaaS platform helping businesses create customizable online storefronts with subdomain support, integrated payments, and content management.',
        service: 'Multi-vendor Platform',
        year: '2024',
        link: 'zerohub.site',
        videoUrl: "/placeholder.svg?height=400&width=800&text=Hub+Demo+Video",
        showcaseImages: [
            "/placeholder.svg?height=600&width=800&text=Hub+Dashboard",
            "/placeholder.svg?height=600&width=800&text=Store+Builder",
            "/placeholder.svg?height=600&width=800&text=Template+Gallery",
            "/placeholder.svg?height=600&width=800&text=Payment+Setup",
            "/placeholder.svg?height=600&width=800&text=Analytics+View",
        ],
    },
    {
        id: 'campus',
        name: 'ZERO | CAMPUS',
        thumbnail: '/projects/campus.png',
        techStack: ['Next.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'Tailwind CSS'],
        description: 'A comprehensive campus management system for educational institutions featuring student enrollment, course management, attendance tracking, and grading.',
        service: 'SaaS Platform',
        year: '2024',
        videoUrl: "/placeholder.svg?height=400&width=800&text=Campus+Demo+Video",
        showcaseImages: [
            "/placeholder.svg?height=600&width=800&text=Campus+Dashboard",
            "/placeholder.svg?height=600&width=800&text=Student+Portal",
            "/placeholder.svg?height=600&width=800&text=Course+Management",
            "/placeholder.svg?height=600&width=800&text=Attendance+System",
            "/placeholder.svg?height=600&width=800&text=Grade+Reports",
        ],
    },
    {
        id: 'deploy',
        name: 'ZERO | DEPLOY',
        thumbnail: '/projects/deploy.png',
        techStack: ['Node.js', 'Next.js', 'Docker', 'AWS ECS', 'Kafka', 'PostgreSQL', 'ClickHouse', 'NGINX'],
        description: 'A deployment automation platform using containerization and AWS services for scalable web application deployment with real-time messaging and analytics.',
        year: '2024',
        service: 'DevOps Platform',
        videoUrl: "/placeholder.svg?height=400&width=800&text=Deploy+Demo+Video",
        showcaseImages: [
            "/placeholder.svg?height=600&width=800&text=Deploy+Interface",
            "/placeholder.svg?height=600&width=800&text=Container+Management",
            "/placeholder.svg?height=600&width=800&text=AWS+Integration",
            "/placeholder.svg?height=600&width=800&text=Analytics+Dashboard",
            "/placeholder.svg?height=600&width=800&text=Deployment+Logs",
        ],
    },
]
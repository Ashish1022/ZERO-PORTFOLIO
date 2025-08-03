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
        id: 'zero-hub',
        name: 'ZERO | HUB',
        thumbnail: '/projects/zerohub.png',
        techStack: ['Next.js', 'tRPC', 'Drizzle', 'PostgreSQL', 'Payload CMS', 'Docker', 'AWS EC2', 'NGINX', 'Stripe', 'Razorpay'],
        description: 'A SaaS platform helping businesses create customizable online storefronts with subdomain support, integrated payments, and content management.',
        service: 'Multi-vendor Platform',
        year: '2025',
        link: 'zerohub.site',
        githubUrl: 'https://github.com/Ashish1022/ZERO-HUB',
        videoUrl: "/videos/hub.mp4",
        showcaseImages: [
            "/projects/hub1.png",
            "/projects/hub2.png",
            "/projects/hub3.png",
            "/projects/hub4.png",
        ],
    },
    {
        id: 'zero-deploy',
        name: 'ZERO | DEPLOY',
        thumbnail: '/projects/deploy.png',
        techStack: ['Node.js', 'Next.js', 'Docker', 'AWS ECS', 'Kafka', 'PostgreSQL', 'ClickHouse', 'NGINX'],
        description: 'A deployment automation platform using containerization and AWS services for scalable web application deployment with real-time messaging and analytics.',
        year: '2024',
        service: 'DevOps Platform',
        githubUrl: 'https://github.com/yourusername/zero-deploy',
        videoUrl: "/placeholder.svg?height=400&width=800&text=Deploy+Demo+Video",
        showcaseImages: [
            "/placeholder.svg?height=600&width=800&text=Deploy+Interface",
            "/placeholder.svg?height=600&width=800&text=Container+Management",
            "/placeholder.svg?height=600&width=800&text=AWS+Integration",
            "/placeholder.svg?height=600&width=800&text=Analytics+Dashboard",
            "/placeholder.svg?height=600&width=800&text=Deployment+Logs",
        ],
    },
    {
        id: 'kafka-pipeline',
        name: 'Kafka Message Pipeline',
        thumbnail: '/projects/kafka.png',
        techStack: ['Apache Kafka', 'Node.js', 'ClickHouse', 'Docker', 'PostgreSQL', 'Express.js'],
        description: 'A high-throughput message queue system built with Apache Kafka for real-time data streaming and processing with ClickHouse analytics integration.',
        service: 'Data Pipeline',
        year: '2024',
        githubUrl: 'https://github.com/yourusername/kafka-pipeline', // Add your actual GitHub URL
        videoUrl: "/videos/kafka-producer-consumer.mp4",
        showcaseImages: [
            "/placeholder.svg?height=600&width=800&text=Kafka+Dashboard",
            "/placeholder.svg?height=600&width=800&text=Producer+Interface",
            "/placeholder.svg?height=600&width=800&text=Consumer+Monitoring",
            "/placeholder.svg?height=600&width=800&text=Analytics+View",
            "/placeholder.svg?height=600&width=800&text=Message+Flow",
        ],
    },
    {
        id: 'zero-story',
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
        id: 'itsa',
        name: 'ITSA Platform',
        thumbnail: '/projects/itsa.png',
        techStack: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'Material-UI'],
        description: 'An Information Technology Student Association platform for managing events, member registrations, and academic resources.',
        service: 'Educational Platform',
        year: '2023',
        videoUrl: "/placeholder.svg?height=400&width=800&text=ITSA+Demo+Video",
        showcaseImages: [
            "/placeholder.svg?height=600&width=800&text=ITSA+Homepage",
            "/placeholder.svg?height=600&width=800&text=Event+Management",
            "/placeholder.svg?height=600&width=800&text=Member+Portal",
            "/placeholder.svg?height=600&width=800&text=Resource+Library",
            "/placeholder.svg?height=600&width=800&text=Admin+Dashboard",
        ],
    },
    {
        id: 'stickers',
        name: 'Stickers Marketplace',
        thumbnail: '/projects/stickers.png',
        techStack: ['Next.js', 'Shopify API', 'Stripe', 'Tailwind CSS', 'TypeScript'],
        description: 'An e-commerce platform for custom sticker designs with print-on-demand integration and personalization features.',
        service: 'E-commerce Platform',
        year: '2023',
        videoUrl: "/placeholder.svg?height=400&width=800&text=Stickers+Demo+Video",
        showcaseImages: [
            "/placeholder.svg?height=600&width=800&text=Stickers+Shop",
            "/placeholder.svg?height=600&width=800&text=Design+Tool",
            "/placeholder.svg?height=600&width=800&text=Product+Gallery",
            "/placeholder.svg?height=600&width=800&text=Checkout+Flow",
            "/placeholder.svg?height=600&width=800&text=Order+Tracking",
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
        githubUrl:'https://github.com/Ashish1022/ZERO-PORTFOLIO',
        showcaseImages: [
            "/placeholder.svg?height=600&width=800&text=Portfolio+Homepage",
            "/placeholder.svg?height=600&width=800&text=Projects+Gallery",
            "/placeholder.svg?height=600&width=800&text=About+Section",
            "/placeholder.svg?height=600&width=800&text=Contact+Form",
            "/placeholder.svg?height=600&width=800&text=Mobile+View",
        ],
    },
]

// zero-deploy
// zero-hub
// kafka-pipeline
// itsa 
// stickers
// zero-story
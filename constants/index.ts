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

export const experiences = [
    {
        period: 'Sep 2026 - Present',
        duration: '1 mo',
        role: 'Founding Engineer',
        type: 'Full-time',
        company: 'GradGuide',
        location: 'Mumbai, India',
        description: 'Moved beyond maintaining the core CRM to independently building new products for the company.',
        highlights: [
            'Designed and shipped a job search platform for UK graduate roles — built the scraping and search pipeline end-to-end, from data collection to near real-time searchable listings.',
            'Designed and launched an internal Leave Management System with multi-stage approval workflows and WhatsApp notifications, now used company-wide.',
            'Built and deployed a WhatsApp bot for business intelligence on a cloud server, resolving dependency and stability issues to get it production-ready.'
        ],
        skills: ['Next.js', 'tRPC', 'Drizzle ORM', 'Web Scraping', 'Baileys', 'Redis', 'QStash', 'Cloud Deployment']
    },
    {
        period: 'May 2026 - Aug 2026',
        duration: '4 mos',
        role: 'Software Engineer',
        type: 'Full-time',
        company: 'GradGuide',
        location: 'Mumbai, India',
        description: 'Converted to full-time and took full ownership of the CRM, having built it from the ground up and scaled it into a system relied on daily by sales, counseling, and admissions teams.',
        highlights: [
            'Scaled the platform to support 50,000+ concurrent leads at 99% uptime; wrote the SQL powering funnel and performance dashboards.',
            'Built a reminder system for follow-ups and counselling sessions that fires exactly on schedule and survives deploys and restarts.',
            'Introduced approval steps for postponing follow-ups and changing lead priority, and fixed role-based access issues affecting cross-team visibility.',
            'Integrated click-to-call logging, WhatsApp messaging, and an AI assistant for analytics queries; diagnosed and resolved production incidents.'
        ],
        skills: ['PostgreSQL', 'SQL Analytics', 'tRPC', 'Drizzle ORM', 'WhatsApp API', 'Gemini AI', 'RBAC']
    },
    {
        period: 'Dec 2025 - May 2026',
        duration: '6 mos',
        role: 'Tech Intern',
        type: 'Internship',
        company: 'GradGuide',
        location: 'Mumbai, India',
        description: 'Joined the company and learned full-stack development by contributing to the CRM from its earliest stages.',
        highlights: [
            'Helped design the Postgres schema and worked on a type-safe Next.js 16 app with a tRPC API layer, organized into 15 self-contained modules.',
            'Wrote seed scripts to generate realistic leads and user data for development, testing, and demos without touching production.',
            'Built core lead-tracking UI data tables, forms, and shareable URL-synced filters backed by an audit log recording every stage change.',
            'Implemented optimistic UI updates so edits felt instant instead of waiting on server responses.'
        ],
        skills: ['Next.js 16', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'TanStack Query', 'Optimistic UI']
    },
    {
        period: '2022 - 2025',
        duration: '3 yrs',
        role: 'Full-Stack Developer',
        type: 'Independent',
        company: 'Personal & Freelance Projects',
        location: 'Remote',
        description: 'Built and shipped SaaS, DevOps, and e-commerce products end-to-end while studying Information Technology.',
        highlights: [
            'Shipped ZERO | HUB, a multi-vendor storefront SaaS with subdomain provisioning and Stripe/Razorpay payments.',
            'Built ZERO | DEPLOY, a container deployment platform on AWS ECS with Kafka messaging and ClickHouse analytics.',
            'Delivered client and community platforms including an e-commerce marketplace and the ITSA student association portal.'
        ],
        skills: ['Next.js', 'Node.js', 'Docker', 'AWS', 'Kafka', 'PostgreSQL', 'Stripe']
    }
]

export interface Project {
    id: string
    name: string
    thumbnail: string
    techStack: string[]
    description: string
    service: string
    year: string
    duration: string
    role: string
    teamSize: string
    /** Live URL, with or without protocol. Not every project has one. */
    link?: string
    githubUrl?: string
    videoUrl: string
    showcaseImages: string[]
    overview: string
    challenge: string
    solution: string
    features: { title: string; description: string }[]
    architecture: string
    performanceMetrics: { label: string; value: string }[]
    /** Either a set of headline numbers, or a prose summary of the outcome. */
    impact: { value: string; label: string }[] | string
    keyLearnings: string[]
    futureEnhancements: string[]
}

export const projects: Project[] = [
    {
        id: 'zero-hub',
        name: 'ZERO | HUB',
        thumbnail: '/projects/hub.png',
        techStack: ['Next.js', 'tRPC', 'Drizzle', 'PostgreSQL', 'Payload CMS', 'Docker', 'AWS EC2', 'NGINX', 'Stripe', 'Razorpay'],
        description: 'A comprehensive SaaS platform empowering businesses to create stunning, customizable online storefronts with subdomain support, integrated payments, and powerful content management capabilities.',
        service: 'Multi-vendor Platform',
        year: '2025',
        duration: '4 months',
        role: 'Full Stack Developer',
        teamSize: 'Solo Project',
        link: 'zerohub.site',
        githubUrl: 'https://github.com/Ashish1022/ZERO-HUB',
        videoUrl: "/videos/hub.mp4",
        showcaseImages: [
            "/projects/hub1.png",
            "/projects/hub2.png",
            "/projects/hub3.png",
            "/projects/hub4.png",
        ],
        overview: "ZERO | HUB is a next-generation SaaS platform designed to democratize e-commerce by enabling businesses of all sizes to create professional online storefronts. The platform combines powerful content management, flexible customization options, and seamless payment integration to provide a complete e-commerce solution.",
        challenge: "Small businesses struggle with expensive e-commerce solutions that require technical expertise. Most platforms either lack customization options or are too complex for non-technical users. Additionally, multi-vendor support and subdomain management remain technically challenging.",
        solution: "Built a comprehensive SaaS platform with intuitive drag-and-drop store builder, automated subdomain provisioning, integrated payment gateways, and a powerful CMS. The platform uses modern technologies to ensure scalability while maintaining simplicity for end users.",
        features: [
            {
                title: "Custom Subdomain Support",
                description: "Automatic subdomain creation and DNS management for each store"
            },
            {
                title: "Multi-Payment Integration",
                description: "Support for Stripe, Razorpay, and other payment gateways"
            },
            {
                title: "Drag & Drop Builder",
                description: "Intuitive store customization without coding knowledge"
            },
            {
                title: "Content Management",
                description: "Powerful CMS with Payload for content and product management"
            },
            {
                title: "Responsive Design",
                description: "Mobile-first approach ensuring perfect display on all devices"
            },
            {
                title: "Analytics Dashboard",
                description: "Comprehensive insights into store performance and sales"
            }
        ],
        architecture: "Built on Next.js with tRPC for type-safe APIs, Drizzle ORM for database management, and PostgreSQL for data persistence. Deployed on AWS EC2 with Docker containerization and NGINX for load balancing. Payload CMS provides headless content management capabilities.",
        performanceMetrics: [
            { label: "Page Load Time", value: "< 2s" },
            { label: "Database Query Time", value: "< 100ms" },
            { label: "API Response Time", value: "< 200ms" },
            { label: "Uptime", value: "99.9%" }
        ],
        impact: [
            { value: "50+", label: "Active Stores" },
            { value: "95%", label: "User Satisfaction" },
            { value: "30%", label: "Faster Store Setup" },
            { value: "$10K+", label: "Revenue Generated" }
        ],
        keyLearnings: [
            "Mastered tRPC for building type-safe full-stack applications",
            "Learned advanced Docker containerization and AWS deployment strategies",
            "Gained expertise in multi-tenant architecture and subdomain management",
            "Developed skills in payment gateway integration and security best practices",
            "Understanding of scalable database design with Drizzle ORM"
        ],
        futureEnhancements: [
            "Mobile app for store management",
            "Advanced analytics and reporting",
            "Multi-language support",
            "AI-powered product recommendations",
            "Social media integration",
            "Inventory management system"
        ]
    },
    {
        id: 'zero-deploy',
        name: 'ZERO | DEPLOY',
        thumbnail: '/projects/deploy.png',
        techStack: ['Node.js', 'Next.js', 'Docker', 'AWS ECS', 'Kafka', 'PostgreSQL', 'ClickHouse', 'NGINX'],
        description: 'An enterprise-grade deployment automation platform leveraging containerization and AWS services for scalable web application deployment with real-time messaging and comprehensive analytics.',
        year: '2024',
        duration: '3 months',
        role: 'DevOps Engineer & Full Stack Developer',
        teamSize: 'Solo Project',
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
        overview: "ZERO | DEPLOY transforms the deployment process by providing a unified platform for containerized application deployment on AWS infrastructure. It combines the power of Docker, AWS ECS, and Apache Kafka to create a robust, scalable deployment pipeline with real-time monitoring and analytics.",
        challenge: "Traditional deployment processes are time-consuming, error-prone, and lack real-time monitoring. Teams struggle with container orchestration, scaling decisions, and tracking deployment metrics across multiple environments.",
        solution: "Developed an automated deployment platform that handles containerization, orchestration, and monitoring in one seamless workflow. Integrated Kafka for real-time messaging and ClickHouse for high-performance analytics, providing instant insights into deployment health and performance.",
        features: [
            {
                title: "One-Click Deployment",
                description: "Deploy applications from Git repositories with a single click"
            },
            {
                title: "Container Orchestration",
                description: "Automated Docker container management with AWS ECS"
            },
            {
                title: "Real-time Monitoring",
                description: "Live deployment status and performance metrics"
            },
            {
                title: "Auto-scaling",
                description: "Dynamic resource allocation based on application load"
            },
            {
                title: "Analytics Dashboard",
                description: "Comprehensive deployment analytics with ClickHouse"
            },
            {
                title: "Log Aggregation",
                description: "Centralized logging with search and filtering capabilities"
            }
        ],
        architecture: "Microservices architecture with Node.js backend, Next.js frontend, and Docker containerization. AWS ECS handles container orchestration while Kafka manages real-time messaging. ClickHouse provides high-performance analytics storage and PostgreSQL manages application data.",
        performanceMetrics: [
            { label: "Deployment Time", value: "< 5 min" },
            { label: "System Uptime", value: "99.8%" },
            { label: "Container Startup", value: "< 30s" },
            { label: "Log Processing", value: "1M+ events/min" }
        ],
        impact: "Reduced deployment time by 70%, eliminated deployment-related downtime, and provided development teams with unprecedented visibility into their application performance and deployment health.",
        keyLearnings: [
            "Mastered AWS ECS and container orchestration best practices",
            "Gained deep understanding of Apache Kafka for event-driven architecture",
            "Learned ClickHouse for high-performance analytics and time-series data",
            "Developed expertise in microservices communication patterns",
            "Understanding of DevOps automation and CI/CD pipeline optimization"
        ],
        futureEnhancements: [
            "Multi-cloud deployment support",
            "Advanced security scanning",
            "Cost optimization recommendations",
            "Integration with popular CI/CD tools",
            "Machine learning-based performance predictions"
        ]
    },
    {
        id: 'kafka-pipeline',
        name: 'Kafka Message Pipeline',
        thumbnail: '/projects/intelligence.png',
        techStack: ['Apache Kafka', 'Node.js', 'ClickHouse', 'Docker', 'PostgreSQL', 'Express.js'],
        description: 'A high-performance, distributed message queue system built with Apache Kafka for real-time data streaming and processing, integrated with ClickHouse for advanced analytics and monitoring.',
        service: 'Data Pipeline',
        year: '2024',
        duration: '2 months',
        role: 'Backend Developer & Data Engineer',
        teamSize: 'Solo Project',
        githubUrl: 'https://github.com/yourusername/kafka-pipeline',
        videoUrl: "/videos/kafka-producer-consumer.mp4",
        showcaseImages: [
            "/placeholder.svg?height=600&width=800&text=Kafka+Dashboard",
            "/placeholder.svg?height=600&width=800&text=Producer+Interface",
            "/placeholder.svg?height=600&width=800&text=Consumer+Monitoring",
            "/placeholder.svg?height=600&width=800&text=Analytics+View",
            "/placeholder.svg?height=600&width=800&text=Message+Flow",
        ],
        overview: "This project implements a robust message pipeline system using Apache Kafka to handle high-throughput data streaming. The system provides reliable message delivery, real-time processing capabilities, and comprehensive analytics through ClickHouse integration, making it perfect for enterprise-scale data processing.",
        challenge: "Modern applications need to process millions of messages per second while maintaining data integrity and providing real-time analytics. Traditional message queues struggle with scale, and existing solutions lack integrated analytics capabilities.",
        solution: "Architected a distributed message pipeline using Apache Kafka's proven reliability and scalability. Integrated ClickHouse for real-time analytics and created a comprehensive monitoring dashboard to track message flow, consumer lag, and system performance metrics.",
        features: [
            {
                title: "High Throughput Processing",
                description: "Handle millions of messages per second with guaranteed delivery"
            },
            {
                title: "Consumer Group Management",
                description: "Intelligent consumer scaling and load balancing"
            },
            {
                title: "Real-time Analytics",
                description: "Live insights into message patterns and system performance"
            },
            {
                title: "Message Replay",
                description: "Replay historical messages for testing and recovery"
            },
            {
                title: "Schema Registry",
                description: "Schema evolution and compatibility management"
            },
            {
                title: "Monitoring Dashboard",
                description: "Comprehensive system health and performance monitoring"
            }
        ],
        architecture: "Distributed architecture with Kafka brokers for message storage and routing, Node.js producers and consumers for message handling, and ClickHouse for high-performance analytics. Docker ensures consistent deployment across environments.",
        performanceMetrics: [
            { label: "Messages/Second", value: "1M+" },
            { label: "End-to-End Latency", value: "< 10ms" },
            { label: "Consumer Lag", value: "< 100ms" },
            { label: "System Availability", value: "99.95%" }
        ],
        impact: [
            { value: "10x", label: "Processing Speed Increase" },
            { value: "99.9%", label: "Message Delivery Rate" },
            { value: "50%", label: "Infrastructure Cost Reduction" },
            { value: "24/7", label: "System Availability" }
        ],
        keyLearnings: [
            "Mastered Apache Kafka architecture and optimization techniques",
            "Learned ClickHouse for high-performance analytical workloads",
            "Gained expertise in distributed systems design patterns",
            "Understanding of message serialization and schema evolution",
            "Developed skills in system monitoring and performance tuning"
        ],
        futureEnhancements: [
            "Stream processing with Kafka Streams",
            "Machine learning integration for anomaly detection",
            "Multi-region replication setup",
            "Advanced security features",
            "Integration with data lakes and warehouses"
        ]
    },
    {
        id: 'zero-story',
        name: 'ZERO | STORY',
        thumbnail: '/projects/story.png',
        techStack: ['Next.js', 'Convex', 'Clerk', 'Stripe', 'TypeScript', 'Tailwind CSS'],
        description: 'An innovative storytelling platform where users can discover and read stories for free while purchasing premium audio narrations, featuring seamless user authentication and payment processing.',
        year: '2023',
        duration: '2 months',
        role: 'Full Stack Developer',
        teamSize: 'Solo Project',
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
        overview: "ZERO | STORY reimagines digital storytelling by creating a platform where literature meets technology. Users can access a vast library of stories for free while having the option to purchase high-quality audio narrations, creating a sustainable model for both readers and content creators.",
        challenge: "Digital reading platforms often struggle with monetization while maintaining accessibility. Many platforms either charge for all content or compromise on quality. There's also a growing demand for audio content that existing platforms don't address effectively.",
        solution: "Created a freemium model where text stories remain free while premium audio narrations are available for purchase. This approach maximizes accessibility while creating revenue streams for content creators and platform sustainability.",
        features: [
            {
                title: "Free Text Stories",
                description: "Access to complete story library at no cost"
            },
            {
                title: "Premium Audio Narrations",
                description: "High-quality audio versions available for purchase"
            },
            {
                title: "User Authentication",
                description: "Secure login and user management with Clerk"
            },
            {
                title: "Payment Processing",
                description: "Seamless payments through Stripe integration"
            },
            {
                title: "Reading Progress Tracking",
                description: "Save and resume reading across devices"
            },
            {
                title: "Personalized Recommendations",
                description: "AI-driven story suggestions based on reading history"
            }
        ],
        architecture: "Built with Next.js for optimal performance and SEO, Convex for real-time database operations, Clerk for authentication, and Stripe for payment processing. The modern tech stack ensures scalability and excellent user experience.",
        performanceMetrics: [
            { label: "Page Load Time", value: "< 1.5s" },
            { label: "Payment Success Rate", value: "99.2%" },
            { label: "User Engagement", value: "8 min avg." },
            { label: "Mobile Performance", value: "95/100" }
        ],
        impact: [
            { value: "500+", label: "Stories Available" },
            { value: "1K+", label: "Monthly Readers" },
            { value: "85%", label: "User Retention" },
            { value: "$2K+", label: "Monthly Revenue" }
        ],
        keyLearnings: [
            "Mastered Convex for real-time database operations and synchronization",
            "Learned Clerk authentication system and user management best practices",
            "Gained experience with Stripe payment integration and subscription models",
            "Understanding of content delivery optimization for text and audio",
            "Developed skills in user experience design for reading platforms"
        ],
        futureEnhancements: [
            "Author dashboard for content creators",
            "Advanced reading analytics",
            "Social features and story sharing",
            "Offline reading capabilities",
            "Multi-language support",
            "Book club and community features"
        ]
    },
    {
        id: 'itsa',
        name: 'ITSA Platform',
        thumbnail: '/projects/campus.png',
        techStack: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'Material-UI'],
        description: 'A comprehensive platform for the Information Technology Student Association, facilitating event management, member registrations, academic resource sharing, and community building.',
        service: 'Educational Platform',
        year: '2023',
        duration: '3 months',
        role: 'Full Stack Developer',
        teamSize: '2 developers',
        videoUrl: "/placeholder.svg?height=400&width=800&text=ITSA+Demo+Video",
        showcaseImages: [
            "/placeholder.svg?height=600&width=800&text=ITSA+Homepage",
            "/placeholder.svg?height=600&width=800&text=Event+Management",
            "/placeholder.svg?height=600&width=800&text=Member+Portal",
            "/placeholder.svg?height=600&width=800&text=Resource+Library",
            "/placeholder.svg?height=600&width=800&text=Admin+Dashboard",
        ],
        overview: "The ITSA Platform serves as the digital backbone for our college's Information Technology Student Association. It streamlines event management, member communications, and academic resource sharing while fostering a stronger sense of community among IT students.",
        challenge: "Student associations typically struggle with fragmented communication, manual event management, and difficulty in sharing academic resources effectively. Traditional methods lead to low participation and poor information dissemination.",
        solution: "Developed a centralized platform that automates event management, enables seamless resource sharing, and provides efficient communication channels. The platform integrates all association activities into one cohesive digital experience.",
        features: [
            {
                title: "Event Management",
                description: "Create, manage, and track events with RSVP functionality"
            },
            {
                title: "Member Directory",
                description: "Comprehensive member profiles and networking capabilities"
            },
            {
                title: "Resource Library",
                description: "Organized academic resources, notes, and study materials"
            },
            {
                title: "Announcement System",
                description: "Instant notifications and important announcements"
            },
            {
                title: "Admin Dashboard",
                description: "Comprehensive management tools for association leaders"
            },
            {
                title: "Discussion Forums",
                description: "Topic-based discussions and peer support"
            }
        ],
        architecture: "Full-stack MERN application with React frontend, Node.js/Express backend, and MongoDB for data persistence. JWT handles authentication while Material-UI ensures consistent, professional design.",
        performanceMetrics: [
            { label: "Active Members", value: "200+" },
            { label: "Event Attendance", value: "+40%" },
            { label: "Resource Downloads", value: "1K+/month" },
            { label: "User Satisfaction", value: "92%" }
        ],
        impact: "Increased student participation by 40%, streamlined event organization, and created a centralized hub for academic collaboration. The platform now serves as a model for other student associations.",
        keyLearnings: [
            "Gained expertise in MERN stack development and deployment",
            "Learned Material-UI for consistent and accessible design systems",
            "Understanding of community platform design and user engagement",
            "Developed skills in JWT authentication and role-based access control",
            "Experience with collaborative development and project management"
        ],
        futureEnhancements: [
            "Mobile app development",
            "Integration with university systems",
            "Advanced analytics and reporting",
            "Mentorship matching system",
            "Job board and career resources",
            "Alumni network integration"
        ]
    },
    {
        id: 'stickers',
        name: 'Stickers Marketplace',
        thumbnail: '',
        techStack: ['Next.js', 'Shopify API', 'Stripe', 'Tailwind CSS', 'TypeScript'],
        description: 'A modern e-commerce platform specializing in custom sticker designs with print-on-demand integration, personalization tools, and seamless shopping experience.',
        service: 'E-commerce Platform',
        year: '2023',
        duration: '2 months',
        role: 'Full Stack Developer',
        teamSize: 'Solo Project',
        videoUrl: "/placeholder.svg?height=400&width=800&text=Stickers+Demo+Video",
        showcaseImages: [
            "/placeholder.svg?height=600&width=800&text=Stickers+Shop",
            "/placeholder.svg?height=600&width=800&text=Design+Tool",
            "/placeholder.svg?height=600&width=800&text=Product+Gallery",
            "/placeholder.svg?height=600&width=800&text=Checkout+Flow",
            "/placeholder.svg?height=600&width=800&text=Order+Tracking",
        ],
        overview: "The Stickers Marketplace revolutionizes custom sticker shopping by combining an intuitive design interface with powerful e-commerce capabilities. Customers can browse pre-made designs or create custom stickers with real-time preview and instant pricing.",
        challenge: "Traditional custom printing services involve lengthy back-and-forth communication, unclear pricing, and limited design flexibility. Customers struggle to visualize their final products and often face unexpected costs.",
        solution: "Built an integrated platform where customers can design, customize, and order stickers in real-time. The print-on-demand integration eliminates inventory management while providing instant quotes and delivery estimates.",
        features: [
            {
                title: "Design Studio",
                description: "Interactive design tool with templates and customization options"
            },
            {
                title: "Print-on-Demand",
                description: "Seamless integration with printing services for automated fulfillment"
            },
            {
                title: "Real-time Pricing",
                description: "Instant price calculations based on size, quantity, and materials"
            },
            {
                title: "Product Visualization",
                description: "Live preview of designs on different sticker materials"
            },
            {
                title: "Order Tracking",
                description: "Complete visibility into production and shipping status"
            },
            {
                title: "Mobile Responsive",
                description: "Optimized shopping experience across all devices"
            }
        ],
        architecture: "Next.js provides the foundation with Shopify API handling e-commerce operations, Stripe for payment processing, and TypeScript ensuring code reliability. Tailwind CSS delivers a modern, responsive design.",
        performanceMetrics: [
            { label: "Conversion Rate", value: "4.2%" },
            { label: "Average Order Value", value: "$28" },
            { label: "Page Load Speed", value: "< 2s" },
            { label: "Customer Satisfaction", value: "96%" }
        ],
        impact: [
            { value: "500+", label: "Products Sold" },
            { value: "300+", label: "Happy Customers" },
            { value: "15%", label: "Monthly Growth" },
            { value: "$8K+", label: "Total Revenue" }
        ],
        keyLearnings: [
            "Mastered Shopify API integration for headless commerce solutions",
            "Gained experience with print-on-demand business models and fulfillment",
            "Learned advanced TypeScript patterns for complex e-commerce logic",
            "Understanding of conversion optimization and user experience design",
            "Developed skills in payment processing and order management systems"
        ],
        futureEnhancements: [
            "Advanced design tools with AI assistance",
            "Bulk ordering and corporate accounts",
            "Subscription boxes for regular customers",
            "Integration with social media platforms",
            "Augmented reality preview features",
            "Multi-currency and international shipping"
        ]
    },
    {
        id: 'portfolio',
        name: 'ZERO | PORTFOLIO',
        thumbnail: '/projects/portfolio.png',
        techStack: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript', 'Vercel'],
        description: 'A cutting-edge portfolio website showcasing projects and skills through immersive animations, responsive design, and optimized performance, setting new standards for developer portfolios.',
        year: '2023',
        duration: '1 month',
        role: 'Frontend Developer & Designer',
        teamSize: 'Solo Project',
        service: 'Portfolio Website',
        link: 'ashishport.vercel.app',
        videoUrl: "/placeholder.svg?height=400&width=800&text=Portfolio+Demo+Video",
        githubUrl: 'https://github.com/Ashish1022/ZERO-PORTFOLIO',
        showcaseImages: [
            "/placeholder.svg?height=600&width=800&text=Portfolio+Homepage",
            "/placeholder.svg?height=600&width=800&text=Projects+Gallery",
            "/placeholder.svg?height=600&width=800&text=About+Section",
            "/placeholder.svg?height=600&width=800&text=Contact+Form",
            "/placeholder.svg?height=600&width=800&text=Mobile+View",
        ],
        overview: "ZERO | PORTFOLIO represents the evolution of developer portfolios, combining stunning visual design with technical excellence. Every interaction is carefully crafted to create an engaging experience that reflects both creativity and technical competence.",
        challenge: "Most developer portfolios are either too technical and boring, or too flashy without substance. The challenge was to create something that balances visual appeal with professional credibility while maintaining excellent performance.",
        solution: "Designed a portfolio that tells a story through smooth animations and interactive elements while maintaining fast loading times and accessibility. The site showcases both technical skills and design sensibility through its very existence.",
        features: [
            {
                title: "Smooth Animations",
                description: "Framer Motion powered interactions that delight users"
            },
            {
                title: "Responsive Design",
                description: "Pixel-perfect experience across all devices and screen sizes"
            },
            {
                title: "Performance Optimized",
                description: "Lightning-fast loading with Next.js optimization features"
            },
            {
                title: "Interactive Elements",
                description: "Engaging hover effects and scroll-triggered animations"
            },
            {
                title: "SEO Optimized",
                description: "Perfect lighthouse scores and search engine visibility"
            },
            {
                title: "Contact Integration",
                description: "Functional contact form with email notifications"
            }
        ],
        architecture: "Built with Next.js for optimal performance and SEO, Framer Motion for smooth animations, and Tailwind CSS for utility-first styling. TypeScript ensures code reliability while Vercel provides seamless deployment.",
        performanceMetrics: [
            { label: "Lighthouse Score", value: "98/100" },
            { label: "First Load Time", value: "< 1s" },
            { label: "Mobile Performance", value: "96/100" },
            { label: "Accessibility Score", value: "100/100" }
        ],
        impact: [
            { value: "2K+", label: "Monthly Visitors" },
            { value: "85%", label: "Engagement Rate" },
            { value: "50+", label: "Project Inquiries" },
            { value: "12", label: "Job Offers" }
        ],
        keyLearnings: [
            "Mastered Framer Motion for complex animations and transitions",
            "Gained deep understanding of performance optimization techniques",
            "Learned advanced Tailwind CSS patterns and component design",
            "Understanding of accessibility best practices and WCAG guidelines",
            "Developed skills in user experience design and storytelling"
        ],
        futureEnhancements: [
            "Dark/light theme toggle",
            "Blog section for technical articles",
            "Interactive project demos",
            "3D elements and WebGL integration",
            "Multi-language support",
            "Advanced analytics and visitor insights"
        ]
    }
]

export const profile = {
    name: 'Ashish Jadhav',
    handle: '@ashishhh2210',
    role: 'Full-stack Engineer',
    title: 'Founding Engineer',
    company: 'GradGuide',
    location: 'Mumbai, India',
    email: 'ashishjadhav9900@gmail.com',
    phone: '+91 7400106790',
    resume: '/pdf/Ashish Jadhav Resume.pdf',
    available: true,
    intro: 'I build products end to end — schema to shipped interface. Currently the founding engineer at GradGuide, where I own the CRM used daily by sales, counselling and admissions, and ship new internal products alongside it.',
}

export const socials = [
    { label: 'GitHub', href: 'https://github.com/Ashish1022', icon: '/github.svg' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ashish-jadhav-zero', icon: '/linkedin.svg' },
    { label: 'X', href: 'https://x.com/ashishhh2210', icon: '/twitter.svg' },
    { label: 'Instagram', href: 'https://www.instagram.com/ashishhh2210?igsh=MWR1NHBxZmZ1MGY5OQ==', icon: '/instagram.svg' },
    { label: 'Discord', href: 'https://discord.gg/63sd6r2N88', icon: '/discord.svg' },
]

/** Numbers pulled from shipped work — no vanity metrics. */
export const metrics = [
    { value: '50K+', label: 'Concurrent leads served' },
    { value: '99%', label: 'Platform uptime' },
    { value: '15', label: 'Self-contained modules' },
    { value: '4', label: 'Products shipped' },
]

export const capabilities = [
    {
        title: 'Product engineering',
        summary: 'Type-safe full-stack applications from database schema through to the shipped interface, built to be handed over and maintained.',
        stack: ['Next.js', 'TypeScript', 'tRPC', 'Drizzle ORM', 'TanStack Query'],
    },
    {
        title: 'Data & platform architecture',
        summary: 'Relational schema design, query performance, and the analytics layer that turns operational data into dashboards people act on.',
        stack: ['PostgreSQL', 'SQL Analytics', 'ClickHouse', 'Redis', 'Schema Design'],
    },
    {
        title: 'Automation & integrations',
        summary: 'Webhooks, scheduled jobs and messaging pipelines that survive deploys and restarts, plus third-party integrations that stay reliable in production.',
        stack: ['QStash', 'Kafka', 'WhatsApp API', 'Webhooks', 'Cron'],
    },
    {
        title: 'Infrastructure & deployment',
        summary: 'Containerised services on cloud infrastructure, with the deployment path, load balancing and monitoring set up around them.',
        stack: ['Docker', 'AWS ECS', 'NGINX', 'CI/CD', 'Cloud Deployment'],
    },
]

export const education = [
    {
        period: '2022 — 2026',
        degree: 'B.E. Information Technology',
        institution: 'University of Mumbai',
        detail: 'Coursework across software engineering, machine learning and network security, specialising in web technologies.',
        result: 'CGPA 8.5 / 10',
    },
    {
        period: '2020 — 2022',
        degree: 'Higher Secondary — Science',
        institution: 'University of Mumbai',
        detail: 'Focused on mathematics and physics.',
        result: 'Distinction',
    },
]

export const stack = [
    {
        group: 'Languages',
        items: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
    },
    {
        group: 'Frontend',
        items: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'TanStack Query'],
    },
    {
        group: 'Backend',
        items: ['Node.js', 'tRPC', 'Drizzle ORM', 'PostgreSQL', 'Redis', 'Convex'],
    },
    {
        group: 'Infrastructure',
        items: ['Docker', 'AWS ECS', 'NGINX', 'Kafka', 'ClickHouse', 'QStash'],
    },
]
// zero-story
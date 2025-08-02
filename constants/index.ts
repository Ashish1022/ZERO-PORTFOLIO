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
        techStack: 'This website is a modern web application leveraging Next.js for fast, server-rendered React pages. It uses Convex for scalable backend services and real-time data management. Clerk handles user authentication and profile management seamlessly, while Stripe processes payments and manages subscriptions efficiently.',
        description: 'Explore a rich collection of stories where you can read for free and listen to narrated versions by purchasing them. Enjoy an engaging storytelling experience with seamless access to both written and audio content, offering an immersive way to enjoy your favorite tales.',
        year: '2023',
        service: 'Saas based WebApp',
        methodology: 'This website is a modern web application leveraging Next.js for fast, server-rendered React pages. It uses Convex for scalable backend services and real-time data management. Clerk handles user authentication and profile management seamlessly, while Stripe processes payments and manages subscriptions efficiently. Explore a rich collection of stories where you can read for free and listen to narrated versions by purchasing them. Enjoy an engaging storytelling experience with seamless access to both written and audio content, offering an immersive way to enjoy your favorite tales.',
        link: 'ashishstory.vercel.app',
        videoUrl: "/placeholder.svg?height=400&width=800&text=E-Commerce+Demo+Video",
        showcaseImages: [
            "/placeholder.svg?height=600&width=800&text=E-Commerce+Homepage",
            "/placeholder.svg?height=600&width=800&text=Product+Catalog",
            "/placeholder.svg?height=600&width=800&text=Shopping+Cart",
            "/placeholder.svg?height=600&width=800&text=Checkout+Process",
            "/placeholder.svg?height=600&width=800&text=Admin+Dashboard",
        ],
    },
    {
        id: 'portfolio',
        name: 'ZERO | PORTFOLIO',
        thumbnail: '/projects/portfolio.png',
        techStack: 'This website is a modern web application leveraging Next.js for fast, server-rendered React pages. It uses Convex for scalable backend services and real-time data management. Clerk handles user authentication and profile management seamlessly, while Stripe processes payments and manages subscriptions efficiently.',
        description: 'A portfolio website built using Next.js offers a dynamic and responsive platform to showcase your work and skills. Leveraging Next.js’s server-side rendering capabilities, the site ensures fast loading times and improved SEO. The website typically includes sections for project highlights, an about me page, and a contact form, all designed with a clean and modern aesthetic.',
        year: '2023',
        service: 'Professional portfolio website',
        methodology: "The methodology for creating a portfolio website using Next.js involves several steps. First, planning is done to define the site's structure, including sections for projects, an about page, and contact information. Next, a new Next.js project is initialized, and responsive layouts are designed. Utilizing Next.js features like server-side rendering enhances performance and SEO. After development, thorough testing ensures functionality across devices. Finally, the portfolio is deployed on a platform like Vercel or AWS, with ongoing maintenance for content updates. This approach results in a professional portfolio that effectively showcases skills and projects.",
        link: 'ashishport.vercel.app',
        videoUrl: "/placeholder.svg?height=400&width=800&text=E-Commerce+Demo+Video",
        showcaseImages: [
            "/placeholder.svg?height=600&width=800&text=E-Commerce+Homepage",
            "/placeholder.svg?height=600&width=800&text=Product+Catalog",
            "/placeholder.svg?height=600&width=800&text=Shopping+Cart",
            "/placeholder.svg?height=600&width=800&text=Checkout+Process",
            "/placeholder.svg?height=600&width=800&text=Admin+Dashboard",
        ],
    },
    {
        id: 'hub',
        name: 'ZERO | HUB',
        thumbnail: '/projects/zerohub.png',
        techStack: 'Frontend: Next.js, Tailwind, ShadCN Backend: Express, Prisma, PostgreSQL CMS: Payload CMS DevOps: Docker, EC2, NGINX Payments: Stripe, Razorpay',
        description: 'ZERO | HUB is a SaaS platform that helps businesses go online by providing customizable, subdomain-based storefronts with integrated payments, content management, and modern design templates.',
        service: 'Multi-vendor storefront builder & CMS',
        year: '2024',
        methodology: 'Overview: ZERO | HUB empowers small to medium-scale businesses to launch and manage online stores with ease. It offers a flexible CMS, responsive design templates, custom domains/subdomains, staff roles, analytics, and seamless checkout integration.',
        link: 'https://zerohub.site',
        videoUrl: "/placeholder.svg?height=400&width=800&text=E-Commerce+Demo+Video",
        showcaseImages: [
            "/placeholder.svg?height=600&width=800&text=E-Commerce+Homepage",
            "/placeholder.svg?height=600&width=800&text=Product+Catalog",
            "/placeholder.svg?height=600&width=800&text=Shopping+Cart",
            "/placeholder.svg?height=600&width=800&text=Checkout+Process",
            "/placeholder.svg?height=600&width=800&text=Admin+Dashboard",
        ],
    },
    {
        id: 'campus',
        name: 'ZERO | CAMPUS',
        thumbnail: '/projects/campus.png',
        techStack: 'ZERO | CAMPUS is a dynamic campus management system developed with Next.js, designed to streamline and enhance the administrative operations of educational institutions. The platform offers a comprehensive suite of features including student enrollment, course management, grade tracking, and event scheduling.',
        description: 'A web-based application developed using Next.js to streamline campus operations. It features user management, course scheduling, student enrollment, attendance tracking, grading, and communication tools. The system offers a modern, responsive interface and leverages Next.js.',
        service: 'An SAAS based WebApp',
        year: '2024',
        methodology: 'User Management, Course Management, Student Enrollment, Timetable and Scheduling, Attendance Tracking, Grading and Reporting, Communication. This Campus Management System enhances administrative efficiency, provides a user-friendly interface for all stakeholders, and leverages the latest web technologies to ensure a scalable and robust solution for managing campus operations.',
        videoUrl: "/placeholder.svg?height=400&width=800&text=E-Commerce+Demo+Video",
        showcaseImages: [
            "/placeholder.svg?height=600&width=800&text=E-Commerce+Homepage",
            "/placeholder.svg?height=600&width=800&text=Product+Catalog",
            "/placeholder.svg?height=600&width=800&text=Shopping+Cart",
            "/placeholder.svg?height=600&width=800&text=Checkout+Process",
            "/placeholder.svg?height=600&width=800&text=Admin+Dashboard",
        ],
    },
    {
        id: 'deploy',
        name: 'ZERO | DEPLOY',
        thumbnail: '/projects/deploy.png',
        techStack: 'Use Next.js for server-side rendering and create API routes for handling requests. Create a Dockerfile to package the application and build a Docker image for consistent deployment. Deploy the Docker container using Amazon ECS. Set up Amazon MSK for Kafka messaging, an RDS instance for PostgreSQL, and deploy ClickHouse for analytics.',
        description: 'This project involves deploying a web application using Node.js and Next.js on AWS, utilizing Kafka for real-time messaging, Docker for containerization, and ClickHouse and PostgreSQL for data storage.',
        year: '2024',
        service: 'Deployment server',
        methodology: 'The deployment of a server project using Node.js, Next.js, AWS, Kafka, Docker, ClickHouse, and PostgreSQL involves several key steps. First, the application is developed with API routes in Next.js. Next, a Dockerfile is created to containerize the application, followed by building and testing the Docker image. AWS services are then provisioned, including ECS for orchestration, Amazon MSK for Kafka, and RDS for PostgreSQL, with ClickHouse deployed for analytics. Finally, the application is configured and deployed on AWS, accompanied by monitoring and maintenance to ensure optimal performance and scalability.',
        videoUrl: "/placeholder.svg?height=400&width=800&text=E-Commerce+Demo+Video",
        showcaseImages: [
            "/placeholder.svg?height=600&width=800&text=E-Commerce+Homepage",
            "/placeholder.svg?height=600&width=800&text=Product+Catalog",
            "/placeholder.svg?height=600&width=800&text=Shopping+Cart",
            "/placeholder.svg?height=600&width=800&text=Checkout+Process",
            "/placeholder.svg?height=600&width=800&text=Admin+Dashboard",
        ],
    },
]
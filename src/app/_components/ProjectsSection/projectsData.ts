import { ProjectType } from "@/util/Types";

const projects: ProjectType[] = [
  {
    title: "Focus - Social Media Platform",
    techStack: [
      { name: "JavaScript", image: "/images/tech/javascript-color.svg" },
      { name: "React", image: "/images/tech/react-color.svg" },
      { name: "Firebase", image: "/images/tech/firebase-color.svg" },
      { name: "CSS", image: "/images/tech/css3-color.svg" },
    ],
    shortDescription:
      "Focus is a dynamic social media platform designed to enhance interaction by allowing users to easily share images, like and comment on posts, and search for other users’ profiles. With an infinite scroll feed and responsive design, Focus ensures a seamless browsing experience across all devices. Powered by Firebase authentication, it provides secure and smooth user logins, enabling users to create profiles, share content, and stay connected effortlessly.",
    projectImage: "/images/projects/focus.png",
    projectGitHubURL: "https://github.com/ahmedjk34/focus",
    projectSiteURL: "https://ahmedjk34.github.io/focus/",
  },
  {
    title: "Tech Haven - PC Parts E-Commerce",
    techStack: [
      { name: "Next.js", image: "/images/tech/nextjs-color.svg" },
      { name: "React", image: "/images/tech/react-color.svg" },
      { name: "Typescript", image: "/images/tech/typescript-color.svg" },
      { name: "SASS", image: "/images/tech/sass-color.svg" },
      { name: "MongoDB", image: "/images/tech/mongodb-color.svg" },
      { name: "Mongoose", image: "/images/tech/mongoose-color.svg" },
      { name: "NextAuth", image: "/images/tech/next-auth-color.svg" },
    ],
    shortDescription:
      "Tech Haven is a fully-featured e-commerce platform focused on PC parts, offering a comprehensive catalog of components like CPUs, GPUs, and motherboards. Users can easily search, filter, and compare products based on brands, specifications, and prices. With account management, users can create wishlists and track their purchase history. The site is optimized for performance with Next.js, while MongoDB ensures smooth handling of user and product data. The platform also supports discount codes and promotions, making it a go-to site for tech enthusiasts.",
    projectImage: "/images/projects/tech-haven.png",
    projectGitHubURL: "https://github.com/ahmedjk34/tech-haven",
    projectSiteURL: "https://tech-haven-ahmedjk34s-projects.vercel.app/",
  },
  {
    title: "Forecastly - Real Time Weather App",
    techStack: [
      { name: "Next.js", image: "/images/tech/nextjs-color.svg" },
      { name: "React", image: "/images/tech/react-color.svg" },
      { name: "Typescript", image: "/images/tech/typescript-color.svg" },
      { name: "SASS", image: "/images/tech/sass-color.svg" },
      {
        name: "OpenWeatherAPI",
        image: "/images/tech/openweatherapi-color.svg",
      },
    ],
    shortDescription:
      "Weatherly is a real-time weather application that enables users to quickly access current weather conditions by searching for cities or using their current location. Integrated with OpenWeatherAPI, it delivers precise forecasts, including temperature, humidity, wind speed, and the chance of rain. The app also features future weather predictions, unit conversions between Celsius and Fahrenheit, and a mobile-friendly interface, making it accessible and easy to use on any device.",
    projectImage: "/images/projects/forecastly.png",
    projectGitHubURL: "https://github.com/ahmedjk34/weather-app",
    projectSiteURL:
      "https://weather-app-two-steel-17.vercel.app/?city=Tokyo&units=metric",
  },
];

export default projects;

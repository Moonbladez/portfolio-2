export interface DataModel {
  title: string;
  description: string;
  image: string;
  github: string;
  webpage?: string;
}

export const data: DataModel[] = [
  {
    title: "Semester Project 2",
    description:
      "This was a project built with pure JavaScript without frameworks. Utlizing Strapi as the server. It contained product page with search feature, indivdual product page, cart operations and admin abilites with full CRUD operations",
    image: "/images/semester-project-2.png",
    github: "https://github.com/Moonbladez/semester-project-2",
  },
  {
    title: "JavaScript Frameworks CA",
    description:
      "This was a project built with React and styled with Tailwind. It used Graphql & Apollo to query an api route to show multiple results. And also routing to an indivudual item page. It also contains the ability to add and remove favourite items and display on a favourites page",
    image: "/images/js-frameworks-ca.png",
    github: "https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-Moonbladez",
    webpage: "https://js-frameworks-course-assignment-moonbladez.vercel.app/",
  },
  {
    title: "Project Exam 2",
    description:
      "Real world project for a chairty who rehomed pets throughout the UK. It had sperate pages for cats and dogs, with search capabilites on each page. Each pet also had a more detailed page with an enquiry form where they could book a home visit. There is an admin section, where once logged in you have full CRUD operations for pets, aswell as pages to see all pet enquiries and messages left through the contact form. This was built with Nextjs and Strapi for the backend",
    image: "/images/project-exam-2.png",
    github: "https://github.com/Noroff-FEU-Assignments/project-exam-2-Moonbladez",
    webpage: "https://project-exam-2-moonbladez.vercel.app/",
  },
];

export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "WhatsApp Cloud API",
    techs: ["Nodejs"],
    link: "https://wa.me/6285255646434",
  },
  {
    title: "Blog",
    techs: ["Blogger", "Nodejs"],
    link: "https://azran.my.id/",
  },
  {
    title: "Portfolio / Template",
    techs: ["Astro"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;

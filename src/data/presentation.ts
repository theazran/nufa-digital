type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "nufadigital@gmail.com ",
  title: "Hi, I’m M Asran 👋",
  // profile: "/profile.webp",
  description:
    "Hello, i'm a *french backend developer* with over *3 years* of web experience. I am currently working with *NextJS and Typescript*. Outside of work I complete my pokemon card collection and learning TypeScript.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/theazran_",
    },
    {
      label: "Instagram",
      link: "https://bento.me/theazran_",
    },
    {
      label: "Github",
      link: "https://github.com/theazran_",
    },
  ],
};

export default presentation;

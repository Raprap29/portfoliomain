interface TypeProps {
    name: string;
    color: string;
    textcolor: string;
  }
  interface imgShow {
    img: string;
  }

interface ProjectProps {
    image: string;
    name: string;
    type: TypeProps[];
    imgShow: imgShow[];
    description: string;
}

export const ArrayForTheProject: ProjectProps[] = [
    {
      image: "2.png",
      name: "Wisehunt System",
      type: [
        {
          name: "NODE JS",
          color: "#44883e",
          textcolor: "#fff",
        },
        {
          name: "NEXT JS",
          color: "#fff",
          textcolor: "#000"
        },
        {
          name: "PC ONLY",
          color: "#fff",
          textcolor: "#000"
        }
      ],
      imgShow: 
      [
        {
          img: "Wisehunt/1"
        },
        {
          img: "Wisehunt/2"
        },
        {
          img: "Wisehunt/3"
        },
        {
          img: "Wisehunt/4"
        },
        {
          img: "Wisehunt/5"
        },
      ],
      description: "This system is to operate the products and optimize per product of what is the lowest qty, also to track the sales of the products.",
    },
    {
      image: "1.png",
      name: "Cake E-Commerce",
      type: [
        {
          name: "NODE JS",
          color: "#44883e",
          textcolor: "#fff"
        },
        {
          name: "REACT JS",
          color: "#303F9F",
          textcolor: "#fff"
        },
        {
          name: "PC ONLY",
          color: "#fff",
          textcolor: "#000"
        }
      ],
      imgShow: 
      [
        {
          img: "Cake/1"
        },
        {
          img: "Cake/2"
        },
      ],
      description: "This e-commerce platform is for purchasing cake products or other items. I use MongoDB as the database, and for login security, I employ JWT authentication.",
    },
    {
      image: "4.png",
      name: "PRIME GAME SITE",
      type: [
        {
          name: "NODE JS",
          color: "#44883e",
          textcolor: "#fff"
        },
        {
          name: "REACT JS",
          color: "#303F9F",
          textcolor: "#fff"
        },
        {
          name: "PC ONLY",
          color: "#fff",
          textcolor: "#000"
        }
      ],
      imgShow: 
      [
        {
          img: "Prime/1"
        },
        {
          img: "Prime/2"
        },
        {
          img: "Prime/3"
        },
        {
          img: "Prime/4"
        },
      ],
      description: "This game site is using node js and react js and the database is Mongodb.",
    },
    {
      image: "5.png",
      name: "QUOTES",
      type: [
        {
          name: "NODE JS",
          color: "#44883e",
          textcolor: "#fff"
        },
        {
          name: "EJS",
          color: "#FFAE42",
          textcolor: "#fff"
        },
        {
          name: "NOT AVAILABLE",
          color: "#fff",
          textcolor: "#000"
        }
      ],
      imgShow: 
      [
        {
          img: "Quotes/1"
        },
        {
          img: "Quotes/2"
        },
        {
          img: "Quotes/3"
        },
        {
          img: "Quotes/4"
        },
      ],
      description: "This site is a quotes where you can list all your plan. It is using node js and ejs and the database is mongodb",
    },
    {
      image: "6.png",
      name: "NEVERSTOP",
      type: [
        {
          name: "NODE JS",
          color: "#44883e",
          textcolor: "#fff"
        },
        {
          name: "REACT JS",
          color: "#303F9F",
          textcolor: "#fff"
        },
        {
          name: "PC ONLY",
          color: "#fff",
          textcolor: "#000"
        }
      ],
      imgShow: 
      [
        {
          img: "NonStop/1"
        },
        {
          img: "NonStop/2"
        },
        {
          img: "NonStop/3"
        }
      ],
      description: "This site is using node js and react js and the database is Mongodb.",
    },
    {
      image: "7.png",
      name: "LUXIRALOOM",
      type: [
        {
          name: "NODE JS",
          color: "#44883e",
          textcolor: "#fff"
        },
        {
          name: "REACT JS",
          color: "#303F9F",
          textcolor: "#fff"
        },
        {
          name: "PC/MOBILE",
          color: "#fff",
          textcolor: "#000"
        }
      ],
      imgShow: 
      [
        {
          img: "LuxuriaLoom/1"
        },
        {
          img: "LuxuriaLoom/2"
        },
        {
          img: "LuxuriaLoom/3"
        },
        {
          img: "LuxuriaLoom/4"
        },
        {
          img: "LuxuriaLoom/5"
        },
      ],
      description: "This site is using node js and react js and the database is Mongodb. This is a e-commerece where the products is more on fashion shirt.",
    },
    {
      image: "9.png",
      name: "JAMA REALTY",
      type: [
        {
          name: "NODE JS",
          color: "#44883e",
          textcolor: "#fff"
        },
        {
          name: "NEXT JS",
          color: "#fff",
          textcolor: "#000"
        },
        {
          name: "PC/MOBILE",
          color: "#fff",
          textcolor: "#000"
        }
      ],
      imgShow: 
      [
        {
          img: "RealEstate/1"
        },
        {
          img: "RealEstate/2"
        },
        {
          img: "RealEstate/3"
        },
        {
          img: "RealEstate/4"
        },
        {
          img: "RealEstate/5"
        },
        {
          img: "RealEstate/6"
        },
      ],
      description: "This site is a real state to sell the house to manage the house also.",
    },
    {
      image: "11.png",
      name: "INTERIOR WEBSITE",
      type: [
        {
          name: "NODE JS",
          color: "#44883e",
          textcolor: "#fff"
        },
        {
          name: "REACT JS",
          color: "#303F9F",
          textcolor: "#fff"
        },
        {
          name: "PC/MOBILE",
          color: "#fff",
          textcolor: "#000"
        }
      ],
      imgShow: 
      [
        {
          img: "LuxCraftInterior/1",
        },
        {
          img: "LuxCraftInterior/2",
        },
        {
          img: "LuxCraftInterior/3",
        },
        {
          img: "LuxCraftInterior/4",
        },
        {
          img: "LuxCraftInterior/5",
        },
        {
          img: "LuxCraftInterior/6",
        },
        {
          img: "LuxCraftInterior/7",
        },
        {
          img: "LuxCraftInterior/8",
        },
       
      ],
      description: "This website is a collaboration with the front-end developer; I fix the other CSS and add additional features like login. Additionally, I develop the backend, utilizing GraphQL for querying the database.",
    },
    {
      image: "3.png",
      name: "Inventory MNZ Management",
      type: [
        {
          name: "PHP",
          color: "#A020F0",
          textcolor: "#fff"
        },
        {
          name: "PC",
          color: "#fff",
          textcolor: "#000"
        }
      ],
      imgShow: 
      [
        {
          img: "mnz/1",
        },
        {
          img: "mnz/2",
        },
        {
          img: "mnz/3",
        },
        {
          img: "mnz/4",
        }
       
      ],
      description: "This website is to manage the inventory of the motor products.",
    },
    {
      image: "12.png",
      name: "CLOTHING E-COMMERCE",
      type: [
        {
          name: "HTML",
          color: "#ffa500",
          textcolor: "#fff"
        },
        {
          name: "CSS",
          color: "#0000ff",
          textcolor: "#fff"
        },
        {
          name: "JAVASCRIPT",
          color: "#ffff00",
          textcolor: "#000"
        },
        {
          name: "PC",
          color: "#fff",
          textcolor: "#000"
        }
      ],
      imgShow: 
      [
        {
          img: "Clothing/1",
        },
        {
          img: "Clothing/2",
        },
        {
          img: "Clothing/3",
        },
        {
          img: "Clothing/4",
        },
        {
          img: "Clothing/5",
        },
        {
          img: "Clothing/6",
        },
        {
          img: "Clothing/7",
        },
        {
          img: "Clothing/8",
        },
       
      ],
      description: "This website is a project of the students of website about e-commerce for designing also about products using html, css, and javascript.",
    },
    {
        image: "13.png",
        name: "EDS System",
        type: [
          {
            name: "HTML",
            color: "#ffa500",
            textcolor: "#fff"
          },
          {
            name: "Bootstrap",
            color: "#6610f2",
            textcolor: "#fff"
          },
          {
            name: "JAVASCRIPT",
            color: "#ffff00",
            textcolor: "#000"
          },
          {
            name: "PHP",
            color: "#A020F0",
            textcolor: "#fff"
          },
          {
            name: "PC",
            color: "#fff",
            textcolor: "#000"
          }
        ],
        imgShow: 
        [
          {
            img: "EDS/1",
          },
          {
            img: "EDS/2",
          },
          {
            img: "EDS/3",
          },
         
        ],
        description: "This website is a project of the Unison when it needs of the company to locate what departments of the employees especially of the new employee, it needs ask and ask to the employee that can be distract.",
      },
    {
        image: "14.png",
        name: "Notes",
        type: [
          {
            name: "Laravel",
            color: "#f55247",
            textcolor: "#fff"
          },
          {
            name: "Tailwind",
            color: "#0000ff",
            textcolor: "#fff"
          },
          {
            name: "JAVASCRIPT",
            color: "#ffff00",
            textcolor: "#000"
          },
          {
            name: "PHP",
            color: "#A020F0",
            textcolor: "#fff"
          },
          {
            name: "PC",
            color: "#fff",
            textcolor: "#000"
          }
        ],
        imgShow: 
        [
          {
            img: "Notes/1",
          },
          {
            img: "Notes/2",
          },
          {
            img: "Notes/3",
          },
         
        ],
        description: "This website is a project of the Unison when it needs of the company to locate what departments of the employees especially of the new employee, it needs ask and ask to the employee that can be distract.",
      },
  ];
  
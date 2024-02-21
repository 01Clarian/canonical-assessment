interface MenuItem {
  id: number;
  hasDropdown?: boolean;
  active?: boolean;
  title: string;
  pluseIncon?: boolean;
  link: string;
  submenus?: any[];
  pages?: boolean;
}

const menu_data: MenuItem[] = [
  {
    id: 1,
    hasDropdown: false,
    active: true,
    title: "Web",
    pluseIncon: true,
    link: "/",
  },

  {
    id: 2,
    hasDropdown: false,
    title: "Software",
    link: "/software",
  },

  {
    id: 3,
    hasDropdown: false,
    title: "Education",
    link: "/education",
    pluseIncon: true,
  },
  {
    id: 4,
    hasDropdown: false,
    title: "Context",
    link: "/context",
    pluseIncon: true,
  },
];

export default menu_data;

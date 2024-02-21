import { StaticImageData } from "next/image";
// context api data type
export interface AppContextType {
  sideMenuOpen?: boolean;
  toggleSideMenu?: () => void;
  scrollDirection?: string;
  setScrollDirection?: React.Dispatch<React.SetStateAction<string>> | undefined;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  // filterType, setFilterType
  filterType: string;
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
  dynamicId: number;
  setDynamicId: React.Dispatch<React.SetStateAction<number>>;
}

// brands type
export interface brandsType {
  id: number;
  image: StaticImageData;
  brandClass?: string;
}
//context type
export interface contextType {
  id: number;
  image?: StaticImageData;
  title: string;
  description?: string;
  boxWrapperClass?: string;
  animated?: string;
  animatedClass?: string;
  info?: string;
  count?: number;
}

interface shapeImg {
  id: number;
  shape: StaticImageData;
  shapeClass: string;
}

export interface softwareType {
  id: number;
  priceWrapperClass: string;
  title: string;
  images: shapeImg[];
  desc: string;
  price?: number | string;
  level?: string;
  priceBtn: string;
  subTitle?: string;
  priceClass: string;
  priceBg?: string;
  activeShape?: string;
  descClass?: string;
}

// product type
export interface productsType {
  id?: number;
  img?: StaticImageData;
  title: string;
  category?: string;
  level?: string;
  price: number;
  oldPrice?: number;
  rating: number;
  quantity: number;
}

//team data Type
interface socialType {
  id: number;
  icon: string;
  socialLink: string;
}

export interface teamType {
  id: number;
  image: StaticImageData;
  title: string;
  delaySec: string;
  teamSocial: socialType[];
  category: string;
  ratingCount?: number;
  memberCourse?: number;
}

// testimonial type
export interface testimonialType {
  id: number;
  image: StaticImageData;
  title: string;
  info?: string;
  authorName: string;
  desination: string;
  description: string;
  brandImg?: StaticImageData;
  rating?: number;
}

// blog type
export interface blogsType {
  id: number;
  image: StaticImageData;
  category: string;
  title: string;
  date: string;
  time?: number;
  comment?: number;
  desc?: string;
  avatarImg?: StaticImageData;
  avatarName?: string;
  videoUrl?: string;
  active?: string;
  delaySec?: string;
}
//portfolio type
export interface portfolioType {
  id: number;
  image: StaticImageData;
  popupImage: any;
  title: string;
  desc: string;
  category: string;
}
//category type
export interface categoryType {
  id: number;
  category: string;
}

// product type
export interface menusType {
  id?: number;
  hasDropdown?: boolean;
  title?: string | undefined;
  link?: any;
  submenus?: any;
}
// id type
export interface idType {
  id?: number;
}

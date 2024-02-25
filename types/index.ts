import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


export interface NavbarCategory {
  navImage : string;
  categoryName : string;
}

export interface Products {
  image : string,
  name : string,
  price : number,
  model : string,
  slug : string
  index ?: number
}


export interface AllProducts {
  name : string,
  price : number,
  model : string,
  slug : string,
  bannerImage : string,
  description : string,
  _id : string,
  galleryImages : string[],
  images : string[],
  category : string,
  gender : string
}
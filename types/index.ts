import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


export interface NavbarCategory {
  navImage : string;
  categoryName : string;
}
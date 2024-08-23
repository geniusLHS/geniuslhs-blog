import { getMDXComponent, useMDXComponent } from "next-contentlayer/hooks";
import Pre from "@/components/mdx-components/Pre";
import CustomLink from "@/components/mdx-components/CustomLink";
import Code from "@/components/mdx-components/Code";
import UnderLine from "@/components/mdx-components/UnderLine";
import { Image } from "@/components/mdx-components/Image";

export const getMDXLayout = (code: string) => {
  return getMDXComponent(code);
};

export const useMDXLayout = (code: string) => {
  return useMDXComponent(code);
};

export const postComponents = {
  pre: Pre,
  a: CustomLink,
  code: Code,
  u: UnderLine,
  img: Image,
};

export const HoverComponents = {
  pre: Pre,
  a: CustomLink,
  code: Code,
  u: UnderLine,
};

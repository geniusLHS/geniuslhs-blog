import { getMDXComponent, useMDXComponent } from 'next-contentlayer/hooks';
import Pre from '@/components/mdx-components/Pre';
import CustomLink from '@/components/mdx-components/CustomLink';
import Code from '@/components/mdx-components/Code';
import UnderLine from '@/components/mdx-components/UnderLine';

export const getMDXLayout = (code: string) => {
  return getMDXComponent(code);
};

export const useMDXLayout = (code: string) => {
  return useMDXComponent(code);
};

export const postComponents = {
  pre: Pre,
  //   YoutubeComponent: YoutubeComponent,
  a: CustomLink,
  //   HoverLink: HoverLink,
  code: Code,
  u: UnderLine,
  //   Alert: Alert,
  //   Cap: FigCaption,
};

export const HoverComponents = {
  pre: Pre,
  //   YoutubeComponent: YoutubeDummy,
  a: CustomLink,
  //   HoverLink: HoverLinkDummy,
  code: Code,
  u: UnderLine,
  //   Alert: Alert,
  //   Cap: FigCaption,
};

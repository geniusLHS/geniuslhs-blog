// https://github.com/bepyan/bepyan.github.io/blob/main/src/components/SEO.tsx

import { ArticleJsonLd, NextSeo } from "next-seo";

// const getTitle = (title?: string) => {
//   if (!title) return siteConfig.title;
//   if (title.length > 10) return title;

//   return `${title} - bepyan`;
// };

// const getRelativeUrl = (url?: string) => {
//   if (!url) return siteConfig.url;

//   return `${siteConfig.url}/${url.replace(/^\/+/g, "")}`;
// };

// const DEFAULT_IMAGE = `${siteConfig.url}/images/base.jpg`;

// const getImageUrl = (img?: string) => {
//   if (!img) return DEFAULT_IMAGE;
//   if (img.startsWith("https://")) return img;

//   return `${siteConfig.url}/${img}`;
// };

/**
 * use in Normal Page SEO
 */
export const PageSEO = (props: { title?: string; description?: string; url?: string; image?: string }) => {
  const title = props.title;
  const description = props.description;
  const url = "https://geniuslhs.com";
  const image = "https://github.com/geniusLHS/geniuslhs-blog/blob/main/public/image/geniuslhs-og.png?raw=true";

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
        images: [{ url: image }],
      }}
      twitter={{
        site: "geniuslhs.com",
        cardType: "summary_large_image",
      }}
    />
  );
};

/**
 * use in Article Page SEO
 */
export const BlogSEO = ({
  summary,
  tags,
  images,
  ...props
}: {
  title: string;
  summary: string;
  date: string;
  url: string;
  tags?: string[];
  images?: string[];
}) => {
  const title = props.title;
  const url = "https://geniuslhs.com";
  const imageList = ["https://github.com/geniusLHS/geniuslhs-blog/blob/main/public/image/geniuslhs-og.png?raw=true"];
  //   const url = getRelativeUrl(props.url);
  const dateTime = new Date(props.date).toISOString();
  //   const imageList = images.length ? images.map(getImageUrl) : [DEFAULT_IMAGE];

  return (
    <>
      <NextSeo
        title={title}
        description={summary}
        canonical={url}
        openGraph={{
          type: "article",
          article: {
            publishedTime: dateTime,
            modifiedTime: dateTime,
            authors: [`https://github.com/bepyan`],
            tags,
          },
          url,
          title,
          description: summary,
          images: imageList.map((img) => ({ url: img })),
        }}
        twitter={{
          site: "@__bepyan",
          cardType: "summary_large_image",
        }}
      />
      <ArticleJsonLd
        datePublished={dateTime}
        dateModified={dateTime}
        images={imageList}
        url={url}
        title={title}
        description={summary}
        authorName={"geniusLHS"}
        publisherName={"geniusLHS"}
        publisherLogo={"https://github.com/geniusLHS/geniuslhs-blog/blob/main/public/image/geniuslhs-og.png?raw=true"}
      />
    </>
  );
};

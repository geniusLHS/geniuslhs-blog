import { MetadataRoute } from "next";
import { allPosts } from "contentlayer/generated";

export default function sitemap(): MetadataRoute.Sitemap {
  let staticSiteMap: MetadataRoute.Sitemap = [
    {
      url: "https://geniuslhs.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://geniuslhs.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://geniuslhs.com/activity",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  let dynamicSiteMap: MetadataRoute.Sitemap = allPosts.map((post) => {
    return {
      url: `https://geniuslhs.com/${post.category === "Blog" ? "blog" : "activity"}/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: 0.64,
    };
  });

  return staticSiteMap.concat(dynamicSiteMap);
}

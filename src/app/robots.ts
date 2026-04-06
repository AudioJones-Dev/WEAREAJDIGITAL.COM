import type { MetadataRoute } from "next";

const BASE_URL = "https://www.weareajdigital.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/sanity-test",
          "/sanity-test/",
          "/apply/success",
          "/api/",
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}

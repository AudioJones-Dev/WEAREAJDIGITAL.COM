import { groq } from "next-sanity";
import type { PortableTextBlock } from "sanity";
import { getSanityClient } from "@/lib/sanity.client";

export type SanityFaqItem = {
  question: string;
  answer: string;
};

export type SanityArticle = {
  _id: string;
  title: string;
  slug: string;
  category?: string;
  excerpt?: string;
  seoTitle?: string;
  metaDescription?: string;
  publishedAt?: string;
  updatedAt?: string;
  tags?: string[];
  faqItems?: SanityFaqItem[];
  body?: PortableTextBlock[];
};

export type SanityArticleSlug = {
  slug: string;
  title: string;
};

const articleProjection = `
  _id,
  title,
  "slug": slug.current,
  category,
  excerpt,
  seoTitle,
  metaDescription,
  publishedAt,
  updatedAt,
  tags,
  faqItems[]{
    question,
    answer
  },
  body
`;

export const sanityFirstArticleQuery = groq`
  *[_type == "article" && defined(slug.current)]
    | order(publishedAt desc, _createdAt desc)[0]{
      ${articleProjection}
    }
`;

export const sanityArticleBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0]{
    ${articleProjection}
  }
`;

export const sanityArticleSlugsQuery = groq`
  *[_type == "article" && defined(slug.current)]
    | order(publishedAt desc, _createdAt desc){
      title,
      "slug": slug.current
    }
`;

export async function getSanityTestArticle(slug?: string) {
  const client = getSanityClient();

  if (!client) {
    return null;
  }

  if (slug) {
    return client.fetch<SanityArticle | null>(sanityArticleBySlugQuery, { slug });
  }

  return client.fetch<SanityArticle | null>(sanityFirstArticleQuery);
}

export async function getSanityArticleBySlug(slug: string) {
  return getSanityTestArticle(slug);
}

export async function getSanityArticleSlugs() {
  const client = getSanityClient();

  if (!client) {
    return [];
  }

  return client.fetch<SanityArticleSlug[]>(sanityArticleSlugsQuery);
}

import { defineArrayMember, defineField, defineType } from "sanity";

export const articleType = defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description:
        "Use the full article title. For this validation test, enter the real AJ Digital article title for podcast-production-cost.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      description:
        "Canonical route slug. For the real-article validation, use exactly: podcast-production-cost",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description:
        "Use one of the AJ Digital blog categories. For the validation article, choose podcast-production.",
      options: {
        list: [
          { title: "Podcast Production", value: "podcast-production" },
          { title: "AI Consulting", value: "ai-consulting" },
          { title: "Content Systems", value: "content-systems" },
          { title: "Authority Building", value: "authority-building" },
        ],
        layout: "dropdown",
      },
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description:
        "Short article summary shown in previews and the Sanity test render.",
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description:
        "Optional SEO title override. If left blank, the title field will be used in the slug test metadata.",
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      description:
        "Optional SEO description override. If left blank, the excerpt will be used in the slug test metadata.",
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      description:
        "Original publish date. Use a real article date if you are testing a migration candidate.",
    }),
    defineField({
      name: "updatedAt",
      title: "Updated At",
      type: "datetime",
      description: "Last meaningful content update date.",
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      description:
        "Optional for this proof of concept. Included for future migration fit.",
      options: { hotspot: true },
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      description:
        "Optional tag list. Useful for validating migration metadata and editorial grouping.",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "faqItems",
      title: "FAQ Items",
      type: "array",
      description:
        "Add the real FAQ pairs from the article. This is important because AJ Digital articles use FAQ sections heavily.",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "question",
              title: "Question",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "answer",
              title: "Answer",
              type: "text",
              rows: 3,
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      description:
        "Portable Text article body. Paste the real article content here for the end-to-end migration validation test.",
      of: [defineArrayMember({ type: "block" })],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "featuredImage",
    },
  },
});

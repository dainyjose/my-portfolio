import fs from "node:fs/promises";

const USERNAME = "dainyjose";
const API_URL = `https://dev.to/api/articles?username=${USERNAME}&per_page=100`;

const response = await fetch(API_URL);

if (!response.ok) {
  throw new Error(`Failed to fetch DEV.to articles: ${response.status} ${response.statusText}`);
}

const articles = await response.json();

const blogs = articles
  .filter(article => article.type_of === "article")
  .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
  .map(article => ({
    id: article.id,

    link: article.url,

    title: article.title,

    description: article.description,

    time: `${article.reading_time_minutes} min read`,

    topic: article.tag_list?.[0] || "Development",

    tags: article.tag_list || [],

    publishedAt: article.published_at,
  }));

await fs.mkdir("src/data", {
  recursive: true,
});

await fs.writeFile("src/data/blogs.json", JSON.stringify(blogs, null, 2));

console.log(`✅ Updated ${blogs.length} DEV.to articles`);

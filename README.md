# Aditya Rathod's Portfolio Site

This site is powered by Next.js.

## Development

### Stack/Tooling

- Next.js/React
- Tailwind CSS
- MDX/Remark for blog posts

## Content Creation

- To add a new project, modify `data/projects.json`
- To add a new blog post:
  - Create a `slug.mdx` file under `posts`, where `slug` is the desired URL slug for the post.
  - Ensure you use the front matter template below to pass metadata to the layout component.
  - Make sure all images are in `public/post-images`.

### Front Matter Template

```markdown
---
title: "Analyzing Browser History Using Python and Pandas"
description: "Explore the depths of your browser history with this introductory data science tutorial."
date: 1510516800000
displayDate: "November 12, 2017"
tags:
  - "Legacy Content"
---
```

## Deployment

- Deployed automatically to the `master` branch upon push to `dev` through Github Actions.

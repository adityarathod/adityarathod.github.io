# Aditya Rathod's Portfolio Site

This site is powered by GatsbyJS.

## Development

### Stack/Tooling

-   GatsbyJS/React
-   Tailwind CSS

## Content Creation

-   To add a new project, modify `src/data/projects.json`
-   To add a new blog post:
    -   Create a `slug.mdx` file under `src/posts`, where `slug` is the desired URL slug for the post.
    -   Ensure you use the front matter template below to pass metadata to the layout component.
    -   Make sure all images are in `src/posts/images`. For the `sharp` plugin to process them, make them JPEG or PNG.

### Front Matter Template

```markdown
---
title: 'Analyzing Browser History Using Python and Pandas'
description: 'Explore the depths of your browser history with this introductory data science tutorial.'
date: 2017-11-12T20:00:00Z
displayDate: 'November 12, 2017'
draft: false
hasMath: false
---
```

## Deployment

-   `yarn deploy` will handle the following things for you:
    -   Building a Gatsby app with CSS purged and bundle size reduced
    -   Exporting said app to static HTML that can be pushed to Github Pages
    -   Pushing to the `master` branch

&copy; 2022 - present Aditya Rathod. All rights reserved.

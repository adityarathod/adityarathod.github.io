# Aditya Rathod's Portfolio Site

This site is powered by NextJS.

## Development

### Stack/Tooling

-   NextJS/React
-   Tailwind CSS
-   Yarn

## Content Creation

-   To add a new project, modify `data/projects.ts`
-   To add a new blog post:
    -   Create a directory under `pages/blog` with your post slug
    -   Put an `index.mdx` file inside it
    -   Ensure you use the front matter template belowto pass metadata to the layout component.
    -   Copy some metadata and the post slug into `date/posts.ts`. Yes, this is a pain.
    -   Make sure all images are in `public/static/img`

### Front Matter Template

```js
export const frontMatter = {
	title: 'Some title',
	description: 'Some description',
	date: 'Some date',
	draft: true,
	hasMath: false,
}
```

## Deployment

-   `yarn deploy` will handle the following things for you:
    -   Building a NextJS app with CSS purged and bundle size reduced
    -   Exporting said app to static HTML that can be pushed to Github Pages
    -   Pushing to the `master` branch

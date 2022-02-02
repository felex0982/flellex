# Personal Website

Based on the example [blog-starter-typescript](https://github.com/vercel/next.js/tree/canary/examples/blog-starter-typescript).

## Blog

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.


## Init

```bash
yarn
```

## Development

```bash
yarn dev
```

## Deployment

Build docker container: `docker build -t flellex-web .`.
Run run container: `docker run -p 3000:3000 flellex-web`.

Deplay with [Caprover CLI](https://caprover.com/docs/cli-commands.html): `caprover deploy`

# Notes

Styling with [Tailwind CSS](https://tailwindcss.com) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3).

# 🙋‍♂️ Hello Candidate

Welcome in repo with task assignment for candidates dedicating in Frontend
engineering. Here you can find overall description about codebase you'll be
working on and task description.

## 🧑‍💻 The project

Current project is simple blog post. It's build with
[Next.js](https://nextjs.org/) and [TypeScript](https://www.typescriptlang.org/)
for frontend part. We also have CMS system called
[Keystatic](https://keystatic.com/) to generate static content files fro which
all dynamic data will be fetched. For styling
[TailwindCSS](https://tailwindcss.com/) is presented.

## 🛠️ Installation

1. Clone the repo
2. Install dependencies `pnpm install`
3. Run command `pnpm run dev` to start development server
4. App will be running on `localhost:3000` and Keystatic will be available on
   `localhost:3000/keystatic`

## 📁 Project structure

Project is build base on Next.js folder structure with some additional items
presented:

- `content` catalogue contains all data created vie Keystatic CMS. It's generate
  automatically
- `src` catalogue with app source code both server and client side
- `src/app/` structure of routing and pages for keystatic and app itself.
  [Read more](https://nextjs.org/docs/app/building-your-application/routing)
- `src/components/` cataloge with app comopnents
- `src/keystatic/` catalogue with Keystatic rendering definitions and data
  schemas
- `src/lib` global utility functions

During task assignment you'll mainly working on `app/(blog)/posts` directory.

## 📝 Task description

Your task will be change behavior and UI of `/posts` and `/posts/[slug]` sub
pages. Please create branch from `main` and present possible solution for:

1. In `/posts` sub page change the layout left column so it will show all post
   categories. The title of this list should be "Categories". By pressing one of
   the category the list of posts will be filtered to display only those posts
   which category were picked. User can pick more than one category if he picks
   'n' categories the posts list will show all posts from those 'n' categories.
2. In `/posts/[slug]` change layout left column so it will show list of all
   posts from category on which user currently is. The title of this list should
   be category name. List item should redirect to post after click.

When your work will be done create Pull Request to main branch keeping best
practices of git flow you were using so far. Please provide your solution in
best way you think it can be done. Use coding practices that you usually use.
Leave code clean and ready to review.

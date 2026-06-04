import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import path from "path";
import fs from "fs";

export default defineConfig({
  site: "https://techikrish.github.io",
  base: "/aws-sa-notes",
  output: "static",
  markdown: {
    processor: unified({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "append",
            properties: {
              className: ["heading-anchor"],
              ariaLabel: "Link to this section"
            },
            content: {
              type: "text",
              value: "#"
            }
          }
        ]
      ]
    })
  },
  vite: {
    plugins: [
      {
         name: "serve-pagefind",
         configureServer(server) {
           const __dirname = new URL('.', import.meta.url).pathname;
           const pagefindDir = path.join(__dirname, "node_modules", "pagefind", "dist");
          server.middlewares.use("/pagefind", (req, res, next) => {
            const filePath = path.join(pagefindDir, req.url);
            fs.stat(filePath, (err, stats) => {
              if (err || !stats.isFile()) {
                return next();
              }
              fs.createReadStream(filePath).pipe(res);
            });
          });
        }
      }
    ]
  }
});

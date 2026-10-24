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
  // Astro 7 defaults to JSX whitespace handling; keep the v6 HTML behavior.
  compressHTML: true,
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
          const __dirname = new URL(".", import.meta.url).pathname;
          const pagefindDir = path.resolve(__dirname, "node_modules", "pagefind", "dist");

          server.middlewares.use("/pagefind", (req, res, next) => {
            let pathname;

            try {
              pathname = decodeURIComponent((req.url ?? "/").split("?")[0]);
            } catch {
              res.statusCode = 400;
              res.end("Bad Request");
              return;
            }

            const filePath = path.resolve(pagefindDir, `.${pathname}`);
            const relativePath = path.relative(pagefindDir, filePath);

            // Never serve files outside of Pagefind's dist directory.
            if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
              res.statusCode = 403;
              res.end("Forbidden");
              return;
            }

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

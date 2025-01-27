import type { GatsbyNode } from "gatsby";
import path from "node:path";

export const createPages: GatsbyNode["createPages"] = async (
  { actions, graphql },
  options
) => {
  const { createPage } = actions;
  const { data } = await graphql<Queries.GatsbyNodeCreatePagesQuery>(`
    query GatsbyNodeCreatePages {
      allFile(filter: { sourceInstanceName: { eq: "content" } }) {
        edges {
          node {
            name
            absolutePath
            relativeDirectory
          }
        }
      }
    }
  `);

  if (!data?.allFile.edges) throw new Error("not edges");

  const tsxPages = data.allFile.edges.filter(
    (x) => path.parse(x.node.absolutePath).ext === ".tsx"
  );

  for (const file of tsxPages) {
    let path = "/" + file.node.relativeDirectory;
    if (file.node.name !== "index") path += file.node.name;

    createPage({
      component: file.node.absolutePath,
      path,
    });
  }
};

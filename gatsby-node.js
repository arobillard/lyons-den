const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

async function outputBlogs(graphql, actions, reporter) {
  const blogPostTemplate = require.resolve(`./src/templates/mdTemplate.js`);

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "blog" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const blogs = result.data.allMarkdownRemark.nodes;

  // Create blog blogs pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (blogs.length > 0) {
    blogs.forEach((blog, index) => {
      const previousPostId = index === 0 ? null : blogs[index - 1].id;
      const nextPostId =
        index === blogs.length - 1 ? null : blogs[index + 1].id;

      actions.createPage({
        path: blog.fields.slug,
        component: blogPostTemplate,
        context: {
          id: blog.id,
          previousPostId,
          nextPostId,
        },
      });
    });
  }
}

async function outputPages(graphql, actions, reporter) {
  const blogPostTemplate = require.resolve(`./src/templates/pageTemplate.js`);

  const result = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "page" } } }) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const pages = result.data.allMarkdownRemark.nodes;

  // Create blog pages pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (pages.length > 0) {
    pages.forEach((page) => {
      actions.createPage({
        path: page.fields.slug,
        component: blogPostTemplate,
        context: {
          id: page.id,
        },
      });
    });
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  await Promise.all([
    outputBlogs(graphql, actions, reporter),
    outputPages(graphql, actions, reporter),
  ]);

  // const { createPage } = actions;

  // const result = await graphql(`
  //   {
  //     allMarkdownRemark(
  //       sort: { order: DESC, fields: [frontmatter___date] }
  //       limit: 1000
  //     ) {
  //       nodes {
  //         id
  //         frontmatter {
  //           type
  //         }
  //         fields {
  //           slug
  //         }
  //       }
  //     }
  //   }
  // `);

  // // Handle errors
  // if (result.errors) {
  //   reporter.panicOnBuild(`Error while running GraphQL query.`);
  //   return;
  // }

  // const posts = result.data.allMarkdownRemark.nodes;

  // // Create blog posts pages
  // // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // // `context` is available in the template as a prop and as a variable in GraphQL

  // if (posts.length > 0) {
  //   posts.forEach((post, index) => {
  //     const previousPostId = index === 0 ? null : posts[index - 1].id;
  //     const nextPostId =
  //       index === posts.length - 1 ? null : posts[index + 1].id;

  //     createPage({
  //       path: post.fields.slug,
  //       component:
  //         post.frontmatter.type === 'blog' ? blogPostTemplate : pageTemplate,
  //       context: {
  //         id: post.id,
  //         previousPostId,
  //         nextPostId,
  //       },
  //     });
  //   });
  // }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (
    node.internal.type === `MarkdownRemark` &&
    node.frontmatter.type === 'blog'
  ) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value: `/blog${value}`,
    });
  } else if (
    node.internal.type === `MarkdownRemark` &&
    node.frontmatter.type === 'page'
  ) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

const path = require(`path`);

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
    })
  }
}

/**
 * �������������� �������, ������� ����������� ������������ �� ���������
 * � ����� ������� ��� ��������� �������
 */
exports.createPages = ({ graphql, actions }) => {
  /**
   * �������� ����� ��� �������� �������� �� �������
   * ����� �������� ������ �������� � ��������� ��������
   * �������� � �������
   */
  const { createPage } = actions;
  return graphql(`
    {
      allContentfulArticle {
        edges {
          node {
            title
            link
            content {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  `).then(({ data: { allContentfulArticle: { edges } } }) => {
    /**
     * ��� ������� �� ��������� �� ������
     * �������� createPage() ������� � �������
     * ������ ������ � ������� ���������
     */
    edges.forEach(({ node }) => {
      createPage({
        path: node.link,
        component: path.resolve(`./src/templates/index.js`),
        context: {
          slug: node.link
        }
      });
    });
  });
};
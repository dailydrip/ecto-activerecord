const path = require("path");
const fs = require("fs");

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === "MarkdownRemark") {
    const contents = fs.readFileSync(node.fileAbsolutePath, "utf8");
    createNodeField({
      node,
      name: "contents",
      value: contents
    });
  }
};

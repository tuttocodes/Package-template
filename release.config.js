module.exports = {
    "plugins": [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      "@semantic-release/changelog",
      ["@semantic-release/npm", {
        "tarballDir": "release"
      }],
      ["@semantic-release/gitlab", {
        "assets": "release/*.tgz"
      }],
      "@semantic-release/git"
    ],
    "branches": ["main"],
    "preset": "angular"
  }
module.exports = {
  apps: [
    {
      name: "test-pm2",
      script: "bin/www",
    },
  ],
  deploy: {
    production: {
      key: "keys/test-pm2-key",
      user: "deploy",
      host: ["test-pm2"],
      ref: "origin/main",
      repo: "https://github.com/i9or/test-pm2.git",
      path: "/home/deploy/app",
      "post-deploy": "npm ci --production",
    },
  },
};

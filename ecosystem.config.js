module.exports = {
  apps: [
    {
      name: "test-pm2",
      script: "bin/www",
      instances : "4",
      exec_mode : "cluster"
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
      "post-deploy": "npm ci --omit=dev && pm2 startOrRestart ecosystem.config.js --env production",
    },
  },
};

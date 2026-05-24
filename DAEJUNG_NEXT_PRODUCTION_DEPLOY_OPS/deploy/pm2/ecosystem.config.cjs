module.exports = {
  apps: [
    {
      name: "daejung-next-api",
      cwd: "/var/www/daejungnext/backend",
      script: "server.js",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 8080
      }
    }
  ]
};

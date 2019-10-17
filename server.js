module.exports = {
  apps: [
    {
      name: "app-dev",
      script: "npm",
      args: "run dev"
    },
    {
      name: "app-prod",
      script: "npm",
      args: "run start"
    }
  ]
};

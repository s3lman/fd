module.exports = {
  apps: [
    {
      name: 'teammeetApiDev',
      script: 'src/app.ts',
      node_args: '-r dotenv/config',
      max_memory_restart: '256M',
      autorestart: true
    },
    {
      name: 'teammeetApi',
      script: 'build/app.js',
      node_args: '-r dotenv/config',
      max_memory_restart: '256M',
      autorestart: true
    }
  ]
}

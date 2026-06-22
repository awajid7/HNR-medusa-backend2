import { loadEnv, defineConfig } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET,
      cookieSecret: process.env.COOKIE_SECRET,
    }
  },
  // UPDATE THIS EXACT BLOCK BELOW:
  admin: {
    vite: (config: any) => {
      config.server = config.server || {}
      config.server.allowedHosts = ['hnr-medusa-backend-production.up.railway.app']
      return config
    }
  }
})

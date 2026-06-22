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
  admin: {
    path: '/app', // Explicitly bounds administrative routing to the /app prefix
    // @ts-ignore
    vite: (config: any) => {
      config.base = '/app/' // Forces asset files to build with proper web location scopes
      config.server = config.server || {}
      config.server.allowedHosts = ['hnr-medusa-backend-production.up.railway.app']
      return config
    }
  }
})

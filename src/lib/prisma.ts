import { PrismaClient } from '@prisma/client'

declare global {
  // Allow the global `var` declaration for Prisma to work with TypeScript
  var prisma: PrismaClient | undefined
}

// Create a single instance of Prisma Client for the application
const prisma = global.prisma || new PrismaClient({
  log: ['query', 'info', 'warn', 'error'], // Optional: Enable logging for debugging
})

// Prevent multiple instances of Prisma Client in development
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}

export default prisma
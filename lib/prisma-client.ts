import { PrismaClient } from '@prisma/client';

// Init empty Prisma Client object
let prisma: PrismaClient;

// Check if the set project node environment is in "production"
if (process.env.NODE_ENV === 'production') {
  // Set new Prisma Client
  prisma = new PrismaClient();
}
// If node envirnment is something else than "production"
else {
  // Define a custom prisma type for global object with PrismaClient
  let globalPrisma = global as typeof globalThis & {
    prisma: PrismaClient;
  };

  // Check if Prisma Client instance is already available in the global object
  if (!globalPrisma.prisma) {
    // If not available, create a new instance of Prisma Client and assign it to the global object
    globalPrisma.prisma = new PrismaClient();
  }

  // Assign the PrismaClient instance from the global object to the prisma variable
  prisma = globalPrisma.prisma;
}

export default prisma;

import { PrismaClient } from "@prisma/client";

// Inisialisasi Prisma Client
const prisma = new PrismaClient();

// Ekspor Prisma Client untuk digunakan di tempat lain
export default prisma;

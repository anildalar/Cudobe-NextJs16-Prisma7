import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({
  adapter,
});

export async function main() {
  console.log("🌱 Seeding roles...");
  
  const roles = [
    { id: 1, name: "Importer", roleCode: "importer" },
    { id: 2, name: "Exporter", roleCode: "exporter" },
    { id: 3, name: "ImporterExporter", roleCode: "importer_exporter" },
    { id: 4, name: "Admin", roleCode: "admin" },
    { id: 5, name: "CustomerCare", roleCode: "customercare" },
  ];

  for (const role of roles) {
    await prisma.role.upsert({
      where: { id: role.id },
      update: {
        name: role.name,
        roleCode: role.roleCode,
      },
      create: role,
    }); 
  }

  console.log("✅ Roles seeded successfully!");
}

main();
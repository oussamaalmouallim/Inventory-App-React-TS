// server/prisma/seed.ts
import { PrismaClient, Role } from '@prisma/client'
import bcrypt from 'bcryptjs' // <--- Ajout de l'import

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Début du seeding sécurisé...')

  // On crypte les mots de passe (le "salt" est la complexité, 10 est standard)
  const passwordAdmin = await bcrypt.hash('admin123', 10)
  const passwordTech = await bcrypt.hash('tech123', 10)

  // 1. Admin
  const admin = await prisma.user.upsert({
    where: { email: 'admin@tis.ma' },
    update: { password: passwordAdmin }, // On met à jour si existe déjà
    create: {
      email: 'admin@tis.ma',
      name: 'Admin Principal',
      password: passwordAdmin, // <--- On envoie le mot de passe crypté
      role: Role.ADMIN,
    },
  })

  // 2. Technicien
  const tech = await prisma.user.upsert({
    where: { email: 'tech@tis.ma' },
    update: { password: passwordTech },
    create: {
      email: 'tech@tis.ma',
      name: 'Ahmed Technicien',
      password: passwordTech,
      role: Role.TECHNICIAN,
    },
  })

  // ... (Tu peux laisser le reste des produits/catégories comme avant)
  console.log('✅ Base de données mise à jour avec mots de passe cryptés !')
}

main()
  .then(async () => { await prisma.$disconnect() })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
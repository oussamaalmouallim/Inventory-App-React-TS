// server/src/index.ts

import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const app = express()
const prisma = new PrismaClient()
const PORT = 5000
const JWT_SECRET = process.env.JWT_SECRET || "secret_par_defaut_a_changer"

// Middleware
app.use(cors()) // Autorise React à parler au serveur
app.use(express.json()) // Permet de lire le JSON

// --- ROUTES ---

// 1. Route de test
app.get('/', (req, res) => {
  res.send('🚀 Serveur Inventory API est en ligne !')
})

// 2. Route Login (Authentification)
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // A. Chercher l'utilisateur
    const user = await prisma.user.findUnique({
      where: { email: email }
    });

    if (!user) {
      return res.status(401).json({ error: "Email ou mot de passe incorrect" });
    }

    // B. Vérifier le mot de passe
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Email ou mot de passe incorrect" });
    }

    // C. Créer le Token
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // D. Répondre
    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// 3. Route Produits (Protégée ou publique selon ton choix)
app.get('/api/products', async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      include: { category: true }
    })
    res.json(products)
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération des produits" })
  }
})

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`)
})
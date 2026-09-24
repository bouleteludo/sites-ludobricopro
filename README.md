# LudoBricoPro

Site vitrine pour LudoBricoPro — nettoyage, entretien et petits travaux à Saintes et
dans un rayon de 60 km. Présentation des services, demande de devis gratuit, prise de
rendez-vous, et formulaire de contact. Les demandes sont enregistrées en base et
consultables sur une page d'administration protégée par mot de passe.

## Stack

- **Next.js 16** (App Router, TypeScript) — front + back dans le même projet
- **Prisma** + **Postgres** (Neon, via l'intégration Vercel Storage — une base
  serverless, car le SQLite fichier ne survit pas au système de fichiers éphémère
  de Vercel)
- **Tailwind CSS** pour le style

## Fonctionnalités

- **Accueil** : présentation de l'activité, services, argument paiement en 3x,
  valeurs, zone d'intervention.
- **/services** : détail de chaque prestation.
- **/a-propos** : présentation de l'entreprise et de ses valeurs.
- **/devis** : formulaire de demande de devis gratuit.
- **/rendez-vous** : formulaire de prise de rendez-vous (« agenda ») avec date et
  créneau souhaités.
- **/contact** : coordonnées + formulaire de contact général.
- **/admin** (protégé par mot de passe) : tableau de bord et liste de toutes les
  demandes (devis, rendez-vous, contact) avec changement de statut.

Toutes les demandes (devis, rendez-vous, contact) sont stockées dans une seule table
`Lead` (voir `prisma/schema.prisma`), distinguées par leur `type`.

## Déploiement (Vercel + GitHub)

1. Sur [vercel.com](https://vercel.com), **Add New → Project**, puis importe le dépôt
   GitHub `bouleteludo/sites-ludobricopro`.
2. Dans l'onglet **Storage** du projet, **Create Database → Neon**, puis connecte-la au
   projet sans préfixe : Vercel crée alors la variable `DATABASE_URL`.
3. Dans **Settings → Environment Variables**, ajoute `ADMIN_PASSWORD` et les autres
   variables de `.env.example` (coordonnées, informations légales...).
4. **Emails de demande** : crée un compte gratuit sur [resend.com](https://resend.com) avec
   l'adresse qui doit recevoir les demandes, crée une clé API (**API Keys → Create**) et
   ajoute-la dans Vercel sous le nom `RESEND_API_KEY`. Sans nom de domaine vérifié, Resend
   n'envoie qu'à l'adresse du compte : c'est suffisant pour recevoir ses propres demandes.
5. Chaque push sur `main` redéploie automatiquement. `prisma db push` synchronise le
   schéma à chaque build ; s'il échoue (base absente), le build continue et les
   formulaires invitent le visiteur à appeler.

**Important (offre Vercel Hobby) :** Vercel bloque tout déploiement dont l'auteur du
commit n'est pas le propriétaire du compte Vercel (ni co-auteur externe). Les commits
poussés sur `main` doivent donc être signés par le compte GitHub `bouleteludo`.

## Démarrer en local

```bash
npm install
cp .env.example .env   # puis renseigne au moins DATABASE_URL
npx prisma db push
npm run dev
```

Ouvre http://localhost:3000 pour le site, et http://localhost:3000/admin pour le
tableau de bord (protégé par `ADMIN_PASSWORD`).

## À faire avant la mise en ligne publique

- Renseigner `LEGAL_COMPANY_NAME`, `LEGAL_ADDRESS`, `LEGAL_SIRET` et
  `LEGAL_MEDIATOR` (mentions légales) avec les informations réelles de
  l'entreprise.
- Relire `/cgv` (conditions générales) avec les conditions réelles de
  l'activité.
- Remplacer `NEXT_PUBLIC_SITE_URL` par le nom de domaine définitif une fois
  connu.

## Structure

```
app/
  page.tsx                 # accueil
  services/page.tsx         # détail des services
  a-propos/page.tsx         # présentation de l'entreprise
  devis/page.tsx             # formulaire devis
  rendez-vous/page.tsx       # formulaire rendez-vous (agenda)
  contact/page.tsx           # coordonnées + formulaire contact
  merci/page.tsx              # confirmation après envoi
  admin/page.tsx               # tableau de bord (protégé)
  admin/demandes/page.tsx      # liste des demandes (protégé)
lib/
  site.ts                # coordonnées, services, valeurs (configurable par env)
  actions.ts             # server actions (créer une demande, changer son statut)
  prisma.ts              # instance Prisma partagée
prisma/
  schema.prisma           # modèle Lead (devis / rendez-vous / contact)
```

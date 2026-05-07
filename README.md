# Case Claim Network

Mass tort lead generation site with 6 campaign landers, TrackDrive integration, and TrustedForm.

## Campaigns
- `/depo-provera` — Depo-Provera (Meningioma) — Token: `430e6301d6ff48d1bc3a11a936dc966a`
- `/hair-relaxer` — Hair Relaxer (Cancer) — Token: `HAIR_TOKEN_PLACEHOLDER` ⚠️ Update in `src/data/campaigns.ts`
- `/talcum-powder` — Talcum Powder (Cancer) — Token: `1fea3c19e23d45929d40aaaa58b666e8`
- `/dupixent` — Dupixent (Side Effects) — Token: `DUPIXENT_TOKEN_PLACEHOLDER` ⚠️ Update in `src/data/campaigns.ts`
- `/ozempic` — Ozempic/Wegovy (GI Injury) — Token: `OZEMPIC_TOKEN_PLACEHOLDER` ⚠️ Update in `src/data/campaigns.ts`
- `/rideshare` — Rideshare Assault (Uber/Lyft) — Token: `0794668906e64698a855f370dc903a6b`

## Setup & Deploy

### Install & Run Locally
```bash
npm install
npm run dev
```

### Build
```bash
npm run build
```

### Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Framework: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy

No environment variables required. TrackDrive tokens are in `src/data/campaigns.ts`.

## Updating TrackDrive Tokens
Open `src/data/campaigns.ts` and replace `HAIR_TOKEN_PLACEHOLDER`, `DUPIXENT_TOKEN_PLACEHOLDER`, `OZEMPIC_TOKEN_PLACEHOLDER` with actual tokens.

## Links
- Privacy Policy: https://privacy.altrck4.com/
- Terms of Service: https://terms-caseslaimnetwork-com.vercel.app/
- Contact: info@caseclaimnetwork.com

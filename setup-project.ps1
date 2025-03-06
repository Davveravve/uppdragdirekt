# Skapa grundläggande mappar
Write-Host "Skapar mappar..." -ForegroundColor Green

# Komponenter
New-Item -ItemType Directory -Path "src/components" -Force

# App-router sidor
New-Item -ItemType Directory -Path "src/app" -Force
New-Item -ItemType Directory -Path "src/app/dashboard" -Force
New-Item -ItemType Directory -Path "src/app/login" -Force
New-Item -ItemType Directory -Path "src/app/register" -Force
New-Item -ItemType Directory -Path "src/app/uppdrag" -Force
New-Item -ItemType Directory -Path "src/app/frilansare" -Force
New-Item -ItemType Directory -Path "src/app/publish" -Force

# Bibliotek
New-Item -ItemType Directory -Path "src/lib" -Force

# Skapa tomma filer
Write-Host "Skapar filer..." -ForegroundColor Green

# Konfigurera Tailwind
New-Item -ItemType File -Path "tailwind.config.js" -Force
New-Item -ItemType File -Path "postcss.config.js" -Force

# Huvudlayout och globals.css
New-Item -ItemType File -Path "src/app/layout.tsx" -Force
New-Item -ItemType File -Path "src/app/globals.css" -Force
New-Item -ItemType File -Path "src/app/page.tsx" -Force

# Komponenter
New-Item -ItemType File -Path "src/components/Header.tsx" -Force
New-Item -ItemType File -Path "src/components/Footer.tsx" -Force

# Supabase
New-Item -ItemType File -Path "src/lib/supabase.ts" -Force

# Sidor
New-Item -ItemType File -Path "src/app/uppdrag/page.tsx" -Force
New-Item -ItemType File -Path "src/app/frilansare/page.tsx" -Force
New-Item -ItemType File -Path "src/app/login/page.tsx" -Force
New-Item -ItemType File -Path "src/app/register/page.tsx" -Force
New-Item -ItemType File -Path "src/app/publish/page.tsx" -Force
New-Item -ItemType File -Path "src/app/dashboard/page.tsx" -Force

# .env fil exempel
New-Item -ItemType File -Path ".env.example" -Force

Write-Host "Alla mappar och filer har skapats! Nu kan du kopiera koden till respektive filer." -ForegroundColor Green
Write-Host "För att starta projektet, kör 'npm run dev'" -ForegroundColor Yellow
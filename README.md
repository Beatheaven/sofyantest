# 📚 Aplikasi Pendaftaran Anggota Perpustakaan

**Test Coding SofyanCorp** - Aplikasi CRUD untuk mengelola data anggota perpustakaan dengan Laravel 10 backend dan  **Next.js (TypeScript + TailwindCSS)** untuk frontend.

## 🎯 **Requirements yang Dipenuhi**

### **Frontend Test** ✅
- [x] `/anggota` - Index data master anggota
- [x] `/anggota/create` - Menambah data anggota
- [x] `/anggota/{uuid}` - Melihat detail data anggota
- [x] `/anggota/{uuid}/edit` - Mengubah detail data anggota
- [x] `/anggota/{uuid}/delete` - Menghapus data anggota

## 🏗️ **Arsitektur Sistem**

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   Database      │
│   Next.js       │◄──►│   Laravel 10    │◄──►│   MySQL         │
│   TypeScript    │    │   API           │    │                 │
│   TailwindCSS   │    │   Validation    │    │                 │
└─────────────────┘    │   Migration     │    └─────────────────┘
                       │   Seeder        │
                       └─────────────────┘
```

## 📁 **Struktur Proyek**

```
perpustakaan-app/
├── 📁 backend/                 # Laravel 10 Backend
│   ├── 📁 app/
│   │   ├── 📁 Http/
│   │   │   ├── 📁 Controllers/
│   │   │   │   └── AnggotaController.php
│   │   │   └── 📁 Requests/
│   │   │       └── StoreAnggotaRequest.php
|   |   |       └── UpdateAnggotaRequest.php
│   │   └── 📁 Models/
│   │       └── Anggota.php
│   ├── 📁 database/
│   │   ├── 📁 migrations/
│   │   │   └── 2025_08_13_134604_create_anggotas_table.php
│   │   └── 📁 seeders/
│   │       └── AnggotaSeeder.php
│   ├── 📁 routes/
│   │   └── api.php
│   └── composer.json
│
├── 📁 frontend/                # React.js Frontend
│   ├── 📁 src/
│   │    └── 📁 app/
|   |        └── 📁 anggota
│   │        │    ├── 📁 [uuid]
|   |        |    |   ├── 📁 delete
|   |        |    |   |   └──page.tsx
|   |        |    |   └── 📁 edit
|   |        |    |       └──page.tsx
│   │        │    ├── 📁 create
│   │        │    |   ├──
│   │        │    |
│   │        │    └── page.tsx
│   │        └── App.tsx
│   ├── package.json
│   └── tsconfig.json
│
└── README.md
```

## 🚀 **Cara Menjalankan**

### **1. Backend (Laravel 10)**

```bash
cd backend

# Install dependencies
composer install

# Copy environment file
cp env.example .env

# Generate application key
php artisan key:generate

# Configure database di .env
APP_NAME="Perpustakaan"
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=perpustakaan
DB_USERNAME=root
DB_PASSWORD=

# Run migrations and seeders
php artisan migrate --seed


# Start server
php artisan serve
```

Backend akan berjalan di: http://localhost:8000 atau http://127.0.0.1:8000

### **2. Frontend (React.js + TypeScript)**

```bash
cd frontend

# Install dependencies
npm install
atau
yarn install #jika kamu menggunakan yarn

# Start development server
npm dev
atau
yarn dev #jika kamu menggunakan yarn
```

Frontend akan berjalan di: http://localhost:3000

## 🔗 **API Endpoints**

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/anggota` | Daftar semua anggota |
| `POST` | `/api/anggota` | Tambah anggota baru |
| `GET` | `/api/anggota/{id}` | Detail anggota berdasarkan ID |
| `PUT` | `/api/anggota/{id}` | Update data anggota |
| `DELETE` | `/api/anggota/{id}` | Hapus anggota |

## 🗄️ **Struktur Database**

### **Tabel: anggota**
```sql
CREATE TABLE anggota (
    id CHAR(36) PRIMARY KEY,           -- UUID
    nama VARCHAR(100) NOT NULL,        -- Nama lengkap
    email VARCHAR(100) UNIQUE NOT NULL, -- Email (unique)
    no_hp VARCHAR(15) NOT NULL,        -- Nomor HP
    alamat TEXT NOT NULL,              -- Alamat lengkap
    created_at TIMESTAMP,              -- Timestamp pembuatan
    updated_at TIMESTAMP,              -- Timestamp update
);
```

## 🔧 **Teknologi yang Digunakan**

### **Backend**
- **Laravel 10** - PHP Framework
- **MySQL** - Database

### **Frontend**
- **Next.js**
- **TypeScript**
- **TailwindCSS**


**Dibuat untuk Test Coding SofyanCorp**

*Framework: Laravel 10 + Next.js + TypeScript + TailwindCSS*


-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "clerkUserId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Drug" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "serial" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "similar_drugs" TEXT[],
    "dosage_forms" TEXT[],
    "old_stock" INTEGER NOT NULL,
    "old_stock_price" DOUBLE PRECISION NOT NULL,
    "new_stock" INTEGER NOT NULL,
    "new_stock_price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "use" TEXT NOT NULL,
    "side_effect" TEXT[],
    "warnings" TEXT[],
    "manufactured" TEXT NOT NULL,
    "expire" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Drug_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkUserId_key" ON "User"("clerkUserId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Drug_slug_key" ON "Drug"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Drug_serial_key" ON "Drug"("serial");

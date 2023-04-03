-- CreateTable
CREATE TABLE "File" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "downloadCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

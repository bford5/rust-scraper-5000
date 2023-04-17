-- CreateTable
CREATE TABLE "ToDo" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "ToDo_id_key" ON "ToDo"("id");

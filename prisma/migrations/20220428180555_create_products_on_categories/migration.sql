-- CreateTable
CREATE TABLE "productsOnCategories" (
    "id_product" TEXT NOT NULL,
    "id_category" TEXT NOT NULL,

    CONSTRAINT "productsOnCategories_pkey" PRIMARY KEY ("id_product","id_category")
);

-- AddForeignKey
ALTER TABLE "productsOnCategories" ADD CONSTRAINT "productsOnCategories_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productsOnCategories" ADD CONSTRAINT "productsOnCategories_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

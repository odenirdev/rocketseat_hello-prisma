import { Product } from "@prisma/client";
import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class FindProductController {
  async handler(request: Request, response: Response) {
    const { id } = request.params;

    const product = await prismaClient.product.findUnique({
      where: {
        id: id,
      },
      include: {
        ProductsOnCategories: true,
      },
    });

    const { ProductsOnCategories } = product!;
    const responseProduct = {
      ...product,
      categories: ProductsOnCategories.map((item) => item.id_category),
    };

    delete responseProduct.ProductsOnCategories;

    return response.json(responseProduct);
  }
}

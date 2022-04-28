import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateProductController {
  async handler(request: Request, response: Response) {
    const { name, bar_code, price, categories } = request.body;

    const product = await prismaClient.product.create({
      data: {
        name,
        bar_code,
        price,
        ProductsOnCategories: {
          create: (categories as string[]).map((category) => ({
            category: { id: category },
          })),
        },
      },
    });

    return response.json(product);
  }
}

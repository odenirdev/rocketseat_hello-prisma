import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateCategoryController {
  async handler(request: Request, response: Response) {
    const { name } = request.body;

    const category = await prismaClient.category.create({
      data: {
        name,
      },
    });

    return response.json(category);
  }
}

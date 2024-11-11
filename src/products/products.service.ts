import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-category.dto';
import { UniqueIdService } from 'src/unique-id/unique-id.service';

@Injectable()
export class ProductsService {
  constructor(
    private prisma: PrismaService,
    private readonly uniqueIdService: UniqueIdService,
  ) {}

  async createProduct(data: CreateProductDto) {
    if (!data) {
      throw new BadRequestException('Invalid product data');
    }

    const SKU = this.uniqueIdService.generateUnique8CharString();

    const category = await this.prisma.category.findFirst({
      where: { title: data.category },
    });

    if (!category) {
      throw new BadRequestException('Category not found');
    }

    try {
      const product = await this.prisma.product.create({
        data: {
          title: data.title,
          description: data.description,
          price: data.price,
          categoryId: category.id,
          sku: SKU,
        },
      });

      return product;
    } catch (error) {
      throw new BadRequestException(
        'Failed to create product: ' + error.message,
      );
    }
  }

  async findByID(id: number) {
    if (!id) {
      throw new BadRequestException('Invalid product ID');
    }
    const product = await this.prisma.product.findUnique({
      where: { id },
    });
    console.log(product);
    if (!product) {
      throw new BadRequestException('Product not found');
    }
    const categoryId = product.categoryId;
    const category = await this.prisma.category.findUnique({
      where: { id: categoryId },
    });
    console.log(category);

    const finalObject = {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      category: category,
      SKU: product.sku,
    };
    return finalObject;
  }
}

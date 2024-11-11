import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-category.dto';

@Controller('api')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('/products/:id')
  async findByID(@Param('id', ParseIntPipe) id: number) {
    console.log('findByID', id);
    return await this.productsService.findByID(id);
  }

  @Post('/products')
  async createProduct(@Body() CreateProductDto: CreateProductDto) {
    return await this.productsService.createProduct(CreateProductDto);
  }
}

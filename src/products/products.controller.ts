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
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('api')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({ summary: 'Create a new product' })
  @ApiBody({
    description: 'Product data to create a new product',
    type: CreateProductDto,
    examples: {
      example1: {
        summary: 'Sample product data',
        value: {
          title: 'Nstaran',
          description: 'Baskator: 2, sexan1',
          price: 20000,
          category: 'Home Appliances',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Successfully created the product',
    schema: {
      example: {
        title: 'Nstaran',
        description: 'Baskator: 2, sexan1',
        price: 20000,
        category: 'Home Appliances',
      },
    },
  })
  @Post('/products')
  async createProduct(@Body() createProductDto: CreateProductDto) {
    return await this.productsService.createProduct(createProductDto);
  }

  @ApiOperation({ summary: 'Find product by ID' })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved the product',
    schema: {
      example: {
        id: 1,
        title: 'Nstaran',
        description: 'Baskator: 2, sexan1',
        price: 20000,
        category: 'Home Appliances',
      },
    },
  })
  @Get('/products/:id')
  async findByID(@Param('id', ParseIntPipe) id: number) {
    return await this.productsService.findByID(id);
  }
}

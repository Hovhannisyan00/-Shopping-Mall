import { PartialType } from '@nestjs/swagger';

import { CreateProductDto } from './create-category.dto';
export class UpdateProductDto extends PartialType(CreateProductDto) {}

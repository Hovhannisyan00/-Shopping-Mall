import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UniqueIdService } from 'src/unique-id/unique-id.service';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsService, PrismaService, UniqueIdService],
})
export class ProductsModule {}

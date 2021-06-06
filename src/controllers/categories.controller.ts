import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  // Multiples parametros
  @Get('/:id/products/:productId')
  getCategories(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ): string {
    return `categoria ${id} del producto ${productId}`;
  }
}

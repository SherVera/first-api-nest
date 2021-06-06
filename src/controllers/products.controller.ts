import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  // Decorador @Param, se especifica en la importacion de @nestjs/common y se agrega como un parametro
  // del metodo
  @Get('/productsOther/:id')
  getOtherProducts(@Param() id: any): string {
    return `producto otro ${id.id}`;
  }

  // Rutas estaticas van declaradas antes de las rutas dinamicas
  // Query params inferido
  @Get('/filter')
  getProductFilter(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ): string {
    return `producto limi => ${limit} offset => ${offset} brand = ${brand}`;
  }

  // En el decorador @Param se puede definir el parametro de la ruta
  @Get('/:id')
  getProducts(@Param('id') id: string): string {
    return `producto ${id}`;
  }

  // Query params
  @Get('')
  getProduct(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
    @Query('brand') brand: string,
  ): string {
    return `producto limit => ${limit} offset => ${offset} brand = ${brand}`;
  }
}

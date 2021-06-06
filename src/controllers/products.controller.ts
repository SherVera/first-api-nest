import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';

import { Response } from 'express'; // import response from express
@Controller('products')
export class ProductsController {
  // Decorador @Param, se especifica en la importacion de @nestjs/common y se agrega como un parametro
  // del metodo
  @Get('/productsOther/:id')
  getOtherProducts(@Param() id: any) {
    return { message: `producto otro ${id.id}` };
  }

  // Rutas estaticas van declaradas antes de las rutas dinamicas
  // Query params inferido
  @Get('/filter')
  getProductFilter(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `producto limi => ${limit} offset => ${offset} brand = ${brand}`,
    };
  }

  // Decorador HTTPCode para retornar estados de codigo
  // Response en caso de usar el de express
  // En el decorador @Param se puede definir el parametro de la ruta
  @Get('/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProducts(@Res() response: Response, @Param('id') id: string) {
    response.status(200).send({ message: `producto ${id}` });
  }

  // Query params
  @Get('')
  getProduct(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
    @Query('brand') brand: string,
  ) {
    return {
      message: `producto limit => ${limit} offset => ${offset} brand = ${brand}`,
    };
  }

  // Crear producto
  // Decorador Body (payload) del request
  @Post()
  create(@Body() payload: any) {
    return {
      payload,
      message: 'accion de crear',
    };
  }

  // Modificar Producto
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
      message: `Se elimino el producto ${id}`,
    };
  }
}

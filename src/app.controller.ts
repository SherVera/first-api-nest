import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // Decoradores para las clases o metodos
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // No es restrictivo para los nombres de rutas el simbolo /
  @Get('nuevo')
  newEndpoint(): string {
    return 'Iniciando otro metodo';
  }

  @Get('/nuevo/dos')
  newSecondEndpoint(): string {
    return 'Iniciando un nuevo metodo';
  }
}

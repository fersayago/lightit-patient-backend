import { Controller, Post, Body, UsePipes } from '@nestjs/common';
import { PatientService } from './patient.service';
import { Patient } from './patient.entity';
import { ValidationPipe } from '@nestjs/common';

@Controller('patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post('register')
  @UsePipes(new ValidationPipe({ transform: true })) // enable automatic data transformation
  async registerPatient(@Body() patientData: Patient) {
    return this.patientService.registerPatient(patientData);
  }
}

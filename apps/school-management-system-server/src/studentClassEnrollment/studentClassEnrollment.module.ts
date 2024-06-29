import { Module } from "@nestjs/common";
import { StudentClassEnrollmentModuleBase } from "./base/studentClassEnrollment.module.base";
import { StudentClassEnrollmentService } from "./studentClassEnrollment.service";
import { StudentClassEnrollmentController } from "./studentClassEnrollment.controller";
import { StudentClassEnrollmentResolver } from "./studentClassEnrollment.resolver";

@Module({
  imports: [StudentClassEnrollmentModuleBase],
  controllers: [StudentClassEnrollmentController],
  providers: [StudentClassEnrollmentService, StudentClassEnrollmentResolver],
  exports: [StudentClassEnrollmentService],
})
export class StudentClassEnrollmentModule {}

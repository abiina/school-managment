import { Module } from "@nestjs/common";
import { CourseGradeModuleBase } from "./base/courseGrade.module.base";
import { CourseGradeService } from "./courseGrade.service";
import { CourseGradeController } from "./courseGrade.controller";
import { CourseGradeResolver } from "./courseGrade.resolver";

@Module({
  imports: [CourseGradeModuleBase],
  controllers: [CourseGradeController],
  providers: [CourseGradeService, CourseGradeResolver],
  exports: [CourseGradeService],
})
export class CourseGradeModule {}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CourseGradeService } from "./courseGrade.service";
import { CourseGradeControllerBase } from "./base/courseGrade.controller.base";

@swagger.ApiTags("courseGrades")
@common.Controller("courseGrades")
export class CourseGradeController extends CourseGradeControllerBase {
  constructor(protected readonly service: CourseGradeService) {
    super(service);
  }
}

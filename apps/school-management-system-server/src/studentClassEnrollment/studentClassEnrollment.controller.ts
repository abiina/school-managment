import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StudentClassEnrollmentService } from "./studentClassEnrollment.service";
import { StudentClassEnrollmentControllerBase } from "./base/studentClassEnrollment.controller.base";

@swagger.ApiTags("studentClassEnrollments")
@common.Controller("studentClassEnrollments")
export class StudentClassEnrollmentController extends StudentClassEnrollmentControllerBase {
  constructor(protected readonly service: StudentClassEnrollmentService) {
    super(service);
  }
}

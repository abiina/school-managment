import * as graphql from "@nestjs/graphql";
import { StudentClassEnrollmentResolverBase } from "./base/studentClassEnrollment.resolver.base";
import { StudentClassEnrollment } from "./base/StudentClassEnrollment";
import { StudentClassEnrollmentService } from "./studentClassEnrollment.service";

@graphql.Resolver(() => StudentClassEnrollment)
export class StudentClassEnrollmentResolver extends StudentClassEnrollmentResolverBase {
  constructor(protected readonly service: StudentClassEnrollmentService) {
    super(service);
  }
}

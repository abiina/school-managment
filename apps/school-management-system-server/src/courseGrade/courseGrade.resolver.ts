import * as graphql from "@nestjs/graphql";
import { CourseGradeResolverBase } from "./base/courseGrade.resolver.base";
import { CourseGrade } from "./base/CourseGrade";
import { CourseGradeService } from "./courseGrade.service";

@graphql.Resolver(() => CourseGrade)
export class CourseGradeResolver extends CourseGradeResolverBase {
  constructor(protected readonly service: CourseGradeService) {
    super(service);
  }
}

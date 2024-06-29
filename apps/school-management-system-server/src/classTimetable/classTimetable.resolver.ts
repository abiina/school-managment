import * as graphql from "@nestjs/graphql";
import { ClassTimetableResolverBase } from "./base/classTimetable.resolver.base";
import { ClassTimetable } from "./base/ClassTimetable";
import { ClassTimetableService } from "./classTimetable.service";

@graphql.Resolver(() => ClassTimetable)
export class ClassTimetableResolver extends ClassTimetableResolverBase {
  constructor(protected readonly service: ClassTimetableService) {
    super(service);
  }
}

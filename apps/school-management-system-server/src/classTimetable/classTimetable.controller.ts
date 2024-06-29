import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClassTimetableService } from "./classTimetable.service";
import { ClassTimetableControllerBase } from "./base/classTimetable.controller.base";

@swagger.ApiTags("classTimetables")
@common.Controller("classTimetables")
export class ClassTimetableController extends ClassTimetableControllerBase {
  constructor(protected readonly service: ClassTimetableService) {
    super(service);
  }
}

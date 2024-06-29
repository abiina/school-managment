import { Module } from "@nestjs/common";
import { ClassTimetableModuleBase } from "./base/classTimetable.module.base";
import { ClassTimetableService } from "./classTimetable.service";
import { ClassTimetableController } from "./classTimetable.controller";
import { ClassTimetableResolver } from "./classTimetable.resolver";

@Module({
  imports: [ClassTimetableModuleBase],
  controllers: [ClassTimetableController],
  providers: [ClassTimetableService, ClassTimetableResolver],
  exports: [ClassTimetableService],
})
export class ClassTimetableModule {}

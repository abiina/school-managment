import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClassTimetableServiceBase } from "./base/classTimetable.service.base";

@Injectable()
export class ClassTimetableService extends ClassTimetableServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CourseGradeServiceBase } from "./base/courseGrade.service.base";

@Injectable()
export class CourseGradeService extends CourseGradeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StudentClassEnrollmentServiceBase } from "./base/studentClassEnrollment.service.base";

@Injectable()
export class StudentClassEnrollmentService extends StudentClassEnrollmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

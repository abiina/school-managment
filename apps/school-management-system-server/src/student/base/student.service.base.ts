/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Student as PrismaStudent,
  ClassModel as PrismaClassModel,
} from "@prisma/client";

export class StudentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.StudentCountArgs, "select">): Promise<number> {
    return this.prisma.student.count(args);
  }

  async students(args: Prisma.StudentFindManyArgs): Promise<PrismaStudent[]> {
    return this.prisma.student.findMany(args);
  }
  async student(
    args: Prisma.StudentFindUniqueArgs
  ): Promise<PrismaStudent | null> {
    return this.prisma.student.findUnique(args);
  }
  async createStudent(args: Prisma.StudentCreateArgs): Promise<PrismaStudent> {
    return this.prisma.student.create(args);
  }
  async updateStudent(args: Prisma.StudentUpdateArgs): Promise<PrismaStudent> {
    return this.prisma.student.update(args);
  }
  async deleteStudent(args: Prisma.StudentDeleteArgs): Promise<PrismaStudent> {
    return this.prisma.student.delete(args);
  }

  async getClassField(parentId: string): Promise<PrismaClassModel | null> {
    return this.prisma.student
      .findUnique({
        where: { id: parentId },
      })
      .classField();
  }
}

/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ClassTimetable as PrismaClassTimetable } from "@prisma/client";

export class ClassTimetableServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ClassTimetableCountArgs, "select">
  ): Promise<number> {
    return this.prisma.classTimetable.count(args);
  }

  async classTimetables(
    args: Prisma.ClassTimetableFindManyArgs
  ): Promise<PrismaClassTimetable[]> {
    return this.prisma.classTimetable.findMany(args);
  }
  async classTimetable(
    args: Prisma.ClassTimetableFindUniqueArgs
  ): Promise<PrismaClassTimetable | null> {
    return this.prisma.classTimetable.findUnique(args);
  }
  async createClassTimetable(
    args: Prisma.ClassTimetableCreateArgs
  ): Promise<PrismaClassTimetable> {
    return this.prisma.classTimetable.create(args);
  }
  async updateClassTimetable(
    args: Prisma.ClassTimetableUpdateArgs
  ): Promise<PrismaClassTimetable> {
    return this.prisma.classTimetable.update(args);
  }
  async deleteClassTimetable(
    args: Prisma.ClassTimetableDeleteArgs
  ): Promise<PrismaClassTimetable> {
    return this.prisma.classTimetable.delete(args);
  }
}
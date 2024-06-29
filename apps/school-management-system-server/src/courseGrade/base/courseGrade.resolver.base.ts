/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CourseGrade } from "./CourseGrade";
import { CourseGradeCountArgs } from "./CourseGradeCountArgs";
import { CourseGradeFindManyArgs } from "./CourseGradeFindManyArgs";
import { CourseGradeFindUniqueArgs } from "./CourseGradeFindUniqueArgs";
import { DeleteCourseGradeArgs } from "./DeleteCourseGradeArgs";
import { CourseGradeService } from "../courseGrade.service";
@graphql.Resolver(() => CourseGrade)
export class CourseGradeResolverBase {
  constructor(protected readonly service: CourseGradeService) {}

  async _courseGradesMeta(
    @graphql.Args() args: CourseGradeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CourseGrade])
  async courseGrades(
    @graphql.Args() args: CourseGradeFindManyArgs
  ): Promise<CourseGrade[]> {
    return this.service.courseGrades(args);
  }

  @graphql.Query(() => CourseGrade, { nullable: true })
  async courseGrade(
    @graphql.Args() args: CourseGradeFindUniqueArgs
  ): Promise<CourseGrade | null> {
    const result = await this.service.courseGrade(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CourseGrade)
  async deleteCourseGrade(
    @graphql.Args() args: DeleteCourseGradeArgs
  ): Promise<CourseGrade | null> {
    try {
      return await this.service.deleteCourseGrade(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
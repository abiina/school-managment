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
import { ClassTimetable } from "./ClassTimetable";
import { ClassTimetableCountArgs } from "./ClassTimetableCountArgs";
import { ClassTimetableFindManyArgs } from "./ClassTimetableFindManyArgs";
import { ClassTimetableFindUniqueArgs } from "./ClassTimetableFindUniqueArgs";
import { DeleteClassTimetableArgs } from "./DeleteClassTimetableArgs";
import { ClassTimetableService } from "../classTimetable.service";
@graphql.Resolver(() => ClassTimetable)
export class ClassTimetableResolverBase {
  constructor(protected readonly service: ClassTimetableService) {}

  async _classTimetablesMeta(
    @graphql.Args() args: ClassTimetableCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ClassTimetable])
  async classTimetables(
    @graphql.Args() args: ClassTimetableFindManyArgs
  ): Promise<ClassTimetable[]> {
    return this.service.classTimetables(args);
  }

  @graphql.Query(() => ClassTimetable, { nullable: true })
  async classTimetable(
    @graphql.Args() args: ClassTimetableFindUniqueArgs
  ): Promise<ClassTimetable | null> {
    const result = await this.service.classTimetable(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ClassTimetable)
  async deleteClassTimetable(
    @graphql.Args() args: DeleteClassTimetableArgs
  ): Promise<ClassTimetable | null> {
    try {
      return await this.service.deleteClassTimetable(args);
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
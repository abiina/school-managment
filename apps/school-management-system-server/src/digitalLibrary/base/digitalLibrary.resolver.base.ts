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
import { DigitalLibrary } from "./DigitalLibrary";
import { DigitalLibraryCountArgs } from "./DigitalLibraryCountArgs";
import { DigitalLibraryFindManyArgs } from "./DigitalLibraryFindManyArgs";
import { DigitalLibraryFindUniqueArgs } from "./DigitalLibraryFindUniqueArgs";
import { DeleteDigitalLibraryArgs } from "./DeleteDigitalLibraryArgs";
import { DigitalLibraryService } from "../digitalLibrary.service";
@graphql.Resolver(() => DigitalLibrary)
export class DigitalLibraryResolverBase {
  constructor(protected readonly service: DigitalLibraryService) {}

  async _digitalLibrariesMeta(
    @graphql.Args() args: DigitalLibraryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DigitalLibrary])
  async digitalLibraries(
    @graphql.Args() args: DigitalLibraryFindManyArgs
  ): Promise<DigitalLibrary[]> {
    return this.service.digitalLibraries(args);
  }

  @graphql.Query(() => DigitalLibrary, { nullable: true })
  async digitalLibrary(
    @graphql.Args() args: DigitalLibraryFindUniqueArgs
  ): Promise<DigitalLibrary | null> {
    const result = await this.service.digitalLibrary(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DigitalLibrary)
  async deleteDigitalLibrary(
    @graphql.Args() args: DeleteDigitalLibraryArgs
  ): Promise<DigitalLibrary | null> {
    try {
      return await this.service.deleteDigitalLibrary(args);
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

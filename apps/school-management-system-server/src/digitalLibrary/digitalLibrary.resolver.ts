import * as graphql from "@nestjs/graphql";
import { DigitalLibraryResolverBase } from "./base/digitalLibrary.resolver.base";
import { DigitalLibrary } from "./base/DigitalLibrary";
import { DigitalLibraryService } from "./digitalLibrary.service";

@graphql.Resolver(() => DigitalLibrary)
export class DigitalLibraryResolver extends DigitalLibraryResolverBase {
  constructor(protected readonly service: DigitalLibraryService) {
    super(service);
  }
}

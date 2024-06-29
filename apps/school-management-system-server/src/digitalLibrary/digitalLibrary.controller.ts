import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DigitalLibraryService } from "./digitalLibrary.service";
import { DigitalLibraryControllerBase } from "./base/digitalLibrary.controller.base";

@swagger.ApiTags("digitalLibraries")
@common.Controller("digitalLibraries")
export class DigitalLibraryController extends DigitalLibraryControllerBase {
  constructor(protected readonly service: DigitalLibraryService) {
    super(service);
  }
}

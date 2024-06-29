import { Module } from "@nestjs/common";
import { DigitalLibraryModuleBase } from "./base/digitalLibrary.module.base";
import { DigitalLibraryService } from "./digitalLibrary.service";
import { DigitalLibraryController } from "./digitalLibrary.controller";
import { DigitalLibraryResolver } from "./digitalLibrary.resolver";

@Module({
  imports: [DigitalLibraryModuleBase],
  controllers: [DigitalLibraryController],
  providers: [DigitalLibraryService, DigitalLibraryResolver],
  exports: [DigitalLibraryService],
})
export class DigitalLibraryModule {}

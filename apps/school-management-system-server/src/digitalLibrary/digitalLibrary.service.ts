import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DigitalLibraryServiceBase } from "./base/digitalLibrary.service.base";

@Injectable()
export class DigitalLibraryService extends DigitalLibraryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

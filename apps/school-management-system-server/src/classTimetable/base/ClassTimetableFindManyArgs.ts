/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ClassTimetableWhereInput } from "./ClassTimetableWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ClassTimetableOrderByInput } from "./ClassTimetableOrderByInput";

@ArgsType()
class ClassTimetableFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ClassTimetableWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ClassTimetableWhereInput, { nullable: true })
  @Type(() => ClassTimetableWhereInput)
  where?: ClassTimetableWhereInput;

  @ApiProperty({
    required: false,
    type: [ClassTimetableOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ClassTimetableOrderByInput], { nullable: true })
  @Type(() => ClassTimetableOrderByInput)
  orderBy?: Array<ClassTimetableOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ClassTimetableFindManyArgs as ClassTimetableFindManyArgs };

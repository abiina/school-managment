import { Module } from "@nestjs/common";
import { StudentModule } from "./student/student.module";
import { TeacherModule } from "./teacher/teacher.module";
import { SubjectModule } from "./subject/subject.module";
import { ClassModelModule } from "./classModel/classModel.module";
import { CourseModule } from "./course/course.module";
import { CourseGradeModule } from "./courseGrade/courseGrade.module";
import { StudentClassEnrollmentModule } from "./studentClassEnrollment/studentClassEnrollment.module";
import { GradeModule } from "./grade/grade.module";
import { ClassTimetableModule } from "./classTimetable/classTimetable.module";
import { DigitalLibraryModule } from "./digitalLibrary/digitalLibrary.module";
import { AttendanceModule } from "./attendance/attendance.module";
import { CourseMaterialModule } from "./courseMaterial/courseMaterial.module";
import { MessageModule } from "./message/message.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    StudentModule,
    TeacherModule,
    SubjectModule,
    ClassModelModule,
    CourseModule,
    CourseGradeModule,
    StudentClassEnrollmentModule,
    GradeModule,
    ClassTimetableModule,
    DigitalLibraryModule,
    AttendanceModule,
    CourseMaterialModule,
    MessageModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}

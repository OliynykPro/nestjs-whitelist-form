import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ReporterPostEntity } from "./models/post.entity";
import { ReporterService } from "./services/reporter.service";
import { ReporterController } from "./controllers/reporter.controller";

@Module({
  imports: [TypeOrmModule.forFeature([ReporterPostEntity])],
  providers: [ReporterService],
  controllers: [ReporterController],
})
export class ReporterModule {}

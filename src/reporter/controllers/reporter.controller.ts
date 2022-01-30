import { Controller, Post, Get, Put, Delete, Body, Param } from "@nestjs/common";
import { Observable } from "rxjs";
import { UpdateResult, DeleteResult } from "typeorm";

import { ReporterPost } from "../models/post.interface";
import { ReporterService } from "../services/reporter.service";

@Controller('reporter')
export class ReporterController {
  constructor(private reporterService: ReporterService) {}

  @Post()
  create(@Body() post: ReporterPost): Observable<ReporterPost> {
    return this.reporterService.createPost(post)
  }

  @Get()
  findAll(): Observable<ReporterPost[]> {
    return this.reporterService.findAllReporters();
  }

  @Put(":id")
  update(
    @Param("id") id: number,
    @Body() post: ReporterPost
  ): Observable<UpdateResult> {
    return this.reporterService.updatePost(id, post);
  }

  @Delete(":id")
  delete(
    @Param("id") id: number
  ): Observable<DeleteResult> {
    return this.reporterService.deletePost(id);
  }
}

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, UpdateResult, DeleteResult } from "typeorm";
import { from, Observable } from "rxjs";

import { ReporterPostEntity } from "../models/post.entity";
import { ReporterPost } from "../models/post.interface";

@Injectable()
export class ReporterService {
  constructor(
    @InjectRepository(ReporterPostEntity)
    private readonly reporterPostRepository: Repository<ReporterPostEntity>
  ) {}

  createPost(reporterPost: ReporterPost): Observable<ReporterPost> {
    return from(this.reporterPostRepository.save(reporterPost));
  }

  findAllReporters(): Observable<ReporterPost[]> {
    return from(this.reporterPostRepository.find());
  }

  updatePost(id: number, reporterPost: ReporterPost): Observable<UpdateResult> {
    return from(this.reporterPostRepository.update(id, reporterPost));
  }

  deletePost(id: number): Observable<DeleteResult> {
    return from(this.reporterPostRepository.delete(id))
  }
}

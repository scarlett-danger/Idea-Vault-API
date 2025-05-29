import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class ProjectsService {
  constructor(@Inject('POSTGRES_POOL') private readonly sql: any) {}

  async findAll(): Promise<any[]> {
    return await this.sql`SELECT * FROM projects`;
  }
}

import { Injectable, Inject } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectsService {
  constructor(@Inject('POSTGRES_POOL') private readonly sql: any) {}

  async createProject(dto: CreateProjectDto): Promise<any> {
    const { projectCode, description, productLine, wantsNotifications, notificationType } = dto;

    // Store notificationType as an array (Postgres supports text[]), or serialize as JSON if needed
    const result = await this.sql`
      INSERT INTO projects (
        project_code,
        description,
        product_line,
        wants_notifications,
        notification_type
      )
      VALUES (
        ${projectCode},
        ${description},
        ${productLine},
        ${wantsNotifications},
        ${notificationType}
      )
      RETURNING *;
    `;
    return result[0];
  }
}


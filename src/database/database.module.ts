import { Module } from '@nestjs/common';
import { neon } from '@neondatabase/serverless';

// Make sure to load environment variables (if using .env)
const sql = neon(process.env.DATABASE_URL);

@Module({
  providers: [
    {
      provide: 'POSTGRES_POOL',
      useValue: sql,
    },
  ],
  exports: ['POSTGRES_POOL'],
})
export class DatabaseModule {}

import { ApiProperty } from '@nestjs/swagger';

export class PostDto {
  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the post',
  })
  id: number;

  @ApiProperty({
    example: 'My First Post',
    description: 'The title of the post',
  })
  title: string;

  @ApiProperty({
    example: 'This is the content of my first post',
    description: 'The content of the post',
  })
  content: string;

  @ApiProperty({
    example: 1,
    description: 'The ID of the user who created the post',
  })
  userId: number;
}

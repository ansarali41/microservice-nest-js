import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';
import { PostDto } from './dto/post.dto';

@ApiTags('posts')
@Controller('posts')
export class PostController {
  constructor(
    @Inject('POST_SERVICE') private readonly postClient: ClientProxy,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new post' })
  @ApiBody({ type: CreatePostDto })
  @ApiResponse({
    status: 201,
    description: 'The post has been successfully created.',
    type: PostDto,
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  createPost(@Body() createPostDto: CreatePostDto) {
    return this.postClient.send({ cmd: 'create_post' }, createPostDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all posts' })
  @ApiResponse({
    status: 200,
    description: 'Return all posts.',
    type: [PostDto],
  })
  getPosts() {
    return this.postClient.send({ cmd: 'get_posts' }, {});
  }
}

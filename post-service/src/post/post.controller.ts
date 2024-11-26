import { Body, Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PostService } from './post.service';
import { CreatePostDto } from './DTO/create-post.dto';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @MessagePattern({ cmd: 'create_post' })
  async createPost(@Body() createPostDto: CreatePostDto) {
    try {
      return await this.postService.create(createPostDto);
    } catch (error) {
      throw error;
    }
  }

  @MessagePattern({ cmd: 'get_posts' })
  async getPosts() {
    try {
      return await this.postService.findAll();
    } catch (error) {
      throw error;
    }
  }
}

import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './DTO/create-post.dto';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto) {
    try {
      const newPost = await this.postRepository.create(createPostDto);
      return await this.postRepository.save(newPost);
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.postRepository.findAndCount();
    } catch (error) {
      throw error;
    }
  }
}

import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';
import type { Task } from '@repo/types';

let tasks: Task[] = [
  {
    id: '1',
    title: 'title 1',
    description: 'description 1',
  },
  {
    id: '2',
    title: 'title 2',
    description: 'description 2',
  },
  {
    id: '3',
    title: 'title 3',
    description: 'description 3',
  },
];

@Injectable()
export class TaskService {
  create(createTaskDto: CreateTaskDto) {
    return 'This action adds a new task';
  }

  findAll() {
    return tasks;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}

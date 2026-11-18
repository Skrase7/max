import {
  Controller,
  Get,
  Req,
  UseGuards,
  Patch,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UsersService, MOCK_SETTINGS } from './users.service.js';
import { AuthGuard } from '../auth/auth.guard.js';
import { MOCK_USERS } from '../auth/auth.service.js';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('me')
  getMyProfile(@Req() req: any) {
    return this.usersService.getProfile(req.user.sub);
  }

  @Get('me/settings')
  getMySettings(@Req() req: any) {
    return this.usersService.getSettings(req.user.sub);
  }

  @Patch('me')
  updateMyProfile(@Req() req: any, @Body() body: any) {
    const userId = req.user.sub;
    const user = MOCK_USERS.find((u) => u.id === userId);

    if (!user) {
      throw new HttpException(
        { code: 'NOT_FOUND', message: 'User not found', details: null },
        HttpStatus.NOT_FOUND,
      );
    }

    const allowedFields = ['displayName', 'title', 'timezone'];
    const updates: any = {};

    for (const field of allowedFields) {
      if (field in body) {
        updates[field] = body[field];
      }
    }

    Object.assign(user, updates);

    return {
      result: {
        id: user.id,
        email: user.email,
        displayName: user.displayName,
        title: user.title,
        avatarUrl: null,
        timezone: user.timezone,
      },
    };
  }

  @Patch('me/settings')
  updateMySettings(@Req() req: any, @Body() body: any) {
    const userId = req.user.sub;
    const settings = MOCK_SETTINGS[userId];

    if (!settings) {
      throw new HttpException(
        { code: 'NOT_FOUND', message: 'Settings not found', details: null },
        HttpStatus.NOT_FOUND,
      );
    }

    const allowedFields = [
      'theme',
      'language',
      'timeFormat',
      'notifyTaskAssigned',
      'notifyTaskDueSoon',
      'notifyTaskBlocked',
      'dndUntil',
      'workHoursEnabled',
      'workDays',
      'workHoursStart',
      'workHoursEnd',
    ];

    const updates: any = {};

    for (const field of allowedFields) {
      if (field in body) {
        updates[field] = body[field];
      }
    }

    Object.assign(settings, updates);

    return { result: settings };
  }
}
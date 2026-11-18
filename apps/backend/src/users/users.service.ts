import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { MOCK_USERS } from '../auth/auth.service.js';

export const MOCK_SETTINGS: Record<string, any> = {
  '11111111-1111-1111-1111-111111111111': {
    theme: 'light',
    language: 'ru',
    timeFormat: '24h',
    notifyTaskAssigned: true,
    notifyTaskDueSoon: true,
    notifyTaskBlocked: false,
    dndUntil: null,
    workHoursEnabled: true,
    workDays: [1, 2, 3, 4, 5],
    workHoursStart: '09:00',
    workHoursEnd: '18:00',
  },
  '22222222-2222-2222-2222-222222222222': {
    theme: 'dark',
    language: 'ru',
    timeFormat: '12h',
    notifyTaskAssigned: true,
    notifyTaskDueSoon: true,
    notifyTaskBlocked: true,
    dndUntil: null,
    workHoursEnabled: false,
    workDays: [1, 2, 3, 4, 5],
    workHoursStart: '09:00',
    workHoursEnd: '18:00',
  },
};

@Injectable()
export class UsersService {
  getProfile(userId: string) {
    const user = MOCK_USERS.find((u) => u.id === userId);

    if (!user) {
      throw new HttpException(
        { code: 'NOT_FOUND', message: 'User not found', details: null },
        HttpStatus.NOT_FOUND,
      );
    }

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

  getSettings(userId: string) {
    const settings = MOCK_SETTINGS[userId];

    if (!settings) {
      throw new HttpException(
        { code: 'NOT_FOUND', message: 'Settings not found', details: null },
        HttpStatus.NOT_FOUND,
      );
    }

    return { result: settings };
  }
}
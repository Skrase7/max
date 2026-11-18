import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export const MOCK_USERS = [
  {
    id: '11111111-1111-1111-1111-111111111111',
    email: 'user1@example.com',
    password: 'user1',
    displayName: 'User 111',
    title: 'Backend developer',
    timezone: 'Europe/Moscow',
  },
  {
    id: '22222222-2222-2222-2222-222222222222',
    email: 'user2@example.com',
    password: 'user2',
    displayName: 'User 222',
    title: 'Fullstack developer',
    timezone: 'Europe/Kaliningrad',
  },
];

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(email: string, pass: string) {
    const user = MOCK_USERS.find(
      (u) => u.email === email && u.password === pass,
    );

    if (!user) {
      throw new HttpException(
        {
          code: 'UNAUTHORIZED',
          message: 'Invalid email or password',
          details: null,
        },
        HttpStatus.UNAUTHORIZED,
      );
    }

    const payload = { sub: user.id, email: user.email };
    const accessToken = await this.jwtService.signAsync(payload);

    return {
      result: {
        accessToken,
      },
    };
  }
}
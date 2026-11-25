import { PrismaClient } from '../../database/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

// Создаём адаптер, передавая ему строку подключения из переменных окружения
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

// Передаём адаптер в PrismaClient
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.task.createMany({
    data: [
      { title: 'Первая задача', description: 'Проверить подключение к БД' },
      { title: 'Вторая задача', isDone: true },
    ],
    skipDuplicates: true,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
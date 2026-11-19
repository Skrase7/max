## Руководство по развертыванию БД на локалке

После `git pull`

0. Скачать на сайте и установить [docker desktop](https://docs.docker.com/desktop/setup/install/windows-install/) если его нет. 

Проверка установки

```yaml
docker --version
docker run hello-world
```
1. Установить зависимости

```text
pnpm install
```
Если pnpm ругается на ERR_PNPM_IGNORED_BUILDS
Начиная с pnpm 11, скрипты установки зависимостей (postinstall, preinstall) не выполняются автоматически, пока их не одобрят. Prisma и @prisma/engines как раз требуют таких скриптов для загрузки движков.

Решение уже закоммичено в pnpm-workspace.yaml. В нём должен быть блок:

```text
allowBuilds:
  '@prisma/client': true
  '@prisma/engines': true
  prisma: true
```
2. Поднять базу данных

Из корня монорепо:
```PowerShell
docker compose up -d // в пассивном режиме
```
Проверить, что контейнер запущен:
```PowerShell
docker ps
```
3. Проверить переменные окружения

В репозитории должен лежать .env.example с содержимым: DATABASE_URL
4. Сгенерировать Prisma Client

Важно: В Prisma 7 migrate dev больше не запускает generate автоматически . Клиент нужно генерировать отдельно.

```powershell
cd apps/database
pnpm db:generate
```
Если prisma generate падает с Cannot resolve environment variable: DATABASE_URL: это известное поведение Prisma 7 — generate требует наличия DATABASE_URL, даже если для генерации она не нужна . Убедись, что .env создан (шаг 3) и prisma.config.ts его подхватывает.

5. Применить миграции и сиды
Из папки apps/database:
```PowerShell
pnpm db:migrate
pnpm db:seed
```
6. Проверить, что всё работает
```PowerShell
docker exec -it postgres psql -U user -d max -c "SELECT * FROM \"Task\";"
```
7. Запустить приложение pnpm dev 


## Руководство по добавлению модулей с  ORM Prisma для бекендеров 

(Просто на всякий случай, для копирования)

```ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.task.findMany();
  }
}
```

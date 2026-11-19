'use client';
// Страница для просмотра компонентов UI kit.
import { Button, Select } from '@repo/ui';

const StarIcon = () => (
  <svg width='16' height='16' viewBox='0 0 16 16' fill='currentColor' aria-hidden>
    <path d='M8 1.5l1.9 3.9 4.3.6-3.1 3 .7 4.3L8 11.3l-3.8 2 .7-4.3-3.1-3 4.3-.6L8 1.5z' />
  </svg>
);

const DeleteIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-6'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
    />
  </svg>
);

const options = [
  {
    value: 'todo',
    label: 'К выполнению',
    hint: 'Новые задачи',
    icon: <StarIcon />,
  },
  { value: 'progress', label: 'В работе', hint: 'Кто-то уже делает' },
  { value: 'review', label: 'На ревью', hint: 'Недоступно', disabled: true },
  { value: 'done', label: 'Готово', hint: 'Закрыто' },
];

export default function UiKitPage() {
  return (
    <main style={{ maxWidth: 360, padding: 24 }}>
      <Select
        label='Статус'
        options={options}
        renderOption={o => (
          <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {o.icon}
            <span style={{ display: 'grid' }}>
              {o.label}
              <small style={{ color: '#616061' }}>{o.hint}</small>
            </span>
          </span>
        )}
      />
      <section style={{ marginTop: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
        <Button>Принять</Button>
        <Button variant='secondary' size='s' rightIcon={<DeleteIcon />}>
          Удалитьььььььььььььььььььььььььь
        </Button>
        <Button variant='ghost' size='l' leftIcon={<StarIcon />} rightIcon={<StarIcon />}>
          Избранное
        </Button>
      </section>
    </main>
  );
}

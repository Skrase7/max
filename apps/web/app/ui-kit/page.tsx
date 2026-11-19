"use client";
// Страница для просмотра компонентов UI kit.
import { Select, Tabs } from "@repo/ui";
import { selectOptions, tabOptions } from "./mocks";

const UiKitPage = () => {
  return (
    <main style={{ maxWidth: 480, padding: 24, display: "grid", gap: 32 }}>
      <Tabs options={tabOptions} aria-label="Разделы задачи" />
      <Tabs
        options={tabOptions}
        variant="segmented"
        size="sm"
        fullWidth
        aria-label="Разделы (переключатель)"
      />
      <Select
        label="Статус"
        options={selectOptions}
        renderOption={(o) => (
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {o.icon}
            <span style={{ display: "grid" }}>
              {o.label}
              <small style={{ color: "#616061" }}>{o.hint}</small>
            </span>
          </span>
        )}
      />
    </main>
  );
};

export default UiKitPage;

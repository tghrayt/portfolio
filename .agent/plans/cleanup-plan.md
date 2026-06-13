# Cleanup Plan — `src/app`

Identifies dead code and redundant files in the Angular portfolio project.
Each task is small and independently executable by an AI agent.

---

## Summary of Findings

### Redundant / Dead Files (whole file removal)

| File                                         | Reason                                                                                          |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| ~~`src/app/custom-preset.ts`~~               | ~~Defines `CustomPreset` but is **never imported anywhere** in the project~~ — **removed**      |
| ~~`src/app/services/theme.service.spec.ts`~~ | ~~Auto-generated boilerplate spec with a single trivial test — no real coverage~~ — **removed** |

### Dead Code Blocks (inline)

| Location                                           | Description                                                                                         |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `src/app/app.component.ts:12`                      | `title` property is assigned but **never referenced** in the template or anywhere else              |
| `src/app/footer/footer.component.ts:12`            | `constructor() {}` is an **empty constructor** — not needed in Angular                              |
| `src/app/experience/experience.component.ts:8`     | `imports: []` — **empty imports array** in `@Component` decorator, serves no purpose                |
| `src/app/social-media/social-media.component.ts:7` | `imports: []` — **empty imports array** in `@Component` decorator, serves no purpose                |
| `src/app/what-i-do/what-i-do.component.ts:16`      | Uses `any[]` type in `loadData<any[]>` despite `WhatIDoItem` being imported — type is never applied |

---

## Tasks

### Task 1 — Remove `custom-preset.ts` (dead file) ✅ COMPLETED

**File to delete:**

```
src/app/custom-preset.ts
```

This file exports `CustomPreset` (a PrimeNG/PrimeUIX theme preset) that is never imported
by any other file in the project. Deleting it removes an unused dependency on `@primeuix/themes`.

---

### Task 2 — Remove `theme.service.spec.ts` (redundant test file) ✅ COMPLETED

**File to delete:**

```
src/app/services/theme.service.spec.ts
```

This is an auto-generated Angular spec with only a boilerplate `should be created` test.
It does not test any actual logic in `ThemeService`. Remove it to reduce noise.

---

### Task 3 — Remove unused `title` property in `AppComponent` ✅ COMPLETED

**Dead code range:**

```
(src/app/app.component.ts:12):(src/app/app.component.ts:12)
```

The `title = 'dilanka-rathnasiri-portfolio'` property is declared but never used in the
template (`app.component.html`) or anywhere else. Delete this line.

---

### Task 4 — Remove empty constructor in `FooterComponent` ✅ COMPLETED

**Dead code range:**

```
(src/app/footer/footer.component.ts:12):(src/app/footer/footer.component.ts:12)
```

`constructor() {}` is a no-op. Angular does not require an explicit empty constructor.
Remove it to clean up the class body.

---

### Task 5 — Remove empty `imports: []` in `ExperienceComponent` ✅ COMPLETED

**Dead code range:**

```
(src/app/experience/experience.component.ts:8):(src/app/experience/experience.component.ts:8)
```

The `imports: []` array inside the `@Component` decorator is empty and unnecessary.
Remove it from the decorator options.

---

### Task 6 — Remove empty `imports: []` in `SocialMediaComponent` ✅ COMPLETED

**Dead code range:**

```
(src/app/social-media/social-media.component.ts:7):(src/app/social-media/social-media.component.ts:7)
```

The `imports: []` array inside the `@Component` decorator is empty and unnecessary.
Remove it from the decorator options.

---

### Task 7 — Fix incorrect generic type in `WhatIDoComponent` ✅ COMPLETED

**Dead code range:**

```
(src/app/what-i-do/what-i-do.component.ts:16):(src/app/what-i-do/what-i-do.component.ts:16)
```

`loadData<any[]>('what-i-do')` uses `any[]` even though `WhatIDoItem` is imported at line 3.
Replace `any[]` with `WhatIDoItem[]` so the imported type is actually used and the data is
properly typed.

---

## Execution Order

Tasks can be run independently in any order. Suggested order:

1. ~~Task 1 (delete dead file)~~ ✅
2. ~~Task 2 (delete boilerplate spec)~~ ✅
3. ~~Task 3 (remove unused property)~~ ✅
4. ~~Task 4 (remove empty constructor)~~ ✅
5. ~~Task 5 (remove empty imports array — Experience)~~ ✅
6. ~~Task 6 (remove empty imports array — SocialMedia)~~ ✅
7. ~~Task 7 (fix type annotation)~~ ✅

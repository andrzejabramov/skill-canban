import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

// 🔧 Фикс для react-router-dom в Jest-окружении
// Используем globalThis + any, чтобы TS не ругался на переназначение
(globalThis as any).TextEncoder = TextEncoder;
(globalThis as any).TextDecoder = TextDecoder;

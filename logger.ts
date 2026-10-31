// src/lib/logger.ts
type LogLevel = "debug" | "info" | "warn" | "error";

interface LogEntry {
  level: LogLevel;
  message: string;
  context?: Record<string, unknown>;
  timestamp: string;
  userId?: string;
  sessionId: string;
}

class Logger {
  private buffer: LogEntry[] = [];
  private sessionId = crypto.randomUUID();

  log(level: LogLevel, message: string, context?: Record<string, unknown>) {
    const entry: LogEntry = {
      level,
      message,
      context,
      timestamp: new Date().toISOString(),
      sessionId: this.sessionId,
    };

    // في التطوير: console
    if (import.meta.env.DEV) {
      console[level](`[${level.toUpperCase()}]`, message, context);
    }

    // في الإنتاج: إرسال إلى الخادم
    if (import.meta.env.PROD && level !== "debug") {
      this.buffer.push(entry);
      this.flush();
    }
  }

  private flush() {
    if (this.buffer.length === 0) return;
    const batch = this.buffer.splice(0, 50);
    // إرسال إلى /api/logs
    fetch("/api/logs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ entries: batch }),
    }).catch(() => {
      // إعادة الإدخالات للـ buffer عند الفشل
      this.buffer.unshift(...batch);
    });
  }

  debug(msg: string, ctx?: Record<string, unknown>) { this.log("debug", msg, ctx); }
  info(msg: string, ctx?: Record<string, unknown>) { this.log("info", msg, ctx); }
  warn(msg: string, ctx?: Record<string, unknown>) { this.log("warn", msg, ctx); }
  error(msg: string, ctx?: Record<string, unknown>) { this.log("error", msg, ctx); }
}

export const logger = new Logger();
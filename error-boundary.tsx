// src/components/ErrorBoundary.tsx
interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error("[ErrorBoundary]", error, info);
    }
    // نقطة الربط لـ Sentry
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">
            حدث خطأ غير متوقع
          </h2>
          <p className="text-slate-500 mb-6 max-w-md">
            نعتذر عن الإزعاج. يمكنك إعادة المحاولة أو تحديث الصفحة.
          </p>
          <div className="flex gap-2">
            <Button onClick={this.handleReset}>إعادة المحاولة</Button>
            <Button variant="outline" onClick={() => window.location.reload()}>
              تحديث الصفحة
            </Button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
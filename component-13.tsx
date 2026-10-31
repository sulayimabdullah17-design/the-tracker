// ✅ كائن ثابت خارج المكوّن
const CARD_STYLE = { color: "red" } as const;

// ✅ دالة ثابتة عبر useCallback
const handleClick = useCallback(() => doSomething(), []);
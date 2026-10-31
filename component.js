// مثال Express
app.use(cors({
  origin: ["https://tracker.example.com"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  maxAge: 86400,
}));
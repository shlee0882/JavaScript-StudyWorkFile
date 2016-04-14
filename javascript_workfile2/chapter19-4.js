var app = express();
app.use(express.logger());
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session());
app.use(express.static('public'));
app.use(app.router);
 
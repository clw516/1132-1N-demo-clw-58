import express from 'express';

const app_58 = express();

app_58.use(express.static('public'));
app_58.set('view engine', 'ejs');

app_58.use('/product_58/static', (req, res, next) => {
  res.render('product_58/static_58', {
    title: 'Get Products - Static',
    name: '陳立偉',
    id: '213410458',
  });
});

app_58.use('/', (req, res, next) => {
  res.render('index', {
    title: 'Express',
    name: '陳立偉',
    id: '213410458',
  });
});

const port = process.env.PORT || 5000;

app_58.listen(port, () => {
  console.log(`Connecting on port: ${port}`);
});

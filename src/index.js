import Koa from 'koa';
import React from 'react';
import ReactPDF from '@react-pdf/renderer';
import MyDocument from './MyDocument';


const app = new Koa();

app.use(async ctx => {
  console.log('ctx.path: ', ctx.path);

  if(ctx.path === '/render') {
    await ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`).then(() => console.log('pdf done'));
    ctx.body = 'PDF rendered';
    return;
  }
  ctx.body='nothing rendered';
});

console.log('node is up');

app.listen(3050);
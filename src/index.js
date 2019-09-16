import Koa from 'koa';
import React from 'react';
import ReactPDF, { pdf } from '@react-pdf/renderer';
import MyDocument from './MyDocument';


const app = new Koa();

app.use(async ctx => {

  if(ctx.path === '/saveFile') {
    await ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`).then(() => console.log('pdf done'));
    ctx.body='file generated and saved';
    return;
  }

  if(ctx.path === '/render') {
    const pdfBuffer = await pdf(<MyDocument />).toBuffer();
    ctx.set('Content-Type', 'application/pdf');
    console.log('rendered pdf successfully');
    ctx.body = pdfBuffer;

    return;
  }
  ctx.body='nothing rendered';
});

app.listen(3050, () => console.log('listening on port 3050'));
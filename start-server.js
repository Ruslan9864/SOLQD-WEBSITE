// Простой HTTP сервер для тестирования
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8000;

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    
    if (filePath === './') {
        filePath = './index.html';
    }
    
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeType = mimeTypes[extname] || 'application/octet-stream';
    
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - Страница не найдена</h1>');
            } else {
                res.writeHead(500);
                res.end('Ошибка сервера: ' + error.code);
            }
        } else {
            res.writeHead(200, { 'Content-Type': mimeType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(port, () => {
    console.log(`🚀 Сервер запущен на http://localhost:${port}`);
    console.log(`📁 Корневая папка: ${process.cwd()}`);
    console.log(`🔗 Доступные страницы:`);
    console.log(`   • Главная: http://localhost:${port}/`);
    console.log(`   • Технологии: http://localhost:${port}/technology/`);
    console.log(`   • Компания: http://localhost:${port}/company/`);
    console.log(`⏹️  Для остановки сервера нажмите Ctrl+C`);
});

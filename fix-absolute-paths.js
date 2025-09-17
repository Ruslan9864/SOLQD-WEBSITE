// Скрипт для исправления абсолютных путей на страницах в папках
const fs = require('fs');

console.log('🔧 Исправление абсолютных путей...\n');

// Список всех страниц в папках
const files = [
    'technology/quantum-dots.html',
    'technology/materials.html',
    'technology/focus.html',
    'technology/purchase.html',
    'company/vision.html',
    'company/team.html',
    'company/samarkand.html',
    'company/careers.html',
    'company/board.html'
];

files.forEach(file => {
    if (!fs.existsSync(file)) {
        console.log(`❌ Файл не найден: ${file}`);
        return;
    }
    
    let content = fs.readFileSync(file, 'utf8');
    
    // Исправляем абсолютные пути на относительные
    content = content.replace(/href="\/"/g, 'href="../index.html"');
    content = content.replace(/href="\/technology\//g, 'href="../technology/');
    content = content.replace(/href="\/company\//g, 'href="../company/');
    content = content.replace(/href="\/newsroom\//g, 'href="../newsroom/');
    content = content.replace(/href="\/contact\//g, 'href="../contact/');
    content = content.replace(/href="\/privacy\//g, 'href="../privacy/');
    
    // Исправляем ссылки на CSS и JS файлы
    content = content.replace(/href="\.\.\/\.\.\/css\//g, 'href="../css/');
    content = content.replace(/href="\.\.\/\.\.\/assets\//g, 'href="../assets/');
    content = content.replace(/src="\.\.\/\.\.\/js\//g, 'src="../js/');
    
    // Исправляем ссылки на favicon
    content = content.replace(/href="\.\.\/\.\.\/assets\/img\/favicon\.svg"/g, 'href="../assets/img/favicon.svg"');
    content = content.replace(/href="\.\.\/\.\.\/assets\/img\/favicon\.png"/g, 'href="../assets/img/favicon.png"');
    
    // Сохраняем файл
    fs.writeFileSync(file, content);
    console.log(`✅ Исправлен: ${file}`);
});

console.log('\n🎉 Все абсолютные пути исправлены!');

// Скрипт для исправления верстки страниц в папках
const fs = require('fs');

console.log('🔧 Исправление верстки страниц в папках...\n');

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
    
    // Исправляем ссылку на главную страницу
    content = content.replace(/href="index\.html"/g, 'href="../index.html"');
    
    // Исправляем ссылки на CSS файлы (добавляем ../)
    content = content.replace(/href="\.\.\/\.\.\/css\//g, 'href="../css/');
    content = content.replace(/href="\.\.\/\.\.\/assets\//g, 'href="../assets/');
    
    // Исправляем ссылки на JavaScript файлы
    content = content.replace(/src="\.\.\/\.\.\/js\//g, 'src="../js/');
    
    // Исправляем ссылки на другие страницы
    content = content.replace(/href="technology\//g, 'href="../technology/');
    content = content.replace(/href="company\//g, 'href="../company/');
    content = content.replace(/href="newsroom\//g, 'href="../newsroom/');
    content = content.replace(/href="contact\//g, 'href="../contact/');
    content = content.replace(/href="privacy\//g, 'href="../privacy/');
    
    // Исправляем ссылки на favicon
    content = content.replace(/href="\.\.\/\.\.\/assets\/img\/favicon\.svg"/g, 'href="../assets/img/favicon.svg"');
    content = content.replace(/href="\.\.\/\.\.\/assets\/img\/favicon\.png"/g, 'href="../assets/img/favicon.png"');
    
    // Сохраняем файл
    fs.writeFileSync(file, content);
    console.log(`✅ Исправлен: ${file}`);
});

console.log('\n🎉 Все страницы в папках исправлены!');

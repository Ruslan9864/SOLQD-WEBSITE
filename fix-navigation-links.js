// Скрипт для исправления навигационных ссылок на страницах в папках
const fs = require('fs');

console.log('🔧 Исправление навигационных ссылок...\n');

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
    
    // Исправляем ссылки в навигации для страниц technology/
    if (file.startsWith('technology/')) {
        // Ссылки на главную страницу
        content = content.replace(/href="\.\.\/index\.html"/g, 'href="../index.html"');
        
        // Ссылки на технологии (текущая папка)
        content = content.replace(/href="quantum-dots\.html"/g, 'href="quantum-dots.html"');
        content = content.replace(/href="materials\.html"/g, 'href="materials.html"');
        content = content.replace(/href="focus\.html"/g, 'href="focus.html"');
        content = content.replace(/href="purchase\.html"/g, 'href="purchase.html"');
        
        // Ссылки на компанию
        content = content.replace(/href="company\//g, 'href="../company/');
        content = content.replace(/href="\.\.\/company\/vision\.html"/g, 'href="../company/vision.html"');
        content = content.replace(/href="\.\.\/company\/team\.html"/g, 'href="../company/team.html"');
        content = content.replace(/href="\.\.\/company\/samarkand\.html"/g, 'href="../company/samarkand.html"');
        content = content.replace(/href="\.\.\/company\/careers\.html"/g, 'href="../company/careers.html"');
        content = content.replace(/href="\.\.\/company\/board\.html"/g, 'href="../company/board.html"');
        
        // Ссылки на другие разделы
        content = content.replace(/href="newsroom\//g, 'href="../newsroom/');
        content = content.replace(/href="contact\//g, 'href="../contact/');
        content = content.replace(/href="privacy\//g, 'href="../privacy/');
    }
    
    // Исправляем ссылки в навигации для страниц company/
    if (file.startsWith('company/')) {
        // Ссылки на главную страницу
        content = content.replace(/href="\.\.\/index\.html"/g, 'href="../index.html"');
        
        // Ссылки на технологии
        content = content.replace(/href="technology\//g, 'href="../technology/');
        content = content.replace(/href="\.\.\/technology\/quantum-dots\.html"/g, 'href="../technology/quantum-dots.html"');
        content = content.replace(/href="\.\.\/technology\/materials\.html"/g, 'href="../technology/materials.html"');
        content = content.replace(/href="\.\.\/technology\/focus\.html"/g, 'href="../technology/focus.html"');
        content = content.replace(/href="\.\.\/technology\/purchase\.html"/g, 'href="../technology/purchase.html"');
        
        // Ссылки на компанию (текущая папка)
        content = content.replace(/href="vision\.html"/g, 'href="vision.html"');
        content = content.replace(/href="team\.html"/g, 'href="team.html"');
        content = content.replace(/href="samarkand\.html"/g, 'href="samarkand.html"');
        content = content.replace(/href="careers\.html"/g, 'href="careers.html"');
        content = content.replace(/href="board\.html"/g, 'href="board.html"');
        
        // Ссылки на другие разделы
        content = content.replace(/href="newsroom\//g, 'href="../newsroom/');
        content = content.replace(/href="contact\//g, 'href="../contact/');
        content = content.replace(/href="privacy\//g, 'href="../privacy/');
    }
    
    // Сохраняем файл
    fs.writeFileSync(file, content);
    console.log(`✅ Исправлен: ${file}`);
});

console.log('\n🎉 Все навигационные ссылки исправлены!');

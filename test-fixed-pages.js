// Скрипт для проверки исправленных страниц
const fs = require('fs');

console.log('🔍 Проверка исправленных страниц...\n');

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

let totalFiles = 0;
let validFiles = 0;
let issues = [];

files.forEach(file => {
    if (!fs.existsSync(file)) {
        console.log(`❌ Файл не найден: ${file}`);
        return;
    }
    
    totalFiles++;
    const content = fs.readFileSync(file, 'utf8');
    let fileIssues = [];
    
    // Проверяем правильность ссылок
    if (content.includes('href="index.html"')) {
        fileIssues.push('Неправильная ссылка на главную страницу');
    }
    
    if (content.includes('href="../../css/')) {
        fileIssues.push('Неправильные пути к CSS файлам');
    }
    
    if (content.includes('href="../../assets/')) {
        fileIssues.push('Неправильные пути к assets');
    }
    
    if (content.includes('href="../../js/')) {
        fileIssues.push('Неправильные пути к JS файлам');
    }
    
    // Проверяем наличие правильных ссылок
    if (!content.includes('href="../index.html"')) {
        fileIssues.push('Отсутствует правильная ссылка на главную страницу');
    }
    
    if (!content.includes('href="../css/')) {
        fileIssues.push('Отсутствуют правильные пути к CSS');
    }
    
    if (fileIssues.length === 0) {
        console.log(`✅ ${file}`);
        validFiles++;
    } else {
        console.log(`⚠️  ${file}:`);
        fileIssues.forEach(issue => {
            console.log(`   - ${issue}`);
        });
        issues.push({ file, issues: fileIssues });
    }
});

console.log(`\n📊 Результаты:`);
console.log(`   Всего файлов: ${totalFiles}`);
console.log(`   Валидных: ${validFiles}`);
console.log(`   С проблемами: ${issues.length}`);

if (issues.length > 0) {
    console.log(`\n🔧 Проблемы:`);
    issues.forEach(({ file, issues: fileIssues }) => {
        console.log(`\n${file}:`);
        fileIssues.forEach(issue => {
            console.log(`  - ${issue}`);
        });
    });
} else {
    console.log(`\n🎉 Все страницы исправлены!`);
    console.log(`🌐 Сайт доступен по адресу: http://localhost:8000`);
}

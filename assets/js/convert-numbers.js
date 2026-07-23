// assets/js/convert-numbers.js
document.addEventListener('DOMContentLoaded', function() {
    // تبدیل اعداد انگلیسی به فارسی
    function convertToPersianNumbers(text) {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return text.replace(/\d/g, function(digit) {
            return persianDigits[parseInt(digit)];
        });
    }

    // کلاس‌هایی که باید **انگلیسی** بمونند (اعداد انگلیسی)
    const englishNumberClasses = [
        'en-num',        // کلاس اصلی برای اعداد انگلیسی
        'en-inline',     // اعداد انگلیسی درون متن
        'version',       // نسخه‌ها
        'date',          // تاریخ‌ها
        'math',          // فرمول‌های ریاضی
        'code',          // کدها
        'paper-year',    // سال انتشار مقاله
        'paper-date'     // تاریخ بررسی مقاله
    ];

    // کلاس‌هایی که باید **فارسی** بشند (اختیاری - برای مواقعی که می‌خوایم اجبار کنیم)
    const persianNumberClasses = [
        'fa-num'         // کلاس برای اعداد فارسی (در صورت نیاز)
    ];

    // دریافت همه المان‌های متنی که ممکنه عدد داشته باشن
    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, td, th, .paper-meta, .post-meta, .paper-content, .post-content, div:not(.en-num):not(.en-inline)');
    
    elements.forEach(el => {
        // بررسی اینکه آیا المان یا والدینش کلاس انگلیسی دارند
        let shouldBeEnglish = false;
        let shouldBePersian = false;

        // بررسی کلاس‌های انگلیسی
        englishNumberClasses.forEach(className => {
            if (el.classList.contains(className) || el.closest('.' + className)) {
                shouldBeEnglish = true;
            }
        });

        // بررسی کلاس‌های فارسی (فقط در صورت نیاز)
        persianNumberClasses.forEach(className => {
            if (el.classList.contains(className) || el.closest('.' + className)) {
                shouldBePersian = true;
            }
        });

        // اگر کلاس انگلیسی داشت، عدد رو انگلیسی نگه دار
        if (shouldBeEnglish) {
            return; // هیچ تبدیلی انجام نده
        }

        // اگر کلاس فارسی داشت، عدد رو فارسی کن
        if (shouldBePersian) {
            el.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    node.textContent = convertToPersianNumbers(node.textContent);
                }
            });
            return;
        }

        // پیش‌فرض: اعداد رو فارسی کن (چون سایت فارسی‌زبان هست)
        el.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                node.textContent = convertToPersianNumbers(node.textContent);
            }
        });
    });
});
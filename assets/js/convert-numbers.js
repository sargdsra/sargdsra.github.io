// assets/js/convert-numbers.js
document.addEventListener('DOMContentLoaded', function() {
    // تبدیل اعداد انگلیسی به فارسی در کل متن
    function convertToPersianNumbers(text) {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return text.replace(/\d/g, function(digit) {
            return persianDigits[parseInt(digit)];
        });
    }

    // کلاس‌هایی که نباید تبدیل بشن (کدها، تاریخ‌ها، نسخه‌ها)
    const excludeClasses = ['en-num', 'en-inline', 'code', 'pre', 'version', 'date', 'math'];
    
    // دریافت همه المان‌های متنی
    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, td, th, .paper-meta, .post-meta');
    
    elements.forEach(el => {
        // بررسی اینکه آیا کلاس استثنا دارد یا نه
        let shouldExclude = false;
        excludeClasses.forEach(className => {
            if (el.classList.contains(className) || el.closest('.' + className)) {
                shouldExclude = true;
            }
        });
        
        // اگر استثنا نبود، تبدیل کن
        if (!shouldExclude) {
            const originalText = el.textContent;
            // اطمینان از اینکه فقط متن عادی رو تغییر بدیم و HTML رو نشکنیم
            el.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    node.textContent = convertToPersianNumbers(node.textContent);
                }
            });
        }
    });
});
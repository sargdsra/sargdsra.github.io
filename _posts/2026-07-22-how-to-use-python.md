---
title: "آموزش کار با کتابخانه‌های علم داده در پایتون"
author: "احمد رضایی"
tags: ["Python", "Data Science", "Pandas", "Matplotlib"]
---

در این پست قصد دارم نحوه کار با کتابخانه‌های اصلی علم داده در پایتون رو آموزش بدم.

## 📊 کار با Pandas

برای شروع، کتابخانه pandas رو import می‌کنیم:

```python
import pandas as pd
import numpy as np

# ساخت یک دیتافریم ساده
data = {
    'نام': ['علی', 'سارا', 'رضا'],
    'سن': [25, 30, 35],
    'شهر': ['تهران', 'اصفهان', 'شیراز']
}
df = pd.DataFrame(data)
print(df)
```

خروجی:

   نام  سن   شهر
0  علی  25  تهران
1  سارا 30  اصفهان
2  رضا  35  شیراز

## 📈 مصورسازی داده با Matplotlib

![نمودار نمونه]({{ site.baseurl }}/assets/images/sample-plot.png)

حالا یک نمودار ساده رسم می‌کنیم:

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.plot(x, y)
plt.xlabel('x')
plt.ylabel('sin(x)')
plt.grid(True)
plt.show()
```

## 🎯 نکات مهم

1. همیشه داده‌های خود را قبل از تحلیل بررسی کنید.
2. از روش‌های مختلف برای visualization استفاده کنید.
3. کد خود را بهینه‌سازی کنید.
4. 4554

## 📚 منابع مفید

- [مستندات رسمی Pandas](https://pandas.pydata.org/) 
- [مستندات Matplotlib](https://matplotlib.org/)
- [دوره آموزشی علم داده](https://example.com/)

    
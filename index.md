---
layout: default
title: صفحه اصلی
---

# 📚 به مجله علمی من خوش آمدید

## 📄 جدیدترین مقاله‌های علمی

{% for paper in site.papers limit:5 %}
- **[{{ paper.title }}]({{ paper.url }})**  
  *{{ paper.authors }}* | {{ paper.journal }} ({{ paper.year }})
{% endfor %}

[مشاهده همه مقاله‌ها]({{ site.baseurl }}/papers/)

---

## ✍️ جدیدترین پست‌های وبلاگ

{% for post in site.posts limit:5 %}
- **[{{ post.title }}]({{ post.url }})**  
  {{ post.tarikh }}
{% endfor %}

[مشاهده همه پست‌ها]({{ site.baseurl }}/blog/)
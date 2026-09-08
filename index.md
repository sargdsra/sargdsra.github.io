---
layout: default
title: صفحه اصلی
---

# 📚 به مجله علمی من خوش آمدید

## 📄 جدیدترین مقاله‌های علمی

{% assign last_papers = site.papers | reverse %}
{% for paper in last_papers limit:5 %}
- **[{{ paper.title }}]({{ paper.url }})**  
  *{{ paper.authors }}* | {{ paper.journal }} ({{ paper.year }})
{% endfor %}

[مشاهده همه مقاله‌ها]({{ site.baseurl }}/papers/)

---

## ✍️ جدیدترین پست‌های وبلاگ

{% assign last_post = site.posts | reverse %}
{% for post in last_post limit:5 %}
- **[{{ post.title }}]({{ post.url }})**  
  {{ post.tarikh }}
{% endfor %}

[مشاهده همه پست‌ها]({{ site.baseurl }}/blog/)
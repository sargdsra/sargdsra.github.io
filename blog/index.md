---
layout: default
title: همه پست‌ها
permalink: /blog/
---

# ✍️ همه پست‌های وبلاگ
{% assign last_post = site.posts | reverse %}
<ul>
{% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>
---
layout: default
title: همه پست‌ها
permalink: /blog/
---

# ✍️ همه پست‌های وبلاگ

<ul>
{% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <br>
    <small>{{ post.tarikh }}</small>
  </li>
{% endfor %}
</ul>
---
layout: default
title: همه مقاله‌ها
permalink: /papers/
---

# 📄 همه مقاله‌های علمی

<ul>
{% for paper in site.papers %}
  <li>
    <a href="{{ paper.url }}">{{ paper.title }}</a>
    <br>
    <small>{{ paper.authors }} | {{ paper.journal }} ({{ paper.year }})</small>
  </li>
{% endfor %}
</ul>
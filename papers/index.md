---
layout: default
title: همه مقاله‌ها
permalink: /papers/
---

# 📄 همه مقاله‌های علمی
{% assign last_papers = site.papers | reverse %}
<ul>
{% for paper in last_papers %}
  <li>
    <a href="{{ paper.url }}">{{ paper.title }}</a>
    <br>
    <small>{{ paper.authors }} | {{ paper.journal }} ({{ paper.year }})</small>
  </li>
{% endfor %}
</ul>
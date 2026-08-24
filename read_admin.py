import re
with open(r'd:\RecentureSoft-Admin\app\admin\(dashboard)\website-pages\page.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

idx = content.find('react-features')
if idx != -1:
    print(content[idx-600:idx+600])

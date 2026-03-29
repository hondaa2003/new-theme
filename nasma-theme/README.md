# نسمة — Nasma Theme for Salla

ثيم عبايات فاخر مبني على محرك Twilight الخاص بسلة.

## هيكل الملفات

```
src/
├── twilight.json              ← إعدادات الثيم الرئيسية
├── assets/
│   ├── styles/theme.css       ← كل CSS
│   └── js/theme.js            ← كل JavaScript
├── locales/
│   ├── ar.json                ← الترجمة العربية
│   └── en.json                ← الترجمة الإنجليزية
└── views/
    ├── layouts/master.twig    ← القالب الأساسي
    ├── pages/index.twig       ← الصفحة الرئيسية
    ├── components/
    │   ├── header/
    │   │   ├── announcement.twig
    │   │   └── header.twig
    │   ├── footer/footer.twig
    │   └── home/
    │       ├── features.twig
    │       ├── promo-banner.twig
    │       └── testimonials.twig
    └── product/card.twig
```

## خطوات التشغيل

1. **إنشاء حساب Partner على سلة**
   - اذهب إلى https://salla.partners
   - سجّل دخولك وافتح "المتاجر التجريبية"

2. **تثبيت Salla CLI**
   ```bash
   npm install -g @salla.sa/cli
   salla login
   ```

3. **ربط الثيم**
   ```bash
   salla theme create
   # أو استيراد من GitHub
   ```

4. **معاينة الثيم**
   ```bash
   cd nasma-theme
   salla theme preview
   ```

## الصفحات المنجزة ✅
- [x] master.twig (layout رئيسي)
- [x] index.twig (الصفحة الرئيسية)
- [x] header + announcement
- [x] footer
- [x] product card
- [x] home components (features, promo, testimonials)

## الصفحات القادمة 🔜
- [ ] product/single.twig (صفحة المنتج)
- [ ] product/index.twig (قائمة المنتجات)
- [ ] pages/cart.twig
- [ ] customer/ pages
- [ ] pages/thank-you.twig

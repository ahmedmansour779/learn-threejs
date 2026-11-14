# 🌌 مسار تعلّم وتطبيقات Three.js (Three.js Learning Journey & Reference)
> **سجل تعليمي وتوثيق مرجعي شامل لتطبيقات ومفاهيم Three.js ومحاكاة الرسوم ثلاثية الأبعاد على الويب، استناداً إلى دروس المهندس وائل ياسمينة (Wael Yasmina).**

---

## 📑 فهرس المحتويات (Table of Contents)
1. [نظرة عامة على المشروع (Project Overview)](#1-نظرة-عامة-على-المشروع-project-overview)
2. [هيكل المجلدات وتوزيع الأصول (Folder Structure & Assets)](#2-هيكل-المجلدات-وتوزيع-الأصول-folder-structure--assets)
3. [تفاصيل المشاريع والتطبيقات البرمجية (Implemented Exercises & Projects)](#3-تفاصيل-المشاريع-والتطبيقات-البرمجية-implemented-exercises--projects)
   - [أولاً: المشهد التفاعلي والأساسيات (Three.js Fundamentals & Interactive Scene)](#أولاً-المشهد-التفاعلي-والأساسيات-threejs-fundamentals--interactive-scene)
   - [ثانياً: مشروع النظام الشمسي (Solar System & Hierarchical Rotation)](#ثانياً-مشروع-النظام-الشمسي-solar-system--hierarchical-rotation)
   - [ثالثاً: مشروع تحريك النماذج ثلاثية الأبعاد (Dog Model & 3D Skeletal Animation)](#ثالثاً-مشروع-تحريك-النماذج-ثلاثية-الأبعاد-dog-model--3d-skeletal-animation)
4. [المفاهيم البرمجية والتقنية المكتسبة (Key Technical Concepts)](#4-المفاهيم-البرمجية-والتقنية-المكتسبة-key-technical-concepts)
5. [دليل التثبيت والتشغيل محلياً (How to Run Locally)](#5-دليل-التثبيت-والتشغيل-محلياً-how-to-run-locally)

---

## 1. نظرة عامة على المشروع (Project Overview)

يمثل هذا المستودع سجلاً عملياً ومحفظة برمجية متكاملة لرحلة تعلّم مكتبة **Three.js** وتطوير بيئات الويب ثلاثية الأبعاد (3D Web Applications) والتعامل مع معايير **WebGL**. 

تم استلهام المشاريع وتطبيقها بناءً على السلسلة التعليمية المتقدمة لـ **Wael Yasmina**، مع تطوير الأكواد وتحديثها لتلائم المعايير الحديثة لأدوات الحزم والتطوير.

### 🛠️ حزمة التقنيات المستخدمة (Tech Stack):
* **محرك الرسوميات ثلاثي الأبعاد:** [Three.js](https://threejs.org/) (الإصدار الحديث `^0.184.0`).
* **حزم التطوير وخوادم الويب (Bundlers):**
  * **Vite (`^8.0.x`):** استُخدم كبيئة أساسية وحديثة تدعم التحديث اللحظي الفائق (HMR) والتعامل الذكي مع مسارات الـ Assets عبر `import.meta.url`.
  * **Parcel Bundler:** استُخدم في المرحلة التأسيسية الأولى (`video 1`) وكمشاريع مرجعية أصيلة.
* **إدارة الحزم (Package Managers):** استخدام `pnpm` و `npm` لتثبيت التبعيات بسرعة وكفاءة.
* **لغات البرمجة والتقنيات:**
  * **JavaScript (Modern ES Modules):** كتابة أكواد معيارية واضحة تعتمد على الاستيراد والتصدير.
  * **GLSL (OpenGL Shading Language):** برمجة المظللات المخصصة (Custom Vertex & Fragment Shaders).
  * **واجهات التحكم والتنقيح اللحظية:** استخدام كل من `dat.gui` و `lil-gui` للتعديل اللحظي على معاملات الإضاءة، الكاميرا، والأشكال.
* **نماذج وأصول ثلاثية الأبعاد (3D Assets):** التعامل مع صيغ **glTF / GLB** المجهزة مسبقاً من برنامج **Blender** واستيراد الحركات الهيكلية (Skeletal Animations).

---

## 2. هيكل المجلدات وتوزيع الأصول (Folder Structure & Assets)

تم تنظيم مساحة العمل في بنية مرنة تفصل بين مرحلة التدريب الأولية، والمشاريع المتخصصة، والمستودعات المرجعية الأصلية المستوردة من GitHub للمقارنة والمطابقة:

```text
learn with Wael Yasmina/
│
├── 📁 video 1/                                   # مشروع الأساسيات الأول (مبني باستخدام Parcel)
│   ├── package.json                              # تبعيات المشروع (three, dat.gui)
│   └── src/
│       ├── index.html
│       ├── script.js                             # كود المشهد الأساسي، الأشكال، الإضاءة، وحركة الكرة
│       └── img/                                  # خامات البيئة (stars.jpg, nebula.jpg)
│
├── 📁 vite-project/                              # مشروع المشهد التفاعلي الموسّع (مبني باستخدام Vite)
│   ├── package.json                              # تبعيات المشروع مع Vite 8
│   ├── index.html
│   └── src/
│       ├── main.js                               # كود متقدم يشمل: Shaders، Raycasting، مجسم بلندر، وتعديل الرؤوس
│       ├── assets/
│       │   └── monkey.glb                        # نموذج قرد بلندر الشهير (Suzanne)
│       └── img/
│           ├── nebula.jpg                        # خامات السديم الكوني
│           └── stars.jpg                         # خامة النجوم
│
├── 📁 projects/                                  # مجلد المشاريع التطبيقية المنفصلة
│   │
│   ├── 📁 Object Rotate Around Another Object/   # مشروع المنظومة الشمسية (Solar System)
│   │   ├── 📁 Object Rotate Around Another Object/  # تطبيق Vite المطور مع lil-gui
│   │   │   ├── package.json                      # تبعيات: three, lil-gui, vite
│   │   │   └── src/
│   │   │       ├── main.js                       # هندسة دوران الكواكب حول الشمس ومحاورها
│   │   │       └── img/                          # خامات واقعية بدقة عالية لجميع الكواكب:
│   │   │           ├── sun.jpg                   # خامة الشمس
│   │   │           ├── mercury.jpg, venus.jpg    # عطارد والزهرة
│   │   │           ├── earth.jpg, mars.jpg       # الأرض والمريخ
│   │   │           ├── jupiter.jpg, saturn.jpg   # المشتري وزحل
│   │   │           ├── saturn ring.png           # حلقات زحل الشفافة
│   │   │           ├── uranus.jpg, uranus ring.png # أورانوس وحلقاته
│   │   │           ├── neptune.jpg, pluto.jpg    # نبتون وبلوتو
│   │   │           └── stars.jpg                 # خلفية سماء الفضاء
│   │   └── 📁 solarsystem/                       # المستودع المرجعي الأصلي للمشروع (Parcel)
│   │
│   └── 📁 Dog Barks/                             # مشروع استيراد وتحريك النماذج ثلاثية الأبعاد
│       ├── 📁 Dog Barks/                         # تطبيق Vite لتشغيل نموذج الكلب وحركاته
│       │   ├── package.json                      # إعدادات Vite ومكتبة Three
│       │   └── src/
│       │       ├── main.js                       # تحميل ملف glTF وإدارة الـ AnimationMixer
│       │       └── assets/
│       │           ├── doggo.glb                 # نموذج الكلب ثلاثي الأبعاد
│       │           └── doggo2.glb                # النموذج المحدث مع العظام والتحريك
│       └── 📁 blendertothree/                    # المستودع المرجعي الأصلي للمشروع (Parcel)
│
├── 📁 from github/                               # مستودعات مرجعية استرشادية من GitHub
│   └── 📁 threetutorial/                         # الكود المرجعي للدرس التأسيسي الأول
│
└── 📄 README.md                                  # ملف التوثيق الشامل للرحلة التعليمية
```

---

## 3. تفاصيل المشاريع والتطبيقات البرمجية (Implemented Exercises & Projects)

### أولاً: المشهد التفاعلي والأساسيات (Three.js Fundamentals & Interactive Scene)
**الملفات الرئيسية:** [`video 1/src/script.js`](file:///f:/تعليم/three%20js/learn%20with%20Wael%20Yasmina/video%201/src/script.js) و [`vite-project/src/main.js`](file:///f:/تعليم/three%20js/learn%20with%20Wael%20Yasmina/vite-project/src/main.js)

يغطي هذا الجزء حجر الأساس في برمجة الـ 3D عبر المتصفح:

1. **المكونات الأربعة الأساسية لأي مشهد ثلاثي أبعاد:**
   * **المشهد (`THREE.Scene`):** الحاوية العالمية التي يتم إلحاق كافة الكائنات، الإضاءات، والكاميرات بها.
   * **الكاميرا (`THREE.PerspectiveCamera`):** تم ضبط زاوية الرؤية (FOV = 45)، نسبة العرض للارتفاع، وحدود الرؤية القريبة والبعيدة (`0.1` إلى `1000`).
   * **المُصيِّر (`THREE.WebGLRenderer`):** مسؤول عن رسم المشهد على شاشة الـ Canvas بدقة الشاشة الكاملة، وتفعيل محرك الظلال الحسابي `renderer.shadowMap.enabled = true` مع اختيار نوع التنعيم المتقدم `THREE.PCFSoftShadowMap`.
   * **عناصر التحكم (`OrbitControls`):** تتيح للمستخدم الدوران الحر حول مركز المشهد عبر الفأرة، مع تفعيل خاصية التخميد والتنعيم للحركة (`orbit.enableDamping = true`).

2. **الأشكال الهندسية والخامات (Geometries & Materials):**
   * **المكعب الأساسي (`BoxGeometry`):** استخدام خامة بلون أحادي بسيط `MeshBasicMaterial` لا تتأثر بالضوء.
   * **المكعب متعدد الخامات (`box2MultiMaterial`):** تغليف كل وجه من أوجه المكعب الستة بخامة مستقلة عبر مصفوفة خامات تحتوي على خامات `nebula` و `stars`.
   * **المستوى الأرضي (`PlaneGeometry`):** استخدام `MeshStandardMaterial` مع تمكين استقبال الظلال `receiveShadow = true` وجعله مزدوج الوجه `THREE.DoubleSide`.
   * **التلاعب بالرؤوس الهندسية برمجياً (Dynamic Vertex Manipulation):** تم عمل أرضية شبكية `plane2` والتعديل على إحداثيات مصفوفة النقاط (`plane2.geometry.attributes.position.array`) عشوائياً في كل إطار وتحديثها برمجياً عبر `needsUpdate = true` لإنشاء سطح متموج ديناميكي.
   * **المظللات المخصصة (Custom Shaders):** كتابة كود تظليل مباشر عبر `THREE.ShaderMaterial` يحتوي على `vertexShader` لحساب موقع الرؤوس ومصفوفات العرض (`projectionMatrix * modelViewMatrix`)، و `fragmentShader` لتلوين المجسم بلون مخصص.

3. **الإضاءة والظلال المتطورة (Lighting & Shadow Maps):**
   * **`AmbientLight`:** إضاءة شاملة غير موجهة تمنع العتمة التامة للمناطق المظللة.
   * **`DirectionalLight`:** إضاءة تحاكي ضوء الشمس بخطوط متوازية مع مساعدة الكاميرا الإرشادية للظلال `DirectionalLightHelper` و `CameraHelper`.
   * **`SpotLight`:** إضاءة مسلطة مخروطية مع التحكم الكامل في نصف قطر الظل (`shadow.radius`)، زاوية الانتشار (`angle`)، وتلاشي الحواف (`penumbra`) لمنع حدوث التعرجات (Shadow Acne) مع ضبط `shadow.bias`.
   * **المساعدات الإرشادية (Helpers):** إضافة `AxesHelper` لمعرفة المحاور الثلاثية (X أحمر، Y أخضر، Z أزرق)، و `GridHelper` لتحديد شبكة الأرضية.

4. **التفاعل وتتبع الأشعة (Raycasting & Interactivity):**
   * تحويل إحداثيات مؤشر الفأرة من إحداثيات الشاشة بالبكسل إلى الإحداثيات المعيارية (Normalized Device Coordinates - NDC) في النطاق `[-1, 1]`.
   * إطلاق شعاع غير مرئي عبر `THREE.Raycaster` من موضع الكاميرا عبر مؤشر الفأرة:
     ```javascript
     rayCaster.setFromCamera(mousePosition, camera);
     const intersects = rayCaster.intersectObjects(scene.children);
     ```
   * التفاعل الحي: تلوين الكرة باللون الأحمر عند ملامسة المؤشر لها، وتدوير الصندوق عند التحويم فوقه.

5. **التحريك وواجهة المستخدم (Animation & GUI):**
   * محاكاة ارتداد الكرة الفيزيائي باستخدام دالة الجيب المثلثية المطلقة `2.5 + 2.5 * Math.abs(Math.sin(step))`.
   * ربط المتغيرات مع `dat.gui` لتعديل ألوان الخامات، زوايا الإضاءة، وسرعة الحركة مباشرة دون إعادة تحميل الصفحة.

---

### ثانياً: مشروع النظام الشمسي (Solar System & Hierarchical Rotation)
**الملفات الرئيسية:** [`projects/Object Rotate Around Another Object/Object Rotate Around Another Object/src/main.js`](file:///f:/تعليم/three%20js/learn%20with%20Wael%20Yasmina/projects/Object%20Rotate%20Around%20Another%20Object/Object%20Rotate%20Around%20Another%20Object/src/main.js)

يقدم هذا المشروع حلاً هندسياً أنيقاً لمعضلة تحريك الكواكب في مسارات دائرية معقدة:

#### 1. النواة الهندسية: كيف يدور كوكب حول الشمس وحول نفسه في آنٍ واحد؟
إذا قمت بتدوير مجسم الكوكب مباشرة، فإنه سيدور حول مركزه الخاص فقط (Self-Rotation / الدوران المحوري). لجعل الكوكب يدور في فلك حول الشمس (Orbit Revolution):
* تم استخدام مفهوم **الكائنات الفارغة الهرمية (Hierarchical Scene Graph)** عبر `THREE.Object3D`.
* يتم وضع الكائن الأب (`obj`) في نقطة الأصل `(0, 0, 0)` حيث تقبع الشمس.
* يُضاف مجسم الكوكب (`mesh`) كـ **ابن (Child)** داخل الكائن الأب `obj`.
* تتم إزاحة الكوكب الابن على محور السينات فقط بمقدار بعده عن الشمس (`mesh.position.x = position`).
* **النتيجة السحرية:**
  * عند تدوير الأب `obj.rotateY(orbitSpeed)`، يطوف الكوكب في مدار دائري مثالي حول الشمس.
  * عند تدوير الابن `mesh.rotateY(selfSpeed)`، يلف الكوكب حول محوره الذاتي بشكل مستقل تماماً.

```
       [ Scene ]
           │
      ┌────┴───────────────────────────┐
      │                                │
  [ Sun Mesh ]                  [ Orbit Object3D ] (Center: 0,0,0)
(Position: 0,0,0)                      │
                                 ┌─────┴────────────────┐
                                 │                      │
                          [ Planet Mesh ]         [ Ring Mesh ]
                        (Position: X = distance) (Position: X = distance)
```

#### 2. الدالة المصنعية لبناء الكواكب (`createPlanet` Factory):
تمت كتابة دالة معيارية لإعادة الاستخدام لإنشاء الكواكب وخاماتها وحلقاتها بسهولة:
```javascript
function createPlanet(size, texture, position, ring) {
    const geo = new THREE.SphereGeometry(size, 30, 30);
    const mat = new THREE.MeshStandardMaterial({
        map: textureLoader.load(texture)
    });
    const mesh = new THREE.Mesh(geo, mat);
    const obj = new THREE.Object3D();
    obj.add(mesh);

    if (ring) {
        const ringGeo = new THREE.RingGeometry(ring.innerRadius, ring.outerRadius, 32);
        const ringMat = new THREE.MeshBasicMaterial({
            map: textureLoader.load(ring.texture),
            side: THREE.DoubleSide
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        obj.add(ringMesh);
        ringMesh.position.x = position;
        ringMesh.rotation.x = -0.5 * Math.PI; // جعل الحلقة أفقية حول الكوكب
    }

    scene.add(obj);
    mesh.position.x = position;
    return { mesh, obj };
}
```

#### 3. تفاصيل الكواكب والأجرام المشيّدة:
* **الشمس (The Sun):** مجسم كروي كبير بنصف قطر 16 وحدة، بخامة `MeshBasicMaterial` غير متأثرة بالظلال لأنها هي بذاتها مصدر الضوء، ووُضعت بداخلها إضاءة نقطية `THREE.PointLight(0xFFFFFF, 1000, 5000)` تبث الضوء في جميع الاتجاهات لتضيء الكواكب من جانب وتترك الجانب الآخر مظلماً (تعاقب الليل والنهار).
* **كواكب المنظومة:** (عطارد، الزهرة، الأرض، المريخ، المشتري، زحل، أورانوس، نبتون، وبلوتو) مع مراعاة التباين في الأحجام والمسافات وسرعات المدارات الواقعية.
* **الحلقات الكوكبية (Planetary Rings):** بناء حلقات كوكبي زحل وأورانوس باستخدام `THREE.RingGeometry` وخامات شفافة بصيغة PNG.
* **البيئة الفضائية (Deep Space Skybox):** تغليف المشهد بالكامل بخلفية مكعبة للنجوم باستخدام `THREE.CubeTextureLoader`.
* **التحكم عبر `lil-gui`:** إضافة أدوات تحكم تفاعلية لتسريع أو تبطيء حركة الكواكب ككل (`planetSpeed`) وتعديل شدة توهج ضوء الشمس (`sunLightIntensity`).

---

### ثالثاً: مشروع تحريك النماذج ثلاثية الأبعاد (Dog Model & 3D Skeletal Animation)
**الملفات الرئيسية:** [`projects/Dog Barks/Dog Barks/src/main.js`](file:///f:/تعليم/three%20js/learn%20with%20Wael%20Yasmina/projects/Dog%20Barks/Dog%20Barks/src/main.js)

يركز هذا التطبيق على سير عمل سحب النماذج الاحترافية المصممة في برامج التصميم الخارجي (Blender) وبعث الحياة فيها برمجياً على الويب:

#### 1. مسار تصدير واستيراد أصول glTF / GLB في بيئة Vite:
* صيغة **glTF (GL Transmission Format)** أو نظيرتها الثنائية **GLB** تُعد المعيار الذهبي للويب، لأنها تجمع هندسة المجسم، الخامات، الهيكل العظمي (Bones/Rigging)، ومقاطع الحركة (Animation Tracks) في ملف واحد خفيف الحجم.
* في بيئة Vite، تم استيراد الملف بأمان عبر منشئ الروابط المعياري:
  ```javascript
  const dogUrl = new URL('./assets/doggo2.glb', import.meta.url);
  ```
* استخدام `GLTFLoader` لقراءة الملف بشكل غير متزامن واستخراج المشهد والحركات.

#### 2. دورة عمل وإدارة الحركات الهيكلية (Animation System Architecture):
1. **إنشاء المازج (`AnimationMixer`):**
   * كائن `THREE.AnimationMixer` هو المحرك المسؤول عن حساب تشوهات العظام وتحديث مواضع الرؤوس مع مرور الوقت:
     ```javascript
     mixer = new THREE.AnimationMixer(model);
     ```
2. **استخراج مقاطع الحركة (`AnimationClip`):**
   * يحتوي الكائن المستورد على مصفوفة الحركات `gltf.animations`.
   * يمكن استهداف حركة معينة بالاسم عبر `THREE.AnimationClip.findByName(clips, 'HeadAction')`.
   * أو تشغيل كافة حركات المجسم في وقت واحد بالتوازي عبر تكرار المقاطع:
     ```javascript
     clips.forEach(function (clip) {
         const action = mixer.clipAction(clip);
         action.play();
     });
     ```
3. **تحديث الإطارات بدقة باستخدام الساعة (`THREE.Clock`):**
   * لضمان عمل الحركة بنفس السرعة الواقعية على جميع الشاشات بغض النظر عن معدل تحديث الإطارات (60Hz أو 144Hz)، يتم احتساب فارق التوقيت بين كل إطار والآخر (`deltaTime`):
     ```javascript
     const clock = new THREE.Clock();
     function animate() {
         if (mixer) mixer.update(clock.getDelta());
         renderer.render(scene, camera);
     }
     renderer.setAnimationLoop(animate);
     ```

---

## 4. المفاهيم البرمجية والتقنية المكتسبة (Key Technical Concepts)

يوضح الجدول التالي أهم الكلاسات، الدوال، والمفاهيم البرمجية التي تم تطبيقها عملياً في هذا المستودع:

| الكلاس / التقنية | الدور البرمجي وأهم الاستخدامات في المشروع |
| :--- | :--- |
| **`THREE.Scene`** | الفضاء ثلاثي الأبعاد الذي يجمع كافة العناصر (شبكات، إضاءة، كاميرات). |
| **`THREE.PerspectiveCamera`** | كاميرا تحاكي عين الإنسان وفق زاوية رؤية ونطاق إسقاط منظوري. |
| **`THREE.WebGLRenderer`** | رسم المشهد وحساب الظلال وتحديث مصفوفات العرض على عنصر `<canvas>`. |
| **`OrbitControls`** | توفير تجربة مستخدم تفاعلية لتحريك الكاميرا والتكبير والتصغير مع خاصية التنعيم (`damping`). |
| **`THREE.Object3D`** | كائن وهمي محوري يُستخدم كنقطة ارتكاز لبناء المدارات الفلكية الهرمية (Hierarchical Transformations). |
| **`GLTFLoader`** | أداة تحميل وقراءة ملفات `.gltf` و `.glb` ثلاثية الأبعاد غير المتزامنة من الخادم. |
| **`THREE.AnimationMixer`** | مشغل ومحاكي الحركات الهيكلية للمجسمات ثلاثية الأبعاد المجهزة بعظام (Armature). |
| **`THREE.AnimationClip` & `clipAction`** | تمثيل مقطع حركة زمني معين وتفعيله عبر أوامر مثل `.play()` و `.stop()`. |
| **`THREE.Clock`** | ساعة زمنية لحساب فارق الوقت `getDelta()` لضمان حركة سلسة ومستقلة عن معدل الإطارات (FPS Independent). |
| **`THREE.Raycaster`** | رصد إحداثيات تقاطع الفأرة مع الكائنات ثلاثية الأبعاد لاكتشاف النقر والتحويم (Hover/Click Detection). |
| **`THREE.ShaderMaterial`** | بناء خامات فائقة التخصيص بكتابة أكواد تظليل بلغة GLSL (`vertexShader` & `fragmentShader`). |
| **`THREE.CubeTextureLoader`** | تحميل 6 صور لتكوين بيئة محيطية مكعبة سداسية الأبعاد (Skybox / Cosmic Background). |
| **`THREE.RingGeometry`** | توليد هندسة حلقية مسطحة مفرغة من الداخل مخصصة لحلقات الكواكب. |
| **أنواع الإضاءة (`Lights`)** | تنويع الإضاءة حسب الوظيفة: محيطية (`AmbientLight`)، موجهة شمسية (`DirectionalLight`)، نقطية (`PointLight`)، ومسلطة (`SpotLight`). |
| **`dat.gui` و `lil-gui`** | مكتبات واجهة مستخدم رسومية لتعديل المعاملات الرياضية واللونية للمشهد لحظياً أثناء التطوير. |

---

## 5. دليل التثبيت والتشغيل محلياً (How to Run Locally)

### المتطلبات الأساسية (Prerequisites):
* تثبيت بيئة [Node.js](https://nodejs.org/) (الإصدار 18 أو أحدث).
* مدير الحزم `npm` أو `pnpm` (المفضل في بيئة العمل الحالية).

---

### أولاً: تشغيل مشروع المشهد المتقدم (`vite-project`)
يحتوي هذا المشروع على تطبيقات الشيدرز، تقنية تتبع الأشعة (Raycasting)، ومجسم قرد بلندر.
```bash
# 1. الدخول إلى مجلد المشروع
cd "vite-project"

# 2. تثبيت التبعيات
pnpm install
# أو: npm install

# 3. تشغيل خادم التطوير اللحظي
pnpm run dev
# أو: npm run dev
```
افتح الرابط الظاهر في موجه الأوامر (عادةً: `http://localhost:5173`).

---

### ثانياً: تشغيل مشروع النظام الشمسي (`Solar System`)
يحتوي على المنظومة الشمسية الكاملة، خامات الكواكب، وحلقاتها مع لوحة تحكم `lil-gui`.
```bash
# 1. الدخول إلى مجلد مشروع النظام الشمسي
cd "projects/Object Rotate Around Another Object/Object Rotate Around Another Object"

# 2. تثبيت الحزم
pnpm install
# أو: npm install

# 3. تشغيل المشروع عبر Vite
pnpm run dev
# أو: npm run dev
```

---

### ثالثاً: تشغيل مشروع تحريك مجسم الكلب ثلاثي الأبعاد (`Dog Barks`)
يحتوي على تحميل ملف GLB وإدارة مازج الحركات (`AnimationMixer`).
```bash
# 1. الدخول إلى مجلد المشروع
cd "projects/Dog Barks/Dog Barks"

# 2. تثبيت الحزم
pnpm install
# أو: npm install

# 3. تشغيل المشروع
pnpm run dev
# أو: npm run dev
```

---

### رابعاً: تشغيل مشروع الدرس التأسيسي الأول (`video 1` عبر Parcel)
المشروع التأسيسي الأول الذي يعتمد على أداة الحزم Parcel.
```bash
# 1. الدخول إلى المجلد
cd "video 1"

# 2. تثبيت الحزم
npm install

# 3. تشغيل Parcel Bundler
npm start
```
سيتم فتح المشروع تلقائياً على الرابط `http://localhost:1234`.

---

> 💡 **ملاحظة وتلميح:** للتعامل مع أصول الـ 3D والنماذج الخارجية بصيغة GLTF/GLB داخل مشاريع Vite، يُفضل دوماً استخدام تقنية `new URL('./path/to/model.glb', import.meta.url).href` لأنها تضمن استيراد المسار بدقة سواء في بيئة التطوير المحلية أو عند البناء للإنتاج النهائي (`build`).

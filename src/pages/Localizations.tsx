import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Localizations = () => {
    const { language } = useLanguage();

    const content = {
        en: {
            pageTitle: "Interpretation Services - Damascus Translation",
            headerTitle: "Interpretation Services",
            headerSubtitle: "Real-Time Interpretation Solutions - Bridging Language Barriers.",
            mainImg: "/images/students-working-study-group.jpg",
            features: [
                {
                    title: "On-Site Interpretation",
                    desc: "Simultaneous (Conference Booths) | Consecutive (Meetings/Workshops)\nField Visits | Court Proceedings | Medical Consultations"
                },
                {
                    title: "Remote Interpretation",
                    desc: "Video Conference Support (Zoom/Teams)\nPhone Interpretation | Webinar Coverage"
                },
                {
                    title: "Specialized Sectors",
                    desc: "Government Meetings | NGO Field Missions | Academic Conferences | Healthcare Encounters"
                }
            ],
            commitmentTitle: "Our Commitment to Excellence",
            commitmentCards: [
                { icon: "fa-solid fa-check-double", title: "Quality Assurance", desc: "Every project undergoes a multi-step review process for accuracy and consistency." },
                { icon: "fa-solid fa-users-gear", title: "Expert Teams", desc: "Our network includes localization engineers and subject-matter experts." },
                { icon: "fa-solid fa-bolt", title: "Agile Workflow", desc: "We integrate with your development cycle for continuous localization and fast delivery." },
                { icon: "fa-solid fa-shield-halved", title: "Confidentiality", desc: "Your source code and documents are handled with the utmost security and strict NDAs." }
            ],
            ctaTitle: "Ready for a Global Audience?",
            ctaSubtitle: "Let's discuss your localization needs. Get a free, no-obligation quote from our team today.",
            ctaBtn: "Get a Quote"
        },
        ar: {
            pageTitle: "خدمات الترجمة الفورية - دمشق للترجمة",
            headerTitle: "خدمات الترجمة الفورية",
            headerSubtitle: "حلول الترجمة الفورية - جسرٌ للتواصل وتذليل الحواجز اللغوية",
            sessionExpired: 'انتهت الجلسة. يرجى تسجيل الدخول مرة أخرى.',
            checkEmailConfirmation: 'تم إنشاء الحساب! يرجى التحقق من بريدك الإلكتروني للتأكيد.',
            invalidCredentials: 'بيانات الاعتماد غير صالحة. إذا قمت بالتسجيل للتو، يرجى التحقق من بريدك الإلكتروني.',
            mainImg: "/images/students-working-study-group.jpg",
            features: [
                {
                    title: "الترجمة الفورية",
                    desc: "الترجمة الفورية (المؤتمرات) | الترجمة التتبعية (الاجتماعات وورش العمل)\nالزيارات الميدانية | جلسات المحاكم | الاستشارات الطبية"
                },
                {
                    title: "الترجمة الفورية عن بُعد",
                    desc: "ترجمة وقائع المؤتمرات عبر تطبيقات (Zoom/Teams) | الترجمة عبر الهاتف"
                },
                {
                    title: "قطاعات متخصصة",
                    desc: "الاجتماعات الحكومية | البعثات الميدانية للمنظمات | المؤتمرات الأكاديمية | اللقاءات الطبية"
                }
            ],
            commitmentTitle: "التزامنا بالتميز",
            commitmentCards: [
                { icon: "fa-solid fa-check-double", title: "ضمان الجودة", desc: "يخضع كل مشروع لعملية مراجعة متعددة الخطوات لضمان الدقة والاتساق." },
                { icon: "fa-solid fa-users-gear", title: "فرق متخصصة", desc: "تضم شبكتنا مهندسي توطين وخبراء متخصصين في مجالاتهم." },
                { icon: "fa-solid fa-bolt", title: "سير عمل مرن", desc: "نتكامل مع دورة التطوير الخاصة بك لتوطين مستمر وتسليم سريع." },
                { icon: "fa-solid fa-shield-halved", title: "السرية", desc: "يتم التعامل مع الكود المصدري والمستندات الخاصة بك بأقصى درجات الأمان واتفاقيات سرية صارمة." }
            ],
            ctaTitle: "هل أنت مستعد لجمهور عالمي؟",
            ctaSubtitle: "دعنا نناقش احتياجات التوطين الخاصة بك. احصل على عرض سعر مجاني وغير ملزم من فريقنا اليوم.",
            ctaBtn: "احصل على عرض سعر"
        }
    };

    // Cast to any because the structure differs significantly between en/ar (en has features, ar has sections)
    // Using any is safer than complex union types for this direct migration.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const c: any = content[language];

    return (
        <main>
            {/* Page Header */}
            <header className="page-header">
                <div className="container">
                    <h1 className="page-title">{c.headerTitle}</h1>
                    <p className="page-subtitle">{c.headerSubtitle}</p>
                </div>
            </header>

            {/* Main Content Section */}
            <section className="service-detail-section">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-8 text-center">
                            <img src={c.mainImg} className="img-fluid rounded-3 shadow-sm" alt="Interpretation services visual" />
                        </div>
                    </div>
                    <div className="row g-4">
                        {c.features.map((feature: any, idx: number) => (
                            <div className="col-md-6 col-lg-4" key={idx}>
                                <div className={`feature-card h-100 ${language === 'ar' ? 'text-end' : ''}`}>
                                    <h5 className="category-title">{feature.title}</h5>
                                    <p className="category-items" style={{ whiteSpace: 'pre-line' }}>{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="service-detail-section">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className={language === 'ar' ? "section-title" : ""} style={{ fontWeight: 700, color: 'var(--dark)', fontSize: '2.2rem' }}>
                            {c.commitmentTitle}
                        </h2>
                    </div>
                    <div className="row g-4">
                        {c.commitmentCards.map((card: any, idx: number) => (
                            <div className="col-lg-3 col-md-6" key={idx}>
                                <div className="feature-card text-center">
                                    <div className="icon">
                                        <i className={card.icon}></i>
                                    </div>
                                    <h5>{card.title}</h5>
                                    <p className="mb-0">{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="cta-section">
                <div className="container">
                    <h2>{c.ctaTitle}</h2>
                    <p>{c.ctaSubtitle}</p>
                    <Link to={`/${language}/quotation`} className="btn btn-primary btn-lg px-5 py-3">
                        {c.ctaBtn}
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Localizations;

import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Solutions = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      pageTitle: "Creative Language Solutions",
      pageSubtitle: "Beyond Translation - Content Innovation & Media Adaptation.",
      mainImg: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80",
      features: [
        {
          title: "Content Development",
          items: "Copywriting | Website Content | Tutorials | Marketing Content | Report Writing | Visual Content | Press Kits"
        },
        {
          title: "Media Solutions",
          items: "Video Subtitling (Films/Documentaries/E-learning) | Transcription (Interviews/Meetings) | Voice-over Scripts"
        },
        {
          title: "Quality Enhancement",
          items: "Professional Proofreading | Terminology Management | Formatting & Desktop Publishing | Consistency Checks"
        }
      ],
      ctaTitle: "Bring Your Creative Vision to Life?",
      ctaSubtitle: "Let's build something great together. Get a free, no-obligation quote from our creative team.",
      ctaBtn: "Get a Quote"
    },
    ar: {
      pageTitle: "الحلول اللغوية الإبداعية",
      pageSubtitle: "تخطّ حدود الترجمة: إبداع المحتوى والمعالجة الإعلامية",
      sections: [
        {
          title: "تطوير المحتوى",
          desc: "كتابة المحتوى الإعلاني | محتوى المواقع الإلكترونية | شروحات تعليمية | المحتوى التسويقي | كتابة التقارير | المحتوى المرئي | المواد الإعلامية والصحفية",
          img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80",
          list: [],
          reverse: false
        },
        {
          title: "حلول الوسائط",
          desc: "ترجمة الوسائط (أفلام / وثائقيات / التعليم الإلكتروني)\nالتفريغ الصوتي (المقابلات / الاجتماعات) | نصوص التعليق الصوتي",
          img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=600&q=80",
          list: [],
          reverse: true
        },
        {
          title: "تحسين جودة المحتوى",
          desc: "التدقيق اللغوي الاحترافي | إدارة المصطلحات\nتنسيق التصاميم والمطبوعات | ضمان اتساق المحتوى",
          img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
          list: [],
          reverse: false
        }
      ],
      ctaTitle: "هل تودّ تحويل رؤيتك الإبداعية إلى واقع ملموس؟",
      ctaSubtitle: "لنبني التميّز معاً. احصل الآن على عرض سعر مجاني وغير ملزم من فريقنا الإبداعي.",
      ctaBtn: "احصل على عرض سعر"
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const c: any = content[language];

  return (
    <main>
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">{c.pageTitle}</h1>
          <p className="page-subtitle">{c.pageSubtitle}</p>
        </div>
      </header>

      {/* Main Content Section */}
      {language === 'en' ? (
        <section className="service-detail-section">
          <div className="container">
            {/* Centered Image */}
            <div className="row justify-content-center mb-5">
              <div className="col-md-8 text-center">
                <img src={c.mainImg} className="img-fluid rounded-3 shadow-sm" alt="Creative content creation" />
              </div>
            </div>

            {/* Content Creation Boxes */}
            <div className="row g-4">
              {c.features.map((feature: any, idx: number) => (
                <div className="col-md-6 col-lg-4" key={idx}>
                  <div className="feature-card h-100">
                    <h5 className="category-title">{feature.title}</h5>
                    <p className="category-items" style={{ whiteSpace: 'pre-line' }}>
                      {feature.items}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <>
          {c.sections.map((section: any, idx: number) => (
            <section className="service-detail-section" key={idx}>
              <div className="container">
                <div className={`row align-items-center g-5 ${section.reverse ? 'flex-row-reverse' : ''}`}>
                  <div className="col-lg-6">
                    <img src={section.img} className="img-fluid rounded-3 shadow-sm" alt={section.title} />
                  </div>
                  <div className="col-lg-6">
                    <h2>{section.title}</h2>
                    <p>{section.desc}</p>
                    <ul>
                      {section.list.map((li: any, i: number) => (
                        <li key={i}>
                          <strong>{li.bold}</strong> {li.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </>
      )}

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

export default Solutions;

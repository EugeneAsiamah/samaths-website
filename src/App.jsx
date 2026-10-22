import { useState } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Menu,
  X,
  Calculator,
  Brain,
  Timer,
  UserCheck,
  TrendingUp,
  ShieldCheck,
  Smile,
  Wallet,
  ClipboardList,
  Building2,
  Users,
  School,
  UserRound,
} from 'lucide-react'

// Business WhatsApp number: 0536541414 (Ghana) -> international format for wa.me links
const WHATSAPP_NUMBER = '233536541414'

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

const WHATSAPP_LINKS = {
  register: whatsappLink(
    "Hello SAMATHS SOLUTIONS, I'd like to register my child for the Abacus Mental Maths program. Could you share the details?"
  ),
  demo: whatsappLink(
    "Hello SAMATHS SOLUTIONS, I'd like to book a free demo class. Could you let me know the next available slot?"
  ),
  payment: whatsappLink(
    "Hello SAMATHS SOLUTIONS, I'd like to know more about payment info for the program. Could you assist?"
  ),
}

const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61593329673590'

const stats = [
  { icon: Calculator, title: 'Mental Calculation', text: 'Add, subtract, multiply & divide without a calculator' },
  { icon: Brain, title: 'Concentration & Memory', text: 'Stay focused longer in class' },
  { icon: Timer, title: 'Speed & Accuracy', text: 'Finish homework and exams faster' },
  { icon: UserCheck, title: 'Confidence', text: 'No more fear of Maths' },
  { icon: TrendingUp, title: 'Proven Results', text: 'See improvement in class within 1 term' },
]

const learnPoints = [
  'Mental Calculation – Add, subtract, multiply & divide without a calculator',
  'Concentration & Memory – Stay focused longer in class',
  'Speed & Accuracy – Finish homework and exams faster',
  'Confidence – No more fear of Maths',
]

const whyChoose = [
  { icon: ShieldCheck, title: 'Proven Results', text: 'See improvement in class within 1 term', color: '#1f6b3a' },
  { icon: Smile, title: 'Stress-Free for Schools', text: 'We provide teachers, materials & reports', color: '#f37b21' },
  { icon: Smile, title: 'Fun Lessons', text: 'Kids look forward to abacus day', color: '#2f6fed' },
  { icon: Wallet, title: 'Affordable', text: 'Quality education that fits your budget', color: '#f37b21' },
  { icon: ClipboardList, title: 'Progress Reports', text: 'Parents get updates every term', color: '#7b3ff2' },
]

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Program', href: '#program' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'Our Reach', href: '#our-reach' },
  { label: 'Contact Us', href: '#contact' },
]

function TopBar() {
  return (
    <div className="topbar">
      <div className="container">
        <div className="topbar-info">
          <span>
            <a href="tel:+233536541414">
              <Phone size={13} /> 0536541414
            </a>
          </span>
          <span>
            <a href="mailto:a0257673416@icloud.com">
              <Mail size={13} /> a0257673416@icloud.com
            </a>
          </span>
          <span>
            <MapPin size={13} /> Sunyani and all part of Ghana
          </span>
        </div>
        <div className="topbar-social">
          <span>Follow Us:</span>
          <div className="icons">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <div className="logo-icon">
            <img src="/images/logo.jpg" alt="SAMATHS SOLUTIONS logo" />
          </div>
          <div className="logo-text">
            <div className="name">
              <span>SAMATHS</span> <b>SOLUTIONS</b>
            </div>
            <div className="tagline">Where logic meet creativity</div>
          </div>
        </div>

        <nav className="nav-links">
          {navItems.map((item, i) => (
            <a href={item.href} key={item.label} className={i === 0 ? 'active' : ''}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <a href={WHATSAPP_LINKS.register} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Register Now
          </a>
        </div>

        <button
          className="nav-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-nav">
          {navItems.map((item, i) => (
            <a
              href={item.href}
              key={item.label}
              className={i === 0 ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINKS.register}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            onClick={() => setMenuOpen(false)}
          >
            Register Now
          </a>
        </nav>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div>
          <h1>
            Is Your Child <br />
            <span className="orange">Struggling</span> <br />
            With Maths?
          </h1>
          <p>
            We Make Maths <strong>Fast, Fun,</strong> and <strong>Easy</strong> with{' '}
            <span className="accent">Abacus Mental Maths</span>
          </p>
          <div className="hero-actions">
            <a href={WHATSAPP_LINKS.register} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <UserRound size={18} /> Register Your Child
            </a>
            <a href={WHATSAPP_LINKS.demo} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <ClipboardList size={18} /> Book a Free Demo
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img src="/images/hero.jpg" alt="Students engaged in an abacus mental maths class" />
          <div className="hero-badge">Building Smarter Minds for a Brighter Future</div>
        </div>
      </div>

      <div className="stats-strip">
        {stats.map(({ icon: Icon, title, text }) => (
          <div className="stat-item" key={title}>
            <div className="icon">
              <Icon size={20} />
            </div>
            <h4>{title}</h4>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function AboutAndProgram() {
  return (
    <section className="section" id="about">
      <div className="container split-grid">
        <div className="split-card">
          <span className="eyebrow">About Us</span>
          <h3 className="section-title">SAMATHS SOLUTIONS</h3>
          <p className="section-text">
            At SAMATHS SOLUTIONS, we believe every child can be a Maths champion.
          </p>
          <p className="section-text">
            We are a leading Abacus Mental Maths company in Accra, Sunyani, Ghana. We partner with
            schools to deliver fun, brain-boosting classes that transform how children think, learn,
            and calculate.
          </p>
          <p className="section-text">
            In just 2 classes a week, our certified teachers use the abacus to train children's brains
            for speed, accuracy, focus and confidence.
          </p>
          <div className="media-block">
            <img src="/images/about.jpg" alt="SAMATHS instructor demonstrating the abacus to students" />
          </div>
          <div className="pill-badge">
            <School size={18} /> We currently serve: 30 schools
          </div>
        </div>

        <div className="split-card" id="program">
          <span className="eyebrow">Our Program</span>
          <h3 className="section-title">School Abacus Program – 2 to 4x a Week</h3>
          <p className="section-text">We come to your school and handle everything.</p>

          <div className="program-meta">
            <div>
              <Users size={18} />
              <div>
                <strong>4 – 14 years</strong>
                Ages
              </div>
            </div>
            <div>
              <Timer size={18} />
              <div>
                <strong>1 term / 12 weeks</strong>
                Duration
              </div>
            </div>
            <div>
              <Wallet size={18} />
              <div>
                <strong>Per term</strong>
                Fee
              </div>
            </div>
          </div>

          <span className="learn-tag">What Children Learn:</span>
          <ul className="learn-list">
            {learnPoints.map((point, i) => (
              <li key={point}>
                <span className="num">{i + 1}</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="media-block">
            <img src="/images/program.jpg" alt="Student practicing calculations on the abacus" />
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  return (
    <section className="why-section" id="why-choose-us">
      <div className="container">
        <h3 className="why-title">Why Schools & Parents Choose SAMATHS</h3>
        <div className="why-grid">
          {whyChoose.map(({ icon: Icon, title, text, color }) => (
            <div className="why-card" key={title}>
              <div className="icon" style={{ background: `${color}1a`, color }}>
                <Icon size={26} />
              </div>
              <h4>{title}</h4>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function OurReach() {
  return (
    <section id="our-reach">
      <div className="container reach-grid">
        <div className="reach-card map">
          <h4>
            <MapPin size={18} color="#1f6b3a" /> Our Reach
          </h4>
          <p>
            We are proud to work with schools across Sunyani to build the next generation of smart,
            confident problem solvers.
          </p>
          <div className="map-figure">
            <iframe
              title="SAMATHS SOLUTIONS reach — Sunyani, Ghana"
              src="https://www.google.com/maps?q=Sunyani,+Ghana&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="reach-numbers">
            <div>
              <Users size={20} color="#1f6b3a" />
              <div>
                <strong>800+</strong>
                <span>Total Students Trained</span>
              </div>
            </div>
            <div>
              <School size={20} color="#1f6b3a" />
              <div>
                <strong>8+</strong>
                <span>Schools Partnered</span>
              </div>
            </div>
          </div>
        </div>

        <div className="reach-card parents">
          <h4>
            <Users size={18} color="#f37b21" /> For Parents
          </h4>
          <p>Give your child the brain advantage. Register your child today.</p>
          <p>Limited slots per school.</p>
          <div className="momo">
            <div className="label">Pay to Business MoMo</div>
            <div className="number">0536541414</div>
          </div>
        </div>

        <div className="reach-card schools">
          <div className="icon-badge">
            <Building2 size={22} />
          </div>
          <h4>For School Owners & Headmistresses:</h4>
          <p>Partner with SAMATHS SOLUTIONS and make your school the #1 for Maths excellence.</p>
          <p>Book a FREE demo class for your students today.</p>
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const items = [
    { src: '/images/gallery-1.jpg', alt: 'Students holding up certificates at an award ceremony' },
    { src: '/images/gallery-2.jpg', alt: 'Instructor teaching a class with abacus at their desks' },
    { src: '/images/gallery-3.jpg', alt: 'Instructor showing a large abacus to a group of students' },
    { src: '/images/gallery-4.jpg', alt: 'Students practicing with abacus in a classroom' },
    { src: '/images/gallery-5.jpg', alt: 'Instructor with a group of students in school uniform' },
  ]
  return (
    <section className="gallery-strip">
      {items.map((item) => (
        <div className="g-item" key={item.src}>
          <img src={item.src} alt={item.alt} />
        </div>
      ))}
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div>
          <div className="foot-logo">
            <img src="/images/logo.jpg" alt="SAMATHS SOLUTIONS logo" />
            <span className="name">
              SA<span>MATHS</span> SOLUTIONS
            </span>
          </div>
          <p>
            Abacus Mental Maths training that builds speed, accuracy, focus and confidence.
          </p>
          <div className="footer-social">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={14} />
            </a>
          </div>
        </div>

        <div>
          <h5>Quick Links</h5>
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5>Information</h5>
          <ul>
            <li>School Program</li>
            <li>For Parents</li>
            <li>For Schools</li>
            <li>
              <a href={WHATSAPP_LINKS.payment} target="_blank" rel="noopener noreferrer">
                Payment Info
              </a>
            </li>
            <li>
              <a href={WHATSAPP_LINKS.register} target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </li>
            <li>
              <a href={WHATSAPP_LINKS.demo} target="_blank" rel="noopener noreferrer">
                Book a Demo
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5>Contact Us</h5>
          <ul>
            <li>
              <a href="tel:+233536541414">
                <Phone size={13} /> 0536541414
              </a>
            </li>
            <li>
              <a href="mailto:a0257673416@icloud.com">
                <Mail size={13} /> a0257673416@icloud.com
              </a>
            </li>
            <li>
              <MapPin size={13} /> Sunyani and all part of Ghana
            </li>
          </ul>
        </div>

        <div>
          <h5>Follow Us</h5>
          <p>Stay connected for updates and success stories.</p>
          <div className="footer-social">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={14} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 SAMATHS SOLUTIONS. All Rights Reserved. · Where logic meet creativity
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <AboutAndProgram />
      <WhyChooseUs />
      <OurReach />
      <Gallery />
      <Footer />
    </>
  )
}

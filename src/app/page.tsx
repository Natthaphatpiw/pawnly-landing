import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="font-pawnly text-2xl text-[#C4785C]">
              Pawnly
            </a>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <div className="relative group">
                <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-[#C4785C] transition-colors">
                  Approaches
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-[#C4785C] transition-colors">
                  Company
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center gap-3">
              <button className="btn-outline text-sm py-2 px-4">
                Login
              </button>
              <button className="btn-primary text-sm py-2 px-4">
                Let&apos;s talk
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-up">
              <h1 className="font-display text-4xl md:text-5xl lg:text-[3.2rem] leading-tight text-gray-800 mb-6">
                <span className="italic">Welcome to the Future</span>
                <br />
                <span className="italic">of Valuables & Loans,</span>
                <br />
                <span className="font-pawnly text-[#C4785C] not-italic">Pawnly.</span>
              </h1>
              <p className="text-gray-600 text-base mb-8 max-w-md leading-relaxed">
                Get fast, competitive loans for your valuables through our AI-powered P2P platform. List your item, receive funding, and drop off your collateral—all from your phone.
              </p>
              <button className="btn-outline group">
                Talk to us
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative animate-fade-in animation-delay-200">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <Image
                  src="/img1.png"
                  alt="Pawnly App Screenshots"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phone Mockups Section */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container-custom">
          <div className="flex justify-center animate-fade-in-up">
            <div className="relative w-full max-w-3xl">
              <Image
                src="/img2.png"
                alt="LINE App Integration"
                width={900}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Pawnly Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="font-display text-3xl md:text-4xl text-gray-800 mb-2">
              What is <span className="font-pawnly text-[#C4785C]">Pawnly</span>?
            </h2>
            <p className="text-[#C4785C] text-sm mb-8">พอร์นลี่คืออะไร</p>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Pawnly is an innovative, fully digital P2P Secured Lending Platform that operates primarily through
              a LINE Official Account (LINE OA) Interface. It uses AI-powered to connect individuals seeking loans
              against their assets (Pawners) directly with private investors who fund those loans.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Pawnly เป็นแพลตฟอร์มสินเชื่อที่มีหลักประกันแบบ P2P ที่เป็นดิจิทัลเต็มรูปแบบ ที่ดำเนินงานหลักผ่าน LINE Official Account (LINE OA)
              โดยใช้ AI เพื่อเชื่อมโยงผู้ที่ต้องการสินเชื่อ (ผู้ขอสินเชื่อ/Pawners) โดยตรงกับนักลงทุนส่วนบุคคลที่ให้เงินทุนสำหรับสินเชื่อเหล่านั้น
            </p>
          </div>
        </div>
      </section>

      {/* Who You Are Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-gray-800 mb-2">
              Who you are?
            </h2>
            <p className="text-gray-500 text-sm">Choose to see more information</p>
            <p className="text-[#C4785C] text-sm">คุณคือใคร/เลือกดูข้อมูลเพิ่มเติม</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Pawner Card */}
            <a href="#pawners" className="block card-hover bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <div className="p-6">
                <Image
                  src="/img3.png"
                  alt="If you are Pawner"
                  width={500}
                  height={350}
                  className="w-full h-auto"
                />
              </div>
            </a>

            {/* Investor Card */}
            <a href="#investors" className="block card-hover bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <div className="p-6">
                <Image
                  src="/img4.png"
                  alt="If you are Independent Investor"
                  width={500}
                  height={350}
                  className="w-full h-auto"
                />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Pawners Section */}
      <section id="pawners" className="py-20 bg-[#FDF8F6]">
        <div className="container-custom">
          <h2 className="font-pawnly text-3xl md:text-4xl text-center text-[#C4785C] mb-16">
            Pawners
          </h2>

          {/* What can Pawnly do for pawner */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left - Image */}
            <div className="order-2 lg:order-1">
              <Image
                src="/img5.png"
                alt="What can Pawnly do for pawner"
                width={600}
                height={450}
                className="w-full h-auto"
              />
            </div>

            {/* Right - Features */}
            <div className="order-1 lg:order-2">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="feature-tag">
                  <input type="checkbox" defaultChecked className="checkbox-orange mr-2" readOnly />
                  Digital Item Listing
                  <span className="text-gray-400 text-xs ml-2">เพิ่มรายการ</span>
                </span>
                <span className="feature-tag">
                  <input type="checkbox" defaultChecked className="checkbox-orange mr-2" readOnly />
                  AI Appraisal Tool
                  <span className="text-gray-400 text-xs ml-2">ประเมินมูลค่าด้วย AI</span>
                </span>
                <span className="feature-tag">
                  <input type="checkbox" defaultChecked className="checkbox-orange mr-2" readOnly />
                  Loan Status Tracking
                  <span className="text-gray-400 text-xs ml-2">ติดตามสถานะสัญญา</span>
                </span>
                <span className="feature-tag">
                  <input type="checkbox" defaultChecked className="checkbox-orange mr-2" readOnly />
                  Secure Messaging
                  <span className="text-gray-400 text-xs ml-2">แชทกับทีมงาน</span>
                </span>
                <span className="feature-tag">
                  <input type="checkbox" defaultChecked className="checkbox-orange mr-2" readOnly />
                  Digital Loan Agreements
                  <span className="text-gray-400 text-xs ml-2">สัญญาดิจิทัล</span>
                </span>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="text-center mb-12">
            <h3 className="font-display text-2xl md:text-3xl text-gray-800 mb-2">Benefits</h3>
            <p className="text-[#C4785C] text-sm">ประโยชน์สำหรับผู้ขอสินเชื่อ</p>
          </div>

          <div className="text-center mb-8">
            <h4 className="font-pawnly text-xl text-[#C4785C] mb-2">Pawners</h4>
            <p className="text-gray-500 text-sm">Benefits for Pawn Holders/Borrowers</p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-white rounded-xl p-6 text-center card-hover shadow-sm">
              <div className="w-12 h-12 bg-[#FFF5F2] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#C4785C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h5 className="font-semibold text-sm mb-2">Expanded Access to Capital</h5>
              <p className="text-xs text-gray-500">
                You&apos;re not limited to a single pawn shop. Easily access with a wider network of Independent Investor right from your smartphone.
              </p>
              <p className="text-xs text-gray-400 mt-2">
                คุณไม่ได้ถูกจำกัดแค่โรงรับจำนำเพียงที่เดียว เข้าถึงเครือข่ายนักลงทุนที่กว้างขึ้นจากสมาร์ทโฟนของคุณ
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center card-hover shadow-sm">
              <div className="w-12 h-12 bg-[#FFF5F2] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#C4785C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h5 className="font-semibold text-sm mb-2">Superior Loan Terms</h5>
              <p className="text-xs text-gray-500">
                Receive multiple loan offers from various investors, allowing you to choose the best terms, interest rates, and amounts.
              </p>
              <p className="text-xs text-gray-400 mt-2">
                รับข้อเสนอสินเชื่อหลายรายการจากนักลงทุนหลายราย ให้คุณเลือกเงื่อนไขที่ดีที่สุด
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center card-hover shadow-sm">
              <div className="w-12 h-12 bg-[#FFF5F2] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#C4785C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h5 className="font-semibold text-sm mb-2">Direct & Streamlined Funding</h5>
              <p className="text-xs text-gray-500">
                Potentially experience faster approvals and disbursement of funds since an investor selects your offer; online process streamlines funding.
              </p>
              <p className="text-xs text-gray-400 mt-2">
                รับเงินเร็วขึ้นเมื่อนักลงทุนเลือกข้อเสนอของคุณ กระบวนการออนไลน์ช่วยให้การให้ทุนราบรื่นขึ้น
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center card-hover shadow-sm">
              <div className="w-12 h-12 bg-[#FFF5F2] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#C4785C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h5 className="font-semibold text-sm mb-2">Wider Acceptance</h5>
              <p className="text-xs text-gray-500">
                Items that might not be accepted at a traditional pawn shop or at a satisfactory rate; this a listing approach that widens the collateral acceptance.
              </p>
              <p className="text-xs text-gray-400 mt-2">
                สิ่งของที่อาจไม่ได้รับการยอมรับในโรงรับจำนำ แพลตฟอร์มนี้ขยายการยอมรับหลักประกัน
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center card-hover shadow-sm">
              <div className="w-12 h-12 bg-[#FFF5F2] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#C4785C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h5 className="font-semibold text-sm mb-2">Increased Flexibility</h5>
              <p className="text-xs text-gray-500">
                A larger pool of lenders offers choice and more opportunity for flexible loan structures tailored to individual preferences.
              </p>
              <p className="text-xs text-gray-400 mt-2">
                กลุ่มผู้ให้กู้ที่ใหญ่ขึ้นให้ทางเลือกและโอกาสมากขึ้นสำหรับโครงสร้างสินเชื่อที่ยืดหยุ่น
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section id="investors" className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="font-pawnly text-3xl md:text-4xl text-center text-[#3B5998] mb-16">
            Investors
          </h2>

          {/* What can Pawnly do for investor */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left - Image */}
            <div>
              <Image
                src="/img6.png"
                alt="What can Pawnly do for investor"
                width={600}
                height={450}
                className="w-full h-auto"
              />
            </div>

            {/* Right - Features */}
            <div>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="feature-tag feature-tag-blue">
                  <input type="checkbox" defaultChecked className="checkbox-orange mr-2" style={{ borderColor: '#3B5998' }} readOnly />
                  List of pawners
                  <span className="text-gray-400 text-xs ml-2">รายชื่อผู้ขอสินเชื่อ</span>
                </span>
                <span className="feature-tag feature-tag-blue">
                  <input type="checkbox" defaultChecked className="checkbox-orange mr-2" style={{ borderColor: '#3B5998' }} readOnly />
                  Evaluation system
                  <span className="text-gray-400 text-xs ml-2">ระบบประเมิน</span>
                </span>
                <span className="feature-tag feature-tag-blue">
                  <input type="checkbox" defaultChecked className="checkbox-orange mr-2" style={{ borderColor: '#3B5998' }} readOnly />
                  Asset storage
                  <span className="text-gray-400 text-xs ml-2">การจัดเก็บสินทรัพย์</span>
                </span>
                <span className="feature-tag feature-tag-blue">
                  <input type="checkbox" defaultChecked className="checkbox-orange mr-2" style={{ borderColor: '#3B5998' }} readOnly />
                  Status tracking
                  <span className="text-gray-400 text-xs ml-2">ติดตามสถานะ</span>
                </span>
                <span className="feature-tag feature-tag-blue">
                  <input type="checkbox" defaultChecked className="checkbox-orange mr-2" style={{ borderColor: '#3B5998' }} readOnly />
                  Contract management
                  <span className="text-gray-400 text-xs ml-2">จัดการสัญญา</span>
                </span>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="text-center mb-12">
            <h3 className="font-display text-2xl md:text-3xl text-gray-800 mb-2">Benefits</h3>
            <p className="text-[#3B5998] text-sm">ประโยชน์สำหรับนักลงทุน</p>
          </div>

          <div className="text-center mb-8">
            <h4 className="font-pawnly text-xl text-[#3B5998] mb-2">Investors</h4>
            <p className="text-gray-500 text-sm">Unlock Opportunities & Transparent Returns</p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#F5F8FC] rounded-xl p-6 text-center card-hover">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg className="w-6 h-6 text-[#3B5998]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h5 className="font-semibold text-sm mb-2">Asset-Backed Security</h5>
              <p className="text-xs text-gray-500">
                Your investments are secured by tangible, verified assets held in professional storage.
              </p>
              <p className="text-xs text-gray-400 mt-2">
                การลงทุนของคุณได้รับการค้ำประกันด้วยสินทรัพย์ที่จับต้องได้และได้รับการตรวจสอบแล้ว
              </p>
            </div>

            <div className="bg-[#F5F8FC] rounded-xl p-6 text-center card-hover">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg className="w-6 h-6 text-[#3B5998]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h5 className="font-semibold text-sm mb-2">More Competitive Offers</h5>
              <p className="text-xs text-gray-500">
                Discover a unique alternative investment class offering steady returns.
              </p>
              <p className="text-xs text-gray-400 mt-2">
                ค้นพบการลงทุนทางเลือกที่ไม่เหมือนใครที่ให้ผลตอบแทนที่มั่นคง
              </p>
            </div>

            <div className="bg-[#F5F8FC] rounded-xl p-6 text-center card-hover">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg className="w-6 h-6 text-[#3B5998]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h5 className="font-semibold text-sm mb-2">Diversify Your Portfolio</h5>
              <p className="text-xs text-gray-500">
                Add a new layer of stability and opportunity to your investment portfolio with short term loans.
              </p>
              <p className="text-xs text-gray-400 mt-2">
                เพิ่มความมั่นคงและโอกาสใหม่ให้กับพอร์ตการลงทุนของคุณด้วยสินเชื่อระยะสั้น
              </p>
            </div>

            <div className="bg-[#F5F8FC] rounded-xl p-6 text-center card-hover">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg className="w-6 h-6 text-[#3B5998]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h5 className="font-semibold text-sm mb-2">Direct & Transparent Access</h5>
              <p className="text-xs text-gray-500">
                Browse items posted by pawners, view detailed information, directly to fund loans that meet your criteria.
              </p>
              <p className="text-xs text-gray-400 mt-2">
                เรียกดูรายการที่โพสต์โดยผู้ขอสินเชื่อ ดูข้อมูลรายละเอียด เพื่อให้ทุนสินเชื่อที่ตรงตามเกณฑ์ของคุณ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#FDF8F6]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div>
              <Image
                src="/img7.png"
                alt="Contact us illustration"
                width={500}
                height={400}
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>

            {/* Right - Contact Form */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-gray-800 mb-8">
                <span className="font-pawnly text-[#C4785C]">Contact</span> us
              </h2>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Phone number</label>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="input-field"
                  />
                </div>
                <button type="submit" className="btn-primary w-full md:w-auto">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo */}
            <div>
              <a href="#" className="font-pawnly text-2xl text-[#C4785C]">
                Pawnly
              </a>
            </div>

            {/* Approaches */}
            <div>
              <h4 className="font-semibold text-sm mb-4">Approaches</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#C4785C] transition-colors">For pawners</a></li>
                <li><a href="#" className="hover:text-[#C4785C] transition-colors">Investor</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-sm mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#C4785C] transition-colors">About us</a></li>
                <li><a href="#" className="hover:text-[#C4785C] transition-colors">Partners</a></li>
                <li><a href="#" className="hover:text-[#C4785C] transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold text-sm mb-4">Follow us</h4>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#C4785C] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#C4785C] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#C4785C] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#C4785C] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2024 Pawnly. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

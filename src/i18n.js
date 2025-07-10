// src/i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    common: {
      sample: {
  title:            "Request a Sample",
  namePlaceholder:  "Your Name",
  emailPlaceholder: "Your Email",
  productPlaceholder:"Product ID",
  quantityPlaceholder:"Quantity",
  notesPlaceholder:"Notes",
  sendButton:       "Request Sample",
  sending:          "Sending…",
  sent:             "Sent!",
  error:            "Something went wrong. Please try again."
},
apply: {
        title: "Apply to Become a Supplier",
        description: "Interested in supplying? Fill out the form below.",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        companyPlaceholder: "Company Name",
        websitePlaceholder: "Website (optional)",
        productsPlaceholder: "Products You Supply",
        messagePlaceholder: "Additional Information",
        submit: "Submit Application",
        sending: "Sending…",
        sent: "Sent!",
        error: "Something went wrong. Please try again."
      },
      navbar: {
        logoAlt: "VietNord logo",
        home: "Home",
        about: "About",
        products: "Products",
        requestSample: "Request Sample",
        contact: "Contact",
        toggleSearch: "Toggle search",
        searchIconAlt: "Search icon",
        searchPlaceholder: "Search…",
        submitSearch: "Submit search",
        go: "Go",
        selectLanguage: "Select language",
        profileMenu: "Profile menu",
        profileIconAlt: "Profile icon",
        myProfiles: "My Profile",
        logout: "Log Out",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        backIconAlt: "Back icon",
        back: "Back"
      },
      hero: {
        alt: "VietNord Bridge Illustration",
        headline: "Connecting Vietnam’s Specialty Foods to the Nordics",
        subhead: "Directly source premium Vietnamese food and agricultural products — sample first, ship fast.",
        ctaRequest: "Request a Sample",
        ctaSupplier: "Become a Supplier"
      },
      howItWorks: {
        title: "How It Works",
        step1Title: "Browse Products",
        step1Desc: "Explore our curated catalogue of Vietnamese specialty items.",
        step2Title: "Request a Sample",
        step2Desc: "Quickly request samples with just a few clicks.",
        step3Title: "Order Confirmation",
        step3Desc: "Suppliers confirm your sample request and prepare the shipment.",
        step4Title: "Fast Delivery",
        step4Desc: "Receive your sample promptly."
      },
      ctaSection: {
        heading: "Ready to streamline your imports?",
        subhead: "Join VietNord today and request a sample in seconds.",
        requestSample: "Request a Sample",
        becomeSupplier: "Become a Supplier"
      },
      contact: {
        title: "Get in Touch",
        description: "Have questions or need assistance? Send us a message.",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        messagePlaceholder: "Your Message",
        sendButton: "Send Message",
        sending: "Sending…",
        sent: "Sent!",
        error: "Something went wrong. Please try again.",
        nameRequired: "Name is required",
        emailRequired: "Email is required",
        messageRequired: "Message is required",
      },
      about: {
        title: "What We Do",
        paragraph1: "VietNord is a Finland-based B2B platform dedicated to connecting high-quality Vietnamese producers with Nordic importers, wholesalers, and retailers. We help buyers in the Nordic region access Vietnam’s finest agricultural and food products — from coffee, cashews, and pepper to organic tea, herbs, and spices — through a curated, transparent, and trusted sourcing process.",
        paragraph2: "VietNord was born from both personal connection and market need. Living in Finland while deeply connected to Vietnam, our founder saw an opportunity: Nordic buyers are increasingly looking for sustainable, high-quality products from Southeast Asia, Vietnamese producers are world-class — but often lack direct access to the right buyers and logistics know-how. VietNord is the bridge — we bring the two sides together with structure, support, and simplicity.",
        diffTitle: "What Makes Us Different:",
        diffPoints: {
          point1: "Sample-first approach – we simplify testing product quality",
          point2: "Trusted supplier onboarding – verified sources, no unknowns",
          point3: "Nordic-focused – we know the regulations, standards, and preferences of Nordic buyers",
          point4: "Human-first – we build relationships, not just transactions"
        },
        services: {
          verification: {
            title: "Supplier Verification",
            desc: "We vet and audit each producer to ensure quality and compliance."
          },
          logistics: {
            title: "Logistics Support",
            desc: "We coordinate sample shipping and full-scale logistics to the Nordics."
          },
          certification: {
            title: "Certification Assistance",
            desc: "We guide you through EU Organic, HACCP, and other paperwork."
          }
        },
        ceoName: "VIEN PHAM",
        ceoTitle: "Founder, VietNord",
        ceoQuote: "“Every bean, every spice carries the heart and passion of our farmers. VietNord exists to bring those stories to life in the Nordic market.”"
      }
    }
  },
  vi: {
    common: {
      sample: {
        title:             "Yêu Cầu Mẫu",
        namePlaceholder:   "Tên của bạn",
        emailPlaceholder:  "Email của bạn",
        productPlaceholder:"Mã sản phẩm",
        quantityPlaceholder:"Số lượng",
        notesPlaceholder: "Ghi chú",
        sendButton:        "Gửi Yêu Cầu",
        sending:           "Đang Gửi…",
        sent:              "Đã Gửi!",
        error:             "Có lỗi xảy ra. Vui lòng thử lại."
      },
      apply: {
        title: "Đăng Ký Trở Thành Nhà Cung Cấp",
        description: "Quan tâm trở thành nhà cung cấp? Vui lòng điền thông tin dưới đây.",
        namePlaceholder: "Tên của bạn",
        emailPlaceholder: "Email của bạn",
        companyPlaceholder: "Tên công ty",
        websitePlaceholder: "Trang web (không bắt buộc)",
        productsPlaceholder: "Sản phẩm cung cấp",
        messagePlaceholder: "Thông tin bổ sung",
        submit: "Gửi Đơn",
        sending: "Đang Gửi…",
        sent: "Đã Gửi!",
        error: "Có lỗi xảy ra. Vui lòng thử lại."
      },
      navbar: {
        logoAlt: "Logo VietNord",
        home: "Trang Chủ",
        about: "Giới Thiệu",
        products: "Sản Phẩm",
        requestSample: "Yêu Cầu Mẫu",
        contact: "Liên Hệ",
        toggleSearch: "Bật/tắt tìm kiếm",
        searchIconAlt: "Biểu tượng tìm kiếm",
        searchPlaceholder: "Tìm kiếm…",
        submitSearch: "Gửi tìm kiếm",
        go: "Tìm",
        selectLanguage: "Chọn ngôn ngữ",
        profileMenu: "Trình đơn hồ sơ",
        profileIconAlt: "Biểu tượng hồ sơ",
        myProfiles: "Hồ sơ của tôi",
        logout: "Đăng xuất",
        openMenu: "Mở menu",
        closeMenu: "Đóng menu",
        backIconAlt: "Biểu tượng quay lại",
        back: "Quay lại"
      },
      hero: {
        alt: "Minh họa cầu VietNord",
        headline: "Kết nối thực phẩm đặc sản Việt Nam đến thị trường Bắc Âu",
        subhead: "Nhập nguồn trực tiếp các sản phẩm nông thủy sản cao cấp — nhận mẫu trước, vận chuyển nhanh.",
        ctaRequest: "Yêu Cầu Mẫu",
        ctaSupplier: "Trở thành Nhà Cung Cấp"
      },
      howItWorks: {
        title: "Quy Trình Hoạt Động",
        step1Title: "Chọn Sản Phẩm",
        step1Desc: "Duyệt qua danh mục các sản phẩm đặc sản Việt Nam.",
        step2Title: "Yêu Cầu Mẫu",
        step2Desc: "Gửi yêu cầu mẫu nhanh chóng với vài cú nhấp.",
        step3Title: "Xác Nhận Đơn Hàng",
        step3Desc: "Nhà cung cấp xác nhận và chuẩn bị mẫu.",
        step4Title: "Giao Hàng Nhanh",
        step4Desc: "Nhận mẫu trong thời gian ngắn."
      },
      ctaSection: {
        heading: "Sẵn Sàng Tối Ưu Hóa Việc Nhập Khẩu?",
        subhead: "Tham gia VietNord ngay hôm nay và yêu cầu mẫu chỉ trong vài giây.",
        requestSample: "Yêu Cầu Mẫu",
        becomeSupplier: "Trở Thành Nhà Cung Cấp"
      },
      contact: {
        title: "Liên Hệ",
        description: "Có thắc mắc hoặc cần hỗ trợ? Gửi tin nhắn cho chúng tôi.",
        namePlaceholder: "Tên của bạn",
        emailPlaceholder: "Email của bạn",
        messagePlaceholder: "Nội dung tin nhắn",
        sendButton: "Gửi Tin Nhắn",
        sending: "Đang Gửi…",
        sent: "Đã Gửi!",
        error: "Có lỗi xảy ra. Vui lòng thử lại.",
        nameRequired: "Vui lòng nhập tên của bạn",
        emailRequired: "Vui lòng nhập email",
        messageRequired: "Vui lòng nhập nội dung tin nhắn",
      },
      about: {
        title: "Chúng Tôi Là Ai",
        paragraph1: "VietNord là nền tảng B2B có trụ sở tại Phần Lan, chuyên kết nối các nhà sản xuất chất lượng cao từ Việt Nam với các nhà nhập khẩu, nhà bán buôn và bán lẻ tại Bắc Âu. Chúng tôi giúp người mua tại khu vực Bắc Âu tiếp cận những sản phẩm nông nghiệp và thực phẩm hàng đầu của Việt Nam — từ cà phê, điều, tiêu đến trà hữu cơ, thảo mộc và gia vị — thông qua quy trình tuyển chọn, minh bạch và đáng tin cậy.",
        paragraph2: "VietNord ra đời từ cả mối liên hệ cá nhân và nhu cầu thị trường. Sống ở Phần Lan nhưng luôn gắn bó sâu sắc với Việt Nam, người sáng lập nhận thấy cơ hội: Các nhà nhập khẩu Bắc Âu ngày càng tìm kiếm sản phẩm bền vững, chất lượng cao từ Đông Nam Á; các nhà sản xuất Việt Nam thuộc hàng đẳng cấp thế giới — nhưng thường thiếu đường dẫn trực tiếp đến người mua phù hợp và kiến thức về logistics. VietNord chính là cầu nối — mang hai bên lại với nhau qua cấu trúc, hỗ trợ và sự đơn giản.",
        diffTitle: "Điều Gì Khiến Chúng Tôi Khác Biệt:",
        diffPoints: {
          point1: "Phương pháp lấy mẫu trước – đơn giản hóa kiểm tra chất lượng",
          point2: "Onboarding nhà cung cấp được xác minh – nguồn tin cậy, không lo ẩn số",
          point3: "Tập trung vào Bắc Âu – am hiểu quy định, tiêu chuẩn và sở thích thị trường",
          point4: "Ưu tiên con người – xây dựng mối quan hệ, không chỉ giao dịch"
        },
        services: {
          verification: {
            title: "Xác Minh Nhà Cung Cấp",
            desc: "Chúng tôi thẩm định và kiểm toán từng nhà sản xuất để đảm bảo chất lượng và tuân thủ."
          },
          logistics: {
            title: "Hỗ Trợ Logistics",
            desc: "Chúng tôi phối hợp gửi mẫu và logistics toàn diện đến Bắc Âu."
          },
          certification: {
            title: "Hỗ Trợ Chứng Nhận",
            desc: "Chúng tôi hướng dẫn bạn qua các thủ tục EU Organic, HACCP và giấy tờ liên quan."
          }
        },
        ceoName: "VIEN PHAM",
        ceoTitle: "Founder VietNord",
        ceoQuote: "“Mỗi hạt cà phê, mỗi loại gia vị chứa đựng trái tim và niềm đam mê của nông dân. VietNord tồn tại để mang những câu chuyện đó đến với thị trường Bắc Âu.”"
      }
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',               // default language
    fallbackLng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: { escapeValue: false }
  })

export default i18n

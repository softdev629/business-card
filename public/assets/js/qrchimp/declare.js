//declare
var initFlag = 1;
var savedStyleId = 0;
var templateNo = 1;
var g_currentSocial = 14;
var g_currentLinks = 501;
var g_currentImage = 1001;
var g_currentPdf = 1500;
var g_pdfFile = 1;
var g_socialLinkContainer = 3;
var g_webLinkContainer = 5;
var g_pdfGalleryContainer = 10;
var g_customFieldContainer = 11;
var g_componentIndex = 7;
var g_subcomponentIndex = 11;



const savedStyle = [{
  id: 0,
  backgroundImage: 'url("/images/1.jpg")',
  primaryColor: '#061244',
  secondaryColor: '#a07dda',
  primaryProfileTextColor: '#ffffff',
  secondaryProfileTextColor: '#ffffff',
  primaryTextColor: '#061244',
  secondaryTextColor: '#061244',
  fontStyle: '/images/roboto_font.svg'
}];

const backgroundImage = ['/images/1.jpg', '/images/2.jpg', '/images/3.jpg'];
const fontStyle = ['/images/work_sans.png', '/images/open_sans.jpg', '/images/roboto_font.svg'];
let profileState = {
  enabled: "block",
  name: "Name",
  title: "Title",
  company: "Company",
  avatar: {
    enabled: "block",
    url: "/assets/images/face1.jpg"
  },
  contacts: {
    enabled: "block",
    info: [{
        type: "Mobile",
        value: ""
      },
      {
        type: "Email",
        value: ""
      },
      {
        type: "SMS",
        value: ""
      }
    ]
  }
};

const settingState = {
  backgroundImage :"/images/1.jpg",
  colors:{
    primaryColor:"#517AFA",
    secondaryColor:"#a07dda",
    primaryProfileTextColor:"#ffffff",
    secondaryProfileTextColor:"#ffffff",
    primaryTextColor:"#517afa",
    secondaryTextColor:"#517afa"
  },
  fontStyle:"Work Sans",
  fontName: "Work Sans",
  pageLoader:"/assets/images/windows.png"
}

let headingState = {
  enabled: "block",
  title: "About Me",
  description: "Description",
  cardBack: "block"
};

const imageState = {
  enabled: "block",
  headerEnable: "none",
  header: {
    title: "",
    description: ""
  },
  viewType: "qrc_gallery_list",
  photos: [{
      state: true,
      url: "/assets/images/img4.webp"
    },
    {
      state: true,
      url: "/assets/images/img5.webp"
    }
  ],
  cardBack: "block"
};

const socialLinksState = {
  enabled: "block",
  headerEnable: "none",
  header: {
    title: "Social Links",
    description: "Description"
  },
  links: [{
      type: "Facebook",
      url: "",
      logo: "/images/facebook.png",
      title: "Title",
      subtitle: {
        enabled: "none",
        value: "Like us on Facebook"
      }
    },
    {
      type: "Instagram",
      url: "",
      logo: "/images/intragram.png",
      title: "Instagram",
      subtitle: {
        enabled: "none",
        value: "Follow us on Instagram"
      }
    },
    {
      type: "Twitter",
      url: "",
      logo: "/images/twitter.png",
      title: "Twitter",
      subtitle: {
        enabled: "none",
        value: "Talk with us on Twitter"
      }
    }
  ],
  cardBack: true
};

const ContactAddressItem = {
  label: "Address",
  addressLine1: "817 N Ave",
  addressLine2: "",
  city: "California",
  state: "Chicago",
  country: "US",
  zipcode: "60622",
  actionButton: {
    enabled: "block",
    text: "Direction"
  },
  googleMapUrl: "#"
}

const contactUsState = {
  enabled: "block",
  title: "Contact Us",
  images: "/assets/images/smartPhone.png",
  floatingButton: {
    enabled: "block",
    text: "Add to Contact"
  },
  contactItems: [{
      type: "Contact Number",
      data: {
        label: "Call Us",
        value: "1234567890"
      }
    },
    {
      type: "Email",
      data: {
        label: "Email",
        value: "contactme@domain.com"
      }
    },
    {
      type: "Address",
      data: {
        label: "Address",
        value: "street<br>building<br>city,state<br>country"
      },actionButton: {
    enabled: "block",
    text: "Direction"
    }
    }
  ],
  cardBack: "block"
};

const LinkItem = {
  enabled: 'block',
  link: "",
  image: "/assets/images/link.png",
  title: "Portfolio",
  subtitle: {
    enabled: "block",
    value: "Visit for moreinformation"
  }
};

const linksState = {
  enabled: 'block',
  headerEnabled: "none",
  header: {
    title: "Web Link",
    description: "Description"
  },
  links: [LinkItem],
  cardBack: "block"
}

let card = [{
    type: "Profile",
    enabled: "block",
    data: profileState
  },
  {
    type: "Heading",
    enabled: "block",
    data: headingState
  },
  {
    type: "Image",
    enabled: "block",
    data: imageState
  },
  {
    type: "SocialLink",
    enabled: "block",
    data: socialLinksState
  },
  {
    type: "ContactUs",
    enabled: "block",
    data: contactUsState
  },
  {
    type: "Link",
    enabled: "block",
    data: linksState
  }
];

let buttonState = {
  enabled:'block',
  header:{enabled:'block', title:'Button', description:'Description'},
  buttonLabel:'visit my site',
  buttonLink:'',
  cardEnabled:'block'
};

let videoState = {
  enabled:'block',
  header:{enabled:'block', title:'Video', description:'Description'},
  type:"YouTube",
  videoLink:"",
  cardEnabled:'block'
};

let customState = {
  enabled:'block',
  header:{enabled:'block', title:'Other Information', description:''},
  customItems:[{key:'key', value:'value'}],
  cardEnabled:'block'
};

let pdfState = {
  enabled:'block',
  header:{enabled:'block', title:'Other Information', description:''},  
  pdfItems:[{url:'', pdfAvatar:'/assets/images/pdf.png', title:'PDF 1', description:'PDF Description', subTitleEnabled:'block'},{url:'', pdfAvatar:'/assets/images/pdf.png', title:'PDF 1', description:'PDF Description', subTitleEnabled:'block'}],
  cardEnabled:'block'
};

let chimpData=[
{type: 'profile', value:{...profileState}},
{type: 'heading', value:{...headingState}},
{type: 'contact', value:{...contactUsState}},
{type: 'images', value:{...imageState}},
{type: 'socialLink', value:{...socialLinksState}},
{type: 'webLinks', value:{...linksState}}
];

let myimages = [];
let mypdfs = [];
let selected_no = -1;
let pdfSelected_no = -1;
let current = -1;
let saving_image = '"./images/1.jpg"';
let saving_font = "\/images\/work_sans.png";
let saving_color = document.getElementsByClassName('qr_color_panel_bg')[0].children[0].innerHTML;

var numberAddHtml = document.getElementById('contact_info_container_4').children[0].outerHTML;
var emailAddHtml = document.getElementById('contact_info_container_4').children[1].outerHTML;
var addressAddHtml = document.getElementById('contact_info_container_4').children[2].outerHTML;

var linkItemHtml = document.getElementById('web_link_container_5').children[0].outerHTML;

let contact = [
  [
    'mobile',
    'Mobile',
    'Mobile number'
  ],
  [
    'email',
    'Email',
    'Email'
  ],
  [
    'sms',
    'SMS',
    'SMS address'
  ],
  [
    'location',
    'Location',
    'Google location URL'
  ],
  [
    'whatsapp',
    'Whatsapp',
    'Whatsapp URL'
  ],
  [
    'fax',
    'Fax',
    'Fax number'
  ],
  [
    'tel',
    'Telephone',
    'Telephone number'
  ]
];

let contact1 = [
  [
    'facebook',
    'Facebook',
    'facebook.png'
  ],
  [
    'instagram',
    'Instagram',
    'intragram.png'
  ],
  [
    'linkedin',
    'LinkedIn',
    'linkedin.png'
  ],
  [
    'twitter',
    'Twitter',
    'twitter.png'
  ],
  [
    'skype',
    'Skype',
    'skype.jpg'
  ],
  [
    'behance',
    'Behance',
    'behance.jpg'
  ],
  [
    'youtube',
    'YouTube',
    'youtube.png'
  ],
  [
    'whatsapp',
    'Whatsapp',
    'whatsapp.png'
  ],
  [
    'email',
    'Email',
    'email.png'
  ],
  [
    'telegram',
    'Telegram',
    'telegram.jpg'
  ],
  [
    'tiktok',
    'TikTok',
    'tiktok.jpg'
  ]
];



function loadFunction() {
  $('#page-tab-input').addClass('active');
}

console.log('-------------------------declare--------------------------');
  
// var baseURL = document.localStorage.getItem('baseURL');

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

var g_rectImg;
var g_circleImg;

var downloadFlag = 0;


const savedStyle = [{
  id: 0,
  backgroundImage: `url("${baseURL}/images/1.jpg")`,
  primaryColor: '#061244',
  secondaryColor: '#a07dda',
  primaryProfileTextColor: '#ffffff',
  secondaryProfileTextColor: '#ffffff',
  primaryTextColor: '#061244',
  secondaryTextColor: '#061244',
  fontStyle: `${baseURL}/images/roboto_font.svg`
}];

const backgroundImage = [`${baseURL}/images/1.jpg`, `${baseURL}/images/2.jpg`, `${baseURL}/images/3.jpg`];
const fontStyle = [`${baseURL}/images/work_sans.png`, `${baseURL}/images/open_sans.jpg`, `${baseURL}/images/roboto_font.svg`];
let profileState = {
  enabled: "block",
  name: "Name",
  title: "Title",
  company: "Company",
  avatar: {
    enabled: "block",
    url: `${baseURL}/assets/images/face1.jpg`
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
  backgroundImage :`${baseURL}/images/1.jpg`,
  colors:{
    primaryColor:"#517afa",
    secondaryColor:"#a07dda",
    primaryProfileTextColor:"#ffffff",
    secondaryProfileTextColor:"#ffffff",
    primaryTextColor:"#517afa",
    secondaryTextColor:"#517afa"
  },
  fontStyle:"Work Sans",
  fontName: "Work Sans",
  pageLoader:`${baseURL}/assets/images/windows.png`
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
    title: "Title",
    description: "Description"
  },
  viewType: "qrc_gallery_list",
  photos: [{
      state: true,
      url:  `${baseURL}/assets/images/img4.webp`
    },
    {
      state: true,
      url: `${baseURL}/assets/images/img5.webp`
    }
  ],
  cardBack: "block"
};

const socialLinksState = {
  enabled: "block",
  headerEnable: "block",
  header: {
    title: "Social Links",
    description: "Description"
  },
  links: [{
      type: "Facebook",
      url: "",
      logo: `${baseURL}/images/facebook.png`,
      title: "Title",
      subtitle: {
        enabled: "none",
        value: "Like us on Facebook"
      }
    },
    {
      type: "Instagram",
      url: "",
      logo: `${baseURL}/images/instagram.png`,
      title: "Instagram",
      subtitle: {
        enabled: "none",
        value: "Follow us on Instagram"
      }
    },
    {
      type: "Twitter",
      url: "",
      logo: `${baseURL}/images/twitter.png`,
      title: "Twitter",
      subtitle: {
        enabled: "none",
        value: "Talk with us on Twitter"
      }
    }
  ],
  cardBack: "block"
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


const LinkItem = {
  enabled: 'block',
  link: "",
  image: `${baseURL}/assets/images/link.png`,
  title: "URL",
  subtitle: {
    enabled: "none",
    value: "Visit for moreinformation"
  }
};

const linksState = {
  enabled: 'block',
  headerEnabled: "block",
  header: {
    title: "Web Link",
    description: "Description"
  },
  links: [
  {
    enabled: 'block',
    link: "",
    image: `${baseURL}/assets/images/link.png`,
    title: "URL",
    subtitle: {
      enabled: "none",
      value: "Visit for moreinformation"
    }
  }
  ],
  cardBack: "block"
}

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
  header:{enabled:'block', title:'Title', description:'Description'},  
  pdfItems:[{url:'', pdfAvatar:`${baseURL}/assets/images/pdf.png`, title:'PDF 1', description:'PDF Description', subTitleEnabled:'block'},{url:'', pdfAvatar:`${baseURL}/assets/images/pdf.png`, title:'PDF 1', description:'PDF Description', subTitleEnabled:'block'}],
  cardEnabled:'block'
};

let qrPopUp = {
  avatar: `${baseURL}/assets/images/face1.jpg`,
  qrImage:`${baseURL}/assets/images/qr-code.png`,
  name:"Name",
  title:"Title",
  company:"Company"
}

let chimpData=[
{type: 'profile', value:{  enabled: "block",
  name: "Name",
  title: "Title",
  company: "Company",
  avatar: {
    enabled: "block",
    url: `${baseURL}/assets/images/face1.jpg`
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
  }}},
{type: 'heading', value:{...headingState}},
{type: 'contact', value:{ 
  enabled: "block",
  title: "Contact Us",
  images: `${baseURL}/assets/images/smartPhone.png`,
  floatingButton: {
    enabled: "block",
    text: "Add to Contact"
  },
  contactItems: [{
      type: "Contact Number",
      data: {
        label: "Call Us",
        value: "1234567890",
        addressLine1:"",
        addressLine2:"",
        city:"",
        state:"",
        country:"",
        zipcode:""
      },actionButton: {
    enabled: "none",
    text: "",
    url:""
    }
    },
    {
      type: "Email",
      data: {
        label: "Email",
        value: "contactme@domain.com",
        addressLine1:"",
        addressLine2:"",
        city:"",
        state:"",
        country:"",
        zipcode:""
      },actionButton: {
    enabled: "none",
    text: "",
    url:"#"
    }
    },
    {
      type: "Address",
      data: {
        label: "Address",
        value: "",
        addressLine1:"Street",
        addressLine2:"Building",
        city:"City",
        state:"State",
        country:"Country",
        zipcode:""
      },actionButton: {
    enabled: "block",
    text: "Direction",
    url:"#"
    }
    }
  ],
  cardBack: "block"
}
},
{type: 'images', value:{...imageState}},
{type: 'socialLink', value:{ enabled: "block",
  headerEnable: "block",
  header: {
    title: "Social Links",
    description: "Description"
  },
  links: [{
      type: "Facebook",
      url: "",
      logo: `${baseURL}/images/facebook.png`,
      title: "Facebook",
      subtitle: {
        enabled: "none",
        value: "Like us on Facebook"
      }
    },
    {
      type: "Instagram",
      url: "",
      logo: `${baseURL}/images/instagram.png`,
      title: "Instagram",
      subtitle: {
        enabled: "none",
        value: "Follow us on Instagram"
      }
    },
    {
      type: "Twitter",
      url: "",
      logo: `${baseURL}/images/twitter.png`,
      title: "Twitter",
      subtitle: {
        enabled: "none",
        value: "Talk with us on Twitter"
      }
    }
  ],
  cardBack: "block"}},
{type: 'webLinks', value:{enabled: 'block',
  headerEnabled: "block",
  header: {
    title: "Web Link",
    description: "Description"
  },
  links: [
  {
    enabled: 'block',
    link: "",
    image: `${baseURL}/assets/images/link.png`,
    title: "URL",
    subtitle: {
      enabled: "none",
      value: "Visit for moreinformation"
    }
  }
  ],
  cardBack: "block"}}
];

var padding = 0;
var paddingColor = "#ffffff";
var foreColor = "#000000";
var backColor = "#ffffff";
var qrCodeWidth = 300;
var qrCodeHeight = 300;
var currentPos = { x: 20, y: 20 };
var moveStart = { x: 0, y: 0 };
var state = 0;
var gPaddingColorFlag = 0;
var gQrcodeImage = 0;




let qrCodeState = {
  qrShape:'circle',
  qrShapeBorderSize:100,
  qrPaddingAroundEyes:1,
  qrPaddingColorAroundEyes:{
    enabled: false,
    colorType: 'singleColor',
    color1: '#ffffff',
    color2: '#f0f0ff',
    color3: '#f0f0ff',
    gradientType:"linearX"
  },
  qrRemoveLeftTopAroundEyes:false,
  qrForegroundColor:{
    enabled: true,
    colorType: 'singleColor',
    color1: '#333333',
    color2: '#333333',
    color3: '#999999',
    gradientType:"linearX"
  },
  qrCustomStrokeColor:{
    enabled: false,
    colorType: 'singleColor',
    color1: '#333333',
    color2: '#333333',
    color3: '#999999',
    gradientType:"linearX"
  },
  qrCustomEyeColor:{
    enabled: false,
    colorType: 'singleColor',
    color1: '#333333',
    color2: '#333333',
    color3: '#999999',
    gradientType:"linearX"
  },    
  qrCustomEyeStrokeColor:{
    enabled: false,
    colorType: 'singleColor',
    color1: '#333333',
    color2: '#333333',
    color3: '#999999',
    gradientType:"linearX"
  },
  qrCustomEyeballColor:{
    enabled: false,
    colorType: 'singleColor',
    color1: '#333333',
    color2: '#666666',
    color3: '#666666',
    gradientType:"linearX"
  },
  qrCustomBackgroundColor:{
    enabled: false,
    colorType: 'singleColor',
    color1: '#FFFFFF',
    color2: '#FFFFFF',
    color3: '#e4f3ff',
    gradientType:"linearX"
  },
  qrCodeImage:'',
  qrDecorateAutoColor:'none',
  qrFillWhiteSpace:{
    enabled: false,
    colorType: 'singleColor',
    color1: '#333333',
    color2: '#666666',
    color3: '#666666',
    gradientType:"linearX"
  },
  qrBackgroundDimming:{
    enabled: false,
    colorType: 'singleColor',
    color1: '#333333',
    color2: '#666666',
    color3: '#666666',
    gradientType:"linearX"
  },
  _3dEffect: false
}

let myimages = [];
let myFiles = [];
let mypdfs = [];
let myPdfFiles = [];
let form_data = new FormData();

let selected_no = -1;
let pdfSelected_no = -1;
let current = -1;
let saving_image = `${baseURL}/images/1.jpg`;
let saving_font = `${baseURL}\/images\/work_sans.png`;
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
    'instagram.png'
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








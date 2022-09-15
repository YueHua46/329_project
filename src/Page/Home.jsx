import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import imgBanner from '../resource/img/home/https___cf.geekdo-static.com_cms_2022_07_04112039_SPIEL-22-hero-image.jpg'
import imgItem1 from '../resource/img/home/https___cf.geekdo-static.com_cms_2022_09_08083259_war.png'
import imgItem2 from '../resource/img/home/https___cf.geekdo-static.com_cms_2022_09_03131258_chall.jpeg'
import imgItem3 from '../resource/img/home/https___cf.geekdo-static.com_cms_2020_09_14105855_BGG-Logomark.jpg'
import imgItem4 from '../resource/img/home/https___cf.geekdo-static.com_cms_2022_08_30112231_lorc-sma.jpg'
import Card from '../Components/Card'

import imgCard2 from '../resource/img/home/pic6964987.png'
import imgCard3 from '../resource/img/home/pic1215633.jpg'
import imgCard4 from '../resource/img/home/pic3490053.jpg'
import imgCard5 from '../resource/img/home/pic5073276.jpg'

import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import DraftsIcon from '@mui/icons-material/Drafts'

import '../resource/css/Home.less'
import LaunchIcon from '@mui/icons-material/Launch'

import Context from '../Components/Context'
export default (props) => {
  const card2Data = {
    title: 'THE HOTNESS',
    small: 'The top 50 trending games today.',
    list: [
      {
        src: imgCard2,
        top: '1',
        title: 'Dune: War for Arrakis',
        small: 'Fight for control of Arrakis and its precious Spice.',
        id: 1,
      },
      {
        src: imgCard2,
        top: '1',
        title: 'Dune: War for Arrakis',
        small: 'Fight for control of Arrakis and its precious Spice.',
        id: 2,
      },
      {
        src: imgCard2,
        top: '1',
        title: 'Dune: War for Arrakis',
        small: 'Fight for control of Arrakis and its precious Spice.',
        id: 3,
      },
      {
        src: imgCard2,
        top: '1',
        title: 'Dune: War for Arrakis',
        small: 'Fight for control of Arrakis and its precious Spice.',
        id: 4,
      },
      {
        src: imgCard2,
        top: '1',
        title: 'Dune: War for Arrakis',
        small: 'Fight for control of Arrakis and its precious Spice.',
        id: 5,
      },
    ],
  }
  const card3Data = {
    title: 'CROWDFUNDING COUNTDOWN',
    small: 'Projects ending soon',
    list: [
      {
        src: imgCard3,
        title: 'KeyForge: Winds of Exchange',
        small: 'Ends Sep 27 965% Funded',
        id: 1,
      },
      {
        src: imgCard3,
        top: '1',
        title: 'KeyForge: Winds of Exchange',
        small: 'Ends Sep 27 965% Funded',
        id: 2,
      },
      {
        src: imgCard3,
        top: '1',
        title: 'KeyForge: Winds of Exchange',
        small: 'Ends Sep 27 965% Funded',
        id: 3,
      },
      {
        src: imgCard3,
        top: '1',
        title: 'KeyForge: Winds of Exchange',
        small: 'Ends Sep 27 965% Funded',
        id: 4,
      },
      {
        src: imgCard3,
        top: '1',
        title: 'KeyForge: Winds of Exchange',
        small: 'Ends Sep 27 965% Funded',
        id: 5,
      },
    ],
  }
  const card4Data = {
    title: 'BOARD GAMING NEWS',
    list: [
      {
        src: imgCard4,
        detailed:
          'Game Preview: Fire & Stone: Siege of Vienna 1683, or The Intense Cannon and Mine Duel',
        author: 'Candice Harris',
        title: 'BoardGameGeek News',
        praise: 59,
        comment: 3,
        id: 0,
      },
      {
        src: imgCard4,
        detailed:
          'Game Preview: Fire & Stone: Siege of Vienna 1683, or The Intense Cannon and Mine Duel',
        author: 'Candice Harris',
        title: 'BoardGameGeek News',
        praise: 59,
        comment: 3,
        id: 1,
      },
      {
        src: imgCard4,
        detailed:
          'Game Preview: Fire & Stone: Siege of Vienna 1683, or The Intense Cannon and Mine Duel',
        author: 'Candice Harris',
        title: 'BoardGameGeek News',
        praise: 59,
        comment: 3,
        id: 2,
      },
      {
        src: imgCard4,
        detailed:
          'Game Preview: Fire & Stone: Siege of Vienna 1683, or The Intense Cannon and Mine Duel',
        author: 'Candice Harris',
        title: 'BoardGameGeek News',
        praise: 59,
        comment: 3,
        id: 3,
      },
    ],
  }
  const card5Data = {
    title: 'HOT DISCUSSIONS',
    list: [
      {
        src: imgCard5,
        detailed: 'Wyrmwood Modular Gaming Table',
        author: 'Diego Valencia',
        title: 'General Gaming',
        praise: 42,
        comment: 26,
        id: 0,
      },
      {
        src: imgCard5,
        detailed: 'Wyrmwood Modular Gaming Table',
        author: 'Diego Valencia',
        title: 'General Gaming',
        praise: 42,
        comment: 26,
        id: 1,
      },
      {
        src: imgCard5,
        detailed: 'Wyrmwood Modular Gaming Table',
        author: 'Diego Valencia',
        title: 'General Gaming',
        praise: 42,
        comment: 26,
        id: 2,
      },
      {
        src: imgCard5,
        detailed: 'Wyrmwood Modular Gaming Table',
        author: 'Diego Valencia',
        title: 'General Gaming',
        praise: 42,
        comment: 26,
        id: 3,
      },
    ],
  }
  const footerData = {
    col2: {
      title: 'COMPANY',
      list: ['About', 'Contact', 'Advertise', 'Support BGG'],
    },
    col3: {
      title: 'POLICIES',
      list: ['Community Guidelines', 'Privacy', 'Terms', 'Manage Cookies'],
    },
    col4: {
      title: 'CONNECT',
      list: [
        FacebookIcon,
        TwitterIcon,
        InstagramIcon,
        YouTubeIcon,
        WhatsAppIcon,
        DraftsIcon,
      ],
    },
  }

  return (
    <div className="container">
      <header>
        <div className="header-left">
          <div className="header-menu">
            <MenuIcon sx={{fontSize: 30, color: 'white'}} />
          </div>
          <div className="header-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="38"
              viewBox="0 0 80 38"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  fill="#FFF"
                  d="M41.6414127,20.8453307 C41.6414127,20.7138507 41.5623149,20.5562773 41.377073,20.5562773 L37.2504649,20.5562773 L37.2504649,24.470024 L41.377073,24.470024 C41.5623149,24.470024 41.6414127,24.338544 41.6414127,24.2073173 L41.6414127,20.8453307 Z M41.6414127,13.911344 C41.6414127,13.779864 41.5623149,13.622544 41.377073,13.622544 L37.2504649,13.622544 L37.2504649,17.2996773 L41.377073,17.2996773 C41.5623149,17.2996773 41.6414127,17.1681973 41.6414127,17.0103707 L41.6414127,13.911344 Z M32.6737649,27.8317573 L32.6737649,10.1032373 L43.6783083,10.1032373 C45.1334524,10.1032373 46.0591517,11.0223307 46.0591517,12.3353573 L46.0591517,16.2754507 C46.0591517,17.483344 45.2656223,18.6390507 43.6257465,19.0332373 C45.2656223,19.4269173 46.1915767,20.530184 46.1915767,21.7122373 L46.1915767,25.5730373 C46.1915767,26.9648507 45.2656223,27.8317573 43.8107333,27.8317573 L32.6737649,27.8317573 Z M57.7535044,16.9530667 L62.7609046,16.9530667 L62.7609046,25.8040267 C62.7609046,26.9597333 61.8619965,27.8263867 60.7242641,27.8263867 L51.7828972,27.8263867 C50.64542,27.8263867 49.7194656,26.9597333 49.7194656,25.8040267 L49.7194656,12.09388 C49.7194656,11.01696 50.64542,10.0978667 51.7828972,10.0978667 L62.7609046,10.0978667 L62.7609046,13.9062267 L54.5602501,13.9062267 C54.4280803,13.9062267 54.2959104,14.0374533 54.2959104,14.19528 L54.2959104,23.7031333 C54.2959104,23.8604533 54.4280803,23.9655867 54.5602501,23.9655867 L58.2640678,23.9655867 C58.4490546,23.9655867 58.5549435,23.8604533 58.5549435,23.7031333 L58.5549435,20.7087333 L56.1478193,20.7087333 L57.7535044,16.9530667 Z M74.3228322,16.9530667 L79.3304876,16.9530667 L79.3304876,25.8040267 C79.3304876,26.9597333 78.4313244,27.8263867 77.2938472,27.8263867 L68.3524802,27.8263867 C67.2147479,27.8263867 66.2890486,26.9597333 66.2890486,25.8040267 L66.2890486,12.09388 C66.2890486,11.01696 67.2147479,10.0978667 68.3524802,10.0978667 L79.3304876,10.0978667 L79.3304876,13.9062267 L71.1298332,13.9062267 C70.9976633,13.9062267 70.8652383,14.0374533 70.8652383,14.19528 L70.8652383,23.7031333 C70.8652383,23.8604533 70.9976633,23.9655867 71.1298332,23.9655867 L74.8333957,23.9655867 C75.0186376,23.9655867 75.1245266,23.8604533 75.1245266,23.7031333 L75.1245266,20.7087333 L72.7171472,20.7087333 L74.3228322,16.9530667 Z"
                />
                <polygon
                  fill="#FF5100"
                  points="24.87 7.01 21.107 8.035 24.792 0 .9 8.794 2.206 19.327 0 21.454 6.577 37.93 20.558 32.779 25.418 21.37 23.331 19.358"
                />
              </g>
            </svg>
          </div>
          <ul className="header-list">
            <li>
              <a href="#">Browser</a>
            </li>
            <li>
              <a href="src/Page/BC/index.html">BackCheck</a>
            </li>
            <li>
              <a href="src/Page/GeeklistHot/tbsdemo.html">GeekLists</a>
            </li>
            <li>
              <a href="src/Page/ShopGeekMarket/index.html">Shopping</a>
            </li>
            <li>
              <a href="src/Page/Help/index.html">Help</a>
            </li>
          </ul>
        </div>
        <div className="header-right">
          <ul>
            <li>
              <a href="#">Sign In</a>
            </li>
            <li>
              <a href="#">Join!</a>
            </li>
            <li className="header-search">
              <SearchIcon sx={{color: 'white'}} />
              <input placeholder="Search" type="text" />
            </li>
          </ul>
        </div>
      </header>
      <main>
        <div className="main-Card1">
          <article className="title">
            <section>
              <h3>Explore</h3>
              <h3>Dashboard</h3>
            </section>
            <hr />
          </article>
          <article className="main-card-banner">
            <section className="main-card-img">
              <img src={imgBanner} alt="" />
              <div className="small">
                <h3>SPIEL '22 Preview</h3>
                <small>by W Eric Martin</small>
              </div>
            </section>
            <section className="main-card-list">
              <div className="main-card-item">
                <img src={imgItem1} alt="" />
                <div className="small">
                  <h3>Designer Ian Brody on War of the Ring: The Card Game</h3>
                  <small>
                    <span>by lanBrody</span>
                    <span>BoardGameGeek News</span>
                  </small>
                </div>
              </div>
              <div className="main-card-item">
                <img src={imgItem2} alt="" />
                <div className="small">
                  <h3>Welcome to our new GeekMarket!</h3>
                  <small>
                    <span>by Aldie</span>
                    <span>News</span>
                  </small>
                </div>
              </div>
              <div className="main-card-item">
                <img src={imgItem3} alt="" />
                <div className="small">
                  <h3>SPIEL '22 Preview: Challengers!</h3>
                  <small>
                    <span>by W Eric Martin</span>
                    <span>BoardGameGeek News</span>
                  </small>
                </div>
              </div>
              <div className="main-card-item">
                <img src={imgItem4} alt="" />
                <div className="small">
                  <h3>Disney Lorcana Trading Card Game Coming in 2023</h3>
                  <small>
                    <span>by W Eric Martin</span>
                    <span>BoardGameGeek News</span>
                  </small>
                </div>
              </div>
            </section>
          </article>
        </div>
        <div className="main-Card2">
          <Card {...card2Data} />
        </div>
        <div className="main-Card3">
          <Card {...card3Data}>
            <p>
              Your deck is unique. Battle others to be the first to unlock the
              great Vaults!
            </p>
            <a href="#" style={{color: '#585f65'}}>
              Visit Kickstarter
              <LaunchIcon sx={{color: '#585f65'}} />
            </a>
          </Card>
        </div>
        <div className="main-Card4">
          <Context {...card4Data} />
          <Context {...card5Data} />
        </div>
      </main>
      {/* footer */}
      <footer>
        <article className="row1">
          <section className="col1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="38"
              viewBox="0 0 80 38"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  fill="#FFF"
                  d="M41.6414127,20.8453307 C41.6414127,20.7138507 41.5623149,20.5562773 41.377073,20.5562773 L37.2504649,20.5562773 L37.2504649,24.470024 L41.377073,24.470024 C41.5623149,24.470024 41.6414127,24.338544 41.6414127,24.2073173 L41.6414127,20.8453307 Z M41.6414127,13.911344 C41.6414127,13.779864 41.5623149,13.622544 41.377073,13.622544 L37.2504649,13.622544 L37.2504649,17.2996773 L41.377073,17.2996773 C41.5623149,17.2996773 41.6414127,17.1681973 41.6414127,17.0103707 L41.6414127,13.911344 Z M32.6737649,27.8317573 L32.6737649,10.1032373 L43.6783083,10.1032373 C45.1334524,10.1032373 46.0591517,11.0223307 46.0591517,12.3353573 L46.0591517,16.2754507 C46.0591517,17.483344 45.2656223,18.6390507 43.6257465,19.0332373 C45.2656223,19.4269173 46.1915767,20.530184 46.1915767,21.7122373 L46.1915767,25.5730373 C46.1915767,26.9648507 45.2656223,27.8317573 43.8107333,27.8317573 L32.6737649,27.8317573 Z M57.7535044,16.9530667 L62.7609046,16.9530667 L62.7609046,25.8040267 C62.7609046,26.9597333 61.8619965,27.8263867 60.7242641,27.8263867 L51.7828972,27.8263867 C50.64542,27.8263867 49.7194656,26.9597333 49.7194656,25.8040267 L49.7194656,12.09388 C49.7194656,11.01696 50.64542,10.0978667 51.7828972,10.0978667 L62.7609046,10.0978667 L62.7609046,13.9062267 L54.5602501,13.9062267 C54.4280803,13.9062267 54.2959104,14.0374533 54.2959104,14.19528 L54.2959104,23.7031333 C54.2959104,23.8604533 54.4280803,23.9655867 54.5602501,23.9655867 L58.2640678,23.9655867 C58.4490546,23.9655867 58.5549435,23.8604533 58.5549435,23.7031333 L58.5549435,20.7087333 L56.1478193,20.7087333 L57.7535044,16.9530667 Z M74.3228322,16.9530667 L79.3304876,16.9530667 L79.3304876,25.8040267 C79.3304876,26.9597333 78.4313244,27.8263867 77.2938472,27.8263867 L68.3524802,27.8263867 C67.2147479,27.8263867 66.2890486,26.9597333 66.2890486,25.8040267 L66.2890486,12.09388 C66.2890486,11.01696 67.2147479,10.0978667 68.3524802,10.0978667 L79.3304876,10.0978667 L79.3304876,13.9062267 L71.1298332,13.9062267 C70.9976633,13.9062267 70.8652383,14.0374533 70.8652383,14.19528 L70.8652383,23.7031333 C70.8652383,23.8604533 70.9976633,23.9655867 71.1298332,23.9655867 L74.8333957,23.9655867 C75.0186376,23.9655867 75.1245266,23.8604533 75.1245266,23.7031333 L75.1245266,20.7087333 L72.7171472,20.7087333 L74.3228322,16.9530667 Z"
                />
                <polygon
                  fill="#FF5100"
                  points="24.87 7.01 21.107 8.035 24.792 0 .9 8.794 2.206 19.327 0 21.454 6.577 37.93 20.558 32.779 25.418 21.37 23.331 19.358"
                />
              </g>
            </svg>
          </section>
          <section className="col2">
            <h2>{footerData.col2.title}</h2>
            <ul>
              {footerData.col2.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="col3">
            <h2>{footerData.col3.title}</h2>
            <ul>
              {footerData.col3.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="col4">
            <h2>{footerData.col4.title}</h2>
            <ul>
              <li className="icon">
                {footerData.col4.list.map((Item, index) => (
                  <Item key={index} />
                ))}
              </li>
              {/* youtube */}
              <li className="appstore">
                <img
                  src="https://cdn.flyscoot.com/prod/images/default-source/mobile/apple-app-store-icon.png?sfvrsn=5f87825b_13"
                  alt=""
                />
              </li>
            </ul>
          </section>
        </article>
      </footer>
      <article className="row2">
        <section>
          Geekdo, BoardGameGeek, the Geekdo logo, and the BoardGameGeek logo are
          trademarks of BoardGameGeek, LLC.
        </section>
      </article>
    </div>
  )
}

// Blocks under "Sections"
export default [
  {
    id: 'section-header',
    label: 'Header',
    category: 'Sections',
    attributes: {
      class: 'fa fa-window-minimize'
    },
    content: `<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand text-primary" href="#">G.</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <div class="d-flex">
              <button class="btn btn-outline-primary me-2"><span class="fas fa-lock me-2"></span>Login</button>
              <button class="btn btn-primary"><span class="fas fa-plus me-2"></span>New account</button>
            </div>
          </div>
        </div>
      </nav>
      <section id="hero" class="d-flex flex-column align-items-center justify-content-center pt-4">
        <h2 class="hero-title display-2 text-uppercase mt-5"><span class="text-primary">G</span>ramateria</h2>
        <p class="hero-subtitle display-6">Fastest way to build single HTML pages</p>
        <div class="hero-buttons my-5">
          <button class="btn btn-primary me-2">
          <span class="fas fa-eye me-2"></span>Try now
        </button>
        <button class="btn btn-outline-primary"><span class="fas fa-book me-2"></span>Documentation</button>
        </div>
        <div class="hero-image p-4 bg-white shadow-sm rounded">
          <img src="https://res.cloudinary.com/dpnea22ek/image/upload/c_scale,q_100,w_1400/v1627100771/gramateria.jpg" alt="Gramateria">
        </div>
        <svg class="background-wave" width="1440" height="386" xmlns="http://www.w3.org/2000/svg"><g fill="#09F" fill-rule="nonzero" fill-opacity=".2"><path d="M0 87l26.7 10.7C53.3 108 107 130 160 124.3c53.3-5.3 107-37.3 160-64C373.3 34 427 12 480 12.3 533.3 12 587 34 640 55c53.3 21 107 43 160 21.3C853.3 55 907-9 960 1.7c53.3 10.3 107 96.3 160 122.6 53.3 26.7 107-5.3 160-26.6 53.3-21.7 107-31.7 133-37.4l27-5.3v128H0V87zM0 311l26.7-5.3C53.3 300 107 290 160 311c53.3 21 107 75 160 74.701C373.3 386 427 332 480 311c53.3-21 107-11 160 10.7C693.3 343 747 375 800 359c53.3-16 107-80 160-101.3 53.3-21.7 107 .3 160 21.3 53.3 21 107 43 160 42.7 53.3.3 107-21.7 133-32l27-10.7v-96H0v128z"/></g></svg>
      </section>
    <style>#hero{position:relative}#hero .background-wave{width:100%;height:600px;position:absolute;top:340px;left:0;z-index:-1} #hero .hero-image{max-width:600px} #hero .hero-image img{width:100%}</style>`
  },
  {
    id: "section-header-two",
    label: "Header Two",
    category: "Sections",
    attributes: {
      class: 'fa fa-window-minimize'
    },
    content: `<section id="header-two" class="bg-white">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="d-flex justify-content-center flex-column p-4">
              <h2 class="title text-uppercase">Draw your imagination</h2>
              <p class="subtitle">with Gramateria page builder</p>
              <div class="buttons">
                <button class="btn btn-primary me-2">Try now</button>
                <button class="btn btn-outline-primary">
                  Watch videos
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <svg width="100%" height="341" xmlns="http://www.w3.org/2000/svg">
              <g fill-rule="nonzero" fill="none">
                <path fill="#E6E6E6" d="M64.642 159.707h377.86v179.301H64.642z" />
                <path fill="#FFF" d="M75.447 175.083h356.251V324.68H75.447z" />
                <path fill="#E6E6E6" d="M362.896 202.928h9.225v9.225h-9.225z" />
                <path fill="#0d6efd" d="M116.833 202.928h9.225v9.225h-9.225z" />
                <path fill="#E6E6E6" d="M116.566 229.352h30.751v30.751h-30.751z" />
                <path fill="#0d6efd" d="M64.481 149.348h377.86v16.053H64.481z" />
                <circle fill="#FFF" cx="76.41" cy="160.936" r="2.975" />
                <circle fill="#FFF" cx="87.703" cy="160.936" r="2.975" />
                <circle fill="#FFF" cx="98.997" cy="160.936" r="2.975" />
                <path fill="#E6E6E6" d="M0 339.009h500v1.074H0zM179.209 232.428h75.339v4.325h-75.339z" />
                <path fill="#0d6efd" d="M179.209 248.203h116.34v4.325h-116.34z" />
                <path fill="#E6E6E6" d="M179.209 263.065h94.814v4.325h-94.814zM179.209 277.872h55.351v4.325h-55.351zM179.209 292.678h83.539v4.325h-83.539zM378.784 202.928h9.225v9.225h-9.225zM394.672 202.928h9.225v9.225h-9.225z" />
                <circle fill="#0d6efd" opacity=".997" cx="385.162" cy="263.462" r="18.735" />
                <circle fill="#2F2E41" cx="101.229" cy="29.637" r="21.092" />
                <path fill="#FEB8B8" d="M48.74 210.102h-9.238l-4.394-35.621h13.63z" />
                <path d="M32.908 207.462h17.81v11.215H21.695c0-6.194 5.02-11.215 11.214-11.215z" fill="#2F2E41" />
                <path fill="#FEB8B8" d="M34.323 204.947l-8.81-2.765 6.472-35.303 13.004 4.081z" />
                <path d="M20.003 197.69l16.994 5.334-3.358 10.7-27.693-8.691a11.214 11.214 0 0114.058-7.342zM37.328 190.733c-.403 0-.804-.073-1.181-.215l-6.797-2.547a3.402 3.402 0 01-2.12-3.905c1.71-7.691 7.54-33.876 10.733-47.92 3.786-16.66 59.014-19.755 61.364-19.879l.193-.01 6.213 7.804c2.245 7.216 1.533 12.845-2.115 16.73-10.646 11.334-42.431 4.3-46.221 3.411l-16.893 44.349a3.4 3.4 0 01-3.174 2.182h-.002z" fill="#2F2E41" />
                <path d="M47.12 196.006c-.403 0-.803-.072-1.18-.214l-6.795-2.548a3.401 3.401 0 01-2.12-3.905c1.71-7.691 7.54-33.876 10.733-47.92 3.786-16.66 59.014-19.755 61.363-19.879l.194-.01 6.21 7.806c2.245 7.216 1.534 12.844-2.115 16.73-10.645 11.331-42.43 4.3-46.22 3.41l-16.896 44.347a3.4 3.4 0 01-3.174 2.183z" fill="#2F2E41" />
                <path d="M27.464 87.516c.25.334.472.687.667 1.056l37.152 3.914 5.35-7.333 12.12 6.625-10.504 17.793-45.565-11.617a7.907 7.907 0 11.781-10.438h-.001z" fill="#FEB8B8" />
                <path d="M113.8 132.324a3.391 3.391 0 01-1.543-.376c-7.43-3.777-21.896-10.32-35.31-11.688a3.309 3.309 0 01-2.332-1.318 3.404 3.404 0 01-.628-2.644c1.21-6.701 3.987-23.765 3.63-37.44a18.528 18.528 0 0113.997-18.431 60.158 60.158 0 017.465-1.472 18.678 18.678 0 0120.76 21.666c-2.392 14.172-4.804 33.965-2.708 47.783a3.395 3.395 0 01-1.37 3.276 3.337 3.337 0 01-1.96.644z" fill="#CCC" />
                <path d="M78.305 96.278a3.39 3.39 0 01-1.346-.28l-9.679-4.19a3.394 3.394 0 01-1.764-4.457l7.481-17.282a8.663 8.663 0 1115.9 6.882l-7.481 17.282a3.398 3.398 0 01-3.111 2.045z" fill="#CCC" />
                <circle fill="#FEB8B8" cx="100.459" cy="34.574" r="18.502" />
                <path d="M81.624 25.482a66.732 66.732 0 0028.87 9.513l-3.043-3.646a22.362 22.362 0 006.908 1.372 7.566 7.566 0 006.167-2.887 7.035 7.035 0 00.471-6.498 13.328 13.328 0 00-4.192-5.244A24.963 24.963 0 0093.57 13.94a14.919 14.919 0 00-6.94 4.452c-1.754 2.163-5.13 4.091-4.233 6.728l-.773.362z" fill="#2F2E41" />
                <path d="M102.113 9.896a35.939 35.939 0 0113.074-8.457A18.396 18.396 0 01125.092.21c3.305.665 6.43 2.95 7.352 6.193.751 2.65-.025 5.505-1.195 8.002-1.17 2.497-2.731 4.81-3.678 7.398a16.886 16.886 0 0016.992 22.644c-3.247.436-6.24 1.962-9.413 2.773-3.173.812-6.919.757-9.277-1.516-2.495-2.406-2.545-6.317-2.424-9.78l.537-15.447c.091-2.626.17-5.336-.778-7.787-.947-2.452-3.197-4.598-5.825-4.575-1.99.017-3.753 1.223-5.35 2.413-1.597 1.19-3.288 2.459-5.27 2.636-1.984.177-4.249-1.29-4.1-3.276" fill="#2F2E41" />
                <path d="M69.353 127.571a8.29 8.29 0 113.195-15.942c.34.144.67.31.988.5L107.239 97l.947-9.14 14.528-.39-.096 15.218a8.196 8.196 0 01-5.923 7.792l-39.411 11.217c-.076.26-.166.516-.269.767a8.32 8.32 0 01-7.658 5.107h-.004z" fill="#FEB8B8" />
                <path d="M121.483 94.927c-.413.209-.864.331-1.327.359l-10.526.647a3.394 3.394 0 01-3.591-3.175l-1.156-18.797a8.663 8.663 0 0117.294-1.064l1.155 18.797a3.398 3.398 0 01-1.848 3.233z" fill="#CCC" />
                <rect fill="#3F3D56" x="36.46" y="124.199" width="64.782" height="5.273" rx="1.778" />
                <path d="M12.301 124.576V87.664a4.902 4.902 0 014.897-4.896H84.24a4.902 4.902 0 014.896 4.896v36.912a4.902 4.902 0 01-4.896 4.896H17.198a4.902 4.902 0 01-4.897-4.896z" fill="#3F3D56" />
                <circle fill="#FFF" cx="51.525" cy="106.122" r="4.52" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section><style>#header-two .d-flex{
    height:500px;
  }
  
  #header-two .col-md-6 svg{
    margin-top:5rem;
  }
  
  @media(max-width:768px){
    #header-two .d-flex{
      height:200px;
    }
    #header-two .col-md-6 svg{
      margin-top:1rem;
      height:300px;
    }
  }</style>`
  },
  {
    id: 'section-blog',
    label: 'Blog',
    category: 'Sections',
    attributes: {
      class: 'fa fa-th-large'
    },
    content: `<section id="blog">
        <div class="section-header container">
          <h3 class="display-6 p-4 text-uppercase">Recent Posts</h3>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 mb-2">
              <div class="post bg-white shadow-sm rounded">
                <div class="post-image" style="height:200px;">
                  <img src="https://picsum.photos/300" alt="" style="height:100%;width:100%;object-fit:cover;">
                </div>
                <div class="post-content p-4">
                  <a href="#" class="text-decoration-none text-dark text-uppercase">
                    <h3>Post Title</h3>
                  </a>
                  <div class="row my-3">
                    <div class="col-md-6"><small><span class="fas fa-user me-2"></span> John Doe</small></div>
                    <div class="col-md-6">
                      <small> <span class="fas fa-clock me-2"></span> 4 min read</small>
                    </div>
                  </div>
                  <p class="post-content mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio delectus assumenda, voluptatibus rem labore nesciunt magnam ab provident odio ipsam!
      
                  </p>
                  <button class="btn btn-outline-primary">Continue Reading <span class="ms-2 fa fa-arrow-right"></span></button>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-2">
              <div class="post bg-white shadow-sm rounded">
                <div class="post-image" style="height:200px;">
                  <img src="https://picsum.photos/301" alt="" style="height:100%;width:100%;object-fit:cover;">
                </div>
                <div class="post-content p-4">
                  <a href="#" class="text-decoration-none text-dark text-uppercase">
                    <h3>Post Title</h3>
                  </a>
                  <div class="row my-3">
                    <div class="col-md-6"><small><span class="fas fa-user me-2"></span> John Doe</small></div>
                    <div class="col-md-6">
                      <small> <span class="fas fa-clock me-2"></span> 4 min read</small>
                    </div>
                  </div>
                  <p class="post-content mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio delectus assumenda, voluptatibus rem labore nesciunt magnam ab provident odio ipsam!
      
                  </p>
                  <button class="btn btn-outline-primary">Continue Reading <span class="ms-2 fa fa-arrow-right"></span></button>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-2">
              <div class="post bg-white shadow-sm rounded">
                <div class="post-image" style="height:200px;">
                  <img src="https://picsum.photos/302" alt="" style="height:100%;width:100%;object-fit:cover;">
                </div>
                <div class="post-content p-4">
                  <a href="#" class="text-decoration-none text-dark text-uppercase">
                    <h3>Post Title</h3>
                  </a>
                  <div class="row my-3">
                    <div class="col-md-6"><small><span class="fas fa-user me-2"></span> John Doe</small></div>
                    <div class="col-md-6">
                      <small> <span class="fas fa-clock me-2"></span> 4 min read</small>
                    </div>
                  </div>
                  <p class="post-content mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio delectus assumenda, voluptatibus rem labore nesciunt magnam ab provident odio ipsam!
      
                  </p>
                  <button class="btn btn-outline-primary">Continue Reading <span class="ms-2 fa fa-arrow-right"></span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`
  },
  {
    id: 'section-testimonial',
    label: 'Testimonial',
    category: 'Sections',
    attributes: {
      class: 'fa fa-sitemap'
    },
    content: `<section id="testimonial">
      <div class="section-header container">
          <h3 class="display-6 p-4 text-uppercase">Testimonials</h3>
        </div>
        <div class="container-fluit">
       
          <div id="splide" class="splide">
            <div class="splide__track">
              <ul class="splide__list">
                <li class="splide__slide py-5 px-4 m-4 rounded shadow bg-white">
                  <div class="testimonial text-center">
                      <img src="https://randomuser.me/api/portraits/men/32.jpg" class="rounded-circle avatar p-1" width="58" alt="">
                    <p class="my-2"><b>John Doe</b><br><small>Backend developer</small></p>
                    <div class="my-2"><span class="fa fa-star mx-2 text-primary"></span><span class="fa fa-star mx-2 text-primary"></span><span class="fa fa-star mx-2 text-primary"></span><span class="fa fa-star mx-2 text-primary"></span><span class="fa fa-star mx-2 text-primary"></span></div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium voluptates ut ad laudantium.</p>
                  </div>
                  <span class="fa fa-quote-left fa-3x text-muted"></span>
                </li>
                <li class="splide__slide py-5 px-4 m-4 rounded shadow bg-white">
                  <div class="testimonial text-center">
                      <img src="https://randomuser.me/api/portraits/men/32.jpg" class="rounded-circle avatar p-1" width="58" alt="">
                    <p class="my-2"><b>Steve</b><br><small>Co-founder of company</small></p>
                    <div class="my-2"><span class="fa fa-star mx-2 text-primary"></span><span class="fa fa-star mx-2 text-primary"></span><span class="fa fa-star mx-2 text-primary"></span><span class="fa fa-star mx-2 text-primary"></span><span class="fa fa-star mx-2 text-primary"></span></div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium voluptates ut ad laudantium.</p>
                  </div>
                  <span class="fa fa-quote-left fa-3x text-muted"></span>
                </li>
                <li class="splide__slide py-5 px-4 m-4 rounded shadow bg-white">
                  <div class="testimonial text-center">
                      <img src="https://randomuser.me/api/portraits/women/31.jpg" class="rounded-circle avatar p-1" width="58" alt="">
                    <p class="my-2"><b>Jessica</b><br><small>Product Manager</small></p>
                    <div class="my-2"><span class="fa fa-star mx-2 text-primary"></span><span class="fa fa-star mx-2 text-primary"></span><span class="fa fa-star mx-2 text-primary"></span><span class="fa fa-star mx-2 text-primary"></span><span class="fa fa-star mx-2 text-primary"></span></div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium voluptates ut ad laudantium.</p>
                  </div>
                  <span class="fa fa-quote-left fa-3x text-muted"></span>
                </li>
              </ul>
            </div>
          </div>
      
        </div>
      </section>
      <style>
      #testimonial .splide{
        height:400px;
      }
      #testimonial .splide__slide{
        opacity:0.3;
        position:relative;
      }
      #testimonial .splide__slide.is-active{
         opacity:1;
      }
      #testimonial .avatar{
        border:1px solid var(--theme-color);
      }
      
      #testimonial .splide__slide .fa-quote-left{
        position:absolute;
        top:54px;
        left:40px;
        opacity:0.2;
      }
      #testimonial .splide__arrows .splide__arrow{
        top:-1rem;
        background:#fff;
      }
      #testimonial .splide__arrows .splide__arrow--prev{
          left:auto;
          right:4rem;
      }
      </style>`
  },
  {

    id: 'section-gallery',
    label: 'Gallery',
    category: 'Sections',
    attributes: {
      class: 'fa fa-th'
    },
    content:`<section id="gallery">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="display-4 my-4 text-uppercase">Lightbox images & videos</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="image-wrap mb-4">
            <a href="https://picsum.photos/400" class="glightbox" data-title="My title" data-description="description here" data-desc-position="right" data-type="image" data-effect="fade"><img src="https://picsum.photos/400" alt="" class="img-fluid"></a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="image-wrap mb-4">
            <a href="https://picsum.photos/401" class="glightbox" data-title="My title" data-description="description here" data-desc-position="right" data-type="image" data-effect="fade"><img src="https://picsum.photos/401" alt="" class="img-fluid"></a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="image-wrap mb-4">
            <a href="https://biati-digital.github.io/glightbox/demo/pexels-video-1550080.mp4" class="glightbox" data-title="My title" data-description="description here" data-type="video" data-effect="fade"><img src="https://picsum.photos/402" alt="" class="img-fluid"></a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="image-wrap mb-4">
            <a href="https://picsum.photos/403" class="glightbox" data-title="My title" data-description="description here" data-desc-position="right" data-type="image" data-effect="fade"><img src="https://picsum.photos/403" alt="" class="img-fluid"></a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="image-wrap mb-4">
            <a href="https://picsum.photos/399" class="glightbox" data-title="My title" data-description="description here" data-desc-position="right" data-type="image" data-effect="fade"><img src="https://picsum.photos/399" alt="" class="img-fluid"></a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="image-wrap mb-4">
            <a href="https://www.youtube-nocookie.com/embed/pF37tPGkWio" class="glightbox" data-title="My title" data-description="description here" data-desc-position="right" data-type="video" data-effect="fade"><img src="https://picsum.photos/398" alt="" class="img-fluid"></a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="image-wrap mb-4">
            <a href="https://picsum.photos/397" class="glightbox" data-title="My title" data-description="description here" data-type="image" data-effect="fade"><img src="https://picsum.photos/397" alt="" class="img-fluid"></a>
          </div>
        </div>
        <div class="col-md-3">
          <div class="image-wrap mb-4">
            <a href="https://picsum.photos/396" class="glightbox" data-title="My title" data-description="description here" data-desc-position="right" data-type="image" data-effect="fade"><img src="https://picsum.photos/396" alt="" class="img-fluid"></a>
          </div>
        </div>
      </div>
    </div>
  </section><style>.image-wrap{
    height:250px;
  }
  .image-wrap img{
    transition:all ease 0.4s;
    width:100%;
    height:100%;
    object-fit:cover;
    cursor:zoom-in;
  }
  
  .image-wrap img:hover{
      transform:scale(0.99);
  }</style>`
  },
  {
    id:'section-brands',
    label:'Brands',
    category: 'Sections',
    attributes: {
       class: 'fa fa-ellipsis-h'
    },
    content:`<section id="brands" class="bg-white">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 col-md-3 text-center">
          <p class="text-muted mb-2">Google</p><img src="https://cdn.statically.io/gh/ronaldaug/gramateria/refactor/gramateria/develop/svg/brands/google.svg" alt="Google">
        </div>
        <div class="col-lg-2 col-md-3 text-center">
          <p class="text-muted mb-2">Nike</p><img src="https://cdn.statically.io/gh/ronaldaug/gramateria/refactor/gramateria/develop/svg/brands/google.svg" alt="Nike">
        </div>
        <div class="col-lg-2 col-md-3 text-center">
          <p class="text-muted mb-2">Apple</p><img src="https://cdn.statically.io/gh/ronaldaug/gramateria/refactor/gramateria/develop/svg/brands/apple.svg" alt="Apple">
        </div>
        <div class="col-lg-2 col-md-3 text-center">
          <p class="text-muted mb-2">IBM</p><img src="https://cdn.statically.io/gh/ronaldaug/gramateria/refactor/gramateria/develop/svg/brands/ibm.svg" alt="IBM">
        </div>
        <div class="col-lg-2 col-md-3 text-center">
          <p class="text-muted mb-2">Uber</p><img src="https://cdn.statically.io/gh/ronaldaug/gramateria/refactor/gramateria/develop/svg/brands/uber.svg" alt="Uber">
        </div>
        <div class="col-lg-2 col-md-3 text-center">
          <p class="text-muted mb-2">Window</p><img src="https://cdn.statically.io/gh/ronaldaug/gramateria/refactor/gramateria/develop/svg/brands/window.svg" alt="Window">
        </div>
      </div>
    </div>
  </section><style>#brands img{
    opacity:0.3;
 }</style>`
  },
  {
    id:'section-contact',
    label:'Contact',
    category:'Sections',
    attributes:{
      class:'fa fa-envelope'
    },
    content:`<section id="contact" class="bg-white">
    <div class="container shadow p-5">
      <div class="row">
        <div class="col-lg-6">
          <div class="address p-4 rounded shadow bg-primary text-white d-flex flex-column align-items-center justify-content-center">
               <h2 class="text-uppercase my-4">We love to hear from you</h2>
            <div class="mb-4 border border-1 border-top border-white" style="width:100px;"></div>
             <p>HUTCHINSON</p>
              <p>	4663 Sunny Day Drive</p>
            <p>714-778-6685</p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="contact-form p-4">
            <form id="contactForm" action="#" novalidate>
              <div class="validate-message"></div>
              <div class="form-group is-invalid my-3">
                <label for="name">Name</label>
                <input type="text" id="name" class="form-control" name="name" required>
   <div class="invalid-feedback">Name is required</div>
              </div>
              <div class="form-group my-3">
                 <label for="email">Email</label>
                <input type="email" id="email" class="form-control" name="email" required><div class="invalid-feedback">Email is required</div></div>
              <div class="form-group my-3">
                <label for="phone">Phone <small class="text-muted">- optional</small></label>
                <input type="text" id="phone" class="form-control" name="phone"></div>
              <div class="form-group my-3">
                <label for="message">Message</label>
                <textarea name="message" id="message" class="form-control" required></textarea><div class="invalid-feedback">Message is required</div></div>
              <div class="form-group my-3 d-flex justify-content-end">
                <button class="btn btn-primary btn-lg">
                  <span class="fa fa-envelope me-2"></span>Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section><style>.address{
      height:500px;
    }
    
    .contact-form .form-group .form-control{
      border:0;
      padding:4px 0;
      border-bottom:1px solid #ddd;
      border-radius:0;
    }
    
    .contact-form .form-group .form-control:focus{
      outline:none;
      box-shadow:none;
      border-bottom:1px solid #0d6efd;
    }
    
    .contact-form .form-group textarea{
      min-height:120px;
    }</style>`
  },
  {
    id:'section-subscribe',
    label:'Subscribe',
    category:'Sections',
    attributes:{
      class:"fa fa-paper-plane"
    },
    content:`<section id="subscribe" class="p-3 p-sm-5">
    <div class="container">
        <div class="subscribe-wrap d-flex align-items-center justify-content-center p-3 p-sm-5 shadow m-5 bg-white rounded">
          
             <form id="subscribe-form" action="#" method="POST">
               <h2 class="display-6 text-uppercase text-center my-4">Subscribe</h2>
              <div class="input-group">
    <input type="text" class="form-control border-primary" placeholder="Email">
    <div class="input-group-append">
      <button class="subscribe-btn btn px-sm-4 btn-primary" type="button">Submit</button>
    </div>
  </div>
               <p class="text-center my-4"><small>Never miss an update from us.</small></p>
            </form>
          
          
          
          <svg class="mail-icon" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="84.44%" y1="83.877%" x2="38.737%" y2="39.717%" id="a"><stop stop-color="#D2DEFF" stop-opacity="0" offset="0%"/><stop stop-color="#B7C5FF" offset="100%"/></linearGradient></defs><g fill-rule="nonzero" fill="none"><path d="M196.044 39.68c-8.733-22.221-35.635-35.547-58.42-26.728-26.009 10.066-17.385 51.434-41.01 59.8-12.76 4.518-31.625-12.361-44.518-14.95C28.338 53.032 6.83 69.796 1.534 93.011c-5.404 23.683 3.262 55.316 29.284 61.744 30.996 7.657 47.141-20.207 73.144-28.207 26.683-8.21 56.352 11.18 78.443-12.413 16.32-17.43 22.287-52.45 13.64-74.454z" fill="url(#a)" transform="translate(0 5)"/><path d="M186.268 54.45c0-15.428-12.507-27.936-27.936-27.936-11.953 0-22.148 7.51-26.137 18.066H31.177a7.812 7.812 0 00-7.813 7.813v86.488a7.812 7.812 0 007.813 7.813h137.646a7.812 7.812 0 007.813-7.813V75.545c5.898-5.122 9.632-12.67 9.632-21.095z" fill="#2626BC" opacity=".1"/><g fill="#FFF"><path d="M168.823 136.928H31.177a7.812 7.812 0 01-7.813-7.812V42.627a7.812 7.812 0 017.813-7.812h137.646a7.812 7.812 0 017.813 7.812v86.489a7.812 7.812 0 01-7.813 7.812z"/><path d="M102.38 72.075l74.256 57.04a7.812 7.812 0 01-7.813 7.813H31.177a7.812 7.812 0 01-7.813-7.812L97.62 72.075a3.906 3.906 0 014.76 0z"/><path d="M97.62 99.669L23.364 42.627a7.812 7.812 0 017.813-7.812h137.646a7.812 7.812 0 017.813 7.812L102.38 99.67a3.907 3.907 0 01-4.76 0z"/></g><path d="M144.901 126.533H132.35a1.953 1.953 0 01-1.953-1.953v-8.654c0-1.078.874-1.953 1.953-1.953H144.9c1.08 0 1.953.875 1.953 1.953v8.654a1.953 1.953 0 01-1.953 1.953z" fill="#6583FE"/><g fill="#0D6EFD"><path d="M121.825 118.571h-10.873a1.953 1.953 0 110-3.906h10.873a1.953 1.953 0 110 3.906zM121.825 126.533H83.609a1.953 1.953 0 110-3.906h38.216a1.953 1.953 0 110 3.906z"/></g><g fill="#0D6EFD" transform="translate(21.094 12.422)"><circle stroke="#FFF" stroke-width="20" transform="rotate(-80.792 137.204 32.266)" cx="137.204" cy="32.266" r="27.933"/><path d="M137.238 62.152c16.481 0 29.89-13.408 29.89-29.89 0-16.48-13.408-29.889-29.89-29.889-16.481 0-29.89 13.409-29.89 29.89 0 9.587 4.543 18.129 11.584 23.602L80.096 85.698c-.7.538-1.678.538-2.38 0L4.294 29.297a5.87 5.87 0 015.789-4.95h89.596a1.953 1.953 0 100-3.907H10.083c-5.385 0-9.766 4.38-9.766 9.765v86.489c0 5.385 4.381 9.765 9.766 9.765h137.646c5.385 0 9.766-4.38 9.766-9.765V65.077a1.953 1.953 0 10-3.906 0v47.653l-51.136-39.28 19.899-15.286a29.694 29.694 0 0014.886 3.988zM55.36 73.45L4.223 112.73V34.17l51.136 39.28zm98.153 44.147c-.437 2.803-2.86 4.956-5.783 4.956H10.083c-2.923 0-5.346-2.153-5.783-4.956l54.266-41.685 16.77 12.883a5.852 5.852 0 003.57 1.211 5.85 5.85 0 003.57-1.21l16.77-12.884 54.266 41.685zm-42.257-85.334c0-14.327 11.656-25.983 25.983-25.983 14.328 0 25.983 11.656 25.983 25.983s-11.655 25.983-25.983 25.983c-14.327 0-25.983-11.656-25.983-25.983z"/></g><path d="M146.138 35.158l3.987 9.527-3.987 9.527c-.677 1.618.957 3.239 2.57 2.55l24.07-10.281c1.58-.676 1.58-2.917 0-3.592l-24.07-10.281c-1.613-.69-3.247.932-2.57 2.55z" fill="#FFF"/><g fill="#6583FE"><path d="M129.23 16.59a5.645 5.645 0 01-4.005-1.656 5.67 5.67 0 010-8.01 5.67 5.67 0 018.01 0 5.67 5.67 0 010 8.01 5.645 5.645 0 01-4.005 1.656zm0-7.418c-.45 0-.9.171-1.244.514a1.76 1.76 0 000 2.486 1.76 1.76 0 002.486 0 1.76 1.76 0 000-2.486 1.753 1.753 0 00-1.242-.514zM85.366 164.107a5.647 5.647 0 01-4.005-1.656 5.67 5.67 0 010-8.01 5.67 5.67 0 018.01 0 5.67 5.67 0 010 8.01 5.646 5.646 0 01-4.005 1.656zm0-7.418c-.45 0-.9.171-1.243.514a1.76 1.76 0 000 2.486 1.76 1.76 0 002.486 0 1.76 1.76 0 000-2.486 1.753 1.753 0 00-1.243-.514zM115.148 21.62c-.5 0-1-.19-1.38-.572l-2.33-2.33-2.33 2.33a1.953 1.953 0 01-2.762-2.762l3.71-3.711c.763-.762 2-.762 2.762 0l3.711 3.71a1.953 1.953 0 01-1.38 3.335zM171.776 156.688c-.5 0-1-.19-1.381-.572l-2.33-2.33-2.33 2.33a1.953 1.953 0 01-2.762-2.762l3.711-3.71c.762-.763 2-.763 2.762 0l3.71 3.71a1.953 1.953 0 01-1.38 3.334zM69.877 158.544c-.5 0-1-.19-1.381-.572l-2.33-2.33-2.33 2.33a1.953 1.953 0 01-2.762-2.762l3.71-3.711c.763-.763 2-.763 2.762 0l3.711 3.71a1.953 1.953 0 01-1.38 3.335z"/></g></g></svg>
      </div>
    </div>
  </section><style>.subscribe-btn{
    border-top-left-radius:0;
    border-bottom-left-radius:0;
  }
  
  #subscribe{
    background: rgb(13,143,253);
    background: linear-gradient(325deg, rgba(13,143,253,1) 0%, rgba(13,110,253,1) 68%, rgba(29,13,253,1) 100%);
  }
  #subscribe .subscribe-wrap{
     position:relative;
  }
  
  #subscribe .subscribe-wrap svg.mail-icon{
    position:absolute;
    top:-80px;
    left:10px;
    z-index:0;
  }
  
  form#subscribe-form{
    width:500px;
  }
  
  @media(max-width:768px){
    form#subscribe-form{
      max-width:500px;
    }
    #subscribe .subscribe-wrap svg.mail-icon{
      display:none;
    }
  }</style>`
  },
  {
    id:'section-parallax',
    label:'Parallax',
    category:'Sections',
    attributes:{
      class:"fa fa-copy"
    },
    content:`<section id="parallax" class="parallax">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="parallax-content p-4 shadow bg-white rounded text-center">
            
         
          <h2>Title text</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae repellendus maiores enim dolore nesciunt!</p>
             </div>
        </div>
      </div>
    </div>
  </section><style>
  .parallax-content{
    height:200px;
   opacity:0.8;
   margin-top:150px;
 }
 
 .parallax {
   /* The image used */
   background-image: url("https://picsum.photos/1500");
 
   /* Set a specific height */
   min-height: 500px;
 
   /* Create the parallax scrolling effect */
   background-attachment: fixed;
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
 }
  </style>`
  },
  {
    id:'section-team',
    label:'Team',
    category:'Sections',
    attributes:{
      class:'fa fa-th'
    },
    content:`<section id="team">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="text-center">OUR AMAZING TEAM</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">

                <div class="box p-3 shadow bg-white rounded my-3">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="https://res.cloudinary.com/dpnea22ek/image/upload/v1627660134/user1.png" alt=""
                                width="100%">
                        </div>
                        <div class="col-md-8">
                            <h4>Peter J. Lamy</h4>
                            <p class="my-2"><small>Software Developer</small></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing tristique hendrerit laoreet.</p>
                            <div class="social-icons">
                                <a href="#" class="me-2"><span class="fa fa-facebook"></span></a><a href="#"
                                    class="me-2"><span class="fa fa-instagram"></span></a><a href="#" class="me-2"><span
                                        class="fa fa-twitter"></span></a><a href="#" class="me-2"><span
                                        class="fa fa-linkedin"></span></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-md-6">

                <div class="box p-3 shadow bg-white rounded my-3">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="https://res.cloudinary.com/dpnea22ek/image/upload/v1627660145/user4.png" alt=""
                                width="100%">
                        </div>
                        <div class="col-md-8">
                            <h4>June D. Smith</h4>
                            <p class="my-2"><small>Product Manager</small></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing tristique hendrerit laoreet.</p>
                            <div class="social-icons">
                                <a href="#" class="me-2"><span class="fa fa-facebook"></span></a><a href="#"
                                    class="me-2"><span class="fa fa-instagram"></span></a><a href="#" class="me-2"><span
                                        class="fa fa-twitter"></span></a><a href="#" class="me-2"><span
                                        class="fa fa-linkedin"></span></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-md-6">

                <div class="box p-3 shadow bg-white rounded my-3">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="https://res.cloudinary.com/dpnea22ek/image/upload/v1627660134/user3.png" alt=""
                                width="100%">
                        </div>
                        <div class="col-md-8">
                            <h4>Dianna C. Avila</h4>
                            <p class="my-2"><small>Graphic Designer</small></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing tristique hendrerit laoreet.</p>
                            <div class="social-icons">
                                <a href="#" class="me-2"><span class="fa fa-facebook"></span></a><a href="#"
                                    class="me-2"><span class="fa fa-instagram"></span></a><a href="#" class="me-2"><span
                                        class="fa fa-twitter"></span></a><a href="#" class="me-2"><span
                                        class="fa fa-linkedin"></span></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-md-6">

                <div class="box p-3 shadow bg-white rounded my-3">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="https://res.cloudinary.com/dpnea22ek/image/upload/v1627660147/user2.png" alt=""
                                width="100%">
                        </div>
                        <div class="col-md-8">
                            <h4>Robert C. Young</h4>
                            <p class="my-2"><small>Web Designer</small></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing tristique hendrerit laoreet.</p>
                            <div class="social-icons">
                                <a href="#" class="me-2"><span class="fa fa-facebook"></span></a><a href="#"
                                    class="me-2"><span class="fa fa-instagram"></span></a><a href="#" class="me-2"><span
                                        class="fa fa-twitter"></span></a><a href="#" class="me-2"><span
                                        class="fa fa-linkedin"></span></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>`
  },
  {
    id: 'section-footer',
    label: 'Footer',
    category: 'Sections',
    attributes: {
      class: 'fa fa-window-minimize'
    },
    content: `<section id="footer">
      <div class="container py-4">
        <div class="row">
          <div class="col-md-4">
            <h3 class="text-primary">G.</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla unde eum dolor, recusandae iusto dolorum.</p>
            <p>
              <b>Follow Us</b>
              <span class="fa fa-facebook me-2"></span>
              <span class="fa fa-instagram me-2"></span>
              <span class="fa fa-twitter me-2"></span>
              <span class="fa fa-linked-in me-2"></span>
            </p>
          </div>
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-4">
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><b>SITE MAP</b></li>
                <li class="list-group-item">About</li>
                <li class="list-group-item">Contact</li>
                <li class="list-group-item">Login</li>
                <li class="list-group-item">Sign Up</li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul class="list-group list-group-flush">
                <li class="list-group-item text-uppercase"><b>HELP</b></li>
                <li class="list-group-item">Tutorials</li>
                <li class="list-group-item">Support</li>
                <li class="list-group-item">FAQ</li>
                <li class="list-group-item">Create ticket</li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul class="list-group list-group-flush">
                <li class="list-group-item text-uppercase"><b>TERMS</b></li>
                <li class="list-group-item">Terms of Service</li>
                <li class="list-group-item">Privacy policy</li>
                <li class="list-group-item">Service Agreement</li>
              </ul>
            </div>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-12">
            <p class="text-center text-muted">
              <small>&copy; 2019-2021 | Gramateria | All Rights Reserved.</small>
            </p>
          </div>
        </div>
      </div>
    </section><style>#footer .list-group-item {
      background: transparent;
  }</style>`
  },
  {
    id: 'section-footer-two',
    label: 'Footer Two',
    category: 'Sections',
    attributes: {
      class: 'fa fa-window-minimize'
    },
    content: `<section id="footer-two">
      <div class="container py-4">
        <div class="row">
          <div class="col-md-4">
            <h3 class="text-primary">G.</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla unde eum dolor, recusandae iusto dolorum.</p>
            <p>
              <b>Follow Us</b>
              <span class="fa fa-facebook me-2"></span>
              <span class="fa fa-instagram me-2"></span>
              <span class="fa fa-twitter me-2"></span>
              <span class="fa fa-linked-in me-2"></span>
            </p>
          </div>
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-4">
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><b>SITE MAP</b></li>
                <li class="list-group-item">About</li>
                <li class="list-group-item">Contact</li>
                <li class="list-group-item">Login</li>
                <li class="list-group-item">Sign Up</li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul class="list-group list-group-flush">
                <li class="list-group-item text-uppercase"><b>HELP</b></li>
                <li class="list-group-item">Tutorials</li>
                <li class="list-group-item">Support</li>
                <li class="list-group-item">FAQ</li>
                <li class="list-group-item">Create ticket</li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul class="list-group list-group-flush">
                <li class="list-group-item text-uppercase"><b>TERMS</b></li>
                <li class="list-group-item">Terms of Service</li>
                <li class="list-group-item">Privacy policy</li>
                <li class="list-group-item">Service Agreement</li>
              </ul>
            </div>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-12">
            <p class="text-center text-muted">
              <small>&copy; 2019-2021 | Gramateria | All Rights Reserved.</small>
            </p>
          </div>
        </div>
      </div>
    </section><style>#footer-two{
      background: #1e2d56;
      color: #85a0bd;
  }
  #footer-two .list-group-item b{
      color:#b9d2ec;
  }
  #footer-two .list-group-item {
      background: transparent;
      color: #85a0bd;
  }</style>`
  }
]
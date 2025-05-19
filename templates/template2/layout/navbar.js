document.writeln(`
<nav class="navbar navbar-dark bg-dark p-0 d-block">
   <section class="py-lg-3">
      <div class="container-lg d-flex flex-wrap align-items-center column-gap-2 column-gap-lg-3">
         <h1 class="text-reset m-0 lh-1 me-auto align-items-center">
            <a href="index.html" class="navbar-brand d-flex column-gap-2 p-0 align-items-center">
               <div class="ratio ratio-1x1" style="width: 48px;">
                  <img src="../../asset/img/logo-p.png" class="object-fit-contain" alt="" style="filter: invert();">
               </div>
               <div>
                  <p class="mb-1 lh-1" style="font-size: 1.75rem;">
                     <b class="fw-bold">FactaBot</b> <br>
                  </p>
                  <p class="m-0 lh-1 text-uppercase text-warning" style="font-size: .65rem;">
                     Real news. Sharp jokes. Zero puppeteers
                  </p>
               </div>
            </a>
         </h1>
         <div class="d-none d-lg-flex align-items-lg-center column-gap-lg-3">
            <form action="">
               <div class="input-group">
                  <input type="search" class="form-control border-light border-end-0" placeholder="Search">
                  <button class="btn btn-outline-light border-start-0">
                     <i class="fas fa-search"></i>
                  </button>
               </div>
            </form>
            <button class="btn btn-outline-light">Login</button>
         </div>
         <button class="navbar-toggler rounded-0 border-0 shadow-none p-lg-0" data-bs-toggle="offcanvas" data-bs-target="#sidebar">
            <span class="navbar-toggler-icon"></span>
         </button>
      </div><!-- end container -->
   </section>
   <section>
      <div class="text-bg-secondary">
         <div class="container-lg d-flex flex-nowrap">
            <div>
               <button class="btn btn-sm btn-dark rounded-0 border-0 opacity-75 h-100">
                  <i class="fas fa-chevron-left"></i>
               </button>
            </div>
            <div class="w-100 overflow-hidden">
               <div class="overflow-x-auto py-1 px-2 w-100">
                  <ul class="nav flex-row flex-nowrap column-gap-2 text-nowrap fw-medium">
                     <li class="nav-item">
                        <a href="#" class="nav-link link-hover">
                           <span>asia</span>
                        </a>
                     </li>
                     <li class="nav-item">
                        <a href="#" class="nav-link link-hover active">
                           <span>australia</span>
                        </a>
                     </li>
                     <li class="nav-item">
                        <a href="#" class="nav-link link-hover">
                           <span>china</span>
                        </a>
                     </li>
                     <li class="nav-item">
                        <a href="#" class="nav-link link-hover">
                           <span>europe</span>
                        </a>
                     </li>
                     <li class="nav-item">
                        <a href="#" class="nav-link link-hover">
                           <span>USA</span>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
            <div>
               <button class="btn btn-sm btn-dark rounded-0 border-0 opacity-75 h-100">
                  <i class="fas fa-chevron-right"></i>
               </button>
            </div>
         </div><!-- end container -->
      </div>
      <div class="bg-black text-white">
         <div class="container-lg d-flex flex-nowrap">
            <div>
               <button class="btn btn-sm btn-secondary rounded-0 border-0 opacity-75 h-100">
                  <i class="fas fa-chevron-left"></i>
               </button>
            </div>
            <div class="w-100 overflow-hidden">
               <div class="overflow-x-auto py-1 px-2 w-100">
                  <ul class="nav flex-row flex-nowrap column-gap-2 text-nowrap fw-medium">
                     <li class="nav-item">
                        <a href="#" class="nav-link link-hover">
                           <span>breaking news</span>
                        </a>
                     </li>
                     <li class="nav-item">
                        <a href="#" class="nav-link link-hover active">
                           <span>politics</span>
                        </a>
                     </li>
                     <li class="nav-item">
                        <a href="#" class="nav-link link-hover">
                           <span>world</span>
                        </a>
                     </li>
                     <li class="nav-item">
                        <a href="#" class="nav-link link-hover">
                           <span>business</span>
                        </a>
                     </li>
                     <li class="nav-item">
                        <a href="#" class="nav-link link-hover">
                           <span>finance</span>
                        </a>
                     </li>
                     <li class="nav-item">
                        <a href="#" class="nav-link link-hover">
                           <span>sports</span>
                        </a>
                     </li>
                     <li class="nav-item">
                        <a href="#" class="nav-link link-hover">
                           <span>health</span>
                        </a>
                     </li>
                     <li class="nav-item">
                        <a href="#" class="nav-link link-hover">
                           <span>technology</span>
                        </a>
                     </li>
                     <li class="nav-item">
                        <a href="#" class="nav-link link-hover">
                           <span>travel & livestyle</span>
                        </a>
                     </li>
                     <li class="nav-item">
                        <a href="#" class="nav-link link-hover">
                           <span>entertainment</span>
                        </a>
                     </li>
                     <li class="nav-item">
                        <a href="#" class="nav-link link-hover">
                           <span>MISC</span>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
            <div>
               <button class="btn btn-sm btn-secondary rounded-0 border-0 opacity-75 h-100">
                  <i class="fas fa-chevron-right"></i>
               </button>
            </div>
         </div><!-- end container -->
      </div>
   </section>
</nav><!-- end navbar -->`)
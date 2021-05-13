//create header of my project
function startPage() {
    pasteHeader()
    pasteModalMobileMenu()
}

let mineSite = 'https://cancer2659.github.io/myProjectBase/'

function pasteHeader() {
    let myHeader = `
    <div class="container">
        <div class="row">
            <div class="col-3 col-md-2 logoBlock">
                <a href="../../index.html">
                    <img src="http://myproject.msk.ru/images/logo11.jpg">
                </a> 
            </div>
            <div class="col-9 col-md-10 d-flex justify-content-end align-items-center">
                <nav id="menuPc">
                    <ul>
                        <li><a href="http://myproject.msk.ru/ru/">Сайт компании</a></li>
                        <li>Руководство</li>
                    </ul>
                </nav>
                <span id="togleMenu" onclick="showMenu()"><i class="fas fa-bars"></i></span>
            </div>
        </div>
    </div>`
    document.getElementById('mainHeader').innerHTML += myHeader
}

function pasteModalMobileMenu() {
    let mobileMenu = document.createElement('div')
    mobileMenu.id = 'mobileMenuBlock'
    mobileMenu.innerHTML=`
                <nav id="menuMobile">
                    <ul>
                        <li><a href="http://myproject.msk.ru/ru/">Сайт компании</a></li>
                        <li><a href="${mineSite}/pages/innerStructure/innerStructure.html">Руководство</a></li>
                    </ul>
                </nav>
                <div id="menuClose" onclick="closeMobileMenu()"><i class="far fa-times-circle"></i></div>
    `
    document.body.appendChild(mobileMenu)
}

function showMenu() {
    let menu = document.getElementById('mobileMenuBlock')
    menu.style.display='block'
}
function closeMobileMenu() {
    let menu = document.getElementById('mobileMenuBlock')
    menu.style.display='none'
}
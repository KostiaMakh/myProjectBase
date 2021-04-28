//create header of my project
function startPage() {
    pasteHeader()
}

function pasteHeader() {
    let myHeader = `
    <div class="container">
        <div class="row">
            <div class="col-2 logoBlock">
                <a href="../../index.html">
                    <img src="http://myproject.msk.ru/images/logo11.jpg">
                </a> 
            </div>
            <div class="col-9 d-flex justify-content-end align-items-center">
                <nav>
                    <ul>
                        <li><a href="http://myproject.msk.ru/ru/">Сайт компании</a></li>
                        <li>Руководство</li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>`
    document.getElementById('mainHeader').innerHTML = myHeader
}

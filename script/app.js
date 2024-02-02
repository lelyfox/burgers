let products = [
    {
        id: 1,
        name: 'Crazy',
        price: 31000,
        img: 'images/products/burger-1.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
    {
        id: 2,
        name: 'Light',
        price: 26000,
        img: 'images/products/burger-2.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
    {
        id: 3,
        name: 'CheeseBurger',
        price: 29000,
        img: 'images/products/burger-3.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
    {
        id: 4,
        name: 'dBurger',
        price: 24000,
        img: 'images/products/burger-4.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
    {
        id: 5,
        name: 'Burger best',
        price: 50000,
        img: 'https://yandex-images.clstorage.net/srN47n237/083015o7XSI5/2Gd0WPfm0OhyDyKRUEfxTjoIrOZL6I0B5accq7r-HpuRagNTamGyC-0Cg_TACHXoot8RBEolhJa9fK4LmvhmLPwzsGzWUxW8Y-vmUSDXsLqL3CziOi2tsJQXPD86S65rkWzllHgWpNxrVSQGB-xw-GL_dRW-ZDIQaVs-3-6cIWsJlyZK8BQyO_a-YhFApTJ4CtvtkzjtTtIghK3dXxoq7bZOhxSKxkZO2obWhPafcIkDrHXwLbaTw37JTz6PfZPJSEem-0Bm04jH_DMBUtTxaKh4HMOLL07zQxYN7K3qWfxWPyTW63ekbeo29uSH74OJEA1l481VMzNtia9v3D3z-WuVxmuhtXJbVZ0Q4aL20BoYeg6QWF9f4_AlnPwf6Xk_lx3XRhompAy6NtQVx8_QeQBPFuEPBVJwr6mcTd4MU4vqNcYog1dCSFVuQ8CBJJKb-6ldcmsNPANCFG6fbTg7X9ZtN1VaN4Wc-0fndTYvoqsADqazTVbyQY_ovn-9HQMZCHV1amCHUtsF_aEhkmUT6CoInVOrTW2w09Q9fMxaGPxUH_XnaqYHncgGlOeETWD50j3m4G8EAuLMeM8Nryyxy_gEBRmgZaPY16yhIpDUoim5-q8ASb_tgNNUPr4NGYlclo81JFp2xe87F3bEtUyw-OPdlRMNZvEzD-lfrEz8kZv75lf7U7YSmda9w9CANQK4CnmPgdvP3fGzJ7_-L4uaLkT91rV7BqdeiKak9ZdvUlmgDDfD7dYTMz2rbgwPfxLISIQ0KJN2Uzg1b-GDENawCnlKn9Pp7t0yoRQ-vw25yuyXXURHeWR1rYqHd9QkjNKYsi0V4Q614XHuO20PXc3CStp3JftRRLHaJkzjERNFgfhYaNzwCd9t89MHng6_S9nNBv6WpFs0xX2pNIcGxo2CG_DsNzOfR4Cxz5v_Dq8_scs5VFeLsHURqeYugLLSVQK5mUhckOlNbyGARX_M0',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
    
]


let wrapperList = document.querySelector('.wrapper__list')


// Функция outBurgers - будет перебирать массив products, получать все данные и выводить их внутри wrapperList 

function outBurgers () {
    
    products.forEach(item => {
        let { name, price, img, id } = item
        
        wrapperList.innerHTML +=  `
        <div class="wrapper__list-card" id=${id}>
            <p class="wrapper__list-count"></p>
            <img class="wrapper__list-image" src="${img}" alt="">
            <h3 class="wrapper__list-title">${name}</h3>
            <div class="wrapper__list-sub">
                <p class="wrapper__list-text">${price} сум</p>
                <button class="wrapper__list-btn"><img src="images/sell-icon.svg" alt=""></button>
            </div>
        </div>
        `
        
    })
}

outBurgers()



let burgersBtn = document.querySelectorAll('.wrapper__list-btn'),
    cartBtn = document.querySelector('.wrapper__navbar-btn'),
    basket = document.querySelector('.wrapper__navbar-basket'),
    cartClose = document.querySelector('.wrapper__navbar-close');
    
    
cartBtn.addEventListener('click', () => basket.classList.add('active'))
cartClose.addEventListener('click', () => basket.classList.remove('active'))

burgersBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        addAmount(btn)
    })
})

function addAmount(btn) {
    // closest() - метод который подключаеться к указаному ближайшему родителю
    // getAttribute() - метод который получает значение указаного атрибута
    let id = btn.closest('.wrapper__list-card').getAttribute('id')

    let currentBurger = products.find((item) => item.id == id)
    
    currentBurger.amount < 10 ?  currentBurger.amount++ : alert('Слишком много')
   
   
}

let score = document.querySelector('.title');

function scoreSum() {
    score.innerHTML++
    let i = setTimeout(() => scoreSum(), 50)
if(score.innerHTML < 30) {    
    score.style.color = 'green'    
}else if(score.innerHTML < 60){
    score.style.color = 'gold'
}else if(score.innerHTML < 100){
    score.style.color = 'orange'    
}else if(score.innerHTML == 100){
    clearTimeout(i)
    score.style.fontSize = '100px'
    score.innerHTML += ' lvl'
    score.style.color = 'red'}

}
scoreSum()




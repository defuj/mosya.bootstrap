var merkSelector = document.querySelectorAll(".select-merk-item");
merkSelector.forEach( (item) => {
    item.addEventListener("click", (e) => {
        merkSelector.forEach( (item) => {
            console.log("remove active");
            item.classList.remove("active");
        });
        item.classList.add("active");
    });
});

$(".input-select-merk").change(function() {
    $(".input-select-merk").not(this).prop('checked', false);
});

var colorSelector = document.querySelectorAll(".select-color-item");
colorSelector.forEach( (item) => {
    item.addEventListener("click", (e) => {
        colorSelector.forEach( (item) => {
            console.log("remove active");
            item.classList.remove("active");
        });
        item.classList.add("active");
    });
});

$(".input-select-color").change(function() {
    $(".input-select-color").not(this).prop('checked', false);
});

var fuelSelector = document.querySelectorAll(".select-fuel-item");
fuelSelector.forEach( (item) => {
    item.addEventListener("click", (e) => {
        fuelSelector.forEach( (item) => {
            console.log("remove active");
            item.classList.remove("active");
        });
        item.classList.add("active");
    });
});

$(".input-select-fuel").change(function() {
    $(".input-select-fuel").not(this).prop('checked', false);
});

function reseltFilter(){
    document.querySelectorAll(".select-merk-item").forEach(item => {
        const resultName = item.textContent.toString().replace(/\s/g, '')
        if(resultName.toString() === "Semua"){
            item.click();
            return false;
        }
    });

    document.querySelectorAll(".select-color-item").forEach(item => {
        const resultName = item.textContent.toString().replace(/\s/g, '')
        if(resultName.toString() === "Semua"){
            item.click();
            return false;
        }
    });

    document.querySelectorAll(".select-fuel-item").forEach(item => {
        const resultName = item.textContent.toString().replace(/\s/g, '')
        if(resultName.toString() === "Semua"){
            item.click();
            return false;
        }
    });
}

function prepareFilter(){
    const params = new URLSearchParams(window.location.search);
    if(params.has('merk')){
        document.querySelectorAll(".select-merk-item").forEach(item => {
            const resultName = item.textContent.toString().replace(/\s/g, '')
            if(params.get('merk').toString() === resultName.toString()){
                item.click();
                return false;
            }
        });
    }

    if(params.has('color')){
        document.querySelectorAll(".select-color-item").forEach(item => {
            const resultName = item.textContent.toString().replace(/\s/g, '')
            if(params.get('color').toString() === resultName.toString()){
                item.click();
                return false;
            }
        });
    }

    if(params.has('fuel')){
        document.querySelectorAll(".select-fuel-item").forEach(item => {
            const resultName = item.textContent.toString().replace(/\s/g, '')
            if(params.get('fuel').toString() === resultName.toString()){
                item.click();
                return false;
            }
        });
    }

    if(params.has('tahun-awal')){
        document.querySelector("#tahun-awal").value = params.get('tahun-awal');
    }

    if(params.has('tahun-akhir')){
        document.querySelector("#tahun-akhir").value = params.get('tahun-akhir');
    }

    if(params.has('harga-awal')){
        document.querySelector("#harga-awal").value = params.get('harga-awal');
    }

    if(params.has('harga-akhir')){
        document.querySelector("#harga-akhir").value = params.get('harga-akhir');
    }
}
window.onload = prepareFilter();
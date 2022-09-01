const spinnerWhite = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>';
const loading = '<lottie-player src="https://lottie.host/c6adff8b-27bc-48e3-a625-5bcc7331acf1/2TLwoxtwof.json"  background="transparent"  speed="1"  style="width: 150px; height: 300px;" class="ml-auto mr-auto my-4 loading" loop autoplay></lottie-player>';
const storageAvailable = (type) => {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

const setAccount = (data) => {
    if (storageAvailable('localStorage')) {
        localStorage.setItem('account', JSON.stringify(data));
    }
}

const getAccount = () => {
    if (storageAvailable('localStorage')) {
        return JSON.parse(localStorage.getItem('account'));
    }
    return null;
}

const getCodeBooking = () => {
    if (storageAvailable('localStorage')) {
        return localStorage.getItem('code_booking') != null ? localStorage.getItem('code_booking') : null;
    }
    return null;
}

const setCodeBooking = (code) => {
    if (storageAvailable('localStorage')) {
        localStorage.setItem('code_booking', code);
    }
}

const getCurrentCar = () => {
    if (storageAvailable('localStorage')) {
        return localStorage.getItem('current_car') != null ? JSON.parse(localStorage.getItem('current_car')) : null;
    }
    return null;
}

const setCurrentCar = (data) => {
    if (storageAvailable('localStorage')) {
        localStorage.setItem('current_car', JSON.stringify(data));
    }
}

const deleteCurrentCar = () => {
    if (storageAvailable('localStorage')) {
        localStorage.removeItem('current_car');
    }
}

const checkDeffTime = (time1, time2) => {
    var date1 = new Date(time1);
    var date2 = new Date(time2);
    var diff = date2.getTime() - date1.getTime();
    var msec = diff;
    var hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    var mm = Math.floor(msec / 1000 / 60);
    return mm;
}

const checkAccount = () => {
    if (storageAvailable('localStorage')) {
        if(localStorage.getItem('account') !== null){
            var user = getAccount();
            if(user.lasttime !== null && user.lasttime !== undefined){
                var now = new Date().getTime();
                var lasttime = user.lasttime;
                var diff = now - lasttime;
                var msec = diff;
                var hh = Math.floor(msec / 1000 / 60 / 60);
                msec -= hh * 1000 * 60 * 60;
                var mm = Math.floor(msec / 1000 / 60);

                if(mm < 15){
                    console.log('last time : '+lasttime);
                    console.log('update time : ' + now);

                    user.lasttime = now;
                    localStorage.setItem('account', JSON.stringify(user));
                    return true;
                }else{
                    deleteAccount();
                    return false;
                }
            }else{
                const time = new Date().getTime();
                const newUser = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                    image: user.image,
                    lasttime: time
                };
                localStorage.setItem('account', JSON.stringify(newUser));
                return true;
            }
        }
        return localStorage.getItem('account') !== null;
    }
    return false;
}

const deleteAccount = () => {
    if (storageAvailable('localStorage')) {
        localStorage.removeItem('account');
    }
}

const account = {
    id: '',
    name: '',
    email: '',
    phone: '',
    image: '',
};
const pathname = window.location.pathname;

const filter = {
    color: '',
    fuel: '',
    merk: '',
    start_year: '',
    end_year: '',
    start_price: '',
    end_price: '',
}

const setFilter = (data) => {
    if (storageAvailable('localStorage')) {
        localStorage.setItem('filter', JSON.stringify(data));
    }
}

const getFilter = () => {
    if (storageAvailable('localStorage')) {
        return JSON.parse(localStorage.getItem('filter') == null ? JSON.stringify(filter) : localStorage.getItem('filter'));
    }
    return JSON.parse(JSON.stringify(filter));
}

const clearFilter = () => {
    if (storageAvailable('localStorage')) {
        localStorage.setItem('filter', JSON.stringify(filter));
    }
}

const checkSessionOnPage = () => {
    if(checkAccount()){
        // redirect to home page if user is already logged in
        if(pathname === '/login.html' || pathname === '/register.html' || pathname === '/forgot_password.html' || pathname === '/reset_password.html'){
            window.location.href = '/';
        }
    }else{
        if(pathname == '/profile.html' || pathname === '/history.html' || pathname === '/detail_history.html' || pathname === '/input_data_booking.html'  || pathname === '/select_payment_booking.html'  || pathname === '/upload_payment.html' || pathname === '/tracking_location.html') {
            window.location.href = '/login.html';
        }
    }
}

checkSessionOnPage();

// config axios
axios.defaults.baseURL = 'https://apimosya.miebledek.com/';
axios.defaults.headers.common['Authorization'] = 'Basic bW9zeWFBcGk6OWY2NjE1ZjdmYzA1MDNiODEzODIwZTFiYTRiYWQ1MzA=';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

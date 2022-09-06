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

const safeString = (content) => {
    return content.toString().replace(/</g, "&lt;").replace(/>/g, "&gt;")
}

let book = {
    id: '',
    code: '',
    forlup: false,
}
const getLastBooking = (id) => {
    if (storageAvailable('localStorage')) {
        return JSON.parse(localStorage.getItem(`${id}`));
    }
    return null;
}

const setLastBooking = (id, data) => {
    if (storageAvailable('localStorage')) {
        localStorage.setItem(`${id}`, JSON.stringify(data));
    }
}

const deleteLastBooking = (id) => {
    if (storageAvailable('localStorage')) {
        localStorage.removeItem(`${id}`);
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

const getDataBooking = () => {
    if (storageAvailable('localStorage')) {
        return localStorage.getItem('data_booking') != null ? JSON.parse(localStorage.getItem('data_booking')) : null;
    }
    return null;
}

const setDataBooking = (data) => {
    if (storageAvailable('localStorage')) {
        localStorage.setItem('data_booking', JSON.stringify(data));
    }
}

const deleteDataBooking = () => {
    if (storageAvailable('localStorage')) {
        localStorage.removeItem('data_booking');
    }
}

const getBooking = () => {
    if (storageAvailable('localStorage')) {
        return localStorage.getItem('booking') != null ? JSON.parse(localStorage.getItem('booking')) : null;
    }
    return null;
}

const setBooking = (data) => {
    if (storageAvailable('localStorage')) {
        localStorage.setItem('booking', JSON.stringify(data));
    }
}

const deleteBooking = () => {
    if (storageAvailable('localStorage')) {
        localStorage.removeItem('booking');
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
                    //console.log('last time : '+lasttime);
                    //console.log('update time : ' + now);

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

const setLastPage = (url) => {
    if (storageAvailable('localStorage')) {
        localStorage.setItem('last_page', url);
    }
}

const getLastPage = () => {
    if (storageAvailable('localStorage')) {
        return localStorage.getItem('last_page');
    }
    return null;
}

const deleteLastPage = () => {
    if (storageAvailable('localStorage')) {
        localStorage.removeItem('last_page');
    }
}

const checkSessionOnPage = () => {
    if(checkAccount()){
        deleteLastPage();
        // redirect to home page if user is already logged in
        if(pathname === '/login' || pathname === '/register' || pathname === '/forgot_password' || pathname === '/reset_password'){
            window.location.href = '/';
        }
    }else{
        if(pathname == '/profile' || pathname === '/history' || pathname === '/detail_history' || pathname === '/input_data_booking'  || pathname === '/select_payment_booking'  || pathname === '/upload_payment' || pathname === '/tracking_location') {
            setLastPage(document.URL);
            window.location.href = '/login';
        }
    }
}

checkSessionOnPage();

// config axios
axios.defaults.baseURL = 'https://apimosya.miebledek.com/'; //api.mosya.co.id
axios.defaults.headers.common['Authorization'] = 'Basic bW9zeWFBcGk6OWY2NjE1ZjdmYzA1MDNiODEzODIwZTFiYTRiYWQ1MzA=';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

var siteName = document.getElementById('site_name');
var siteUrl = document.getElementById('site_url');
var tableBookmark = document.getElementById('table-bookmark');
var modal = document.getElementById('exampleModal')
var submitButton = document.getElementById('submit-button')
var bookmarArray = [];

//console.log(siteName);
//console.log(siteUrl);
if (localStorage.getItem('bookmarArray') != null) {
    bookmarArray = JSON.parse(localStorage.getItem('bookmarArray'))
    displayBookmark(bookmarArray);
}
function addBookmark() {
    //siteName.value != '' && siteUrl.value != '' 
    if (siteNameValidation() && siteUrlValidation()) {
        var bookmarkList = {
            'siteName': siteName.value,
            'siteUrl': siteUrl.value
        }
        //console.log(bookmarkList);
            bookmarArray.push(bookmarkList);
            localStorage.setItem("bookmarArray", JSON.stringify(bookmarArray))
            displayBookmark(bookmarArray) 
             modal.style.display = 'none';
            modal.style.opacity = '0';
            modal.classList.remove('show');
            // submitButton.removeAttribute("data-bs-toggle");
            // submitButton.removeAttribute("data-bs-target");
            clearInput()
        } else {
            console.log('noo');
            //alert('sorry')
            //submitButton.setAttribute("data-bs-toggle", "modal");
            //submitButton.setAttribute("data-bs-target", "#exampleModal");
            modal.style.display = 'block';
            modal.style.opacity = '1';
            modal.classList.add('show');
            modal.style.background = '#0000002e';

        }
        
        //document.getElementById('exampleModal').style.display = 'none'
        //console.log(bookmarArray)
    
}
function displayBookmark(array) {
    //document.getElementById('exampleModal').style.display = 'none'
    var bookmarkBox = ""
    for (var i = 0; i < array.length; i++) {
        //console.log(array); http://127.0.0.1:5500/index.html
        bookmarkBox += `
        <tr>
            <td>${i + 1}</td>
               <td>${array[i].siteName}</td>
               <td>${array[i].siteUrl}</td>
               <td><button class="btn visit-btn"><i class="fa-solid fa-eye pe-2"></i><a href="https://${array[i].siteUrl}" target="_blank" class="text-white">Visit</a></button></td>
               <td><button class="btn btn-danger" onclick="deleteBookmark(${i})"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
            </tr>
            `
    }
    tableBookmark.innerHTML = bookmarkBox;
    //clearInput()
}
function deleteBookmark(index) {
    console.log(index);
    bookmarArray.splice(index, 1)
    displayBookmark(bookmarArray)
    localStorage.setItem("bookmarArray", JSON.stringify(bookmarArray))
}
function clearInput() {
  siteName.value = "";
  siteUrl.value = "";
  siteName.classList.remove("is-valid");
  siteUrl.classList.remove("is-valid");
}

function siteNameValidation() {
    var regex = /^.{3,}$/;
    if (regex.test(siteName.value) === true) {
        //console.log('match');
        siteName.classList.add("is-valid");
        siteName.classList.remove("is-invalid");
        //document.getElementById('exampleModal').style.display = 'none'
        return true
    } else {
        //console.log('nomatch');
        siteName.classList.add("is-invalid");
        siteName.classList.remove("is-valid");
        return false
    }
}
function siteUrlValidation() {
    var httpsRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.[a-zA-Z]{2,})(\/.*)?$/g;
    if (httpsRegex.test(siteUrl.value) === true) {
        //console.log('match');
        siteUrl.classList.add("is-valid");
        siteUrl.classList.remove("is-invalid");
        //document.getElementById('exampleModal').style.display = 'none'
        return true
    } else {
        //console.log('nomatch');
        siteUrl.classList.add("is-invalid");
        siteUrl.classList.remove("is-valid");
        return false
    }
}
function closeModal(){
    modal.style.display = 'none';
    modal.style.opacity = '0';
    modal.classList.remove('show');
}

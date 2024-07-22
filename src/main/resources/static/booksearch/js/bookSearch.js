/**
 * bookSearch.js
 */

var isPopupOpen = false;
var currentPage = 1;
var itemsPerPage = 5; // 페이지당 도서 수
var totalItems = 0; // 검색 결과 수

function searchBooks(page) {
    let searchInput = $('#searchInput').val();
    page = page || 1; // 기본값: 1

    $.ajax({
        method: 'GET',
        url: 'https://dapi.kakao.com/v3/search/book',
        data: { query: searchInput, page: page },
        headers: { Authorization: "KakaoAK be7033a87775f55ae7de5918c9f90c19" }
    })
        .done(function (response) {
            let books = response.documents;
            totalItems = books.length;

            let searchResults = $('#searchResults');
            searchResults.empty();

            if (totalItems === 0) {
                searchResults.append('<p>검색 결과가 없습니다.</p>');
                $('#pageContainer').hide();
            } else {
                let start = (page - 1) * itemsPerPage;
                let end = start + itemsPerPage;
                let displayedBooks = books.slice(start, end);

                for (let i = 0; i < displayedBooks.length; i++) {
                    let book = displayedBooks[i];
                    let title = book.title;
                    let thumbnail = book.thumbnail;
                    let url = book.url;
                    let authors = book.authors;
                    let publisher = book.publisher;
                    let translators = book.translators;
                    let datetime = book.datetime;
                    let contents = book.contents;
                    let sale_price = book.sale_price;
                    let isbn = book.isbn;

                    let resultHtml = '<div class="book-item">';
                    resultHtml += '<img src="' + thumbnail + '" onclick="showDetails(\'' + title + '\', \'' + authors + '\', \'' + publisher + '\', \'' + translators + '\', \'' + datetime + '\', \'' + contents + '\', \'' + sale_price + '\', \'' + url + '\', \'' + isbn + '\')"/>';
                    resultHtml += '</div>';

                    searchResults.append(resultHtml);
                }

                currentPage = page;
                updatePaginationButtons();
                $('#searchResults').show();
                $('#pageContainer').show();
            }
        })
        .fail(function (error) {
            console.error('책 검색에 실패했습니다:', error);
        });
}

function formatDate(date) {
    let year = date.substr(0, 4);
    let month = date.substr(5, 2);
    let day = date.substr(8, 2);
    return year + '-' + month + '-' + day;
}

function showDetails(title, authors, publisher, translators, datetime, contents, sale_price, url, isbn) {
    let popupContent = $('#popupContent');
    popupContent.empty();

    let formattedDate = formatDate(datetime);

    let details = '<p><b>제목:</b> ' + title + '</p>';
    details += '<p><b>저자:</b> ' + authors + '</p>';
    details += '<p><b>출판사:</b> ' + publisher + '</p>';
    details += '<p><b>번역자:</b> ' + translators + '</p>';
    details += '<p><b>출간일:</b> ' + formattedDate + '</p>';
    details += '<p><b>isbn:</b> ' + isbn + '</p>';
    details += '<div><b>내용:</b> ' + contents + '</div>';
    details += '<p><b>판매 가격:</b> ' + sale_price + '원</p>';
    details += '<button onclick="window.open(\'' + url + '\')">추가 정보</button>';

    popupContent.html(details);

    let popupContainer = $('#popupContainer');
    popupContainer.fadeIn();
    isPopupOpen = true;
}

function updatePaginationButtons() {
    let prevButton = $('#prevButton');
    let nextButton = $('#nextButton');

    prevButton.prop('disabled', currentPage === 1);
    nextButton.prop('disabled', currentPage === Math.ceil(totalItems / itemsPerPage));
}

function showPrevPage() {
    searchBooks(currentPage - 1);
}

function showNextPage() {
    searchBooks(currentPage + 1);
}

$(document).on('click', function (event) {
    let popupContainer = $('#popupContainer');
    if (!isPopupOpen && !$(event.target).closest('#popupContainer').length) {
        popupContainer.fadeOut();
    }
    isPopupOpen = false;
});

function handleSearch(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchBooks();
    }
}

// 인용문 불러오기
//$(document).ready(function () {
//    $('.quote').show();
//});
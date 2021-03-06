// Copyright 2016 Google Inc.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


(function() {
    'use strict';

    var app = {
        isLoading: true,
        spinner: document.querySelector('.loader'),
        container: document.querySelector('.main')
    };

    //Enable sidebar
    $(".button-collapse").sideNav();

    //Enable Login model
    $(document).ready(function() {
        // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
        $('.modal-trigger').leanModal({
            ready: function() {
                $('.button-collapse').sideNav('hide');
                $('ul.tabs').tabs('select_tab', 'login-tab');
            }
        });
    });

    //Login submit
    $("#login-form").on("submit",function(e){
        e.preventDefault();
    	$("#login-progress").toggleClass("hide");
    	$("#login-submit-btn").prop('disabled', true);
    });

    // TODO add service worker code here
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./service-worker.js')
            .then(function() { console.log('Service Worker Registered'); });
    }
})();

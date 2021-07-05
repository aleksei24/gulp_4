// vertical tabs

const verticalTabs = document.querySelector('.vertical-tabs');

if (verticalTabs) {
    (function () {
        let vertTabs = function () {
            let tabs = document.querySelectorAll('.vertical-tabs')[0];

            tabs.addEventListener('click', function (e) {
                let elem = e.target,
                    activeTab = document.querySelector('.vertical-tabs .active'),
                    activeContent = document.querySelector('.item.active'),
                    elemAttr = elem.getAttribute('rel');

                activeTab.classList.remove('active');
                activeContent.classList.remove('active');

                elem.parentElement.classList.add('active');
                document.getElementById(elemAttr).classList.add('active');
            });
        };

        window.onload = vertTabs;
    })();
}

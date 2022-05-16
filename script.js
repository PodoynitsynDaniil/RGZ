            function showModal(messageText, buttonText) {
                let modal = document.getElementsByClassName('modal')[0];
                modal.style.visibility = 'visible';
                modal.style.opacity = '1';

                let message = modal.getElementsByClassName('message')[0];
                message.innerHTML = messageText;
                let button = modal.getElementsByTagName ('button')[0];
                button.innerHTML = buttonText;

                document.body.style.overflow = 'hidden';
                let overlay = document.getElementsByClassName('overlay')[0];
                overlay.style.visibility = 'visible';
                overlay.style.opacity = '1';
            }
            function hideModal() {
                let modal = document.getElementsByClassName('modal')[0];
                setTimeout(function() {
                    modal.style.visibility = 'hidden';
                }, 350); // 200ms + 150ms
                modal.style.opacity = '0';

                document.body.style.overflow = 'auto';
                let overlay = document.getElementsByClassName('overlay')[0];
                setTimeout(function() {
                    overlay.style.visibility = 'hidden';
                }, 200);
                /* overlay.style.opacity = '0'; */
            }
            function notReadyAlert(event) {
                showModal('Sorry, not ready yet!<br>Извините, ещё не готово!','Эх, жаль');
                event.preventDefault();
                return false;
            }

            function search() {
                let name = document.getElementById('search').value;
                let productNumber = null;
                if (name == 'iPad mini') {
                    productNumber = 0;
                } else if (name == 'iPad Air') {
                    productNumber = 1;
                } else if (name == 'iPad Pro') {
                    productNumber = 2;
                } else if (name == 'Huawei MatePad') {
                    productNumber = 3;
                } else if (name == 'Samsung Galaxy Tab S7') {
                    productNumber = 4;
                } else if (name == 'Lenovo M10') {
                    productNumber = 5; 
                } else if (name == 'Nokia T20 SS 4') {
                    productNumber = 6; 
                } else if (name == 'Samsung Galaxy Tab S6') {
                    productNumber = 7; 
                } else if (name == 'Huawei MatePad M5') {
                    productNumber = 8; 
                } else if (name == 'Lenovo TB M7') {
                    productNumber = 9; 
                } else if (name == 'Samsung Galaxy Tab A') {
                    productNumber = 10; 
                } else if (name == 'Prestigio Wize') {
                    productNumber = 11; 
                } else if (name == 'Lenovo Tab M8') {
                    productNumber = 12; 
                } else if (name == 'Huawei MatePad T10s') {
                    productNumber = 13; 
                } else if (name == 'Samsung Galaxy Tab A8') {
                    productNumber = 14; 
                } else if (name == 'Samsung Galaxy Tab A7 Lite') {
                    productNumber = 15; 
                } else if (name == 'Lenovo Tab P11 Plus') {
                    productNumber = 16; 
                } else if (name == 'Prestigio Muze 4G') {
                    productNumber = 17; 
                } else if (name == 'Huawei MatePad Pro') {
                    productNumber = 18; 
                } else if (name == 'Huawei MatePad T3') {
                    productNumber = 19;       
                } else {
                    alert('Товар не найден');
                }
                
                let cards = document.getElementsByClassName('card');
                let card = cards[productNumber];
                card.style.border = '1px dashed red';
                card.style.backgroundColor = 'pink';

                setTimeout(function() {
                    card.style.border = 'none';
                    card.style.backgroundColor = '';
                }, 2000);
            }

            function generateMenu() {
                let menu = document.querySelector('nav.main-menu ul');
                menu.innerHTML = '';

                let items = [
                    {href: 'index.html', text: 'Товары'},
                    {href: 'contacts.html', text: 'Контакты'},
                    {href: '', text: 'Доставка'},
                    {href: 'promotions.html', text: 'Акции'},
                    {href: '', text: 'О нас'},
                ];

                for(let i = 0; i<items.length; i++) {
                    let link = document.createElement('a');
                    link.innerText = items[i].text;
                    link.href = items[i].href;
                    if(items[i].href == '') {
                        link.addEventListener('click', notReadyAlert);
                    }

                    let menuItem = document.createElement('li');
                    menuItem.appendChild(link);

                    menu.appendChild(menuItem);
                }
            }

            function loaded() {
                let searchbox = document.getElementById('search');
                searchbox.addEventListener('keydown', function (key) {
                    if(key.key == 'Enter')
                    search();
                });

                generateMenu();
            }
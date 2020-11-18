
            const select = document.querySelector('select');
            const para = document.querySelector('p');

            select.addEventListener('change', setWeather);

            function setWeather()
            {
                const choice = select.value;

                if (choice === 'Pardalote') {
                    para.textContent = 'Pardalote by fir0002 (CC-by-NC)';
                } else if (choice === 'Purple Swamp Hen') {
                    para.textContent = 'Purple Swamp Hen by Toby Hudson (CC-by-SA)';
                } else if (choice === 'White-headed Stilt') {
                    para.textContent = 'White-headed Stilt by JJ Harrison (CC-by-SA)';
                } else if (choice === 'Inland Thornbill') {
                    para.textContent = 'Inland Thornbill by Peter Jacobs (CC-by-SA)';
                } else if (choice === 'Rose Robin') {
                    para.textcontent = 'Rose Robin by JJ Harrison (CC-by-SA)';
                }
                    para.textContent = '';
                }
            }
       
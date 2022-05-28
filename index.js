
// function contact(event) {
//     event.preventDefault();
//     emailjs
//         .sendForm(
//             'service_31v8w1d',
//             'template_copj48jv',
//             event.target,
//             'user_t3nFbX13MAKY12BvzXcfL'
//         )
//         .then(()=> {

//         })
//         .catch(() => {
//             alert('The email service is down for now. Please contact me directly at rocharocharocha95@gmail.com')
//         })
// }
// 
// 
// 
// 
// 
// 
// 

// function contact(event) {
//     event.preventDefault();
//     emailjs
//     .sendForm(
//         'service_31v8w1d',
//         'template_copj48jv',
//         event.target,
//         'user_t3nFbX13MAKY12BvzXcfL'
//     ).then(() => {
            
//         }).catch(() => {
//             alert(
//                 "The email service is temporarily unavailable. Please contact me directly at rocharocharocha95@gmail.com"
//             );
//         })
// }
// this code that works is from the emailjs documentation
// this code that works is from the emailjs documentation
// this code that works is from the emailjs documentation
// this code that works is from the emailjs documentation
// this code that works is from the emailjs documentation
// this code that works is from the emailjs documentation
// this code that works is from the emailjs documentation
// this code that works is from the emailjs documentation
// this code that works is from the emailjs documentation
// this code that works is from the emailjs documentation
// this code that works is from the emailjs documentation
// this code that works is from the emailjs documentation
// this code that works is from the emailjs documentation
// this code that works is from the emailjs documentation
// this code that works is from the emailjs documentation
// this code that works is from the emailjs documentation
// this code that works is from the emailjs documentation

        window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // generate a five digit number for the contact_number variable
                this.contact_number.value = Math.random() * 100000 | 0;
                // these IDs from the previous steps
                emailjs.sendForm('service_31v8w1d', 'template_rpme5is', this)
                    .then(function() {
                        console.log('SUCCESS!');
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
            });
        }

// function sendMail(params) {
//     var tempParams = {
//         user_name:document.getElementById("fromName").value,
//         to_name:document.getElementById("toName").value,
//         message:document.getElementById("msg").value,
//     }
//     emailjs.send('service_31v8w1d', 'template_copj48jv', tempParams)
//     .then(function(res) {
//         console.log("successTWO", res.status);
//     })
// }
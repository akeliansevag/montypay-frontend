<template lang="">
    <div>
        <Hero 
            title="Contact Us"
            paragraph="MontyPay provides an End-to-End Payment Solution for Merchants"
            image="contact-us"
            hero="55"
        />

        <section id="section-2" class="py-16 lg:py-24 bg-quaternary text-primary overflow-hidden">
            <Blob />
            
            <div class="container">
                <ContentBlock 
                    title="Do you have questions?"
                />

                <div class="flex flex-col lg:flex-row lg:justify-between gap-8 mt-10">
                    <div class="flex w-full lg:w-3/5 xl:w-2/5 flex-col gap-6">
                        <div class="flex gap-8 w-full">
                            <div class="flex flex-col gap-1 w-full">
                                <label for="first_name">First Name</label>
                                <input v-model="form.first_name" type="text" id="first_name" placeholder="First Name" class="w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-0">
                                <div v-if="errors.first_name" class="text-red-500 text-xs">{{ errors.first_name }}</div>
                            </div>
                            <div class="flex flex-col gap-1 w-full">
                                <label for="last_name">Last Name</label>
                                <input v-model="form.last_name" type="text" id="last_name" placeholder="Last Name" class="w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-0">
                                <div v-if="errors.last_name" class="text-red-500 text-xs">{{ errors.last_name }}</div>
                            </div>
                        </div> 

                        <div class="flex gap-8 w-full">
                            <div class="flex flex-col gap-1 w-full">
                                <label for="email">Work Email</label>
                                <input v-model="form.email" type="text" id="email" placeholder="Work Email" class="w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-0">
                                <div v-if="errors.email" class="text-red-500 text-xs">{{ errors.email }}</div>
                            </div>
                        </div> 

                        <div class="flex gap-8 w-full">
                            <div class="flex flex-col gap-1 w-full">
                                <label for="mobile">Phone Number</label>
                                <input v-model="form.mobile" type="tel" id="mobile" placeholder="Phone Number" class="w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-0">
                                <div v-if="errors.mobile" class="text-red-500 text-xs">{{ errors.mobile }}</div>
                            </div>
                        </div> 

                        <!-- <div class="flex gap-8 w-full">
                            <div class="flex flex-col gap-1 w-full">
                                <label for="country">Country</label>
                                <input v-model="form.country" type="text" id="country" placeholder="Country" class="w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-0">
                                <div v-if="errors.country" class="text-red-500 text-xs">{{ errors.country }}</div>
                            </div>
                        </div> -->

                        <div class="flex gap-8 w-full">
                            <div class="flex flex-col gap-1 w-full">
                                <label for="country">Country</label>
                                <select :class="form.country === '' ? 'text-gray-400' : 'text-black'" v-model="form.country" name="country" class="w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-0">
                                    <option value="">Select Country</option>
                                    <option value="bad6f426-35d7-ef11-8eea-7c1e5229a00a">Abkhazia</option>
                                    <option value="a85e89c2-4d74-ec11-8942-0022488312af">Afghanistan</option>
                                    <option value="3fefc1ba-9391-ed11-aad1-0022487fe028">Aland islands</option>
                                    <option value="9ff5bdda-9e82-ec11-8d20-000d3a24a6ca">Albania</option>
                                    <option value="ed7e83d5-f7df-ec11-bb3c-002248823392">Algeria</option>
                                    <option value="ba3aaf6b-7d95-ed11-aad1-0022487feb37">American Samoa</option>
                                    <option value="cf1f8ccb-2ae6-ec11-bb3c-000d3ac25ae3">Andorra</option>
                                    <option value="073e12d8-5e74-ec11-8942-002248831b1e">Angola</option>
                                    <option value="8bc0ab1a-a5e1-ec11-bb3c-002248823392">Anguilla</option>
                                    <option value="9f528cb3-f108-ee11-8f6e-0022487fe7cf">Antarctica</option>
                                    <option value="b2aa8742-ebd7-ef11-8eea-0022487feb28">Antigua and Barbuda</option>
                                    <option value="1e2fcdbb-2e3a-f011-b4cc-7ced8d13c302">Antigua and Barbuda</option>
                                    <option value="9257840c-180c-ed11-82e4-000d3a20a9f7">Apac</option>
                                    <option value="b60abd21-3883-ec11-8d20-000d3a24a6ca">Argentina</option>
                                    <option value="741f6052-6a74-ec11-8942-002248831b1e">Armenia</option>
                                    <option value="4f46870e-3907-ed11-82e5-000d3a20d451">Aruba</option>
                                    <option value="b4aa8742-ebd7-ef11-8eea-0022487feb28">Ascension Island</option>
                                    <option value="a7d0b6f9-fcdc-ec11-bb3d-000d3a22e2cf">Australia</option>
                                    <option value="0b35c98e-b37e-ec11-8d20-002248812398">Austria</option>
                                    <option value="7244870f-f479-ec11-8942-000d3a4b5177">Azerbaijan</option>
                                    <option value="3fb5b9a8-c2dc-ec11-bb3d-000d3a22e2cf">Bahamas</option>
                                    <option value="a061ad59-c9e0-ec11-bb3c-0022488145ec">Bahrain</option>
                                    <option value="8663cbd2-dc79-ec11-8942-000d3a4b5177">Bangladesh</option>
                                    <option value="9db7f0e4-a4e1-ec11-bb3c-002248823392">Barbados</option>
                                    <option value="a3221bb9-bae0-ec11-bb3c-0022488145ec">Belarus</option>
                                    <option value="ae4fc829-e89a-ec11-b3fe-000d3a4c472e">Belgium</option>
                                    <option value="c8f6f8c5-6174-ec11-8942-002248831b1e">Belize</option>
                                    <option value="28a400d1-8777-ec11-8942-000d3a4b5177">Benin</option>
                                    <option value="f5a9b6ca-a4e1-ec11-bb3c-002248823392">Bermuda</option>
                                    <option value="d62ac926-b57e-ec11-8d20-002248812398">Bhutan</option>
                                    <option value="a214adf5-7d77-ec11-8942-000d3a4b5177">Bolivia</option>
                                    <option value="051fb3e7-0d8c-ed11-81ad-0022487fe7cf">Bonnaire</option>
                                    <option value="16cfe66d-1830-ed11-9db1-00224881f077">Bosnia and Herzegovina</option>
                                    <option value="066acb9c-3078-ec11-8942-000d3a4b5177">Botswana</option>
                                    <option value="3f16afb4-7d95-ed11-aad1-0022487feb37">Bouvet Island</option>
                                    <option value="c59188d3-0879-ec11-8942-000d3a4a8b9a">Brazil</option>
                                    <option value="465ba4d6-7d95-ed11-aad1-0022487feb37">British Indian Ocean Territory</option>
                                    <option value="d9bc33f0-7d95-ed11-aad1-0022487feb37">Brunei Darussalam</option>
                                    <option value="040d2526-1579-ec11-8942-000d3a4b5177">Bulgaria</option>
                                    <option value="ca4e9723-2275-ec11-8942-0022488312af">Burkina Faso</option>
                                    <option value="ff70a1ba-7e77-ec11-8942-000d3a4b5177">Burundi</option>
                                    <option value="42c25be4-37d8-ec11-a7b5-6045bd951f1b">Cambodia</option>
                                    <option value="f4d42e20-b8e0-ec11-bb3c-0022488145ec">Cameroon</option>
                                    <option value="8f7288dc-6c74-ec11-8942-002248831b1e">Canada</option>
                                    <option value="51f0ff0e-5d78-ec11-8942-000d3a4b5177">Cape Verde</option>
                                    <option value="292e729f-3f30-ed11-9db1-00224881f077">Capricorn</option>
                                    <option value="5628ff05-4807-ed11-82e5-000d3a20d451">Caribbean</option>
                                    <option value="b73dbd57-30f2-ec11-bb3d-000d3aaa4c17">Cayman Islands</option>
                                    <option value="c40dd24f-3478-ec11-8942-000d3a4a8b9a">Central African Republic</option>
                                    <option value="49468fdf-7132-ed11-9db1-0022487fe3c0">Central Asia</option>
                                    <option value="acc91016-e7d7-ef11-8eea-000d3aa8d1e2">Ceuta</option>
                                    <option value="e9bcb811-837e-ec11-8d20-002248812398">Chad</option>
                                    <option value="d99b6bc8-c3dc-ec11-bb3d-000d3a22e2cf">Chile</option>
                                    <option value="f410953a-5474-ec11-8942-0022488312af">China</option>
                                    <option value="c3d423fd-8195-ed11-aad1-0022487feb37">Christmas Island</option>
                                    <option value="74305676-0027-ef11-840b-000d3a49e4db">CIS</option>
                                    <option value="a00c2803-8295-ed11-aad1-0022487feb37">Cocos (Keeling) Islands</option>
                                    <option value="faea2328-c2dc-ec11-bb3d-000d3a22e2cf">Colombia</option>
                                    <option value="babecc7b-5378-ec11-8942-000d3a4a8b9a">Comoros</option>
                                    <option value="33f27a09-8295-ed11-aad1-0022487feb37">Congo</option>
                                    <option value="8663990f-8295-ed11-aad1-0022487feb37">Cook Islands</option>
                                    <option value="f6d20355-2f79-ec11-8942-000d3a4b5177">Costa Rica</option>
                                    <option value="24a13a90-4f74-ec11-8942-0022488312af">Croatia</option>
                                    <option value="77715f5c-bae0-ec11-bb3c-0022488145ec">Cuba</option>
                                    <option value="102b77a6-9191-ed11-aad1-0022487fe028">Curacao</option>
                                    <option value="5170b7f8-227d-ec11-8d20-002248812c6a">Cyprus</option>
                                    <option value="aec91016-e7d7-ef11-8eea-000d3aa8d1e2">Cyprus, Northern</option>
                                    <option value="4487ddde-c2dc-ec11-bb3d-000d3a22e2cf">Czech Republic</option>
                                    <option value="568d0ee7-3da1-ec11-b3fe-000d3a455a94">Democratic Republic of the Congo</option>
                                    <option value="bf52a73b-6d78-ec11-8942-000d3a4a8b9a">Denmark</option>
                                    <option value="b0c91016-e7d7-ef11-8eea-000d3aa8d1e2">Diego Garcia</option>
                                    <option value="1baef8b3-b6e0-ec11-bb3c-0022488145ec">Djibouti</option>
                                    <option value="80fa511f-8295-ed11-aad1-0022487feb37">Dominica</option>
                                    <option value="b0f0e4d4-f079-ec11-8942-000d3a4b5177">Dominican Republic</option>
                                    <option value="f63e5625-8295-ed11-aad1-0022487feb37">East Timor</option>
                                    <option value="0922894c-ad7a-ec11-8942-000d3a4a8b9a">Ecuador</option>
                                    <option value="13fca6b2-ff78-ec11-8942-000d3a4b5177">Egypt</option>
                                    <option value="c3eec408-bae0-ec11-bb3c-0022488145ec">El Salvador</option>
                                    <option value="589dfac0-1c7d-ec11-8d20-002248812c6a">Equatorial Guinea</option>
                                    <option value="e0cc30ad-ffe2-ec11-bb3c-002248823392">Eritrea</option>
                                    <option value="86da772d-5c78-ec11-8942-000d3a4b5177">Estonia</option>
                                    <option value="48890023-d007-ed11-82e5-000d3a2236d3">Eswatini</option>
                                    <option value="076ae599-2ed0-ec11-a7b5-000d3abf584c">Ethiopia</option>
                                    <option value="b6aa8742-ebd7-ef11-8eea-0022487feb28">European Union</option>
                                    <option value="6804a2be-f308-ed11-82e5-000d3a20d451">Falkland Islands</option>
                                    <option value="0caa5657-1b7d-ec11-8d20-002248812c6a">Faroe Islands</option>
                                    <option value="c4f02f38-8295-ed11-aad1-0022487feb37">Federated States of Micronesia</option>
                                    <option value="282c7f4c-cae0-ec11-bb3c-0022488145ec">Fiji</option>
                                    <option value="d4435119-5474-ec11-8942-0022488312af">Finland</option>
                                    <option value="725549b9-cb79-ec11-8942-000d3a4b5177">France</option>
                                    <option value="60d58442-e89a-ec11-b3fe-000d3a4c472e">French Guiana</option>
                                    <option value="39e937ff-f905-ed11-82e5-000d3a2236d3">French Polynesia</option>
                                    <option value="2256ee3e-8295-ed11-aad1-0022487feb37">French Southern Territories</option>
                                    <option value="f9446b71-f279-ec11-8942-000d3a4b5177">Gabon</option>
                                    <option value="9463f07d-bbe0-ec11-bb3c-0022488145ec">Gambia</option>
                                    <option value="9830b7cc-09e0-ec11-bb3c-002248823392">Georgia</option>
                                    <option value="ee08df68-1a7d-ec11-8d20-002248812c6a">Germany</option>
                                    <option value="9d34428b-3478-ec11-8942-000d3a4b5177">Ghana</option>
                                    <option value="a1454145-8194-ec11-b3fe-000d3abe5d2e">Gibraltar</option>
                                    <option value="1a4087bf-64d0-ec11-a7b5-000d3abf584c">Global</option>
                                    <option value="c4af1042-4996-ec11-b3fe-000d3abe5d2e">Greece</option>
                                    <option value="ccc33c71-2912-ed11-b83d-000d3a484a48">Greenland</option>
                                    <option value="2d946017-9291-ed11-aad1-0022487fe028">Grenada</option>
                                    <option value="f53c2245-8295-ed11-aad1-0022487feb37">Guadeloupe</option>
                                    <option value="fe3c2245-8295-ed11-aad1-0022487feb37">Guam</option>
                                    <option value="097a5f9b-187d-ec11-8d20-002248812c6a">Guatemala</option>
                                    <option value="f56c684b-30f2-ec11-bb3d-000d3aaa4c17">Guernsey</option>
                                    <option value="3cd4f072-0be0-ec11-bb3c-002248823392">Guinea</option>
                                    <option value="a0e292c5-0ae0-ec11-bb3c-002248823392">Guinea-Bissau</option>
                                    <option value="962f5645-5f03-ed11-82e5-000d3a22583f">Guyana</option>
                                    <option value="6880b2d7-b6e0-ec11-bb3c-0022488145ec">Haiti</option>
                                    <option value="bbf7ca4b-8295-ed11-aad1-0022487feb37">Heard Island and McDonald Islands</option>
                                    <option value="fc8b7b44-b77e-ec11-8d20-002248812398">Honduras</option>
                                    <option value="b7766356-c2dc-ec11-bb3d-000d3a22e2cf">Hong Kong</option>
                                    <option value="7d4586b2-5f78-ec11-8942-000d3a4a8b9a">Hungary</option>
                                    <option value="47cd946b-f379-ec11-8942-000d3a4b5177">Iceland</option>
                                    <option value="f69635b7-2ed0-ec11-a7b5-000d3abf584c">India</option>
                                    <option value="565ef284-3699-ec11-b3fe-000d3a4c472e">Indonesia</option>
                                    <option value="f220aaf4-bfe0-ec11-bb3c-0022488145ec">Iran</option>
                                    <option value="b5938814-c9e0-ec11-bb3c-0022488145ec">Iraq</option>
                                    <option value="128664be-f379-ec11-8942-000d3a4b5177">Ireland</option>
                                    <option value="03dac970-30f2-ec11-bb3d-000d3aaa4c17">Isle of Man</option>
                                    <option value="4e208bf3-c1dc-ec11-bb3d-000d3a22e2cf">Italy</option>
                                    <option value="5c760cec-5378-ec11-8942-000d3a4a8b9a">Ivory Coast</option>
                                    <option value="f10a8efa-3a07-ed11-82e5-000d3a20d451">Jamaica</option>
                                    <option value="cdbb4f09-c3e0-ec11-bb3c-0022488145ec">Japan</option>
                                    <option value="4840e4cd-c1e0-ec11-bb3c-0022488145ec">Jersey</option>
                                    <option value="3699ce76-d193-ec11-b3fe-000d3aac79cb">Jordan</option>
                                    <option value="097ba037-c97a-ec11-8942-000d3a4b5177">Kazakhstan</option>
                                    <option value="cf614137-f79d-ec11-b3fe-000d3a4b018f">Kenya</option>
                                    <option value="3178998c-c87a-ec11-8942-000d3a4b5177">Kiribati</option>
                                    <option value="7395132b-6d74-ec11-8942-002248831b1e">Kosovo</option>
                                    <option value="ca82156f-fb78-ec11-8942-000d3a4b5177">Kuwait</option>
                                    <option value="b11fec47-c07a-ec11-8942-000d3a4b5177">Kyrgyzstan</option>
                                    <option value="9ee5eba5-d4a9-ec11-b3fe-000d3aaeb701">Laos</option>
                                    <option value="031936d9-be3f-ed11-9db0-0022487feb37">LATAM</option>
                                    <option value="e976cea3-9ce5-ec11-bb3c-000d3ac25ae3">Latin America</option>
                                    <option value="e7e8c125-0279-ec11-8942-000d3a4b5177">Latvia</option>
                                    <option value="3791cdf8-5878-ec11-8940-000d3a4b5b9d">Lebanon</option>
                                    <option value="997b6688-bee0-ec11-bb3c-002248823392">Lesotho</option>
                                    <option value="14d33aa9-be7a-ec11-8942-000d3a4b5177">Liberia</option>
                                    <option value="40346ce3-2475-ec11-8942-0022488312af">Libya</option>
                                    <option value="8c0f8376-bd7a-ec11-8942-000d3a4b5177">Liechtenstein</option>
                                    <option value="57700591-5b78-ec11-8942-000d3a4b5177">Lithuania</option>
                                    <option value="8dba7a63-c1dc-ec11-bb3d-000d3a22e2cf">Luxembourg</option>
                                    <option value="721bd4c5-f208-ee11-8f6e-0022487fe7cf">Macau</option>
                                    <option value="6c5d26c3-92a6-ec11-b3fe-000d3a4b26de">Macedonia</option>
                                    <option value="a27e4ccc-bde0-ec11-bb3c-002248823392">Madagascar</option>
                                    <option value="3cc3db09-cae0-ec11-bb3c-0022488145ec">Malawi</option>
                                    <option value="376f5a75-4ab9-ec11-983f-000d3a28bef8">Malaysia</option>
                                    <option value="f84a7d54-cbe0-ec11-bb3c-0022488145ec">Maldives</option>
                                    <option value="ae4702ab-18e0-ec11-bb3c-002248823392">Mali</option>
                                    <option value="30e704be-bb7a-ec11-8942-000d3a4b5177">Malta</option>
                                    <option value="caf3f360-8295-ed11-aad1-0022487feb37">Marshall Islands</option>
                                    <option value="98275567-8295-ed11-aad1-0022487feb37">Martinique</option>
                                    <option value="ac87dbf9-2e75-ec11-8942-0022488312af">Mauritania</option>
                                    <option value="b87c7016-c1e0-ec11-bb3c-0022488145ec">Mauritius</option>
                                    <option value="b8aa8742-ebd7-ef11-8eea-0022487feb28">Mayotte</option>
                                    <option value="baaa8742-ebd7-ef11-8eea-0022487feb28">Melilla</option>
                                    <option value="9e5be42b-c3dc-ec11-bb3d-000d3a22e2cf">Mexico</option>
                                    <option value="c69039ea-f208-ee11-8f6e-0022487fe7cf">Micronesia</option>
                                    <option value="a4cfe4f4-327d-ec11-8d20-002248812398">Moldova</option>
                                    <option value="42fbf6cd-f179-ec11-8942-000d3a4b5177">Monaco</option>
                                    <option value="c3d91de6-7074-ec11-8942-002248831b1e">Mongolia</option>
                                    <option value="00ea04f8-f479-ec11-8942-000d3a4b5177">Montenegro</option>
                                    <option value="07b9a8cc-9291-ed11-aad1-0022487fe028">Montserrat</option>
                                    <option value="3819197c-b07a-ec11-8942-000d3a4b5177">Morocco</option>
                                    <option value="ddefa63e-fe79-ec11-8942-000d3a4b5177">Mozambique</option>
                                    <option value="c91858e3-f7df-ec11-bb3c-002248823392">Myanmar</option>
                                    <option value="d606d6b3-1d04-ed11-82e5-000d3a22583f">Namibia</option>
                                    <option value="08285567-8295-ed11-aad1-0022487feb37">Nauru</option>
                                    <option value="babbe4a3-8a93-ec11-b3fe-000d3abe5d2e">Nepal</option>
                                    <option value="a0c0b5dd-bedc-ec11-bb3d-000d3a22e2cf">Netherlands</option>
                                    <option value="bcaa8742-ebd7-ef11-8eea-0022487feb28">Netherlands Antilles</option>
                                    <option value="beaa8742-ebd7-ef11-8eea-0022487feb28">Netherlands, Caribbean</option>
                                    <option value="1eff8e20-f308-ee11-8f6e-0022487fe7cf">new caledonia</option>
                                    <option value="11bc8d2b-fe9a-ec11-b3fe-000d3a4c472e">New Zealand</option>
                                    <option value="0708277e-1ce0-ec11-bb3c-002248823392">Nicaragua</option>
                                    <option value="b584bff5-4d78-ec11-8942-000d3a4b5177">Niger</option>
                                    <option value="3b17e213-1188-ec11-8d20-000d3aa9e644">Nigeria</option>
                                    <option value="33e097bf-34f6-ed11-8849-0022487fe028">Nile Region</option>
                                    <option value="bc6b076e-8295-ed11-aad1-0022487feb37">Niue</option>
                                    <option value="c66b076e-8295-ed11-aad1-0022487feb37">Norfolk Island</option>
                                    <option value="3c394b5a-8295-ed11-aad1-0022487feb37">North Korea</option>
                                    <option value="65776476-8295-ed11-aad1-0022487feb37">Northern Mariana Islands</option>
                                    <option value="460089a2-c0e0-ec11-bb3c-0022488145ec">Norway</option>
                                    <option value="98ce2d60-87e5-ec11-bb3c-000d3ac25ae3">Oman</option>
                                    <option value="db004b1a-4707-ed11-82e5-000d3a20d451">Pacific Region</option>
                                    <option value="1939f107-2fd0-ec11-a7b5-000d3abf584c">Pakistan</option>
                                    <option value="de403f45-7b06-ed11-82e5-000d3a20d451">Palau</option>
                                    <option value="815af979-4d74-ec11-8942-0022488312af">Palestine</option>
                                    <option value="2d6612e7-cae0-ec11-bb3c-0022488145ec">Panama</option>
                                    <option value="c46903dc-fb79-ec11-8942-000d3a4b5177">Papua New Guinea</option>
                                    <option value="95db7dcc-c9e0-ec11-bb3c-0022488145ec">Paraguay</option>
                                    <option value="1eeb5d96-bc7d-ec11-8d20-002248812398">Peru</option>
                                    <option value="feb04b5e-2fd0-ec11-a7b5-000d3abf584c">Philippines</option>
                                    <option value="f2f5dc82-8295-ed11-aad1-0022487feb37">Pitcairn</option>
                                    <option value="247b87e4-f47c-ec11-8d20-002248812398">Poland</option>
                                    <option value="ef2ae639-f679-ec11-8942-000d3a4b5177">Portugal</option>
                                    <option value="c0aa8742-ebd7-ef11-8eea-0022487feb28">Proper</option>
                                    <option value="8ac9f03e-2a75-ec11-8942-0022488312af">Puerto Rico</option>
                                    <option value="6c47e851-4278-ec11-8942-000d3a4b5177">Qatar</option>
                                    <option value="e3853bf2-a8e1-ec11-bb3c-002248823392">Reunion</option>
                                    <option value="dfca01d6-5778-ec11-8942-000d3a4b5177">Romania</option>
                                    <option value="bd27f57c-c3dc-ec11-bb3d-000d3a22e2cf">Russia</option>
                                    <option value="ff08f354-bbe0-ec11-bb3c-0022488145ec">Rwanda</option>
                                    <option value="024e8389-8295-ed11-aad1-0022487feb37">S. Georgia and S. Sandwich Islands</option>
                                    <option value="074e8389-8295-ed11-aad1-0022487feb37">Saint Helena</option>
                                    <option value="f68e11eb-9291-ed11-aad1-0022487fe028">Saint Kitts and Nevis</option>
                                    <option value="a33dc290-8295-ed11-aad1-0022487feb37">Saint Lucia</option>
                                    <option value="8a896d24-1830-ed11-9db1-00224881f077">Saint Martin</option>
                                    <option value="ab3dc290-8295-ed11-aad1-0022487feb37">Saint Pierre and Miquelon</option>
                                    <option value="ee5fe797-8295-ed11-aad1-0022487feb37">Saint Vincent and the Grenadines</option>
                                    <option value="00265ed2-cae0-ec11-bb3c-0022488145ec">Samoa</option>
                                    <option value="8b5d6699-f308-ee11-8f6e-0022487fe7cf">San Marino</option>
                                    <option value="f266e87b-bde0-ec11-bb3c-002248823392">Sao Tome and Principe</option>
                                    <option value="0f8f0f0c-c37a-ec11-8942-000d3a4b5177">Saudi Arabia</option>
                                    <option value="35e5aa60-3279-ec11-8942-000d3a4b5177">Senegal</option>
                                    <option value="332eb01b-f779-ec11-8942-000d3a4b5177">Serbia</option>
                                    <option value="76c3a06f-c2e0-ec11-bb3c-0022488145ec">Seychelles</option>
                                    <option value="d51871c5-af7a-ec11-8942-000d3a4a8b9a">Sierra Leone</option>
                                    <option value="0c5111d5-af93-ec11-b3fe-000d3aac79cb">Singapore</option>
                                    <option value="c2aa8742-ebd7-ef11-8eea-0022487feb28">Sint Maarten</option>
                                    <option value="a3c6cddb-f308-ee11-8f6e-0022487fe7cf">Slovakia</option>
                                    <option value="3c0874a4-eb7c-ec11-8d20-002248812398">Slovenia</option>
                                    <option value="2a5cf09d-8295-ed11-aad1-0022487feb37">Solomon Islands</option>
                                    <option value="aea987d8-2c75-ec11-8942-0022488312af">Somalia</option>
                                    <option value="6a8485a2-bddc-ec11-bb3d-000d3a22e2cf">South Africa</option>
                                    <option value="36b250dc-b1dc-ec11-bb3d-000d3a22ed85">South Korea</option>
                                    <option value="c4aa8742-ebd7-ef11-8eea-0022487feb28">South Ossetia</option>
                                    <option value="05d44f49-1f04-ed11-82e5-000d3a22583f">South Sudan</option>
                                    <option value="edff1cdd-9f7a-ec11-8942-000d3a4a8b9a">Spain</option>
                                    <option value="dcab0e79-2fd0-ec11-a7b5-000d3abf584c">Sri Lanka</option>
                                    <option value="759421c9-3779-ec11-8942-000d3a4a8b9a">Sudan</option>
                                    <option value="04e3bf3f-5e03-ed11-82e5-000d3a22583f">Suriname</option>
                                    <option value="3befc1ba-9391-ed11-aad1-0022487fe028">Svalbart and Jan Mayen</option>
                                    <option value="2bbe96a4-8295-ed11-aad1-0022487feb37">Swaziland</option>
                                    <option value="95411bab-fddc-ec11-bb3d-000d3a22e2cf">Sweden</option>
                                    <option value="cbbfc544-3479-ec11-8942-000d3a4a8b9a">Switzerland</option>
                                    <option value="bc87d72c-f50b-ed11-82e4-000d3a20a9f7">Syria</option>
                                    <option value="2662f61a-4878-ec11-8942-000d3a4b5177">Taiwan</option>
                                    <option value="4e67a8b8-3079-ec11-8942-000d3a4a8b9a">Tajikistan</option>
                                    <option value="f2cec731-f679-ec11-8942-000d3a4a8b9a">Tanzania</option>
                                    <option value="31b95845-2c75-ec11-8942-0022488312af">Thailand</option>
                                    <option value="1fb0ff77-a9e0-ec11-bb3c-0022488145ec">Timor-Leste</option>
                                    <option value="858a8565-a8e0-ec11-bb3c-0022488145ec">Togna</option>
                                    <option value="4899970b-4a78-ec11-8942-000d3a4b5177">Togo</option>
                                    <option value="c6aa8742-ebd7-ef11-8eea-0022487feb28">Tokelau</option>
                                    <option value="6dd2deeb-8ed3-ed11-a7c7-0022487fee57">Tonga</option>
                                    <option value="c8aa8742-ebd7-ef11-8eea-0022487feb28">Transnistria</option>
                                    <option value="e80b8066-aae0-ec11-bb3c-0022488145ec">Trinidad and Tobago</option>
                                    <option value="caaa8742-ebd7-ef11-8eea-0022487feb28">Tristan da Cunha</option>
                                    <option value="25bd2b8b-ae7a-ec11-8942-000d3a4a8b9a">Tunisia</option>
                                    <option value="a0fff655-f879-ec11-8942-000d3a4b5177">Turkey</option>
                                    <option value="d93be5e4-2f79-ec11-8942-000d3a4a8b9a">Turkmenistan</option>
                                    <option value="28daa860-9391-ed11-aad1-0022487fe028">Turks and Caicos Islands</option>
                                    <option value="5e258faa-8295-ed11-aad1-0022487feb37">Tuvalu</option>
                                    <option value="3991cdf8-5878-ec11-8940-000d3a4b5b9d">UAE</option>
                                    <option value="b7a4a606-2e79-ec11-8942-000d3a4a8b9a">Uganda</option>
                                    <option value="6397498e-6c74-ec11-8942-002248831b1e">Ukraine</option>
                                    <option value="d68307e0-1a7d-ec11-8d20-002248812398">United Kingdom</option>
                                    <option value="ccaa8742-ebd7-ef11-8eea-0022487feb28">United Nations</option>
                                    <option value="ac4c90af-e89a-ec11-b3fe-000d3a4c472e">United States</option>
                                    <option value="40026932-fedc-ec11-bb3d-000d3a22e2cf">Uruguay</option>
                                    <option value="e18acca9-a5e0-ec11-bb3c-0022488145ec">Uzbekistan</option>
                                    <option value="8a258faa-8295-ed11-aad1-0022487feb37">Vanuatu</option>
                                    <option value="f49a15b2-8295-ed11-aad1-0022487feb37">Vatican City State (Holy See)</option>
                                    <option value="989c0f76-a5e0-ec11-bb3c-0022488145ec">Venezuela</option>
                                    <option value="eecbf0a3-2fd0-ec11-a7b5-000d3abf584c">Vietnam</option>
                                    <option value="0b9b15b2-8295-ed11-aad1-0022487feb37">Virgin Islands (British)</option>
                                    <option value="d31346b8-8295-ed11-aad1-0022487feb37">Virgin Islands (U.S.)</option>
                                    <option value="09c02030-f408-ee11-8f6e-0022487fe7cf">Wallis and Futuna Islands</option>
                                    <option value="b9d353be-8295-ed11-aad1-0022487feb37">Western Sahara</option>
                                    <option value="33c88232-f3e7-ec11-bb3c-000d3ac25719">Yemen</option>
                                    <option value="c1d353be-8295-ed11-aad1-0022487feb37">Yugoslavia</option>
                                    <option value="4483e64d-d3a9-ec11-b3fe-000d3aaeb701">Zambia</option>
                                    <option value="34654baa-f579-ec11-8942-000d3a4a8b9a">Zimbabwe</option>
                                </select>
                                
                                <div v-if="errors.country" class="text-red-500 text-xs">{{ errors.country }}</div>
                            </div>
                        </div>

                        <div class="flex gap-8 w-full">
                            <div class="flex flex-col gap-1 w-full">
                                <label for="selected-country">Industry</label>
                                <select v-model="form.industry" name="industry" :class="form.industry === '' ? 'text-gray-400' : 'text-black'"  class="w-full text-base px-4 py-2 bg-primary rounded-lg outline-0">
                                    <option value="">Select Industry</option>
                                    <option value="A6236539-7AE8-EF11-9342-000D3A216302">Tobacco</option>
                                    <option value="9C6999E4-5D07-ED11-82E5-000D3A2236D3">Telecommunications</option>
                                    <option value="B2E5A5BB-C774-EF11-A670-000D3A28C269">Manufacturing</option>
                                    <option value="E2D77CC4-C874-EF11-A670-000D3A28C269">Healthcare</option>
                                    <option value="C145085E-C974-EF11-A670-000D3A28C269">Energy & Utilities</option>
                                    <option value="0078191D-CA74-EF11-A670-000D3A28C269">Real Estate & Property</option>
                                    <option value="2A92AE9D-CA74-EF11-A670-000D3A28C269">Legal & Law</option>
                                    <option value="6B414534-078A-EF11-AC20-000D3A29EEF0">Arts</option>
                                    <option value="64480E72-C47F-EF11-AC21-000D3A2B0907">Ticketing</option>
                                    <option value="9B31F60B-1324-F011-8C4E-000D3A2BCC60">Marketplace</option>
                                    <option value="4BDF1E81-39E5-EF11-9342-000D3A2E470A">Cell Phone Store</option>
                                    <option value="509F0531-46E9-EF11-9342-000D3A2E470A">Dentist</option>
                                    <option value="C655DE97-C674-EF11-A670-000D3A2EFDA0">Marketing & Advertising</option>
                                    <option value="AA7DBCBA-BEE8-EF11-9342-000D3A3A8D8B">Gaming Store</option>
                                    <option value="72314CAF-61F0-EF11-9342-000D3A3A8D8B">Gallery</option>
                                    <option value="95887B85-C774-EF11-A670-000D3A4571C2">Technology & Software</option>
                                    <option value="CF3445E0-C774-EF11-A670-000D3A4571C2">Automotive</option>
                                    <option value="C35D126E-CA74-EF11-A670-000D3A477048">Government & Institutions</option>
                                    <option value="44F2952D-0048-EF11-BFE3-000D3A49E4DB">Airlines</option>
                                    <option value="1DA1C677-ED9A-EC11-B3FE-000D3A4C472E">Gift Center</option>
                                    <option value="9715EDB4-4799-EC11-B3FE-000D3A4C4A21">Sports</option>
                                    <option value="6D478453-5D60-EF11-BFE2-000D3AA991C7">E-commerce</option>
                                    <option value="7BD01D42-2E6C-EF11-BFE2-000D3AA991C7">Skin Care</option>
                                    <option value="606E654D-516C-EF11-BFE2-000D3AA991C7">Personal Care</option>
                                    <option value="6C181768-C674-EF11-A670-000D3AACDBAF">Finance</option>
                                    <option value="ADE51EA6-C874-EF11-A670-000D3AAE64B5">Logistics & Transportation</option>
                                    <option value="2CE98C03-C874-EF11-A670-000D3ABDF55A">Food & Beverage</option>
                                    <option value="C7AA914A-F429-EE11-BDF4-0022487FE0E0">Restaurant</option>
                                    <option value="046D053A-E37C-EC11-8D20-002248812398">Agriculture / Flower Shop</option>
                                    <option value="003C0D5A-E47C-EC11-8D20-002248812398">NGO</option>
                                    <option value="3A7FF6AE-3D75-EC11-8940-002248831B2F">Retail</option>
                                    <option value="407FF6AE-3D75-EC11-8940-002248831B2F">FinTech</option>
                                    <option value="3BB48A36-4A74-EC11-8940-002248831DF1">Entertainment</option>
                                    <option value="42CA9CA9-22D1-EC11-A7B5-002248854965">Construction & Maintenance</option>
                                    <option value="5A7E5508-A94A-F011-877A-00224887CF50">money machine</option>
                                    <option value="05987E94-F83A-F011-B4CC-00224887CF50">Industrial Stoves</option>
                                    <option value="E3A53E67-C874-EF11-A670-6045BD8D1605">Consulting & Business Services</option>
                                    <option value="DCF09AE7-C974-EF11-A670-6045BD8D1605">Fitness & Wellness</option>
                                    <option value="D4A8626B-7DE4-EF11-8EEA-6045BD8EAAFF">Cosmetics and Perfume</option>
                                    <option value="9724DE45-C874-EF11-A670-6045BD8F58A2">Fashion & Beauty</option>
                                    <option value="12A08D2E-C974-EF11-A670-6045BD8F58A2">Education & Training</option>
                                    <option value="5D03644E-CA74-EF11-A670-6045BD8F58A2">Security & Safety</option>
                                    <option value="A898D44D-DDE9-EF11-9342-6045BD92AB15">Facility Management</option>
                                    <option value="853F252C-E3E9-EF11-9342-6045BD92AB15">Car Rental</option>
                                    <option value="62061F80-6DF3-EF11-BE1F-6045BD93D971">Roastery</option>
                                    <option value="578E662A-A851-F011-877B-6045BD93E162">pool</option>
                                    <option value="6C7DE7CF-AF51-F011-877B-6045BD93E162">alcohol shop</option>
                                    <option value="238A984A-732A-F011-8C4E-6045BD93E162">Beach resort</option>
                                    <option value="21DA3407-5932-F011-8C4E-6045BD93E162">Clinical Nutrition</option>
                                    <option value="296324B0-1F15-F011-998A-6045BD93E162">Winery</option>
                                    <option value="DBA94709-DDFF-EF11-BAE3-6045BD93E162">Insurance Company</option>
                                    <option value="29811659-8308-F011-BAE3-6045BD93E162">Electric Shop</option>
                                    <option value="E98BFB0D-31F4-EF11-BE1F-6045BD93E162">Others</option>
                                    <option value="10C2F0EE-B7F5-EF11-BE1F-6045BD93E162">Travel Agency</option>
                                    <option value="DB8E5CC9-B363-F011-BEC3-6045BD93E162">Dance Academy</option>
                                    <option value="B104F484-7735-F011-8C4E-6045BD971DB4">Physical Therapist</option>
                                    <option value="57CC77AF-E8F8-EF11-BAE2-6045BD971DB4">Plastic Surgeon</option>
                                    <option value="3B0AB197-EB03-F011-BAE3-6045BD971DB4">Bakery</option>
                                    <option value="10866CE6-050B-F011-BAE3-6045BD971DB4">Car Service</option>
                                    <option value="27CA71C2-81F2-EF11-BE1F-6045BD971DB4">Vet Clinic</option>
                                    <option value="4E03AFE5-85F2-EF11-BE1F-6045BD971DB4">Non-profit Association</option>
                                    <option value="B417F1C5-17ED-EF11-9342-6045BD9BC58B">Furniture</option>
                                    <option value="D716227B-F1F4-EF11-BE1F-6045BD9BF8CD">Art Gallery</option>
                                    <option value="B6BF5FA1-3D9B-EF11-8A69-6045BD9D049A">Electronics</option>
                                    <option value="21C2C858-CC91-EF11-8A69-6045BD9FC756">Baby Accessories</option>
                                    <option value="AA554535-D066-F011-BEC2-6045BDF2695F">Medical Equipment</option>
                                    <option value="5AF03280-CA74-EF11-A670-6045BDF39BC3">Hospitality & Tourism</option>
                                    <option value="18DBC29D-4D4B-F011-877A-6045BDF407F0">nightclub</option>
                                    <option value="01D22AFF-544B-F011-877A-6045BDF407F0">spa</option>
                                    <option value="24944586-1B4C-F011-877A-6045BDF407F0">painting</option>
                                    <option value="3A777C34-424C-F011-877A-6045BDF407F0">diet center</option>
                                    <option value="B5DAB72D-F04C-F011-877A-6045BDF407F0">mobile shop</option>
                                    <option value="859F945A-1F24-F011-8C4E-6045BDF407F0">Accessories</option>
                                    <option value="287DF679-2C2B-F011-8C4E-6045BDF407F0">Architect</option>
                                    <option value="C74E4C27-7F13-F011-998A-6045BDF407F0">Liquor shop</option>
                                    <option value="1185614D-7F13-F011-998A-6045BDF407F0">Gaming lounge</option>
                                    <option value="4150B9A3-9D6B-F011-B4CC-6045BDF407F0">Charity</option>
                                    <option value="2E10AF66-CEF8-EF11-BAE2-6045BDF407F0">Laundry</option>
                                    <option value="BBB2C0E9-53FB-EF11-BAE2-6045BDF407F0">Event Plan</option>
                                    <option value="44A717D2-2A03-F011-BAE3-6045BDF407F0">Dental product</option>
                                    <option value="39E5EE2E-DD66-F011-BEC3-6045BDF407F0">Hospitals</option>
                                    <option value="E3C88D60-EC62-F011-BEC2-6045BDF41D4A">Interior Design</option>
                                    <option value="E3A49FE1-C874-EF11-A670-7C1E5225CB9E">Non-Profit & Social Services</option>
                                    <option value="B03F7551-0319-F011-9989-7C1E5228AC38">Freight services</option>
                                    <option value="93039771-EB62-F011-BEC3-7C1E5228DAAE">polyclinic</option>
                                    <option value="92880769-F1ED-EF11-9341-7C1E52514F16">Library</option>
                                    <option value="119922F3-2BE5-EF11-9342-7C1E525D81BD">Jewelry</option>
                                    <option value="9A2A83E8-32E5-EF11-9342-7C1E525D81BD">Beauty & Personal Care</option>
                                    <option value="521BD92C-36E5-EF11-9342-7C1E525D81BD">Grocery Store</option>
                                    <option value="760D5B8D-1457-F011-BEC1-7C1E525E56B8">Plastic Surgery</option>
                                    <option value="0445A12F-F923-F011-8C4D-7C1E5270CF18">Sportswear</option>
                                    <option value="036F7477-FA23-F011-8C4D-7C1E5270CF18">Cosmetics</option>
                                    <option value="9E01BBA2-34ED-EF11-9341-7C1E5272B6CA">Clothing</option>
                                    <option value="67F5B8DC-3DF0-EF11-9341-7C1E5272B6CA">Ticketing Services</option>
                                    <option value="A0A6AA8A-FD24-F011-8C4D-7C1E52755FD6">Music Academy</option>
                                    <option value="54AE2B22-0B24-F011-8C4D-7C1E5282B22A">Phone accessories</option>
                                    <option value="A0E86159-F32E-F011-8C4E-7C1E528574A3">eSIM & Travel data</option>
                                    <option value="EC4B2989-AFF9-EF11-BAE2-7CED8D0AE3B8">Gym</option>
                                    <option value="A80157B7-C846-F011-877A-7CED8D13C302">resto bar</option>
                                    <option value="A4897EA4-8847-F011-877A-7CED8D13C302">gaz station</option>
                                    <option value="686B6AB8-8947-F011-877A-7CED8D13C302">optical shop</option>
                                    <option value="7D3840F1-8947-F011-877A-7CED8D13C302">coffee shop</option>
                                    <option value="1D6A4A42-B058-F011-877B-7CED8D13C302">dental clinic</option>
                                    <option value="44A2B25C-3824-F011-8C4D-7CED8D13C302">Cafe</option>
                                    <option value="1AAEA316-701F-F011-9989-7CED8D13C302">Hotel</option>
                                    <option value="D54BD264-C116-F011-998A-7CED8D13C302">Flowershop</option>
                                    <option value="CAF733B1-4FFE-EF11-BAE2-7CED8D13C302">Medical Equipment</option>
                                    <option value="51F7EC6B-DC5B-F011-BEC2-7CED8D13C302">Engineering Services</option>
                                    <option value="4E7F13C4-5E5D-F011-BEC2-7CED8D13C302">organic product</option>
                                </select>
                                <div v-if="errors.industry" class="text-red-500 text-xs">{{ errors.industry }}</div>
                            </div>
                        </div>

                        <div class="flex gap-8 w-full">
                            <div class="flex flex-col gap-1 w-full">
                                <label for="product">Product</label>
                                <select :class="form.product === '' ? 'text-gray-400' : 'text-black'" v-model="form.product" name="product" class="w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-0">
                                    <option value="">Select Product</option>
                                    <option value="fd4f2661-1f5e-ef11-bfe2-000d3aab2548">MontyPay Point of Sale</option>
                                    <option value="13ca892e-79da-ec11-bb3d-000d3a22e2cf">MontyPay Payment Gateway</option>
                                    
                                </select>
                                <div v-if="errors.product" class="text-red-500 text-xs">{{ errors.product }}</div>
                            </div>
                        </div>
                        <div class="flex gap-8 w-4full">
                            <div class="flex flex-col gap-1 w-full">
                                <label for="company">Company Name</label>
                                <input v-model="form.company" type="text" id="company" placeholder="Company Name" class="w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-0">
                                <div v-if="errors.company" class="text-red-500 text-xs">{{ errors.company }}</div>
                            </div>
                        </div> 

                        <div class="flex gap-8 w-full">
                            <div class="flex flex-col gap-1 w-full">
                                <label for="size">Company Size</label>
                                <input v-model="form.size" type="text" id="size" placeholder="Company Size" class="w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-0">
                                <div v-if="errors.size" class="text-red-500 text-xs">{{ errors.size }}</div>
                            </div>
                        </div> 

                        <div class="flex gap-8 w-full">
                            <div class="flex flex-col gap-1 w-full">
                                <label for="link">Website</label>
                                <input v-model="form.link" type="text" id="link" placeholder="Website" class="w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-0">
                                <div v-if="errors.link" class="text-red-500 text-xs">{{ errors.link }}</div>
                            </div>
                        </div> 

                        <div class="flex gap-8 w-full">
                            <div class="flex flex-col gap-1 w-full">
                                <label for="message">Message</label>
                                <textarea v-model="form.message" id="message" placeholder="Leave us a message..." class="w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-0 resize-none" rows="10"></textarea>
                                <div v-if="errors.message" class="text-red-500 text-xs">{{ errors.message }}</div>
                            </div>
                        </div> 

                        <div class="flex gap-8 w-full mt-8">
                            <div class="flex-col gap-3 w-full">
                                <div class="flex gap-3 w-full">
                                    <input v-model="form.acknowledgment" type="checkbox" id="acknowledgment">
                                    <label for="acknowledgment">You agree to our friendly privacy policy.</label>
                                </div>
                                <div v-if="errors.acknowledgment" class="text-red-500 text-xs">{{ errors.acknowledgment }}</div>
                            </div>
                        </div> 

                        <div class="gap-8 w-full">
                            <div class="flex gap-3 w-full">
                                <input type="submit" id="submit" class="mp-button-secondary w-full text-base" value="Contact us" @click.prevent="handleSubmit">
                            </div>
                            <div class="mt-5" v-if="submissionMessage">{{submissionMessage}}</div>
                        </div> 
                    </div>

                    <div class="w-full lg:w-1/3 mt-16 lg:mt-0">
                        <NuxtPicture 
                            priority
                            format="webp,avif" 
                            src="/images/become-a-partner.png" 
                            class="w-full"
                            :imgAttrs="{class:'w-full aspect-video lg:aspect-auto object-cover'}" 
                        />
                    </div>
                </div>
            </div>
        </section>

        <section id="section-3" class="py-16 lg:py-36">
            <div class="container">
                <ContentBlock 
                    title="Our Presence"
                    class="text-center mt-16"
                />

                <div class="flex flex-col gap-7 lg:gap-14 mt-16 text-white text-left md:w-4/5 mx-auto">
                    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-14">
                        <div>
                            <NuxtPicture 
                                priority
                                format="webp,avif" 
                                src="/images/uk.png" 
                                class="w-full"
                                :imgAttrs="{class:'w-full aspect-auto object-cover'}" 
                            />
                            <div class="location w-full absolute bottom-0 left-0 py-8 px-6 rounded-lg">
                                <h5>United Kingdom</h5>
                                <div class="flex flex-col gap-2 mt-2">
                                    <div class="flex gap-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91661 6.63199C9.29993 7.04404 8.81928 7.62971 8.53545 8.31494C8.25162 9.00016 8.17736 9.75416 8.32205 10.4816C8.46675 11.209 8.8239 11.8772 9.34835 12.4017C9.8728 12.9261 10.541 13.2833 11.2684 13.4279C11.9958 13.5726 12.7498 13.4984 13.4351 13.2145C14.1203 12.9307 14.706 12.4501 15.118 11.8334C15.5301 11.2167 15.75 10.4917 15.75 9.75C15.75 8.75544 15.3549 7.80161 14.6517 7.09835C13.9484 6.39509 12.9946 6 12 6C11.2583 6 10.5333 6.21993 9.91661 6.63199ZM10.75 11.6208C10.38 11.3736 10.0916 11.0222 9.92127 10.611C9.75097 10.1999 9.70642 9.7475 9.79323 9.31105C9.88005 8.87459 10.0943 8.47368 10.409 8.15901C10.7237 7.84434 11.1246 7.63005 11.561 7.54323C11.9975 7.45642 12.4499 7.50097 12.861 7.67127C13.2722 7.84157 13.6236 8.12996 13.8708 8.49997C14.118 8.86998 14.25 9.30499 14.25 9.75C14.25 10.3467 14.0129 10.919 13.591 11.341C13.169 11.7629 12.5967 12 12 12C11.555 12 11.12 11.868 10.75 11.6208ZM6.16911 3.91911C4.62247 5.46575 3.75248 7.56273 3.75 9.75C3.75 12.6938 5.11031 15.8138 7.6875 18.7734C8.84552 20.1108 10.1489 21.3151 11.5734 22.3641C11.6995 22.4524 11.8498 22.4998 12.0037 22.4998C12.1577 22.4998 12.308 22.4524 12.4341 22.3641C13.856 21.3147 15.1568 20.1104 16.3125 18.7734C18.8859 15.8138 20.25 12.6938 20.25 9.75C20.2475 7.56273 19.3775 5.46575 17.8309 3.91911C16.2843 2.37247 14.1873 1.50248 12 1.5C9.81273 1.50248 7.71575 2.37247 6.16911 3.91911ZM5.25 9.75C5.25 7.95979 5.96116 6.2429 7.22703 4.97703C8.4929 3.71116 10.2098 3 12 3C13.7902 3 15.5071 3.71116 16.773 4.97703C18.0388 6.2429 18.75 7.95979 18.75 9.75C18.75 15.1153 13.5497 19.5938 12 20.8125C10.4503 19.5938 5.25 15.1172 5.25 9.75Z" fill="#00DFDF"/>
                                        </svg>
                                        <p class="text-xs flex-1">Beaumont Bridge House, 181 Queen Victoria Street, London EC4V 4EG, United Kingdom {Headquarters}</p>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4306 12.8766L16.4184 12.871C16.1892 12.7729 15.939 12.7336 15.6907 12.7565C15.4424 12.7794 15.2037 12.8639 14.9963 13.0022C14.9718 13.0184 14.9484 13.0359 14.9259 13.0547L12.6441 15.0001C11.1984 14.2979 9.70595 12.8166 9.00376 11.3897L10.9519 9.07318C10.9706 9.04974 10.9884 9.0263 11.0053 9.00099C11.1407 8.79409 11.2229 8.55692 11.2445 8.31059C11.2661 8.06427 11.2264 7.81642 11.1291 7.58912V7.57787L9.14438 3.1538C9.0157 2.85686 8.79444 2.60951 8.51362 2.44865C8.2328 2.2878 7.9075 2.22208 7.58626 2.2613C6.31592 2.42847 5.14986 3.05234 4.30588 4.01639C3.4619 4.98045 2.99771 6.21876 3.00001 7.50005C3.00001 14.9438 9.05626 21.0001 16.5 21.0001C17.7813 21.0023 19.0196 20.5382 19.9837 19.6942C20.9477 18.8502 21.5716 17.6841 21.7388 16.4138C21.7781 16.0927 21.7125 15.7674 21.5518 15.4866C21.3911 15.2058 21.144 14.9845 20.8472 14.8557L16.4306 12.8766ZM8.01856 15.9815C5.76888 13.7318 4.50348 10.6816 4.50001 7.50005C4.49648 6.58458 4.82631 5.69911 5.42789 5.00903C6.02947 4.31895 6.86167 3.87143 7.76907 3.75005C7.7687 3.7538 7.7687 3.75756 7.76907 3.7613L9.73782 8.16755L7.80001 10.4869C7.78034 10.5096 7.76247 10.5337 7.74657 10.5591C7.60549 10.7756 7.52273 11.0249 7.5063 11.2827C7.48988 11.5406 7.54035 11.7984 7.65282 12.031C8.5022 13.7682 10.2525 15.5054 12.0084 16.3538C12.2428 16.4652 12.502 16.5139 12.7608 16.4952C13.0196 16.4765 13.2692 16.3909 13.485 16.2469C13.5091 16.2307 13.5322 16.2132 13.5544 16.1944L15.8334 14.2501L20.2397 16.2235C20.2397 16.2235 20.2472 16.2235 20.25 16.2235C20.1301 17.1322 19.6833 17.9661 18.9931 18.5691C18.3028 19.1722 17.4166 19.5031 16.5 19.5001C13.3185 19.4966 10.2682 18.2312 8.01856 15.9815Z" fill="#00DFDF"/>
                                        </svg>
                                        <a href="tel:00441174090583" class="text-xs">00 44 117 409 0583</a>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <NuxtPicture 
                                priority
                                format="webp,avif" 
                                src="/images/nigeria.png" 
                                class="w-full"
                                :imgAttrs="{class:'w-full aspect-auto object-cover'}" 
                            />
                            <div class="location w-full absolute bottom-0 left-0 py-8 px-6 rounded-lg">
                                <h5>Nigeria</h5>
                                <div class="flex flex-col gap-2 mt-2">
                                    <div class="flex gap-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91661 6.63199C9.29993 7.04404 8.81928 7.62971 8.53545 8.31494C8.25162 9.00016 8.17736 9.75416 8.32205 10.4816C8.46675 11.209 8.8239 11.8772 9.34835 12.4017C9.8728 12.9261 10.541 13.2833 11.2684 13.4279C11.9958 13.5726 12.7498 13.4984 13.4351 13.2145C14.1203 12.9307 14.706 12.4501 15.118 11.8334C15.5301 11.2167 15.75 10.4917 15.75 9.75C15.75 8.75544 15.3549 7.80161 14.6517 7.09835C13.9484 6.39509 12.9946 6 12 6C11.2583 6 10.5333 6.21993 9.91661 6.63199ZM10.75 11.6208C10.38 11.3736 10.0916 11.0222 9.92127 10.611C9.75097 10.1999 9.70642 9.7475 9.79323 9.31105C9.88005 8.87459 10.0943 8.47368 10.409 8.15901C10.7237 7.84434 11.1246 7.63005 11.561 7.54323C11.9975 7.45642 12.4499 7.50097 12.861 7.67127C13.2722 7.84157 13.6236 8.12996 13.8708 8.49997C14.118 8.86998 14.25 9.30499 14.25 9.75C14.25 10.3467 14.0129 10.919 13.591 11.341C13.169 11.7629 12.5967 12 12 12C11.555 12 11.12 11.868 10.75 11.6208ZM6.16911 3.91911C4.62247 5.46575 3.75248 7.56273 3.75 9.75C3.75 12.6938 5.11031 15.8138 7.6875 18.7734C8.84552 20.1108 10.1489 21.3151 11.5734 22.3641C11.6995 22.4524 11.8498 22.4998 12.0037 22.4998C12.1577 22.4998 12.308 22.4524 12.4341 22.3641C13.856 21.3147 15.1568 20.1104 16.3125 18.7734C18.8859 15.8138 20.25 12.6938 20.25 9.75C20.2475 7.56273 19.3775 5.46575 17.8309 3.91911C16.2843 2.37247 14.1873 1.50248 12 1.5C9.81273 1.50248 7.71575 2.37247 6.16911 3.91911ZM5.25 9.75C5.25 7.95979 5.96116 6.2429 7.22703 4.97703C8.4929 3.71116 10.2098 3 12 3C13.7902 3 15.5071 3.71116 16.773 4.97703C18.0388 6.2429 18.75 7.95979 18.75 9.75C18.75 15.1153 13.5497 19.5938 12 20.8125C10.4503 19.5938 5.25 15.1172 5.25 9.75Z" fill="#00DFDF"/>
                                        </svg>
                                        <p class="text-xs flex-1">10th Floor, Standard Chartered HQ. No.142, Ahmadu Bello Way, Victoria Island, Eti-Osa, Lagos State</p>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4306 12.8766L16.4184 12.871C16.1892 12.7729 15.939 12.7336 15.6907 12.7565C15.4424 12.7794 15.2037 12.8639 14.9963 13.0022C14.9718 13.0184 14.9484 13.0359 14.9259 13.0547L12.6441 15.0001C11.1984 14.2979 9.70595 12.8166 9.00376 11.3897L10.9519 9.07318C10.9706 9.04974 10.9884 9.0263 11.0053 9.00099C11.1407 8.79409 11.2229 8.55692 11.2445 8.31059C11.2661 8.06427 11.2264 7.81642 11.1291 7.58912V7.57787L9.14438 3.1538C9.0157 2.85686 8.79444 2.60951 8.51362 2.44865C8.2328 2.2878 7.9075 2.22208 7.58626 2.2613C6.31592 2.42847 5.14986 3.05234 4.30588 4.01639C3.4619 4.98045 2.99771 6.21876 3.00001 7.50005C3.00001 14.9438 9.05626 21.0001 16.5 21.0001C17.7813 21.0023 19.0196 20.5382 19.9837 19.6942C20.9477 18.8502 21.5716 17.6841 21.7388 16.4138C21.7781 16.0927 21.7125 15.7674 21.5518 15.4866C21.3911 15.2058 21.144 14.9845 20.8472 14.8557L16.4306 12.8766ZM8.01856 15.9815C5.76888 13.7318 4.50348 10.6816 4.50001 7.50005C4.49648 6.58458 4.82631 5.69911 5.42789 5.00903C6.02947 4.31895 6.86167 3.87143 7.76907 3.75005C7.7687 3.7538 7.7687 3.75756 7.76907 3.7613L9.73782 8.16755L7.80001 10.4869C7.78034 10.5096 7.76247 10.5337 7.74657 10.5591C7.60549 10.7756 7.52273 11.0249 7.5063 11.2827C7.48988 11.5406 7.54035 11.7984 7.65282 12.031C8.5022 13.7682 10.2525 15.5054 12.0084 16.3538C12.2428 16.4652 12.502 16.5139 12.7608 16.4952C13.0196 16.4765 13.2692 16.3909 13.485 16.2469C13.5091 16.2307 13.5322 16.2132 13.5544 16.1944L15.8334 14.2501L20.2397 16.2235C20.2397 16.2235 20.2472 16.2235 20.25 16.2235C20.1301 17.1322 19.6833 17.9661 18.9931 18.5691C18.3028 19.1722 17.4166 19.5031 16.5 19.5001C13.3185 19.4966 10.2682 18.2312 8.01856 15.9815Z" fill="#00DFDF"/>
                                        </svg>
                                        <a href="tel:002347030131486" class="text-xs">00 234 703 013 1486</a>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <NuxtPicture 
                                priority
                                format="webp,avif" 
                                src="/images/lebanon.png" 
                                class="w-full"
                                :imgAttrs="{class:'w-full aspect-auto object-cover'}" 
                            />
                            <div class="location w-full absolute bottom-0 left-0 py-8 px-6 rounded-lg">
                                <h5>Lebanon</h5>
                                <div class="flex flex-col gap-2 mt-2">
                                    <div class="flex gap-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91661 6.63199C9.29993 7.04404 8.81928 7.62971 8.53545 8.31494C8.25162 9.00016 8.17736 9.75416 8.32205 10.4816C8.46675 11.209 8.8239 11.8772 9.34835 12.4017C9.8728 12.9261 10.541 13.2833 11.2684 13.4279C11.9958 13.5726 12.7498 13.4984 13.4351 13.2145C14.1203 12.9307 14.706 12.4501 15.118 11.8334C15.5301 11.2167 15.75 10.4917 15.75 9.75C15.75 8.75544 15.3549 7.80161 14.6517 7.09835C13.9484 6.39509 12.9946 6 12 6C11.2583 6 10.5333 6.21993 9.91661 6.63199ZM10.75 11.6208C10.38 11.3736 10.0916 11.0222 9.92127 10.611C9.75097 10.1999 9.70642 9.7475 9.79323 9.31105C9.88005 8.87459 10.0943 8.47368 10.409 8.15901C10.7237 7.84434 11.1246 7.63005 11.561 7.54323C11.9975 7.45642 12.4499 7.50097 12.861 7.67127C13.2722 7.84157 13.6236 8.12996 13.8708 8.49997C14.118 8.86998 14.25 9.30499 14.25 9.75C14.25 10.3467 14.0129 10.919 13.591 11.341C13.169 11.7629 12.5967 12 12 12C11.555 12 11.12 11.868 10.75 11.6208ZM6.16911 3.91911C4.62247 5.46575 3.75248 7.56273 3.75 9.75C3.75 12.6938 5.11031 15.8138 7.6875 18.7734C8.84552 20.1108 10.1489 21.3151 11.5734 22.3641C11.6995 22.4524 11.8498 22.4998 12.0037 22.4998C12.1577 22.4998 12.308 22.4524 12.4341 22.3641C13.856 21.3147 15.1568 20.1104 16.3125 18.7734C18.8859 15.8138 20.25 12.6938 20.25 9.75C20.2475 7.56273 19.3775 5.46575 17.8309 3.91911C16.2843 2.37247 14.1873 1.50248 12 1.5C9.81273 1.50248 7.71575 2.37247 6.16911 3.91911ZM5.25 9.75C5.25 7.95979 5.96116 6.2429 7.22703 4.97703C8.4929 3.71116 10.2098 3 12 3C13.7902 3 15.5071 3.71116 16.773 4.97703C18.0388 6.2429 18.75 7.95979 18.75 9.75C18.75 15.1153 13.5497 19.5938 12 20.8125C10.4503 19.5938 5.25 15.1172 5.25 9.75Z" fill="#00DFDF"/>
                                        </svg>
                                        <p class="text-xs flex-1">3rd Floor, Bloc A, Gefinor Center, Beirut, Lebanon</p>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4306 12.8766L16.4184 12.871C16.1892 12.7729 15.939 12.7336 15.6907 12.7565C15.4424 12.7794 15.2037 12.8639 14.9963 13.0022C14.9718 13.0184 14.9484 13.0359 14.9259 13.0547L12.6441 15.0001C11.1984 14.2979 9.70595 12.8166 9.00376 11.3897L10.9519 9.07318C10.9706 9.04974 10.9884 9.0263 11.0053 9.00099C11.1407 8.79409 11.2229 8.55692 11.2445 8.31059C11.2661 8.06427 11.2264 7.81642 11.1291 7.58912V7.57787L9.14438 3.1538C9.0157 2.85686 8.79444 2.60951 8.51362 2.44865C8.2328 2.2878 7.9075 2.22208 7.58626 2.2613C6.31592 2.42847 5.14986 3.05234 4.30588 4.01639C3.4619 4.98045 2.99771 6.21876 3.00001 7.50005C3.00001 14.9438 9.05626 21.0001 16.5 21.0001C17.7813 21.0023 19.0196 20.5382 19.9837 19.6942C20.9477 18.8502 21.5716 17.6841 21.7388 16.4138C21.7781 16.0927 21.7125 15.7674 21.5518 15.4866C21.3911 15.2058 21.144 14.9845 20.8472 14.8557L16.4306 12.8766ZM8.01856 15.9815C5.76888 13.7318 4.50348 10.6816 4.50001 7.50005C4.49648 6.58458 4.82631 5.69911 5.42789 5.00903C6.02947 4.31895 6.86167 3.87143 7.76907 3.75005C7.7687 3.7538 7.7687 3.75756 7.76907 3.7613L9.73782 8.16755L7.80001 10.4869C7.78034 10.5096 7.76247 10.5337 7.74657 10.5591C7.60549 10.7756 7.52273 11.0249 7.5063 11.2827C7.48988 11.5406 7.54035 11.7984 7.65282 12.031C8.5022 13.7682 10.2525 15.5054 12.0084 16.3538C12.2428 16.4652 12.502 16.5139 12.7608 16.4952C13.0196 16.4765 13.2692 16.3909 13.485 16.2469C13.5091 16.2307 13.5322 16.2132 13.5544 16.1944L15.8334 14.2501L20.2397 16.2235C20.2397 16.2235 20.2472 16.2235 20.25 16.2235C20.1301 17.1322 19.6833 17.9661 18.9931 18.5691C18.3028 19.1722 17.4166 19.5031 16.5 19.5001C13.3185 19.4966 10.2682 18.2312 8.01856 15.9815Z" fill="#00DFDF"/>
                                        </svg>
                                        <a href="tel:00441174090583" class="text-xs">00 961 1 74 88 47 ext: 224</a>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <NuxtPicture 
                                priority
                                format="webp,avif" 
                                src="/images/jordan.png" 
                                class="w-full"
                                :imgAttrs="{class:'w-full aspect-auto object-cover'}" 
                            />
                            <div class="location w-full absolute bottom-0 left-0 py-8 px-6 rounded-lg">
                                <h5>Jordan</h5>
                                <div class="flex flex-col gap-2 mt-2">
                                    <div class="flex gap-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91661 6.63199C9.29993 7.04404 8.81928 7.62971 8.53545 8.31494C8.25162 9.00016 8.17736 9.75416 8.32205 10.4816C8.46675 11.209 8.8239 11.8772 9.34835 12.4017C9.8728 12.9261 10.541 13.2833 11.2684 13.4279C11.9958 13.5726 12.7498 13.4984 13.4351 13.2145C14.1203 12.9307 14.706 12.4501 15.118 11.8334C15.5301 11.2167 15.75 10.4917 15.75 9.75C15.75 8.75544 15.3549 7.80161 14.6517 7.09835C13.9484 6.39509 12.9946 6 12 6C11.2583 6 10.5333 6.21993 9.91661 6.63199ZM10.75 11.6208C10.38 11.3736 10.0916 11.0222 9.92127 10.611C9.75097 10.1999 9.70642 9.7475 9.79323 9.31105C9.88005 8.87459 10.0943 8.47368 10.409 8.15901C10.7237 7.84434 11.1246 7.63005 11.561 7.54323C11.9975 7.45642 12.4499 7.50097 12.861 7.67127C13.2722 7.84157 13.6236 8.12996 13.8708 8.49997C14.118 8.86998 14.25 9.30499 14.25 9.75C14.25 10.3467 14.0129 10.919 13.591 11.341C13.169 11.7629 12.5967 12 12 12C11.555 12 11.12 11.868 10.75 11.6208ZM6.16911 3.91911C4.62247 5.46575 3.75248 7.56273 3.75 9.75C3.75 12.6938 5.11031 15.8138 7.6875 18.7734C8.84552 20.1108 10.1489 21.3151 11.5734 22.3641C11.6995 22.4524 11.8498 22.4998 12.0037 22.4998C12.1577 22.4998 12.308 22.4524 12.4341 22.3641C13.856 21.3147 15.1568 20.1104 16.3125 18.7734C18.8859 15.8138 20.25 12.6938 20.25 9.75C20.2475 7.56273 19.3775 5.46575 17.8309 3.91911C16.2843 2.37247 14.1873 1.50248 12 1.5C9.81273 1.50248 7.71575 2.37247 6.16911 3.91911ZM5.25 9.75C5.25 7.95979 5.96116 6.2429 7.22703 4.97703C8.4929 3.71116 10.2098 3 12 3C13.7902 3 15.5071 3.71116 16.773 4.97703C18.0388 6.2429 18.75 7.95979 18.75 9.75C18.75 15.1153 13.5497 19.5938 12 20.8125C10.4503 19.5938 5.25 15.1172 5.25 9.75Z" fill="#00DFDF"/>
                                        </svg>
                                        <p class="text-xs flex-1">Office 501, Campbell Grey Living, Land Number 851, Al-Waibdeh - Al- Wastani Basin. the city of Amaan, Jordan</p>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4306 12.8766L16.4184 12.871C16.1892 12.7729 15.939 12.7336 15.6907 12.7565C15.4424 12.7794 15.2037 12.8639 14.9963 13.0022C14.9718 13.0184 14.9484 13.0359 14.9259 13.0547L12.6441 15.0001C11.1984 14.2979 9.70595 12.8166 9.00376 11.3897L10.9519 9.07318C10.9706 9.04974 10.9884 9.0263 11.0053 9.00099C11.1407 8.79409 11.2229 8.55692 11.2445 8.31059C11.2661 8.06427 11.2264 7.81642 11.1291 7.58912V7.57787L9.14438 3.1538C9.0157 2.85686 8.79444 2.60951 8.51362 2.44865C8.2328 2.2878 7.9075 2.22208 7.58626 2.2613C6.31592 2.42847 5.14986 3.05234 4.30588 4.01639C3.4619 4.98045 2.99771 6.21876 3.00001 7.50005C3.00001 14.9438 9.05626 21.0001 16.5 21.0001C17.7813 21.0023 19.0196 20.5382 19.9837 19.6942C20.9477 18.8502 21.5716 17.6841 21.7388 16.4138C21.7781 16.0927 21.7125 15.7674 21.5518 15.4866C21.3911 15.2058 21.144 14.9845 20.8472 14.8557L16.4306 12.8766ZM8.01856 15.9815C5.76888 13.7318 4.50348 10.6816 4.50001 7.50005C4.49648 6.58458 4.82631 5.69911 5.42789 5.00903C6.02947 4.31895 6.86167 3.87143 7.76907 3.75005C7.7687 3.7538 7.7687 3.75756 7.76907 3.7613L9.73782 8.16755L7.80001 10.4869C7.78034 10.5096 7.76247 10.5337 7.74657 10.5591C7.60549 10.7756 7.52273 11.0249 7.5063 11.2827C7.48988 11.5406 7.54035 11.7984 7.65282 12.031C8.5022 13.7682 10.2525 15.5054 12.0084 16.3538C12.2428 16.4652 12.502 16.5139 12.7608 16.4952C13.0196 16.4765 13.2692 16.3909 13.485 16.2469C13.5091 16.2307 13.5322 16.2132 13.5544 16.1944L15.8334 14.2501L20.2397 16.2235C20.2397 16.2235 20.2472 16.2235 20.25 16.2235C20.1301 17.1322 19.6833 17.9661 18.9931 18.5691C18.3028 19.1722 17.4166 19.5031 16.5 19.5001C13.3185 19.4966 10.2682 18.2312 8.01856 15.9815Z" fill="#00DFDF"/>
                                        </svg>
                                        <a href="tel:00441174090583" class="text-xs">00 962 79 108 4422</a>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <NuxtPicture 
                                priority
                                format="webp,avif" 
                                src="/images/uae.png" 
                                class="w-full"
                                :imgAttrs="{class:'w-full aspect-auto object-cover'}" 
                            />
                            <div class="location w-full absolute bottom-0 left-0 py-8 px-6 rounded-lg">
                                <h5>United Arab Emirates</h5>
                                <div class="flex flex-col gap-2 mt-2">
                                    <div class="flex gap-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91661 6.63199C9.29993 7.04404 8.81928 7.62971 8.53545 8.31494C8.25162 9.00016 8.17736 9.75416 8.32205 10.4816C8.46675 11.209 8.8239 11.8772 9.34835 12.4017C9.8728 12.9261 10.541 13.2833 11.2684 13.4279C11.9958 13.5726 12.7498 13.4984 13.4351 13.2145C14.1203 12.9307 14.706 12.4501 15.118 11.8334C15.5301 11.2167 15.75 10.4917 15.75 9.75C15.75 8.75544 15.3549 7.80161 14.6517 7.09835C13.9484 6.39509 12.9946 6 12 6C11.2583 6 10.5333 6.21993 9.91661 6.63199ZM10.75 11.6208C10.38 11.3736 10.0916 11.0222 9.92127 10.611C9.75097 10.1999 9.70642 9.7475 9.79323 9.31105C9.88005 8.87459 10.0943 8.47368 10.409 8.15901C10.7237 7.84434 11.1246 7.63005 11.561 7.54323C11.9975 7.45642 12.4499 7.50097 12.861 7.67127C13.2722 7.84157 13.6236 8.12996 13.8708 8.49997C14.118 8.86998 14.25 9.30499 14.25 9.75C14.25 10.3467 14.0129 10.919 13.591 11.341C13.169 11.7629 12.5967 12 12 12C11.555 12 11.12 11.868 10.75 11.6208ZM6.16911 3.91911C4.62247 5.46575 3.75248 7.56273 3.75 9.75C3.75 12.6938 5.11031 15.8138 7.6875 18.7734C8.84552 20.1108 10.1489 21.3151 11.5734 22.3641C11.6995 22.4524 11.8498 22.4998 12.0037 22.4998C12.1577 22.4998 12.308 22.4524 12.4341 22.3641C13.856 21.3147 15.1568 20.1104 16.3125 18.7734C18.8859 15.8138 20.25 12.6938 20.25 9.75C20.2475 7.56273 19.3775 5.46575 17.8309 3.91911C16.2843 2.37247 14.1873 1.50248 12 1.5C9.81273 1.50248 7.71575 2.37247 6.16911 3.91911ZM5.25 9.75C5.25 7.95979 5.96116 6.2429 7.22703 4.97703C8.4929 3.71116 10.2098 3 12 3C13.7902 3 15.5071 3.71116 16.773 4.97703C18.0388 6.2429 18.75 7.95979 18.75 9.75C18.75 15.1153 13.5497 19.5938 12 20.8125C10.4503 19.5938 5.25 15.1172 5.25 9.75Z" fill="#00DFDF"/>
                                        </svg>
                                        <p class="text-xs flex-1">Unit 30, floor 20, Central Park Tower. DIFC, Dubai.</p>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4306 12.8766L16.4184 12.871C16.1892 12.7729 15.939 12.7336 15.6907 12.7565C15.4424 12.7794 15.2037 12.8639 14.9963 13.0022C14.9718 13.0184 14.9484 13.0359 14.9259 13.0547L12.6441 15.0001C11.1984 14.2979 9.70595 12.8166 9.00376 11.3897L10.9519 9.07318C10.9706 9.04974 10.9884 9.0263 11.0053 9.00099C11.1407 8.79409 11.2229 8.55692 11.2445 8.31059C11.2661 8.06427 11.2264 7.81642 11.1291 7.58912V7.57787L9.14438 3.1538C9.0157 2.85686 8.79444 2.60951 8.51362 2.44865C8.2328 2.2878 7.9075 2.22208 7.58626 2.2613C6.31592 2.42847 5.14986 3.05234 4.30588 4.01639C3.4619 4.98045 2.99771 6.21876 3.00001 7.50005C3.00001 14.9438 9.05626 21.0001 16.5 21.0001C17.7813 21.0023 19.0196 20.5382 19.9837 19.6942C20.9477 18.8502 21.5716 17.6841 21.7388 16.4138C21.7781 16.0927 21.7125 15.7674 21.5518 15.4866C21.3911 15.2058 21.144 14.9845 20.8472 14.8557L16.4306 12.8766ZM8.01856 15.9815C5.76888 13.7318 4.50348 10.6816 4.50001 7.50005C4.49648 6.58458 4.82631 5.69911 5.42789 5.00903C6.02947 4.31895 6.86167 3.87143 7.76907 3.75005C7.7687 3.7538 7.7687 3.75756 7.76907 3.7613L9.73782 8.16755L7.80001 10.4869C7.78034 10.5096 7.76247 10.5337 7.74657 10.5591C7.60549 10.7756 7.52273 11.0249 7.5063 11.2827C7.48988 11.5406 7.54035 11.7984 7.65282 12.031C8.5022 13.7682 10.2525 15.5054 12.0084 16.3538C12.2428 16.4652 12.502 16.5139 12.7608 16.4952C13.0196 16.4765 13.2692 16.3909 13.485 16.2469C13.5091 16.2307 13.5322 16.2132 13.5544 16.1944L15.8334 14.2501L20.2397 16.2235C20.2397 16.2235 20.2472 16.2235 20.25 16.2235C20.1301 17.1322 19.6833 17.9661 18.9931 18.5691C18.3028 19.1722 17.4166 19.5031 16.5 19.5001C13.3185 19.4966 10.2682 18.2312 8.01856 15.9815Z" fill="#00DFDF"/>
                                        </svg>
                                        <a href="tel:00441174090583" class="text-xs">00 971 4 565 7743</a>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <NuxtPicture 
                                priority
                                format="webp,avif" 
                                src="/images/indonesia.png" 
                                class="w-full"
                                :imgAttrs="{class:'w-full aspect-auto object-cover'}" 
                            />
                            <div class="location w-full absolute bottom-0 left-0 py-8 px-6 rounded-lg">
                                <h5>Indonesia</h5>
                                <div class="flex flex-col gap-2 mt-2">
                                    <div class="flex gap-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91661 6.63199C9.29993 7.04404 8.81928 7.62971 8.53545 8.31494C8.25162 9.00016 8.17736 9.75416 8.32205 10.4816C8.46675 11.209 8.8239 11.8772 9.34835 12.4017C9.8728 12.9261 10.541 13.2833 11.2684 13.4279C11.9958 13.5726 12.7498 13.4984 13.4351 13.2145C14.1203 12.9307 14.706 12.4501 15.118 11.8334C15.5301 11.2167 15.75 10.4917 15.75 9.75C15.75 8.75544 15.3549 7.80161 14.6517 7.09835C13.9484 6.39509 12.9946 6 12 6C11.2583 6 10.5333 6.21993 9.91661 6.63199ZM10.75 11.6208C10.38 11.3736 10.0916 11.0222 9.92127 10.611C9.75097 10.1999 9.70642 9.7475 9.79323 9.31105C9.88005 8.87459 10.0943 8.47368 10.409 8.15901C10.7237 7.84434 11.1246 7.63005 11.561 7.54323C11.9975 7.45642 12.4499 7.50097 12.861 7.67127C13.2722 7.84157 13.6236 8.12996 13.8708 8.49997C14.118 8.86998 14.25 9.30499 14.25 9.75C14.25 10.3467 14.0129 10.919 13.591 11.341C13.169 11.7629 12.5967 12 12 12C11.555 12 11.12 11.868 10.75 11.6208ZM6.16911 3.91911C4.62247 5.46575 3.75248 7.56273 3.75 9.75C3.75 12.6938 5.11031 15.8138 7.6875 18.7734C8.84552 20.1108 10.1489 21.3151 11.5734 22.3641C11.6995 22.4524 11.8498 22.4998 12.0037 22.4998C12.1577 22.4998 12.308 22.4524 12.4341 22.3641C13.856 21.3147 15.1568 20.1104 16.3125 18.7734C18.8859 15.8138 20.25 12.6938 20.25 9.75C20.2475 7.56273 19.3775 5.46575 17.8309 3.91911C16.2843 2.37247 14.1873 1.50248 12 1.5C9.81273 1.50248 7.71575 2.37247 6.16911 3.91911ZM5.25 9.75C5.25 7.95979 5.96116 6.2429 7.22703 4.97703C8.4929 3.71116 10.2098 3 12 3C13.7902 3 15.5071 3.71116 16.773 4.97703C18.0388 6.2429 18.75 7.95979 18.75 9.75C18.75 15.1153 13.5497 19.5938 12 20.8125C10.4503 19.5938 5.25 15.1172 5.25 9.75Z" fill="#00DFDF"/>
                                        </svg>
                                        <p class="text-xs flex-1">9th Floor Noble House Building, Lingkar Mega Kuningan, Kuningan, Kuningan Timur, Setiabudi, Jakarta Selatan, Jakarta 12950</p>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4306 12.8766L16.4184 12.871C16.1892 12.7729 15.939 12.7336 15.6907 12.7565C15.4424 12.7794 15.2037 12.8639 14.9963 13.0022C14.9718 13.0184 14.9484 13.0359 14.9259 13.0547L12.6441 15.0001C11.1984 14.2979 9.70595 12.8166 9.00376 11.3897L10.9519 9.07318C10.9706 9.04974 10.9884 9.0263 11.0053 9.00099C11.1407 8.79409 11.2229 8.55692 11.2445 8.31059C11.2661 8.06427 11.2264 7.81642 11.1291 7.58912V7.57787L9.14438 3.1538C9.0157 2.85686 8.79444 2.60951 8.51362 2.44865C8.2328 2.2878 7.9075 2.22208 7.58626 2.2613C6.31592 2.42847 5.14986 3.05234 4.30588 4.01639C3.4619 4.98045 2.99771 6.21876 3.00001 7.50005C3.00001 14.9438 9.05626 21.0001 16.5 21.0001C17.7813 21.0023 19.0196 20.5382 19.9837 19.6942C20.9477 18.8502 21.5716 17.6841 21.7388 16.4138C21.7781 16.0927 21.7125 15.7674 21.5518 15.4866C21.3911 15.2058 21.144 14.9845 20.8472 14.8557L16.4306 12.8766ZM8.01856 15.9815C5.76888 13.7318 4.50348 10.6816 4.50001 7.50005C4.49648 6.58458 4.82631 5.69911 5.42789 5.00903C6.02947 4.31895 6.86167 3.87143 7.76907 3.75005C7.7687 3.7538 7.7687 3.75756 7.76907 3.7613L9.73782 8.16755L7.80001 10.4869C7.78034 10.5096 7.76247 10.5337 7.74657 10.5591C7.60549 10.7756 7.52273 11.0249 7.5063 11.2827C7.48988 11.5406 7.54035 11.7984 7.65282 12.031C8.5022 13.7682 10.2525 15.5054 12.0084 16.3538C12.2428 16.4652 12.502 16.5139 12.7608 16.4952C13.0196 16.4765 13.2692 16.3909 13.485 16.2469C13.5091 16.2307 13.5322 16.2132 13.5544 16.1944L15.8334 14.2501L20.2397 16.2235C20.2397 16.2235 20.2472 16.2235 20.25 16.2235C20.1301 17.1322 19.6833 17.9661 18.9931 18.5691C18.3028 19.1722 17.4166 19.5031 16.5 19.5001C13.3185 19.4966 10.2682 18.2312 8.01856 15.9815Z" fill="#00DFDF"/>
                                        </svg>
                                        <a href="tel:00441174090583" class="text-xs">00 62 813 802 39341</a>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    const emit = defineEmits();

    useSeoMeta({ 
        title: 'Contact Us if you have any questions',
        ogTitle: 'Contact Us if you have any questions',
        description: 'Contact us in case you have any questions about Monty Pay and its services, Fill out the form and we will make sure to get back to you as soon as possible.',
        ogDescription: 'Contact us in case you have any questions about Monty Pay and its services, Fill out the form and we will make sure to get back to you as soon as possible.',
        ogImage: 'https://example.com/image.png',
        twitterCard: 'summary_large_image',
    })
    
    const submissionMessage = ref('');

    const form = ref({
        first_name: '',
        last_name: '',
        email: '',
        mobile: '',
        country: '',
        industry: '',
        product: '',
        company: '',
        size: '',
        link: '',
        message: '',
        acknowledgment: false,
    });

    const errors = ref({
        first_name: '',
        last_name: '',
        email: '',
        mobile: '',
        country: '',
        industry: '',
        product: '',
        company: '',
        size: '',
        link: '',
        message: '',
        acknowledgment: '',
    });

    const validationRules = {
        first_name: {
            required: 'Please enter your first name',
            safe: 'Your input has invalid value'
        },
        last_name: {
            required: 'Please enter your last name',
            safe: 'Your input has invalid value'
        },
        email: {
            required: 'Please enter your email address',
            email: 'Please enter a valid email address',
            safe: 'Your input has invalid value'
        },
        mobile: {
            required: 'Please enter your mobile number',
            numeric: 'Please enter a valid numeric phone number',
            length: 'Please enter a valid phone number',
            safe: 'Your input has invalid value'
        },
        country: {
            required: 'Please select a country',
            safe: 'Your input has invalid value'
        },
        industry: {
            required: 'Please select an industry',
            safe: 'Your input has invalid value'
        },
        product: {
            required: 'Please select a product',
            safe: 'Your input has invalid value'
        },
        company: {
            required: 'Please enter your company name',
            safe: 'Your input has invalid value'
        },
        size: {
            required: 'Please enter your company size',
            numeric: 'Please enter a valid numeric company size',
            safe: 'Your input has invalid value'
        },
        link: {
            required: 'Please enter your website',
            url: 'Please enter a valid URL for your website',
            safe: 'Your input has invalid value'
        },
        message: {
            required: 'Please leave us a message',
            safe: 'Your input has invalid value'
        },
        acknowledgment: {
            required: 'You must agree to our privacy policy',
            safe: 'Your input has invalid value'
        },
    };

    const handleSubmit = async () => {
        if (validateForm(form, errors, validationRules)) {
            try {
                const API_ENDPOINT = 'https://backend.montypay.com/wp-json/contact-form-7/v1/contact-forms/9/feedback';
                const formData = new FormData();
                formData.append('first_name', form.value.first_name);
                formData.append('last_name', form.value.last_name);
                formData.append('work_email', form.value.email);
                formData.append('phone_number', form.value.mobile);
                formData.append('country', form.value.country);
                formData.append('industry', form.value.industry);
                formData.append('product', form.value.product);
                formData.append('company_name', form.value.company);
                formData.append('company_size', form.value.size);
                formData.append('website', form.value.link);
                formData.append('message', form.value.message);
                formData.append('_wpcf7_unit_tag', 'rte');
                // console.log(formData);
                // return;
                const response = await fetch(API_ENDPOINT, {
                    method: 'POST',
                    body: formData,
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                //console.log("Form submitted successfully:", data);
                submissionMessage.value = "Thank you for your message."
                resetForm();
                //Handle success response, such as notifying the user or redirecting
            } catch (error) {
                console.error("Form submission error:", error);
                // Handle errors, such as displaying a user-friendly error message
                submissionMessage.value = "Error in submitting your message."
                resetForm();
            }
        }
    };
    const resetForm = () => {
        form.value.first_name="";
        form.value.last_name="";
        form.value.email="";
        form.value.mobile="";
        form.value.country="";
        form.value.industry="";
        form.value.product="";
        form.value.company="";
        form.value.size="";
        form.value.link="";
        form.value.message="";
    }

</script>

<style lang="sass" scoped>
    .location
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 70%)

</style>
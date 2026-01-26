<template lang="">
    <div>
        <Hero 
            :title="t('Pages.Contact Us.Banner.Title')"
            :paragraph="t('Pages.Contact Us.Banner.Description')"
            image="contact-us"
            hero="55"
        />

        <section id="section-2" class="py-16 lg:py-24 bg-quaternary text-primary overflow-hidden">
            <Blob />
            
            <div class="container">
                <ContentBlock 
                    :title="t('Pages.Contact Us.Section 2.Title')"
                />

                <div class="flex flex-col lg:flex-row lg:justify-between gap-8 mt-10">
                    <div class="flex w-full lg:w-3/5 xl:w-2/5 flex-col gap-6">
                        <div class="flex gap-8 w-full">
                            <div class="flex flex-col gap-1 w-full">
                                <label for="first_name">{{t('General.Labels.First Name')}}</label>
                                <input v-model="form.first_name" type="text" id="first_name" :placeholder="t('General.Placeholders.First Name')" class="w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-0">
                                <div v-if="errors.first_name" class="text-red-500 text-xs">{{ errors.first_name }}</div>
                            </div>
                            <div class="flex flex-col gap-1 w-full">
                                <label for="last_name">{{t('General.Labels.Last Name')}}</label>
                                <input v-model="form.last_name" type="text" id="last_name" :placeholder="t('General.Placeholders.Last Name')" class="w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-0">
                                <div v-if="errors.last_name" class="text-red-500 text-xs">{{ errors.last_name }}</div>
                            </div>
                        </div> 

                        <div class="flex gap-8 w-full">
                            <div class="flex flex-col gap-1 w-full">
                                <label for="email">{{t('General.Labels.Work Email')}}</label>
                                <input v-model="form.email" type="text" id="email" :placeholder="t('General.Labels.Work Email')" class="w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-0">
                                <div v-if="errors.email" class="text-red-500 text-xs">{{ errors.email }}</div>
                            </div>
                        </div> 

                        <div class="flex gap-8 w-full">
                            <div class="flex flex-col gap-1 w-full">
                                <label for="mobile">{{t('General.Labels.Phone Number')}}</label>
                                <input v-model="form.mobile" type="tel" id="mobile" :placeholder="t('General.Placeholders.Phone Number')" class="w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-0">
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
                                <label for="country">{{t('General.Labels.Country')}}</label>
                                <select ref="countrySelect" :class="form.country === '' ? 'text-gray-400' : 'text-black'" v-model="form.country" name="country" class="custom-select w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-0">
                                    <option value="">{{t('General.Placeholders.Country')}}</option>
                                    <option :value="rt(country.Value)" v-for="country in countries" :key="rt(country.Value)">
                                        {{
                                            rt(country.Title)
                                        }}
                                    </option>                                   
                                </select>
                                
                                <div v-if="errors.country" class="text-red-500 text-xs">{{ errors.country }}</div>
                            </div>
                        </div>

                        <div class="flex gap-8 w-full">
                            <div class="flex flex-col gap-1 w-full">
                                <label for="selected-country">{{t('General.Labels.Industry')}}</label>
                                <select ref="industrySelect" v-model="form.industry" name="industry" :class="form.industry === '' ? 'text-gray-400' : 'text-black'"  class="custom-select w-full text-base px-4 py-2 bg-primary rounded-lg outline-0">
                                    <option value="">{{t('General.Placeholders.Industry')}}</option>
                                    <option :value="rt(industry.Value)" v-for="industry in industries" :key="rt(industry.Value)">
                                        {{
                                            rt(industry.Title)
                                        }}
                                    </option>    
                                </select>
                                <div v-if="errors.industry" class="text-red-500 text-xs">{{ errors.industry }}</div>
                            </div>
                        </div>

                        <div class="flex gap-8 w-full">
                            <div class="flex flex-col gap-1 w-full">
                                <label for="product">{{t('General.Labels.Product')}}</label>
                                <select ref="productSelect" :class="form.product === '' ? 'text-gray-400' : 'text-black'" v-model="form.product" name="product" class="custom-select w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-0">
                                    <option value="">{{t('General.Placeholders.Product')}}</option>
                                    <option :value="rt(product.Value)" v-for="product in products" :key="rt(product.Value)">
                                        {{
                                            rt(product.Title)
                                        }}
                                    </option> 
                                    
                                </select>
                                <div v-if="errors.product" class="text-red-500 text-xs">{{ errors.product }}</div>
                            </div>
                        </div>
                        <div class="flex gap-8 w-4full">
                            <div class="flex flex-col gap-1 w-full">
                                <label for="company">{{t('General.Labels.Company Name')}}</label>
                                <input v-model="form.company" type="text" id="company" :placeholder="t('General.Placeholders.Company Name')" class="w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-0">
                                <div v-if="errors.company" class="text-red-500 text-xs">{{ errors.company }}</div>
                            </div>
                        </div> 

                        <div class="flex gap-8 w-full">
                            <div class="flex flex-col gap-1 w-full">
                                <label for="size">{{t('General.Labels.Company Size')}}</label>
                                <input v-model="form.size" type="text" id="size" :placeholder="t('General.Placeholders.Company Size')" class="w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-0">
                                <div v-if="errors.size" class="text-red-500 text-xs">{{ errors.size }}</div>
                            </div>
                        </div> 

                        <div class="flex gap-8 w-full">
                            <div class="flex flex-col gap-1 w-full">
                                <label for="link">{{t('General.Labels.Website')}}</label>
                                <input v-model="form.link" type="text" id="link" :placeholder="t('General.Placeholders.Website')" class="w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-0">
                                <div v-if="errors.link" class="text-red-500 text-xs">{{ errors.link }}</div>
                            </div>
                        </div> 

                        <div class="flex gap-8 w-full">
                            <div class="flex flex-col gap-1 w-full">
                                <label for="message">{{t('General.Labels.Message')}}</label>
                                <textarea v-model="form.message" id="message" :placeholder="t('General.Placeholders.Message')" class="w-full text-base px-4 py-2 bg-primary text-black rounded-lg outline-0 resize-none" rows="10"></textarea>
                                <div v-if="errors.message" class="text-red-500 text-xs">{{ errors.message }}</div>
                            </div>
                        </div> 

                        <div class="flex gap-8 w-full mt-8">
                            <div class="flex-col gap-3 w-full">
                                <div class="flex gap-3 w-full">
                                    <input v-model="form.acknowledgment" type="checkbox" id="acknowledgment">
                                    <label for="acknowledgment">{{t('General.Labels.Privacy Policy 2')}}</label>
                                </div>
                                <div v-if="errors.acknowledgment" class="text-red-500 text-xs">{{ errors.acknowledgment }}</div>
                            </div>
                        </div> 

                        <div class="gap-8 w-full">
                            <div class="flex gap-3 w-full">
                                <input type="submit" id="submit" class="mp-button-secondary w-full text-base" :value="submitting ? t('General.Buttons.Submitting') : t('General.Buttons.Contact Us')" @click.prevent="handleSubmit">
                            </div>
                            <div class="mt-5" v-if="submissionMessage">{{submissionMessage}}</div>
                        </div> 
                    </div>

                    <div class="w-full lg:w-1/3 mt-16 lg:mt-0">
                        <NuxtPicture 
                            priority
                            format="webp" 
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
                    :title="t('Pages.Contact Us.Section 3.Title')"
                    class="text-center mt-16"
                />

                <div class="flex flex-col gap-7 lg:gap-14 mt-16 text-white text-start md:w-4/5 mx-auto">
                    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-14">
                        <div>
                            <NuxtPicture 
                                priority
                                format="webp" 
                                src="/images/uk.png" 
                                class="w-full"
                                :imgAttrs="{class:'w-full aspect-auto object-cover'}" 
                            />
                            <div class="location w-full absolute bottom-0 start-0 py-8 px-6 rounded-lg">
                                <h5>{{t('Pages.Contact Us.Section 3.United Kingdom')}}</h5>
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
                                format="webp" 
                                src="/images/nigeria.png" 
                                class="w-full"
                                :imgAttrs="{class:'w-full aspect-auto object-cover'}" 
                            />
                            <div class="location w-full absolute bottom-0 start-0 py-8 px-6 rounded-lg">
                                <h5>{{t('Pages.Contact Us.Section 3.Nigeria')}}</h5>
                                <div class="flex flex-col gap-2 mt-2">
                                    <div class="flex gap-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91661 6.63199C9.29993 7.04404 8.81928 7.62971 8.53545 8.31494C8.25162 9.00016 8.17736 9.75416 8.32205 10.4816C8.46675 11.209 8.8239 11.8772 9.34835 12.4017C9.8728 12.9261 10.541 13.2833 11.2684 13.4279C11.9958 13.5726 12.7498 13.4984 13.4351 13.2145C14.1203 12.9307 14.706 12.4501 15.118 11.8334C15.5301 11.2167 15.75 10.4917 15.75 9.75C15.75 8.75544 15.3549 7.80161 14.6517 7.09835C13.9484 6.39509 12.9946 6 12 6C11.2583 6 10.5333 6.21993 9.91661 6.63199ZM10.75 11.6208C10.38 11.3736 10.0916 11.0222 9.92127 10.611C9.75097 10.1999 9.70642 9.7475 9.79323 9.31105C9.88005 8.87459 10.0943 8.47368 10.409 8.15901C10.7237 7.84434 11.1246 7.63005 11.561 7.54323C11.9975 7.45642 12.4499 7.50097 12.861 7.67127C13.2722 7.84157 13.6236 8.12996 13.8708 8.49997C14.118 8.86998 14.25 9.30499 14.25 9.75C14.25 10.3467 14.0129 10.919 13.591 11.341C13.169 11.7629 12.5967 12 12 12C11.555 12 11.12 11.868 10.75 11.6208ZM6.16911 3.91911C4.62247 5.46575 3.75248 7.56273 3.75 9.75C3.75 12.6938 5.11031 15.8138 7.6875 18.7734C8.84552 20.1108 10.1489 21.3151 11.5734 22.3641C11.6995 22.4524 11.8498 22.4998 12.0037 22.4998C12.1577 22.4998 12.308 22.4524 12.4341 22.3641C13.856 21.3147 15.1568 20.1104 16.3125 18.7734C18.8859 15.8138 20.25 12.6938 20.25 9.75C20.2475 7.56273 19.3775 5.46575 17.8309 3.91911C16.2843 2.37247 14.1873 1.50248 12 1.5C9.81273 1.50248 7.71575 2.37247 6.16911 3.91911ZM5.25 9.75C5.25 7.95979 5.96116 6.2429 7.22703 4.97703C8.4929 3.71116 10.2098 3 12 3C13.7902 3 15.5071 3.71116 16.773 4.97703C18.0388 6.2429 18.75 7.95979 18.75 9.75C18.75 15.1153 13.5497 19.5938 12 20.8125C10.4503 19.5938 5.25 15.1172 5.25 9.75Z" fill="#00DFDF"/>
                                        </svg>
                                        <p class="text-xs flex-1">1st floor, Sigma Base, 7/9 Molade Okoya Thomas Street, Victoria Island, Lagos State, Nigeria</p>
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
                                format="webp" 
                                src="/images/lebanon.png" 
                                class="w-full"
                                :imgAttrs="{class:'w-full aspect-auto object-cover'}" 
                            />
                            <div class="location w-full absolute bottom-0 start-0 py-8 px-6 rounded-lg">
                                <h5>{{t('Pages.Contact Us.Section 3.Lebanon')}}</h5>
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
                                format="webp" 
                                src="/images/jordan.png" 
                                class="w-full"
                                :imgAttrs="{class:'w-full aspect-auto object-cover'}" 
                            />
                            <div class="location w-full absolute bottom-0 start-0 py-8 px-6 rounded-lg">
                                <h5>{{t('Pages.Contact Us.Section 3.Jordan')}}</h5>
                                <div class="flex flex-col gap-2 mt-2">
                                    <div class="flex gap-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91661 6.63199C9.29993 7.04404 8.81928 7.62971 8.53545 8.31494C8.25162 9.00016 8.17736 9.75416 8.32205 10.4816C8.46675 11.209 8.8239 11.8772 9.34835 12.4017C9.8728 12.9261 10.541 13.2833 11.2684 13.4279C11.9958 13.5726 12.7498 13.4984 13.4351 13.2145C14.1203 12.9307 14.706 12.4501 15.118 11.8334C15.5301 11.2167 15.75 10.4917 15.75 9.75C15.75 8.75544 15.3549 7.80161 14.6517 7.09835C13.9484 6.39509 12.9946 6 12 6C11.2583 6 10.5333 6.21993 9.91661 6.63199ZM10.75 11.6208C10.38 11.3736 10.0916 11.0222 9.92127 10.611C9.75097 10.1999 9.70642 9.7475 9.79323 9.31105C9.88005 8.87459 10.0943 8.47368 10.409 8.15901C10.7237 7.84434 11.1246 7.63005 11.561 7.54323C11.9975 7.45642 12.4499 7.50097 12.861 7.67127C13.2722 7.84157 13.6236 8.12996 13.8708 8.49997C14.118 8.86998 14.25 9.30499 14.25 9.75C14.25 10.3467 14.0129 10.919 13.591 11.341C13.169 11.7629 12.5967 12 12 12C11.555 12 11.12 11.868 10.75 11.6208ZM6.16911 3.91911C4.62247 5.46575 3.75248 7.56273 3.75 9.75C3.75 12.6938 5.11031 15.8138 7.6875 18.7734C8.84552 20.1108 10.1489 21.3151 11.5734 22.3641C11.6995 22.4524 11.8498 22.4998 12.0037 22.4998C12.1577 22.4998 12.308 22.4524 12.4341 22.3641C13.856 21.3147 15.1568 20.1104 16.3125 18.7734C18.8859 15.8138 20.25 12.6938 20.25 9.75C20.2475 7.56273 19.3775 5.46575 17.8309 3.91911C16.2843 2.37247 14.1873 1.50248 12 1.5C9.81273 1.50248 7.71575 2.37247 6.16911 3.91911ZM5.25 9.75C5.25 7.95979 5.96116 6.2429 7.22703 4.97703C8.4929 3.71116 10.2098 3 12 3C13.7902 3 15.5071 3.71116 16.773 4.97703C18.0388 6.2429 18.75 7.95979 18.75 9.75C18.75 15.1153 13.5497 19.5938 12 20.8125C10.4503 19.5938 5.25 15.1172 5.25 9.75Z" fill="#00DFDF"/>
                                        </svg>
                                        <p class="text-xs flex-1">Office 501, Campbell Grey Living, Land Number 851, Al-Waibdeh - Al- Wastani Basin. the city of Amman, Jordan</p>
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
                                format="webp" 
                                src="/images/uae.png" 
                                class="w-full"
                                :imgAttrs="{class:'w-full aspect-auto object-cover'}" 
                            />
                            <div class="location w-full absolute bottom-0 start-0 py-8 px-6 rounded-lg">
                                <h5>{{t('Pages.Contact Us.Section 3.United Arab Emirates')}}</h5>
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
                                format="webp" 
                                src="/images/indonesia.png" 
                                class="w-full"
                                :imgAttrs="{class:'w-full aspect-auto object-cover'}" 
                            />
                            <div class="location w-full absolute bottom-0 start-0 py-8 px-6 rounded-lg">
                                <h5>{{t('Pages.Contact Us.Section 3.Indonesia')}}</h5>
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
                        <div>
                            <NuxtPicture 
                                priority
                                format="webp" 
                                src="/images/ksa.png" 
                                class="w-full"
                                :imgAttrs="{class:'w-full aspect-auto object-cover'}" 
                            />
                            <div class="location w-full absolute bottom-0 start-0 py-8 px-6 rounded-lg">
                                <h5>{{t('Pages.Contact Us.Section 3.KSA')}}</h5>
                                <div class="flex flex-col gap-2 mt-2">
                                    <div class="flex gap-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.91661 6.63199C9.29993 7.04404 8.81928 7.62971 8.53545 8.31494C8.25162 9.00016 8.17736 9.75416 8.32205 10.4816C8.46675 11.209 8.8239 11.8772 9.34835 12.4017C9.8728 12.9261 10.541 13.2833 11.2684 13.4279C11.9958 13.5726 12.7498 13.4984 13.4351 13.2145C14.1203 12.9307 14.706 12.4501 15.118 11.8334C15.5301 11.2167 15.75 10.4917 15.75 9.75C15.75 8.75544 15.3549 7.80161 14.6517 7.09835C13.9484 6.39509 12.9946 6 12 6C11.2583 6 10.5333 6.21993 9.91661 6.63199ZM10.75 11.6208C10.38 11.3736 10.0916 11.0222 9.92127 10.611C9.75097 10.1999 9.70642 9.7475 9.79323 9.31105C9.88005 8.87459 10.0943 8.47368 10.409 8.15901C10.7237 7.84434 11.1246 7.63005 11.561 7.54323C11.9975 7.45642 12.4499 7.50097 12.861 7.67127C13.2722 7.84157 13.6236 8.12996 13.8708 8.49997C14.118 8.86998 14.25 9.30499 14.25 9.75C14.25 10.3467 14.0129 10.919 13.591 11.341C13.169 11.7629 12.5967 12 12 12C11.555 12 11.12 11.868 10.75 11.6208ZM6.16911 3.91911C4.62247 5.46575 3.75248 7.56273 3.75 9.75C3.75 12.6938 5.11031 15.8138 7.6875 18.7734C8.84552 20.1108 10.1489 21.3151 11.5734 22.3641C11.6995 22.4524 11.8498 22.4998 12.0037 22.4998C12.1577 22.4998 12.308 22.4524 12.4341 22.3641C13.856 21.3147 15.1568 20.1104 16.3125 18.7734C18.8859 15.8138 20.25 12.6938 20.25 9.75C20.2475 7.56273 19.3775 5.46575 17.8309 3.91911C16.2843 2.37247 14.1873 1.50248 12 1.5C9.81273 1.50248 7.71575 2.37247 6.16911 3.91911ZM5.25 9.75C5.25 7.95979 5.96116 6.2429 7.22703 4.97703C8.4929 3.71116 10.2098 3 12 3C13.7902 3 15.5071 3.71116 16.773 4.97703C18.0388 6.2429 18.75 7.95979 18.75 9.75C18.75 15.1153 13.5497 19.5938 12 20.8125C10.4503 19.5938 5.25 15.1172 5.25 9.75Z" fill="#00DFDF"/>
                                        </svg>
                                        <p class="text-xs flex-1">Al Olaya Street, Building #62, 1st Floor, Riyadh, KSA</p>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4306 12.8766L16.4184 12.871C16.1892 12.7729 15.939 12.7336 15.6907 12.7565C15.4424 12.7794 15.2037 12.8639 14.9963 13.0022C14.9718 13.0184 14.9484 13.0359 14.9259 13.0547L12.6441 15.0001C11.1984 14.2979 9.70595 12.8166 9.00376 11.3897L10.9519 9.07318C10.9706 9.04974 10.9884 9.0263 11.0053 9.00099C11.1407 8.79409 11.2229 8.55692 11.2445 8.31059C11.2661 8.06427 11.2264 7.81642 11.1291 7.58912V7.57787L9.14438 3.1538C9.0157 2.85686 8.79444 2.60951 8.51362 2.44865C8.2328 2.2878 7.9075 2.22208 7.58626 2.2613C6.31592 2.42847 5.14986 3.05234 4.30588 4.01639C3.4619 4.98045 2.99771 6.21876 3.00001 7.50005C3.00001 14.9438 9.05626 21.0001 16.5 21.0001C17.7813 21.0023 19.0196 20.5382 19.9837 19.6942C20.9477 18.8502 21.5716 17.6841 21.7388 16.4138C21.7781 16.0927 21.7125 15.7674 21.5518 15.4866C21.3911 15.2058 21.144 14.9845 20.8472 14.8557L16.4306 12.8766ZM8.01856 15.9815C5.76888 13.7318 4.50348 10.6816 4.50001 7.50005C4.49648 6.58458 4.82631 5.69911 5.42789 5.00903C6.02947 4.31895 6.86167 3.87143 7.76907 3.75005C7.7687 3.7538 7.7687 3.75756 7.76907 3.7613L9.73782 8.16755L7.80001 10.4869C7.78034 10.5096 7.76247 10.5337 7.74657 10.5591C7.60549 10.7756 7.52273 11.0249 7.5063 11.2827C7.48988 11.5406 7.54035 11.7984 7.65282 12.031C8.5022 13.7682 10.2525 15.5054 12.0084 16.3538C12.2428 16.4652 12.502 16.5139 12.7608 16.4952C13.0196 16.4765 13.2692 16.3909 13.485 16.2469C13.5091 16.2307 13.5322 16.2132 13.5544 16.1944L15.8334 14.2501L20.2397 16.2235C20.2397 16.2235 20.2472 16.2235 20.25 16.2235C20.1301 17.1322 19.6833 17.9661 18.9931 18.5691C18.3028 19.1722 17.4166 19.5031 16.5 19.5001C13.3185 19.4966 10.2682 18.2312 8.01856 15.9815Z" fill="#00DFDF"/>
                                        </svg>
                                        <a href="tel:00966567032436" class="text-xs">+966 56 703 2436</a>                                    
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
    const { t, tm, rt, locale, setLocale } = useI18n();
    const countries = computed(() => tm('General.Countries') || []);
    const industries = computed(() => tm('General.Industries') || []);
    const products = computed(() => tm('General.Products') || []);
    const router = useRouter();
    const emit = defineEmits();

    const RECAPTCHA_SITE_KEY = '6Le6TscrAAAAAIzSW6d0-jC_oUhqcFGAkXRb87Mc';
    const MP_API_URL = 'https://mm-apis.montypay.com/core/api/v1/MPContactUs';
    const MP_API_HEADERS = {
        Tenant: 'd2ed2d13-09ea-4311-923e-21fae0f7c063',
        LanguageCode: 'en'
    };
    useSeoMeta({ 
        title: 'Contact MontyPay | Sales & Support Assistance',
        ogTitle: 'Contact MontyPay | Sales & Support Assistance',
        description: 'Get in touch with MontyPay for sales inquiries, technical support, partnerships, or merchant onboarding assistance.',
        ogDescription: 'Get in touch with MontyPay for sales inquiries, technical support, partnerships, or merchant onboarding assistance.',
        ogImage: 'https://example.com/image.png',
        twitterCard: 'summary_large_image',
    })

    useHead({
        script: [
            {
                src: 'https://www.googletagmanager.com/gtag/js?id=AW-17262217251',
                async: true
            },
            {
                children: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-17262217251');
                `
            },
            // reCAPTCHA v3
            { src: `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`, async: true, defer: true }
        ]
    })
    
    const submissionMessage = ref('');
    const submitting = ref(false);
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
            required: t('General.Messages.Errors.Required.First Name'),
            safe: t('General.Messages.Errors.Safe')
        },
        last_name: {
            required: t('General.Messages.Errors.Required.Last Name'),
            safe: t('General.Messages.Errors.Safe')
        },
        email: {
            required: t('General.Messages.Errors.Required.Email'),
            email: t('General.Messages.Errors.Valid Email'),
            safe: t('General.Messages.Errors.Safe')
        },
        mobile: {
            required: t('General.Messages.Errors.Required.Mobile Number'),
            numeric: t('General.Messages.Errors.Numeric'),
            length: t('General.Messages.Errors.Length'),
            safe: t('General.Messages.Errors.Safe')
        },
        country: {
            required: t('General.Messages.Errors.Required.Country'),
            safe: t('General.Messages.Errors.Safe')
        },
        industry: {
            required: t('General.Messages.Errors.Required.Industry'),
            safe: t('General.Messages.Errors.Safe')
        },
        product: {
            required: t('General.Messages.Errors.Required.Product'),
            safe: t('General.Messages.Errors.Safe')
        },
        company: {
            required: t('General.Messages.Errors.Required.Company Name'),
            safe: t('General.Messages.Errors.Safe')
        },
        size: {
            required: t('General.Messages.Errors.Required.Company Size'),
            numeric: t('General.Messages.Errors.Numeric'),
            safe: t('General.Messages.Errors.Safe')
        },
        link: {
            required: t('General.Messages.Errors.Required.Website'),
            url: t('General.Messages.Errors.URL'),
            safe: t('General.Messages.Errors.Safe')
        },
        message: {
            required: t('General.Messages.Errors.Required.Message'),
            safe: t('General.Messages.Errors.Safe')
        },
        acknowledgment: {
            required: t('General.Messages.Errors.Required.Privacy Policy'),
            safe: t('General.Messages.Errors.Safe')
        },
    };

    const countrySelect = ref(null)
    const productSelect = ref(null)
    const industrySelect = ref(null)

    // very small validator (feel free to swap with your existing one)
    
    async function getRecaptchaToken() {
        // waits until the script is ready
        await new Promise((resolve) => {
            if (window.grecaptcha && window.grecaptcha.ready) return resolve();
            const check = setInterval(() => {
            if (window.grecaptcha && window.grecaptcha.ready) {
                clearInterval(check);
                resolve();
            }
            }, 50);
        });
        return new Promise((resolve, reject) => {
            window.grecaptcha.ready(() => {
            window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'contact' })
                .then(resolve)
                .catch(reject);
            });
        });
    }
    const handleSubmit = async () => {
  if (validateForm(form, errors, validationRules)) {
    try {
      submitting.value = true;
      const WP_API_ENDPOINT = 'https://backend.montypay.com/wp-json/contact-form-7/v1/contact-forms/9/feedback';

      // Get labels from selected options via refs
      const countryLabel = countrySelect.value.options[countrySelect.value.selectedIndex]?.text || '';
      const productLabel = productSelect.value.options[productSelect.value.selectedIndex]?.text || '';
      const industryLabel = industrySelect.value.options[industrySelect.value.selectedIndex]?.text || '';

      // Prepare WordPress form data
      const formData = new FormData();
      formData.append('first_name', form.value.first_name);
      formData.append('last_name', form.value.last_name);
      formData.append('work_email', form.value.email);
      formData.append('phone_number', form.value.mobile);
      formData.append('country', countryLabel);
      formData.append('industry', industryLabel); 
      formData.append('product', productLabel);
      formData.append('company_name', form.value.company);
      formData.append('company_size', form.value.size);
      formData.append('website', form.value.link);
      formData.append('message', form.value.message);
      formData.append('_wpcf7_unit_tag', 'rte');

      // 1. Submit to WordPress Headless
      const wpResponse = await fetch(WP_API_ENDPOINT, {
        method: 'POST',
        body: formData,
      });

      if (!wpResponse.ok) {
        throw new Error('WordPress submission failed');
      }

      const wpData = await wpResponse.json();
      // WordPress submission successful


      // 2) Get reCAPTCHA token and submit to MontyPay API with IDs
      const recaptchaToken = await getRecaptchaToken();
      const apiPayload = {
        CampaignId: '',
        FirstName: form.value.first_name,
        LastName: form.value.last_name,
        WorkEmail: form.value.email,
        PhoneNumber: form.value.mobile,
        Country: form.value.country,     // ID value
        CompanyName: form.value.company,
        CompanySize: form.value.size,
        Industry: form.value.industry,   // ID value
        Website: form.value.link,
        Message: form.value.message,
        Product: form.value.product      // ID (or string for "Website Development")
     };

     const apiRes = await fetch(MP_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...MP_API_HEADERS,
            RecaptchaToken: recaptchaToken
        },
        body: JSON.stringify(apiPayload)
        });

        if (!apiRes.ok) {
            const msg = await safeText(apiRes);
            throw new Error(`MontyPay API error: ${apiRes.status} ${msg}`);
    }

      submissionMessage.value = "Thank you for your message.";
      submitting.value = false;
      resetForm();
      router.push('/thank-you');

    } catch (error) {
      console.error("Form submission error:", error);
      submissionMessage.value = "Error in submitting your message.";
      submitting.value = false;
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
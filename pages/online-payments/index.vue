<template lang="">
    <div>
        <Hero 
            title="Online Payments"
            paragraph="Experience Seamless Transactions with MontyPay's Effortless Online Payment Solutions"
            image="online-payments"
        />

        <!-- <section id="section-2" class="pt-16 lg:pt-36">
            <div class="container">
                <div class="flex flex-col text-center">
                    <div class="w-full md:w-3/4 mx-auto">
                        <ContentBlock 
                            title="Online and Mobile Checkouts"
                            paragraph="Engage in the ultimate shopping experience with our online and mobile checkout solutions. From your website to mobile apps, customers breeze through seamless and secure transactions. "
                        />
                    </div>

                    <div class="mt-10 font-bold">Our multiple payment methods offer:</div>
                    
                    <div class="flex flex-col sm:flex-row flex-wrap justify-center items-start lg:items-center gap-10 mt-6">
                        <h4 class="flex justify-center items-center gap-2 font-semibold text-xl">
                            <Icon name="fa6-solid:check" class="icon text-4xl p-2 bg-transparent border-2 border-quaternary rounded-full" />Risk-free payments
                        </h4>  
                        <h4 class="flex justify-center items-center gap-2 font-semibold text-xl">
                            <Icon name="fa6-solid:check" class="icon text-4xl p-2 bg-transparent border-2 border-quaternary rounded-full" />Flexibility
                        </h4>  
                        <h4 class="flex justify-center items-center gap-2 font-semibold text-xl">
                            <Icon name="fa6-solid:check" class="icon text-4xl p-2 bg-transparent border-2 border-quaternary rounded-full" />Trust & confidence
                        </h4>  
                    </div>

                    <NuxtPicture 
                        priority
                        format="webp,avif" 
                        src="/images/online-and-mobile-checkouts.png" 
                        class="w-full mt-10"
                        :imgAttrs="{class:'w-full'}" 
                    />
                </div>
            </div>
        </section> -->

        <section id="section-3" class="pt-16 lg:pt-36">
            <div class="container">
                <div class="flex flex-col gap-8 lg:gap-24">

                    <div class="flex flex-col lg:flex-row gap-8 lg:gap-32 justify-center items-center">
                        <ContentBlock 
                            title="Online and Mobile Checkouts"
                            paragraph="From your website to mobile apps, let your customers breeze through seamless and secure transactions.<br /><br />Our multiple payment methods offer flexibility, ensuring convenient, risk-free payments, enhancing trust and confidence."
                            class="w-full lg:w-2/3 lg:order-1"
                        />
                        <div class="flex w-full lg:w-1/3">
                            <NuxtPicture 
                                priority
                                format="webp,avif" 
                                src="/images/online-and-mobile-checkouts.png" 
                                class="w-full"
                                :imgAttrs="{class:'w-full mx-auto'}" 
                            />
                        </div>
                    </div>

                    <div class="flex flex-col lg:flex-row gap-8 lg:gap-32 justify-center items-center">
                        <ContentBlock 
                        title="Customer Invoice Links"
                            paragraph="Creating invoices is now a breeze!<br />Tailor professional invoices to reflect your brand, and send them directly to your clients. What's unique? Our integrated online payment feature ensures that your customers settle their invoices swiftly, enriching their experience and boosting your business cash flow."
                            class="w-full lg:w-2/3"
                        />
                        <div class="flex w-full lg:w-1/3">
                            <NuxtPicture 
                                priority
                                format="webp,avif" 
                                src="/images/customer-invoice-links.png" 
                                class="w-full"
                                :imgAttrs="{class:'w-full mx-auto'}" 
                            />
                        </div>
                    </div>

                    <div class="flex flex-col lg:flex-row gap-8 lg:gap-32 justify-center items-center">
                        <ContentBlock 
                            title="Pay By Link"
                            paragraph="Let your customers shop without a hitch!<br /><br />Whether it's a payment link on your website or a QR code in your store, it's all about convenience. A simple scan or click and transactions are complete. It's easy for both you and your customers, offering utmost convenience and simplicity."
                            class="lg:w-2/3 lg:order-1"
                        />
                        <div class="flex w-full lg:w-1/3">
                            <NuxtPicture 
                                priority
                                format="webp,avif" 
                                src="/images/pay-by-link.png" 
                                class="w-full"
                                :imgAttrs="{class:'w-full  mx-auto'}" 
                            />
                        </div>
                    </div>

                    <div class="flex flex-col lg:flex-row gap-8 lg:gap-32 justify-center items-center">
                        <ContentBlock 
                        title="QR Pay"
                            paragraph="You scan it, you got it!<br /><br />With QR Pay, Customers can simply scan a QR code displayed at the point of sale, confirm the transaction, and complete their purchase swiftly. This contactless payment method eliminates the need for physical cash or cards."
                            class="w-full lg:w-2/3"
                        />
                        <div class="flex w-full lg:w-1/3">
                            <NuxtPicture 
                                priority
                                format="webp,avif" 
                                src="/images/qr-pay.png" 
                                class="w-full"
                                :imgAttrs="{class:'w-full mx-auto'}" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="section-4" class="mt-16 lg:mt-36 lg:h-screen flex flex-col lg:flex-row items-center text-primary overflow-hidden">
            <NuxtPicture priority
                format="webp,avif"
                src="/images/recurring-bills-bg.png"
                class="w-full lg:absolute lg:top-0 lg:left-0 after:content-[''] after:absolute after:top-0 after:left-0 lg:after:bg-quaternary/30 after:w-full after:h-full"
                :imgAttrs="{class:'w-full lg:h-screen object-cover'}" 
            />
            
            <div class="w-full bg-quaternary lg:bg-transparent py-14 lg:py-0">
                <div class="container">
                    <div class="flex flex-col lg:flex-row gap-8 lg:gap-32 justify-center items-center">
                        <ContentBlock
                            title="Recurring Bills"
                            paragraph="Automate billing and wave goodbye to manual hassles! For subscription services, memberships, or installments, our platform handles it all. Automated payments mean your customers never miss a due date, ensuring a steady flow of revenue for your business growth."
                            class="w-full lg:w-2/3"
                        />
                        <div class="flex w-full lg:w-1/3">
                            <NuxtPicture 
                                priority
                                format="webp,avif" 
                                src="/images/recurring-bills.png" 
                                class="w-full"
                                :imgAttrs="{class:'w-full mx-auto'}" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="section-5" class="pt-16 lg:pt-36">
            <div class="container">
                <div class="flex flex-col gap-8 lg:gap-24">
                    <div class="flex flex-col lg:flex-row gap-8 lg:gap-48 justify-center items-center">
                        <ContentBlock 
                            title="Smart Routing & Cascading"
                            paragraph="Experience lightning-fast, secure transactions!<br />Our cutting-edge technology ensures smart routing for the most efficient and cost-effective transaction channels. Lightning-fast transactions, reduced fees, and reliability work hand in hand to benefit your business."
                            class="flex-1"
                        />
                        <div class="flex-1 w-full">
                            <NuxtPicture 
                                priority
                                format="webp,avif" 
                                src="/images/smart-routing-cascading.png" 
                                :imgAttrs="{class:'w-full mx-auto'}" 
                            />
                        </div>
                    </div>

                    <div class="flex flex-col lg:flex-row gap-8 lg:gap-48 justify-center items-center">
                        <ContentBlock 
                            title="Advanced Reporting"
                            paragraph="Unveil the secrets of your business!<br />Our reporting suite delves deep into your financial performance, serving you an exciting array of detailed metrics, from sales trends to customer behavior. Make informed, data-driven decisions that will supercharge your growth!"
                            class="flex-1 lg:order-1"
                        />
                        <div class="flex-1 w-full">
                            <NuxtPicture 
                                priority
                                format="webp,avif" 
                                src="/images/advanced-reporting.png" 
                                :imgAttrs="{class:'w-full  mx-auto'}" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="section-6" class="mt-16 lg:mt-36">
            <div class="container">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16 text-primary">
                    <div class="flex flex-col gap-8 border rounded-lg py-8 px-6 bg-quaternary">
                        <svg width="30" height="30" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44 86.625C67.5125 86.625 86.625 67.5125 86.625 44C86.625 20.4875 67.5125 1.375 44 1.375C20.4875 1.375 1.375 20.4875 1.375 44C1.375 67.5125 20.4875 86.625 44 86.625ZM11 60.9812L28.325 60.8438C30.25 67.7875 33.4813 74.525 37.8812 80.575C26.125 78.65 16.2937 71.1562 11 60.9812ZM32.725 32.3125H54.3125C55.8937 39.875 55.8937 47.6438 54.45 55.2063L32.725 55.3438C31.1437 47.7125 31.1437 39.875 32.725 32.3125ZM43.5187 78.9938C39.1875 73.425 36.025 67.3063 34.1 60.8438L53.0062 60.7063C51.0125 67.1688 47.85 73.3563 43.5187 78.9938ZM49.0188 80.7812C53.5563 74.5938 56.7875 67.7875 58.7125 60.6375L77.2063 60.5C71.8438 71.2937 61.3938 79.0625 49.0188 80.7812ZM81.125 44C81.125 47.85 80.5062 51.5625 79.475 55L60.0188 55.1375C61.3938 47.575 61.325 39.875 59.8812 32.3125H79.2C80.4375 35.9562 81.125 39.9437 81.125 44ZM76.8625 26.8125H58.575C56.5812 19.9375 53.4188 13.2688 49.0188 7.21875C61.1875 8.86875 71.4313 16.3625 76.8625 26.8125ZM52.8688 26.8125H34.1688C36.1625 20.4875 39.2562 14.5063 43.5187 9.00625C47.7812 14.5063 50.875 20.4875 52.8688 26.8125ZM37.8812 7.425C33.55 13.4062 30.3875 19.9375 28.4625 26.8125H11.1375C16.4313 16.7063 26.1937 9.35 37.8812 7.425ZM27.1562 32.3125C25.7125 39.9437 25.7125 47.7125 27.0875 55.3438L8.73125 55.4812C7.49375 51.8375 6.875 47.9875 6.875 44C6.875 39.9437 7.5625 35.9562 8.8 32.3125H27.1562Z" fill="#FFFFFF"/>
                        </svg>
                        <h2 class="text-4xl">Merchant Mobile App</h2>
                        <p class="text-lg">Take your business on the go!Our intuitive app puts payment management at your fingertips. Stay closely connected with customers, monitor transactions, and track sales data from anywhere. It's like having a business superhero in your pocket!</p>
                    </div>
                    <div class="flex flex-col gap-8 border rounded-lg py-8 px-6 bg-quaternary">
                        <svg width="30" height="30" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44 86.625C67.5125 86.625 86.625 67.5125 86.625 44C86.625 20.4875 67.5125 1.375 44 1.375C20.4875 1.375 1.375 20.4875 1.375 44C1.375 67.5125 20.4875 86.625 44 86.625ZM11 60.9812L28.325 60.8438C30.25 67.7875 33.4813 74.525 37.8812 80.575C26.125 78.65 16.2937 71.1562 11 60.9812ZM32.725 32.3125H54.3125C55.8937 39.875 55.8937 47.6438 54.45 55.2063L32.725 55.3438C31.1437 47.7125 31.1437 39.875 32.725 32.3125ZM43.5187 78.9938C39.1875 73.425 36.025 67.3063 34.1 60.8438L53.0062 60.7063C51.0125 67.1688 47.85 73.3563 43.5187 78.9938ZM49.0188 80.7812C53.5563 74.5938 56.7875 67.7875 58.7125 60.6375L77.2063 60.5C71.8438 71.2937 61.3938 79.0625 49.0188 80.7812ZM81.125 44C81.125 47.85 80.5062 51.5625 79.475 55L60.0188 55.1375C61.3938 47.575 61.325 39.875 59.8812 32.3125H79.2C80.4375 35.9562 81.125 39.9437 81.125 44ZM76.8625 26.8125H58.575C56.5812 19.9375 53.4188 13.2688 49.0188 7.21875C61.1875 8.86875 71.4313 16.3625 76.8625 26.8125ZM52.8688 26.8125H34.1688C36.1625 20.4875 39.2562 14.5063 43.5187 9.00625C47.7812 14.5063 50.875 20.4875 52.8688 26.8125ZM37.8812 7.425C33.55 13.4062 30.3875 19.9375 28.4625 26.8125H11.1375C16.4313 16.7063 26.1937 9.35 37.8812 7.425ZM27.1562 32.3125C25.7125 39.9437 25.7125 47.7125 27.0875 55.3438L8.73125 55.4812C7.49375 51.8375 6.875 47.9875 6.875 44C6.875 39.9437 7.5625 35.9562 8.8 32.3125H27.1562Z" fill="#FFFFFF"/>
                        </svg>
                        <h2 class="text-4xl">Risk & Compliance</h2>
                        <p class="text-lg">We've got your back!<br/>Our suite of tools meticulously identifies and neutralizes potential threats like fraud or chargebacks, ensuring a secure and compliant payment environment for your business to thrive.</p>
                    </div>
                    <div class="flex flex-col gap-8 border rounded-lg py-8 px-6 bg-quaternary">
                        <svg width="30" height="30" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44 86.625C67.5125 86.625 86.625 67.5125 86.625 44C86.625 20.4875 67.5125 1.375 44 1.375C20.4875 1.375 1.375 20.4875 1.375 44C1.375 67.5125 20.4875 86.625 44 86.625ZM11 60.9812L28.325 60.8438C30.25 67.7875 33.4813 74.525 37.8812 80.575C26.125 78.65 16.2937 71.1562 11 60.9812ZM32.725 32.3125H54.3125C55.8937 39.875 55.8937 47.6438 54.45 55.2063L32.725 55.3438C31.1437 47.7125 31.1437 39.875 32.725 32.3125ZM43.5187 78.9938C39.1875 73.425 36.025 67.3063 34.1 60.8438L53.0062 60.7063C51.0125 67.1688 47.85 73.3563 43.5187 78.9938ZM49.0188 80.7812C53.5563 74.5938 56.7875 67.7875 58.7125 60.6375L77.2063 60.5C71.8438 71.2937 61.3938 79.0625 49.0188 80.7812ZM81.125 44C81.125 47.85 80.5062 51.5625 79.475 55L60.0188 55.1375C61.3938 47.575 61.325 39.875 59.8812 32.3125H79.2C80.4375 35.9562 81.125 39.9437 81.125 44ZM76.8625 26.8125H58.575C56.5812 19.9375 53.4188 13.2688 49.0188 7.21875C61.1875 8.86875 71.4313 16.3625 76.8625 26.8125ZM52.8688 26.8125H34.1688C36.1625 20.4875 39.2562 14.5063 43.5187 9.00625C47.7812 14.5063 50.875 20.4875 52.8688 26.8125ZM37.8812 7.425C33.55 13.4062 30.3875 19.9375 28.4625 26.8125H11.1375C16.4313 16.7063 26.1937 9.35 37.8812 7.425ZM27.1562 32.3125C25.7125 39.9437 25.7125 47.7125 27.0875 55.3438L8.73125 55.4812C7.49375 51.8375 6.875 47.9875 6.875 44C6.875 39.9437 7.5625 35.9562 8.8 32.3125H27.1562Z" fill="#FFFFFF"/>
                        </svg>
                        <h2 class="text-4xl">Installements</h2>
                        <p class="text-lg">Let's make high-ticket items affordable!<br />With flexible payment options, your customers can split their purchase into manageable payments. Tailor installment plans to suit your business goals and attract a wider customer base.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="section-4" class="mt-16 lg:mt-36 lg:h-screen flex flex-col lg:flex-row items-center text-primary overflow-hidden">
            <NuxtPicture priority
                format="webp,avif"
                src="/images/cryptocurrency-bg.png"
                class="w-full lg:absolute lg:top-0 lg:left-0 after:content-[''] after:absolute after:top-0 after:left-0 lg:after:bg-quaternary/30 after:w-full after:h-full"
                :imgAttrs="{class:'w-full lg:h-screen object-cover'}" 
            />
            
            <div class="w-full bg-quaternary lg:bg-transparent py-14 lg:py-0">
                <div class="container">
                    <div class="flex flex-col lg:flex-row gap-8 lg:gap-32 justify-center items-center">
                        <ContentBlock
                            title="Cryptocurrency"
                            paragraph="Ride the wave of the future!<br />Integrating Bitcoin, Ethereum, and more into your payment options will open doors to a global customer base.<br />Embrace cryptocurrency to stay at the forefront of financial innovation!"
                            class="w-full lg:w-2/3"
                        />
                        <div class="flex w-full lg:w-1/3">
                            <NuxtPicture 
                                priority
                                format="webp,avif" 
                                src="/images/cryptocurrency.png" 
                                class="w-full"
                                :imgAttrs="{class:'w-full mx-auto'}" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="section-6" class="py-16 lg:py-36 bg-[#ebebeb]">
            <div class="container">
                <ContentBlock 
                    title="Plugins & SDKs"
                    paragraph="Plug into the power of MontyPay's supercharged Plugins and Software Development Kits (SDKs) for a payment experience that's out of this world"
                    class="text-center"
                />

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
                    <div class="flex flex-col gap-8 border border-[#d1d1d1] rounded-lg py-8 px-6 bg-primary">
                        <svg width="30" height="30" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44 86.625C67.5125 86.625 86.625 67.5125 86.625 44C86.625 20.4875 67.5125 1.375 44 1.375C20.4875 1.375 1.375 20.4875 1.375 44C1.375 67.5125 20.4875 86.625 44 86.625ZM11 60.9812L28.325 60.8438C30.25 67.7875 33.4813 74.525 37.8812 80.575C26.125 78.65 16.2937 71.1562 11 60.9812ZM32.725 32.3125H54.3125C55.8937 39.875 55.8937 47.6438 54.45 55.2063L32.725 55.3438C31.1437 47.7125 31.1437 39.875 32.725 32.3125ZM43.5187 78.9938C39.1875 73.425 36.025 67.3063 34.1 60.8438L53.0062 60.7063C51.0125 67.1688 47.85 73.3563 43.5187 78.9938ZM49.0188 80.7812C53.5563 74.5938 56.7875 67.7875 58.7125 60.6375L77.2063 60.5C71.8438 71.2937 61.3938 79.0625 49.0188 80.7812ZM81.125 44C81.125 47.85 80.5062 51.5625 79.475 55L60.0188 55.1375C61.3938 47.575 61.325 39.875 59.8812 32.3125H79.2C80.4375 35.9562 81.125 39.9437 81.125 44ZM76.8625 26.8125H58.575C56.5812 19.9375 53.4188 13.2688 49.0188 7.21875C61.1875 8.86875 71.4313 16.3625 76.8625 26.8125ZM52.8688 26.8125H34.1688C36.1625 20.4875 39.2562 14.5063 43.5187 9.00625C47.7812 14.5063 50.875 20.4875 52.8688 26.8125ZM37.8812 7.425C33.55 13.4062 30.3875 19.9375 28.4625 26.8125H11.1375C16.4313 16.7063 26.1937 9.35 37.8812 7.425ZM27.1562 32.3125C25.7125 39.9437 25.7125 47.7125 27.0875 55.3438L8.73125 55.4812C7.49375 51.8375 6.875 47.9875 6.875 44C6.875 39.9437 7.5625 35.9562 8.8 32.3125H27.1562Z" fill="#000000"/>
                        </svg>
                        <h2 class="text-4xl">Merchant Mobile App</h2>
                        <p class="text-lg">Take your business on the go!Our intuitive app puts payment management at your fingertips. Stay closely connected with customers, monitor transactions, and track sales data from anywhere. It's like having a business superhero in your pocket!</p>
                    </div>
                    <div class="flex flex-col gap-8 border border-[#d1d1d1] rounded-lg py-8 px-6 bg-primary">
                        <svg width="30" height="30" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44 86.625C67.5125 86.625 86.625 67.5125 86.625 44C86.625 20.4875 67.5125 1.375 44 1.375C20.4875 1.375 1.375 20.4875 1.375 44C1.375 67.5125 20.4875 86.625 44 86.625ZM11 60.9812L28.325 60.8438C30.25 67.7875 33.4813 74.525 37.8812 80.575C26.125 78.65 16.2937 71.1562 11 60.9812ZM32.725 32.3125H54.3125C55.8937 39.875 55.8937 47.6438 54.45 55.2063L32.725 55.3438C31.1437 47.7125 31.1437 39.875 32.725 32.3125ZM43.5187 78.9938C39.1875 73.425 36.025 67.3063 34.1 60.8438L53.0062 60.7063C51.0125 67.1688 47.85 73.3563 43.5187 78.9938ZM49.0188 80.7812C53.5563 74.5938 56.7875 67.7875 58.7125 60.6375L77.2063 60.5C71.8438 71.2937 61.3938 79.0625 49.0188 80.7812ZM81.125 44C81.125 47.85 80.5062 51.5625 79.475 55L60.0188 55.1375C61.3938 47.575 61.325 39.875 59.8812 32.3125H79.2C80.4375 35.9562 81.125 39.9437 81.125 44ZM76.8625 26.8125H58.575C56.5812 19.9375 53.4188 13.2688 49.0188 7.21875C61.1875 8.86875 71.4313 16.3625 76.8625 26.8125ZM52.8688 26.8125H34.1688C36.1625 20.4875 39.2562 14.5063 43.5187 9.00625C47.7812 14.5063 50.875 20.4875 52.8688 26.8125ZM37.8812 7.425C33.55 13.4062 30.3875 19.9375 28.4625 26.8125H11.1375C16.4313 16.7063 26.1937 9.35 37.8812 7.425ZM27.1562 32.3125C25.7125 39.9437 25.7125 47.7125 27.0875 55.3438L8.73125 55.4812C7.49375 51.8375 6.875 47.9875 6.875 44C6.875 39.9437 7.5625 35.9562 8.8 32.3125H27.1562Z" fill="#000000"/>
                        </svg>
                        <h2 class="text-4xl">Risk & Compliance</h2>
                        <p class="text-lg">We've got your back!<br/>Our suite of tools meticulously identifies and neutralizes potential threats like fraud or chargebacks, ensuring a secure and compliant payment environment for your business to thrive.</p>
                    </div>
                    <div class="flex flex-col gap-8 border border-[#d1d1d1] rounded-lg py-8 px-6 bg-primary">
                        <svg width="30" height="30" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44 86.625C67.5125 86.625 86.625 67.5125 86.625 44C86.625 20.4875 67.5125 1.375 44 1.375C20.4875 1.375 1.375 20.4875 1.375 44C1.375 67.5125 20.4875 86.625 44 86.625ZM11 60.9812L28.325 60.8438C30.25 67.7875 33.4813 74.525 37.8812 80.575C26.125 78.65 16.2937 71.1562 11 60.9812ZM32.725 32.3125H54.3125C55.8937 39.875 55.8937 47.6438 54.45 55.2063L32.725 55.3438C31.1437 47.7125 31.1437 39.875 32.725 32.3125ZM43.5187 78.9938C39.1875 73.425 36.025 67.3063 34.1 60.8438L53.0062 60.7063C51.0125 67.1688 47.85 73.3563 43.5187 78.9938ZM49.0188 80.7812C53.5563 74.5938 56.7875 67.7875 58.7125 60.6375L77.2063 60.5C71.8438 71.2937 61.3938 79.0625 49.0188 80.7812ZM81.125 44C81.125 47.85 80.5062 51.5625 79.475 55L60.0188 55.1375C61.3938 47.575 61.325 39.875 59.8812 32.3125H79.2C80.4375 35.9562 81.125 39.9437 81.125 44ZM76.8625 26.8125H58.575C56.5812 19.9375 53.4188 13.2688 49.0188 7.21875C61.1875 8.86875 71.4313 16.3625 76.8625 26.8125ZM52.8688 26.8125H34.1688C36.1625 20.4875 39.2562 14.5063 43.5187 9.00625C47.7812 14.5063 50.875 20.4875 52.8688 26.8125ZM37.8812 7.425C33.55 13.4062 30.3875 19.9375 28.4625 26.8125H11.1375C16.4313 16.7063 26.1937 9.35 37.8812 7.425ZM27.1562 32.3125C25.7125 39.9437 25.7125 47.7125 27.0875 55.3438L8.73125 55.4812C7.49375 51.8375 6.875 47.9875 6.875 44C6.875 39.9437 7.5625 35.9562 8.8 32.3125H27.1562Z" fill="#000000"/>
                        </svg>
                        <h2 class="text-4xl">Installements</h2>
                        <p class="text-lg">Let's make high-ticket items affordable!<br />With flexible payment options, your customers can split their purchase into manageable payments. Tailor installment plans to suit your business goals and attract a wider customer base.</p>
                    </div>
                    <div class="lg:col-span-3 gap-8 border border-[#d1d1d1] rounded-lg py-8 px-6 bg-primary">
                        <div class="flex flex-col lg:flex-row gap-12">
                            <div class="flex flex-col gap-8">
                                <svg width="30" height="30" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M44 86.625C67.5125 86.625 86.625 67.5125 86.625 44C86.625 20.4875 67.5125 1.375 44 1.375C20.4875 1.375 1.375 20.4875 1.375 44C1.375 67.5125 20.4875 86.625 44 86.625ZM11 60.9812L28.325 60.8438C30.25 67.7875 33.4813 74.525 37.8812 80.575C26.125 78.65 16.2937 71.1562 11 60.9812ZM32.725 32.3125H54.3125C55.8937 39.875 55.8937 47.6438 54.45 55.2063L32.725 55.3438C31.1437 47.7125 31.1437 39.875 32.725 32.3125ZM43.5187 78.9938C39.1875 73.425 36.025 67.3063 34.1 60.8438L53.0062 60.7063C51.0125 67.1688 47.85 73.3563 43.5187 78.9938ZM49.0188 80.7812C53.5563 74.5938 56.7875 67.7875 58.7125 60.6375L77.2063 60.5C71.8438 71.2937 61.3938 79.0625 49.0188 80.7812ZM81.125 44C81.125 47.85 80.5062 51.5625 79.475 55L60.0188 55.1375C61.3938 47.575 61.325 39.875 59.8812 32.3125H79.2C80.4375 35.9562 81.125 39.9437 81.125 44ZM76.8625 26.8125H58.575C56.5812 19.9375 53.4188 13.2688 49.0188 7.21875C61.1875 8.86875 71.4313 16.3625 76.8625 26.8125ZM52.8688 26.8125H34.1688C36.1625 20.4875 39.2562 14.5063 43.5187 9.00625C47.7812 14.5063 50.875 20.4875 52.8688 26.8125ZM37.8812 7.425C33.55 13.4062 30.3875 19.9375 28.4625 26.8125H11.1375C16.4313 16.7063 26.1937 9.35 37.8812 7.425ZM27.1562 32.3125C25.7125 39.9437 25.7125 47.7125 27.0875 55.3438L8.73125 55.4812C7.49375 51.8375 6.875 47.9875 6.875 44C6.875 39.9437 7.5625 35.9562 8.8 32.3125H27.1562Z" fill="#000000"/>
                                </svg>
                                <h2 class="text-4xl">CMS Plugins</h2>
                                <p class="text-lg">No fuss, just solutions!Our ready-to-go plugins for popular Content Management Systems (CMS) streamline integration for merchants. Skip the heavy development work and get your payment system up and running with ease.</p>
                            </div>
                            <div class="w-full grid grid-cols-2 gap-6 items-center place-content-center mt-12 lg:mt-0">
                                <NuxtPicture 
                                    priority
                                    format="svg" 
                                    src="/images/magento1.png"
                                    :imgAttrs="{class:'w-full mx-auto'}" 
                                />
                                <NuxtPicture 
                                    priority
                                    format="svg" 
                                    src="/images/magento2.png"
                                    :imgAttrs="{class:'w-full mx-auto'}" 
                                />
                                <NuxtPicture 
                                    priority
                                    format="svg" 
                                    src="/images/prestashop.png"
                                    :imgAttrs="{class:'w-full mx-auto'}" 
                                />
                                <NuxtPicture 
                                    priority
                                    format="svg" 
                                    src="/images/woocommerce.png"
                                    class="p-3"
                                    :imgAttrs="{class:'w-full mx-auto'}" 
                                />
                                <NuxtPicture 
                                    priority
                                    format="svg" 
                                    src="/images/opencart.png"
                                    :imgAttrs="{class:'w-full mx-auto'}" 
                                />
                                <NuxtPicture 
                                    priority
                                    format="svg" 
                                    src="/images/easy-downloads.png"
                                    :imgAttrs="{class:'w-full mx-auto'}" 
                                />
                                <NuxtPicture 
                                    priority
                                    format="svg" 
                                    src="/images/nopcommerce.png"
                                    :imgAttrs="{class:'w-full mx-auto'}" 
                                />
                                <NuxtPicture 
                                    priority
                                    format="svg" 
                                    src="/images/ecomz.png"
                                    :imgAttrs="{class:'w-full mx-auto'}" 
                                />
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-2 gap-8 border border-[#d1d1d1] rounded-lg py-8 px-6 bg-primary">
                        <div class="flex flex-col gap-12">
                            <div class="flex flex-col gap-8">
                                <svg width="30" height="30" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M44 86.625C67.5125 86.625 86.625 67.5125 86.625 44C86.625 20.4875 67.5125 1.375 44 1.375C20.4875 1.375 1.375 20.4875 1.375 44C1.375 67.5125 20.4875 86.625 44 86.625ZM11 60.9812L28.325 60.8438C30.25 67.7875 33.4813 74.525 37.8812 80.575C26.125 78.65 16.2937 71.1562 11 60.9812ZM32.725 32.3125H54.3125C55.8937 39.875 55.8937 47.6438 54.45 55.2063L32.725 55.3438C31.1437 47.7125 31.1437 39.875 32.725 32.3125ZM43.5187 78.9938C39.1875 73.425 36.025 67.3063 34.1 60.8438L53.0062 60.7063C51.0125 67.1688 47.85 73.3563 43.5187 78.9938ZM49.0188 80.7812C53.5563 74.5938 56.7875 67.7875 58.7125 60.6375L77.2063 60.5C71.8438 71.2937 61.3938 79.0625 49.0188 80.7812ZM81.125 44C81.125 47.85 80.5062 51.5625 79.475 55L60.0188 55.1375C61.3938 47.575 61.325 39.875 59.8812 32.3125H79.2C80.4375 35.9562 81.125 39.9437 81.125 44ZM76.8625 26.8125H58.575C56.5812 19.9375 53.4188 13.2688 49.0188 7.21875C61.1875 8.86875 71.4313 16.3625 76.8625 26.8125ZM52.8688 26.8125H34.1688C36.1625 20.4875 39.2562 14.5063 43.5187 9.00625C47.7812 14.5063 50.875 20.4875 52.8688 26.8125ZM37.8812 7.425C33.55 13.4062 30.3875 19.9375 28.4625 26.8125H11.1375C16.4313 16.7063 26.1937 9.35 37.8812 7.425ZM27.1562 32.3125C25.7125 39.9437 25.7125 47.7125 27.0875 55.3438L8.73125 55.4812C7.49375 51.8375 6.875 47.9875 6.875 44C6.875 39.9437 7.5625 35.9562 8.8 32.3125H27.1562Z" fill="#000000"/>
                                </svg>
                                <h2 class="text-4xl">CMS Plugins</h2>
                                <p class="text-lg">Our iOS and Android SDKs give merchants the power to accept payments within their mobile applications. Dive into the mobile commerce trend with a secure and smooth payment process for your app users. Smooth sailing all the way!</p>
                            </div>
                            <div class="w-full grid grid-cols-3 gap-4 align-center place-content-center mt-12 lg:mt-0">
                                <NuxtPicture 
                                    priority
                                    format="svg" 
                                    src="/images/flutter.png"
                                    :imgAttrs="{class:'w-full mx-auto'}" 
                                />
                                <NuxtPicture 
                                    priority
                                    format="svg" 
                                    src="/images/android.png"
                                    :imgAttrs="{class:'w-full mx-auto'}" 
                                />
                                <NuxtPicture 
                                    priority
                                    format="svg" 
                                    src="/images/ios.png"
                                    :imgAttrs="{class:'w-full mx-auto'}" 
                                />
                            </div>
                        </div>
                    </div>
                    <div class="gap-8 border border-[#d1d1d1] rounded-lg py-8 px-6 bg-primary">
                        <div class="flex flex-col gap-12">
                            <div class="flex flex-col gap-8">
                                <svg width="30" height="30" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M44 86.625C67.5125 86.625 86.625 67.5125 86.625 44C86.625 20.4875 67.5125 1.375 44 1.375C20.4875 1.375 1.375 20.4875 1.375 44C1.375 67.5125 20.4875 86.625 44 86.625ZM11 60.9812L28.325 60.8438C30.25 67.7875 33.4813 74.525 37.8812 80.575C26.125 78.65 16.2937 71.1562 11 60.9812ZM32.725 32.3125H54.3125C55.8937 39.875 55.8937 47.6438 54.45 55.2063L32.725 55.3438C31.1437 47.7125 31.1437 39.875 32.725 32.3125ZM43.5187 78.9938C39.1875 73.425 36.025 67.3063 34.1 60.8438L53.0062 60.7063C51.0125 67.1688 47.85 73.3563 43.5187 78.9938ZM49.0188 80.7812C53.5563 74.5938 56.7875 67.7875 58.7125 60.6375L77.2063 60.5C71.8438 71.2937 61.3938 79.0625 49.0188 80.7812ZM81.125 44C81.125 47.85 80.5062 51.5625 79.475 55L60.0188 55.1375C61.3938 47.575 61.325 39.875 59.8812 32.3125H79.2C80.4375 35.9562 81.125 39.9437 81.125 44ZM76.8625 26.8125H58.575C56.5812 19.9375 53.4188 13.2688 49.0188 7.21875C61.1875 8.86875 71.4313 16.3625 76.8625 26.8125ZM52.8688 26.8125H34.1688C36.1625 20.4875 39.2562 14.5063 43.5187 9.00625C47.7812 14.5063 50.875 20.4875 52.8688 26.8125ZM37.8812 7.425C33.55 13.4062 30.3875 19.9375 28.4625 26.8125H11.1375C16.4313 16.7063 26.1937 9.35 37.8812 7.425ZM27.1562 32.3125C25.7125 39.9437 25.7125 47.7125 27.0875 55.3438L8.73125 55.4812C7.49375 51.8375 6.875 47.9875 6.875 44C6.875 39.9437 7.5625 35.9562 8.8 32.3125H27.1562Z" fill="#000000"/>
                                </svg>
                                <h2 class="text-4xl">Platform Intergration</h2>
                                <p class="text-lg">Our integrations with cutting-edge platforms for loyalty programs, hotel bookings, marks just the beginning of a robust ecosystem, with many exciting partnerships on the horizon.</p>
                            </div>
                            <div class="w-full grid grid-cols-2 gap-4 align-center place-content-center mt-12 lg:mt-0">
                                <NuxtPicture 
                                    priority
                                    format="svg" 
                                    src="/images/igloorooms.png"
                                    :imgAttrs="{class:'w-full mx-auto'}" 
                                />
                                <NuxtPicture 
                                    priority
                                    format="svg" 
                                    src="/images/kangaroo.png"
                                    :imgAttrs="{class:'w-full mx-auto'}" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    useSeoMeta({
        title: 'Online Payments Services',
        ogTitle: 'Online Payments Services',
        description: 'Online Payments Services description',
        ogDescription: 'Online Payments Services description',
        ogImage: 'https://example.com/image.png',
        twitterCard: 'summary_large_image',
    })

    const activeTab = ref(0);

    const show = (index) => {
        activeTab.value = index;
    };
</script>

<style lang="">
    
</style>
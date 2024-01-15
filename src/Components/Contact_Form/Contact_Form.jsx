import React from 'react';
import Swal from 'sweetalert2';

const Contact_Form = () => {
    const handleButtonClick = () => {
        // Trigger SweetAlert
        Swal.fire({
            icon: 'success',
            title: 'Message sent successfully!',
            showConfirmButton: false,
            timer: 1500, // Close the alert after 1.5 seconds
        });
    };


    return (
        <form>
            <div class="contact-form-wrap"
                style={{ backgroundImage: 'url(https://themedox.com/bigtech/wp-content/uploads/2023/03/contact_bg.png)' }}>
                <div class="wpcf7 no-js" id="wpcf7-f155-p57-o1" lang="en-US" dir="ltr">
                    <div class="screen-reader-response">
                        <p role="status" aria-live="polite" aria-atomic="true"></p>
                        <ul></ul>
                    </div>
                    <form action="/bigtech/#wpcf7-f155-p57-o1" method="post"
                        class="wpcf7-form init" aria-label="Contact form"
                        novalidate="novalidate" data-status="init">
                        <div style={{ display: 'none' }}>
                            <input type="hidden" name="_wpcf7" value="155" />
                            <input type="hidden" name="_wpcf7_version" value="5.7.4" />
                            <input type="hidden" name="_wpcf7_locale" value="en_US" />
                            <input type="hidden" name="_wpcf7_unit_tag"
                                value="wpcf7-f155-p57-o1" />
                            <input type="hidden" name="_wpcf7_container_post"
                                value="57" />
                            <input type="hidden" name="_wpcf7_posted_data_hash"
                                value="" />
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-grp">
                                    <span class="wpcf7-form-control-wrap"
                                        data-name="your-name"><input size="40"
                                            class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                            aria-required="true" aria-invalid="false"
                                            placeholder="Enter your Name" value=""
                                            type="text" name="your-name" /></span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-grp">
                                    <span class="wpcf7-form-control-wrap"
                                        data-name="your-email"><input size="40"
                                            class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                            aria-required="true" aria-invalid="false"
                                            placeholder="Enter your email" value=""
                                            type="email" name="your-email" /></span>
                                </div>
                            </div>

                        </div>
                        <div class="">
                            <div class="form-grp">
                                <span class="wpcf7-form-control-wrap"
                                    data-name="your-email"><input size="40"
                                        class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                        aria-required="true" aria-invalid="false"
                                        placeholder="Enter your Phone Number" value=""
                                        type="email" name="your-email" /></span>
                            </div>
                        </div>
                        <div class="form-grp">
                            <span class="wpcf7-form-control-wrap"
                                data-name="your-message"><textarea cols="40" rows="10"
                                    class="wpcf7-form-control wpcf7-textarea"
                                    aria-invalid="false"
                                    placeholder="Enter your massage"
                                    name="your-message"></textarea></span>
                        </div>


                        <div className='flex justify-center'>
                            <div onClick={handleButtonClick}
                                className='uppercase text-[13px] inline border-[2px] py-3 px-[34px] border-[#00c4f4] duration-300 rounded-full cursor-pointer hover:text-[#00c4f4] font-bold' >Send Massage
                            </div>
                        </div>
                        {/* <input type="submit" value="kjhu" /> */}
                        {/* <div class="wpcf7-response-output" aria-hidden="true"></div> */}
                    </form>
                </div>
            </div>
        </form>
    );
};

export default Contact_Form;
import React from 'react';

function Footer(){
    return(
        <div>
            <div class="row">
                <div class="col-md-12">
                    <div class="footer p-3 mt-4 text-center bg-dark text-light">
                        Developed By:
                        <span class="text-warning font-weight-normal">
                            Park
                        </span>
                        ,Using <i class="fab fa-react"/>React Js &amp; Redux js
                        intergrated with external movies data API 
                        <a
                            href="http://www.omdbapi.com/"
                            target="_blank"
                        >
                            OMDB
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Footer;
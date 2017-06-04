;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-weixin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.73678 968.402751c-246.990301 0-447.905216-200.953801-447.905216-447.911356 0-246.943228 200.914916-447.898053 447.905216-447.898053 246.947322 0 447.904193 200.953801 447.904193 447.898053C960.640973 767.449973 759.684102 968.402751 512.73678 968.402751zM512.73678 89.832981c-237.487879 0-430.665577 193.171558-430.665577 430.658414s193.177698 430.658414 430.665577 430.658414c237.4449 0 430.664553-193.171558 430.664553-430.658414S750.180658 89.832981 512.73678 89.832981z"  ></path>' +
    '' +
    '<path d="M615.259782 454.626291c7.009647 0 13.96199 0.534166 20.772093 1.310855-18.720364-87.122243-111.826901-151.754263-217.995943-151.754263-118.79357 0-216.116129 80.980359-216.116129 183.831842 0 59.268872 32.413224 108.029412 86.48063 145.877415l-21.598924 64.989153 75.53944-37.912471c26.998911 5.342682 48.654117 10.849092 75.696006 10.849092 6.752798 0 13.477966-0.314155 20.117177-0.854461-4.188392-14.46034-6.639211-29.570479-6.639211-45.25674C431.512874 531.268856 512.564865 454.626291 615.259782 454.626291zM499.101225 396.056338c16.213263 0 27.027563 10.671037 27.027563 26.948769 0 16.2061-10.813277 27.055193-27.027563 27.055193-16.22759 0-32.483832-10.849092-32.483832-27.055193C466.618417 406.727375 482.873636 396.056338 499.101225 396.056338zM347.824847 450.060299c-16.213263 0-32.598442-10.849092-32.598442-27.055193 0-16.276708 16.384156-26.948769 32.598442-26.948769 16.184611 0 26.912953 10.671037 26.912953 26.948769C374.7378 439.211207 364.009458 450.060299 347.824847 450.060299z"  ></path>' +
    '' +
    '<path d="M812.484655 623.100354c0-86.424348-86.424348-156.841118-183.504384-156.841118-102.850459 0-183.874821 70.416769-183.874821 156.841118 0 86.573751 81.023338 156.798139 183.874821 156.798139 21.512966 0 43.169195-5.385661 64.796772-10.813277l59.311851 32.483832-16.299221-54.011124C780.214694 715.015763 812.484655 671.818939 812.484655 623.100354zM569.33994 596.044138c-10.770298 0-21.626553-10.714016-21.626553-21.606087 0-10.79281 10.856255-21.609157 21.626553-21.609157 16.3422 0 27.04189 10.81737 27.04189 21.609157C596.381829 585.331145 585.68214 596.044138 569.33994 596.044138zM688.205141 596.044138c-10.685363 0-21.456684-10.714016-21.456684-21.606087 0-10.79281 10.770298-21.609157 21.456684-21.609157 16.22759 0 27.083845 10.81737 27.083845 21.609157C715.290009 585.331145 704.432731 596.044138 688.205141 596.044138z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-kongjian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.73678 968.405821c-246.990301 0-447.905216-200.957895-447.905216-447.912379 0-246.947322 200.914916-447.904193 447.905216-447.904193 246.947322 0 447.904193 200.956871 447.904193 447.904193C960.640973 767.447926 759.684102 968.405821 512.73678 968.405821zM512.73678 89.842191c-237.487879 0-430.665577 193.164395-430.665577 430.65125 0 237.495042 193.177698 430.665577 430.665577 430.665577 237.4449 0 430.664553-193.170534 430.664553-430.665577C943.401334 283.006586 750.180658 89.842191 512.73678 89.842191zM834.082556 443.031209c0-7.116071 0-5.17179-7.108908-5.17179l-71.193459 0-121.016191 0-28.480658-50.727335L528.009625 236.674351c-7.151887 0-7.151887 0-14.247492 0l-71.179133 150.457734-28.480658 50.727335L293.072849 437.859419l-101.682867 0 0 3.241834 40.163745 28.480658 112.652709 99.708909-25.574469 227.912803c0 7.116071 1.481747 7.116071 15.714913 7.116071l185.797613-113.949238 185.427176 113.949238c7.137561 0 7.322779 0 14.432711-7.116071l-35.489282-227.912803 106.811678-91.626837L834.082556 443.031209zM364.29496 661.412938l206.41314-168.252005-192.180997-32.940227 291.840788 0-177.962158 161.140027 185.071066 40.052205L364.29496 661.412938z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yixin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M521.678 28.512c-267.808 0-484.979 217.090-484.979 484.979s217.090 484.979 484.979 484.979c267.808 0 484.979-217.090 484.979-484.979s-217.090-484.979-484.979-484.979zM788.614 836.947c-133.951 59.778-304.591 12.422-378.727-13.722-58.202-18.066-109.54-51.658-149.458-95.745-0.996-0.582-2.115-0.914-3.116-1.468 0.621 0.005 1.263 0.004 1.98 0.208-53.275-59.477-85.708-137.977-85.708-224.028 0-185.723 150.517-336.196 336.18-336.196 185.682 0 336.18 150.517 336.18 336.196 0 119.473-62.356 224.283-156.277 283.881 8.39 10.521 33.034 32.927 99.031 50.907zM675.788 552.381l-0.002-0.208c4.893-16.043 7.553-33.034 7.553-50.571 0-95.745-77.574-173.347-173.323-173.347s-173.347 77.574-173.347 173.347c0 62.412 33.121 116.977 82.604 147.477l-1.566 0.327c-26.512 47.065-76.892 78.901-134.765 78.901-8.057 0-15.883-0.876-23.632-2.113 0.372 0.397 0.857 0.857 1.209 1.263 40.494 21.276 86.543 33.498 135.498 33.498 132.278 0 243.917-87.98 279.812-208.605z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gengduo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M522.24 204.8l-20.48 0 0 296.96L204.8 501.76l0 20.48 296.96 0L501.76 819.2l20.48 0L522.24 522.24 819.2 522.24l0-20.48L522.24 501.76 522.24 204.8zM512 0C229.2224 0 0 229.2224 0 512c0 282.7776 229.2224 512 512 512 282.7776 0 512-229.2224 512-512C1024 229.2224 794.7776 0 512 0zM512 1003.52C240.5376 1003.52 20.48 783.4624 20.48 512 20.48 240.5376 240.5376 20.48 512 20.48c271.4624 0 491.52 220.0576 491.52 491.52C1003.52 783.4624 783.4624 1003.52 512 1003.52z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tengxunweibo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.73678 968.402751c-246.990301 0-447.905216-200.953801-447.905216-447.911356 0-246.943228 200.914916-447.898053 447.905216-447.898053 246.947322 0 447.904193 200.953801 447.904193 447.898053C960.640973 767.449973 759.684102 968.402751 512.73678 968.402751zM512.73678 89.832981c-237.487879 0-430.665577 193.171558-430.665577 430.658414s193.177698 430.658414 430.665577 430.658414c237.4449 0 430.665577-193.171558 430.665577-430.658414S750.180658 89.832981 512.73678 89.832981zM377.145639 296.643164c-87.250156 0-158.201092 70.962192-158.201092 158.212348 0 24.924669 5.912663 50.006927 17.353227 72.119551 3.604084 6.941086 11.92561 9.680477 18.8493 6.016017 7.108908-3.501754 9.829879-11.999288 6.169513-18.85237-9.502421-18.4717-14.261818-38.48143-14.261818-59.282175 0-71.678506 58.44204-130.010029 130.091894-130.010029 71.835072 0 130.176828 58.331523 130.176828 130.010029 0 71.663156-58.341756 130.009006-130.176828 130.009006-9.888208 0-19.774369-1.085728-29.29214-3.276626-7.550976-1.791809-14.959713 2.966565-16.811898 10.603499-1.567705 7.472182 2.949168 15.030321 10.586103 16.833387 11.525498 2.564405 23.607674 3.892657 35.517935 3.892657 87.320765 0 158.314679-70.969355 158.314679-158.061922C535.460318 367.604332 464.467427 296.643164 377.145639 296.643164zM349.506139 494.814596c8.563026 5.915733 18.834974 9.434883 29.991058 9.434883 29.049616 0 52.344159-23.379477 52.344159-52.436256 0-28.907377-23.293519-52.273551-52.344159-52.273551-28.907377 0-52.444443 23.366174-52.444443 52.273551 0 7.472182 1.581008 14.563694 4.373611 20.950148-11.212366 11.849886-23.607674 26.720571-35.674501 44.800345-33.580816 49.694819-71.137177 138.063449-60.45079 256.95628 0.683569 7.315616 6.78145 17.011442 13.933337 17.011442l1.411139 0c7.707542 0 13.477966-11.795651 12.850679-19.511379-8.178263-88.197738 10.443863-168.971389 54.92289-235.506758C328.847633 520.776897 339.604628 505.414001 349.506139 494.814596zM670.90922 412.871305c-11.597129 0.466628-23.137976-2.033309-33.780361-7.028067-36.857443-17.516956-52.543703-61.527308-34.848693-98.227162 17.366529-36.921911 61.405535-52.493561 98.149391-34.966373 36.857443 17.278525 52.430116 61.438281 34.920324 98.138134-2.322905 5.065366-5.300726 9.987468-8.733918 14.251585-2.735297 3.436262-2.165316 8.501628 1.25355 11.222599 3.433192 2.746554 8.577353 2.101871 11.226692-1.314948 4.189416-5.299703 7.636934-11.144828 10.728342-17.292851 21.357424-44.568055 2.2656-98.326423-42.441625-119.511931-44.722574-21.25714-98.376565-2.180666-119.577423 42.538839-21.285792 44.715411-2.193968 98.327446 42.528606 119.580492 12.779048 6.082532 27.027563 9.025561 41.060161 8.719592 4.502547-0.228197 8.006348-3.875261 7.807826-8.31334C679.116135 416.202167 675.354462 412.782278 670.90922 412.871305zM801.25694 473.624994c-47.057759-17.367553-82.804914-45.954635-106.027825-84.99172-5.556553-9.182127-9.588379-17.844413-12.70844-25.63075 5.085832-2.806929 9.44614-7.319709 12.152784-12.926404 6.92369-14.799054 0.697895-32.498158-14.089903-39.571251-14.902408-7.098675-32.56979-0.786922-39.579437 14.022365-7.108908 14.866592-0.86981 32.490995 14.190187 39.635719 3.718695 1.645476 7.636934 2.729158 11.753695 2.814092 3.263323 8.569166 7.7935 18.621103 13.990642 29.220508 17.310248 29.267581 51.346435 69.01791 114.846678 92.457762 3.974521 1.39579 8.206916-0.384763 10.044774-4.043083 0-0.23843 0.156566-0.387833 0.242524-0.794086C807.482735 479.691153 805.460682 475.263307 801.25694 473.624994z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xinlang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.03072 34.10944C248.09472 34.10944 34.14528 248.00256 34.14528 512c0 263.936 213.94944 477.88544 477.88544 477.88544s477.824-214.016 477.824-477.88544C989.85472 248.00256 775.96672 34.10944 512.03072 34.10944zM830.49472 830.53056c-41.344 41.344-89.472 73.856-143.104 96.512-55.48544 23.49056-114.432 35.39456-175.29856 35.39456-60.8 0-119.808-11.904-175.36-35.39456-53.632-22.656-101.82656-55.10144-143.17056-96.512-41.344-41.344-73.856-89.6-96.512-143.232-23.552-55.424-35.456-114.49856-35.456-175.29856s11.904-119.74656 35.39456-175.29856c22.656-53.632 55.168-101.76 96.512-143.17056 41.344-41.344 89.53856-73.856 143.16544-96.512 55.552-23.424 114.56-35.38944 175.36-35.38944 60.86656 0 119.808 11.97056 175.29344 35.38944 53.632 22.656 101.76 55.168 143.104 96.512 41.344 41.41056 73.856 89.53856 96.64 143.17056 23.424 55.49056 35.38944 114.432 35.38944 175.29856s-12.032 119.936-35.38944 175.29856C904.35072 740.864 871.83872 789.12 830.49472 830.53056z"  ></path>' +
    '' +
    '<path d="M672.664 502.388c-9.005-2.704-15.182-4.542-10.458-16.378 10.211-25.691 11.272-47.86 0.192-63.671-20.763-29.67-77.574-28.064-142.692-0.804 0-0.033-20.447 8.951-15.225-7.271 10.018-32.199 8.511-59.176-7.079-74.744-35.332-35.353-129.28 1.334-209.84 81.873-60.332 60.346-95.365 124.294-95.365 179.59 0 105.773 135.636 170.079 268.33 170.079 173.953 0 289.668-101.068 289.668-181.311C750.19 541.272 709.358 513.761 672.664 502.388L672.664 502.388zM460.882 733.152c-105.885 10.45-197.286-37.414-204.165-106.935-6.874-69.504 73.413-134.331 179.284-144.799 105.896-10.469 197.3 37.391 204.165 106.884C647.031 657.845 566.782 722.675 460.882 733.152L460.882 733.152zM788.182 308.823c-42.01-46.574-103.974-64.333-161.162-52.171l-0.026 0c-13.23 2.834-21.671 15.85-18.837 29.06 2.821 13.224 15.836 21.672 29.07 18.848 40.688-8.638 84.719 3.997 114.581 37.083 29.834 33.085 37.941 78.207 25.161 117.763l0.008 0.008c-4.161 12.886 2.886 26.668 15.786 30.837 12.849 4.157 26.661-2.878 30.832-15.734l0.008-0.095C841.53 418.778 830.203 355.349 788.182 308.823M723.671 367.039c-20.443-22.685-50.636-31.301-78.503-25.374-11.392 2.427-18.648 13.637-16.207 25.037 2.434 11.352 13.637 18.645 25 16.175l0 0.025c13.622-2.881 28.394 1.319 38.387 12.389 10.007 11.09 12.697 26.203 8.406 39.463l0.021 0c-3.572 11.065 2.486 22.965 13.565 26.551 11.076 3.547 22.969-2.496 26.54-13.586C749.634 420.612 744.159 389.714 723.671 367.039M471.46 534.917c-50.386-13.11-107.332 12.003-129.218 56.397-22.289 45.281-0.738 95.543 50.169 111.975 52.729 17.003 114.882-9.055 136.492-57.929C550.215 597.585 523.605 548.395 471.46 534.917L471.46 534.917zM432.99 650.548c-10.244 16.341-32.177 23.5-48.693 15.959-16.279-7.412-21.087-26.389-10.843-42.323 10.116-15.868 31.313-22.932 47.708-16.06C437.749 615.195 443.047 634.051 432.99 650.548L432.99 650.548zM466.729 607.248c-3.706 6.327-11.893 9.375-18.306 6.737-6.305-2.594-8.282-9.676-4.699-15.897 3.688-6.193 11.559-9.213 17.845-6.716C467.964 593.709 470.262 600.871 466.729 607.248L466.729 607.248z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-renrenwang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 47.887C255.676 47.887 47.885 255.677 47.885 512S255.676 976.113 512 976.113 976.113 768.323 976.113 512 768.323 47.887 511.999 47.887zM280.175 510.034c0-115.045 78.963-210.324 187.975-230.091v97.947c0 111.812-52.366 195.407-156.526 250.94-20.266-34.864-31.45-75.364-31.45-118.796zM512.1 744.056c-60.4 0-115.147-23.664-156.23-62.128 72.932-43.467 127.846-103.18 158.112-177.394 33.481 78.413 81.163 139.194 150.862 180.494-40.666 36.613-93.998 59.028-152.744 59.028zM712.375 628.83c-104.162-55.533-156.529-139.145-156.529-250.94v-97.947c109.012 19.766 187.976 115.045 187.976 230.091 0.001 43.432-11.182 83.932-31.447 118.796z" fill="#0059a9" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-doubanwang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M775.97 210.227c20.858 0 37.804 16.947 37.804 37.804v527.94c0 20.857-16.947 37.804-37.804 37.804h-527.94c-20.858 0-37.804-16.947-37.804-37.804v-527.94c0-20.858 16.947-37.804 37.804-37.804h527.94zM298.543 298.217v48.557h413.227v-48.557h-413.227zM324.614 387.185v198.466h35.522l43.017 90.597h-116.993v47.905h436.365v-47.905h-120.253l43.67-90.597h38.78v-198.466h-360.106zM622.151 436.069v102.654h-237.247v-102.654h237.247zM549.477 676.574h-91.9l-42.692-90.597h178.262l-43.67 90.597z" fill="#2B7F4D" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tie" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C229.282909 0 0 229.189818 0 512c0 282.763636 229.189818 512 512 512s512-229.236364 512-512c0-282.810182-229.189818-512-512-512z m0 977.454545C255.348364 977.454545 46.545455 768.651636 46.545455 512S255.348364 46.545455 512 46.545455s465.454545 208.802909 465.454545 465.454545-208.802909 465.454545-465.454545 465.454545z" fill="" ></path>' +
    '' +
    '<path d="M368.453818 646.144c9.821091-41.378909 14.708364-100.631273 14.708364-177.850182V342.388364h-42.542546v142.987636c0 82.385455-7.447273 139.077818-22.434909 170.170182-15.732364 37.050182-48.64 71.912727-98.629818 104.634182 12.613818 13.358545 23.645091 26.344727 33.093818 39.005091 60.648727-46.08 97.698909-91.648 111.104-136.564364a1907.712 1907.712 0 0 1 92.718546 112.267636l39.656727-31.930182c-32.721455-36.631273-68.002909-75.403636-105.797818-116.363636l-21.876364 19.549091z" fill="" ></path>' +
    '' +
    '<path d="M291.002182 293.376h141.824v327.400727h42.542545V250.228364H248.459636v374.085818h42.542546zM653.824 219.508364H606.021818v303.150545h-92.16v281.879273h44.916364v-34.257455h169.006545v34.257455h44.869818v-281.879273h-118.830545V389.678545h150.714182v-44.916363h-150.714182V219.508364z m73.914182 343.365818v167.191273h-169.006546v-167.191273h169.006546z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-qq" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M506.054591 880.192733c0 43.505863-63.615876 78.773088-142.089136 78.773088s-142.089136-35.268248-142.089135-78.773088 63.615876-78.773088 142.089135-78.773088 142.089136 35.268248 142.089136 78.773088z m153.385413-78.773088c-78.474282 0-142.089136 35.268248-142.089136 78.773088s63.615876 78.773088 142.089136 78.773088 142.089136-35.268248 142.089135-78.773088-63.615876-78.773088-142.089135-78.773088z" fill="#FFC817" ></path>' +
    '' +
    '<path d="M825.904293 502.377852s-10.752902-11.024078-22.294772-21.221324V355.234607c0-161.052023-130.558521-291.610544-291.610544-291.610544S220.389456 194.182584 220.389456 355.234607v125.921921c-11.540847 10.197246-22.294772 21.221324-22.294772 21.221324-19.024286 28.53694-64.207347 102.256942-64.207348 171.815157s19.024286 81.449034 26.158777 82.043575c6.616698 0.551562 31.131021-6.063089 60.262502-50.654681 39.425941 131.09985 154.970514 226.037083 291.393603 226.037083 136.639007 0 252.337075-95.236038 291.583938-226.658229 29.309536 45.151339 54.020334 51.829436 60.667731 51.275827 7.134491-0.594541 26.158776-12.485359 26.158777-82.043575S844.928578 530.914792 825.904293 502.377852z" fill="#37474F" ></path>' +
    '' +
    '<path d="M297.454646 552.317241a375.358947 375.358947 0 0 0-3.473101 51.128471c0 159.245887 99.199303 288.340057 221.567281 288.340057s221.567281-129.09417 221.567281-288.340057a375.522676 375.522676 0 0 0-3.473101-51.128471H297.454646zM435.307294 197.390649c-32.506345 0-58.857503 35.733852-58.857503 79.81379 0 44.079938 26.351158 79.81379 58.857503 79.813791s58.857503-35.733852 58.857502-79.813791c0-44.079938-26.352181-79.81379-58.857502-79.81379z m9.809413 112.660896c-11.82021 0-21.402449-14.639418-21.402449-32.698726s9.582239-32.698726 21.402449-32.698726c11.82021 0 21.402449 14.639418 21.402449 32.698726s-9.582239 32.698726-21.402449 32.698726zM590.476329 197.390649c-32.506345 0-58.857503 35.733852-58.857503 79.81379 0 44.079938 26.351158 79.81379 58.857503 79.813791s58.857503-35.733852 58.857503-79.813791c-0.001023-44.079938-26.352181-79.81379-58.857503-79.81379z m9.93221 82.787518l-0.030699 0.005117c0.001023 0.021489 0.023536 0.033769 0.023536 0.055258 0 0.896416-0.726547 1.622964-1.622964 1.622964-0.738827 0-1.25969-0.544399-1.455141-1.218758l-0.062422 0.00921v0.149403c-3.748371-9.331529-10.383488-15.635095-18.079774-15.635096-7.693216 0-14.325263 6.296403-18.074657 15.620769l-0.059352-0.036839-0.055258-0.012279c-0.264013 0.557702-0.722454 1.00284-1.380441 1.00284a1.647523 1.647523 0 0 1-1.648546-1.648547c0-0.016373 0.017396-0.025583 0.017396-0.040932l-0.035815-0.008186c-0.058328-0.895393-0.166799-1.768273-0.166799-2.688226 0-18.059308 9.582239-32.698726 21.402449-32.698726s21.402449 14.639418 21.402449 32.698726c0 0.966001-0.110517 1.883907-0.173962 2.823302z" fill="#FFFFFF" ></path>' +
    '' +
    '<path d="M281.18817 536.26566c-5.350868 26.753317-16.646122 146.845463-11.296277 173.59878s27.855418 22.285562 60.046585 22.591531c31.211862 0.296759 67.774593 8.918114 68.369133-30.320563 0.594541-39.237653 0.594541-116.5249 9.512655-145.06184 8.91709-28.53694-126.632095-20.807908-126.632096-20.807908z" fill="#FF3B30" ></path>' +
    '' +
    '<path d="M274.071076 593.588203l125.538181 40.585347c1.089821-30.820959 3.295046-61.368696 8.211009-77.101005 8.918114-28.53694-126.632095-20.807908-126.632096-20.807908-1.948375 9.739828-4.683672 31.851429-7.117094 57.323566z" fill="#DD2C00" ></path>' +
    '' +
    '<path d="M512.594541 467.895503c97.846492 0 177.166025-35.671431 177.166025-57.668421 0-16.646122-79.319533-33.887808-177.166025-33.887808-97.845469 0-177.166025 15.458063-177.166026 33.887808 0 20.808932 79.319533 57.668421 177.166026 57.668421z" fill="#FFC817" ></path>' +
    '' +
    '<path d="M514.378164 489.298975s112.363114 1.189082 202.13572-36.860512c89.771583-38.048571 88.880283-42.358737 98.689696-42.358737 9.809413 0 21.402449 14.123672 26.307156 39.61116 4.904707 25.487487 10.701736 45.552475-10.255575 58.037834-20.956288 12.484336-158.290119 93.190449-313.012993 93.190449h-7.729032c-154.722874 0-292.056706-80.706113-313.012993-93.190449s-15.160281-32.549324-10.255575-58.037834c4.904707-25.487487 16.497743-39.61116 26.307156-39.61116s8.918114 4.310166 98.689696 42.358737 202.136743 36.860513 202.136744 36.860512z" fill="#FF3B30" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)
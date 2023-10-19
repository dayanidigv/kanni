import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import anime from 'animejs/lib/anime.es.js';
import "../assets/css/main.css"
function Intro() {
  const introPageRef = useRef(null);
  useEffect(() => {
    anime({
      targets: '.intro',
      opacity:[1],
      easing: 'easeInQuad',
      duration:4000,
      loop:true
    });
    const svgPaths = document.querySelectorAll('.path');
    anime({
      targets: svgPaths,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 4000,
      delay: (el, i) => i * 50,
      direction: 'alternate',
      loop: true,
    });
    sessionStorage.setItem('ViewIntro', true);
    // }
  }, []); // Add missing dependency []



  return (
    <div className="IntroPage" ref={introPageRef}>
      <div className="">
        <div className="row">
          <div className="intro">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 496 496"
            >
              <path class="path"
                d="M172.315628,194.396423c3.891012-5.534245,11.282608-15.746948,18.516174-22.010589c4.174103-3.614426,8.921921-8.131485,14.58844-5.026596c6.025833,3.301773,4.361801,10.075592,3.295761,15.459701-2.580947,13.03505-5.886291,25.924851-8.758056,38.904511-7.539902,34.078247-15.087357,68.155456-22.376084,102.287719-.768524,3.598877-2.069458,7.39444-.731552,11.323731.850663,2.49826-.631363,4.522522-2.340927,6.19046-.920685.898255-2.174896.884705-3.194366.030151-1.991333-1.669219-1.495026-3.819274-1.128571-6.001739c5.34224-31.81778,12.842926-63.183777,19.834168-94.654572c4.253585-19.147384,8.78714-38.232452,13.092437-57.368591.541001-2.404556.551773-4.946701.638367-7.43103.139847-4.013214-1.839981-4.683472-5.024124-2.868973-5.169327,2.94574-9.068756,7.355499-12.710495,11.88501-10.405472,12.942154-18.921524,27.010132-24.033691,42.920013-1.639756,5.103119-2.185227,10.434357-1.577256,15.794373.711197,6.270065,5.28273,10.76094,11.802155,11.756759.984024.1503,1.996429.104599,2.99237.189011c1.921265.162842,3.907334.546677,3.852143,2.965805-.058426,2.560486-2.194107,2.493469-4.057526,2.556-11.165375.374664-19.940521-7.846115-20.310257-18.998245-.406143-12.249832,4.103409-23.15387,9.42511-33.774842c2.381622-4.753189,4.314769-8.593821,8.20578-14.128067Z"
                stroke="#ffce0a" stroke-width="3" />
              <path class="path"
                d="M304.417938,279.364563c.243408-1.995361-.473724-2.202789-2.017334-1.926514-6.960785,1.245636-10.4794-.951477-12.48471-7.786682-.781525-2.663849-1.276734-5.411712-2.128418-9.100494-3.017212,3.48349-5.403565,6.375427-7.940491,9.12857-2.46872,2.679169-5.109619,4.990815-9.049713,2.288208-.584656-.401001-1.586182-.355163-2.371338-.277649-6.96991.688202-8.563782-.269256-11.508423-6.532592-1.733826-3.687867-2.000351-8.072235-5.155548-11.356186-3.520264,2.11087-4.890473,5.598984-6.511459,8.760971-2.426499,4.733307-4.46048,9.666504-6.728211,14.483215-.88356,1.87674-1.403824,4.634949-4.286606,3.922974-2.677246-.661255-1.764206-3.100373-1.656875-5.044434.052719-.95459-.168427-1.924316-.295487-3.183014-12.58519-.084778-10.591354-12.282531-15.5932-18.758239-2.708222.70729-3.690873,2.932281-4.904419,4.847564-3.761918,5.937317-6.160386,12.534119-9.021454,18.907562-.823242,1.833893-1.722153,4.046753-4.276169,3.121583-2.136307-.773865-1.890488-2.948029-1.544067-4.771485c2.11296-11.122497,5.230392-21.991669,8.4505-32.829635.52063-1.752335,1.385559-3.80127,3.741547-3.102387c2.24443.665756,2.099441,2.678146,1.588943,4.585739-.671631,2.509705-1.324173,5.024536-2.13063,8.091202c7.680679-7.254501,11.8181-6.297592,15.399337,2.97168c1.077668,2.789261,1.991379,5.662307,3.317063,8.329544c1.35437,2.724975,3.386917,2.918426,5.576996.708923c1.796371-1.812256,3.06929-3.897491,3.744537-6.378845c1.265976-4.6521,2.607727-9.283524,3.908905-13.926102.580597-2.071564.956253-4.88475,3.761383-4.320511c2.951279.593598,2.063889,3.284836,1.519928,5.37294-.297989,1.143891-.598877,2.233353-.090408,3.269684.412704.242905.74263.601761.965316.544388c8.387391-2.160583,9.956254-1.323563,13.119217,7.11853.817261,2.181214,1.487915,4.421387,2.390534,6.565155.629486,1.495056,1.245056,3.375641,3.289398,3.273011c1.776672-.089142,3.089844-1.405976,3.75528-2.971253c1.23117-2.895904,2.248657-5.885162,3.293731-8.857101c1.569641-4.463806,3.814942-8.530503,7.312683-11.74878c4.373963-4.024459,10.127198-4.177246,13.967499-.498504c1.341767,1.285293,2.803589,2.792358,1.440979,4.743484-1.448578,2.07428-3.200867,1.117005-4.722687-.12529-1.835205-1.498123-3.740173-2.251037-5.88742-.693039-2.135834,1.549668-3.562805,3.105256-2.187622,6.225647c1.202697,2.728943-2.155945,4.570771-2.718354,8.287018c2.784668-3.359131,4.924836-5.973846,7.104615-8.555099.958313-1.134873,1.902008-2.563858,3.653045-2.143509c1.974152.473907,2.346314,2.351074,2.481598,3.957199.390686,4.639084.488404,9.314041,2.307251,13.6996c2.376496,5.730133,4.157685,5.972504,8.447327,1.668701c5.119446-5.136413,5.268585-12.047058,6.870788-18.399612c4.955323-19.646866,8.263459-39.709534,14.934998-58.923172c1.970337-5.674362,4.229828-11.223496,7.55014-16.256256c1.401734-2.12468,3.196015-4.198761,6.116486-3.228058c2.974304.988571,2.246765,3.749023,2.137421,5.992157-.390839,8.020019-4.243439,14.962646-7.17212,22.167938-1.62619,4.00087-3.358428,8.05188-5.703979,11.649262-6.454773,9.899658-8.183228,21.306671-11.007294,32.386505-.922699,3.620025.689759,6.02005,3.66449,7.999542c2.716461-.925507,5.713074-3.786453,8.553925-.815643c2.948089,3.082931,1.6427,6.790283.241699,10.300018-1.954315,4.895782-6.252503,8.077484-9.267334,12.396728c3.064544,3.654694,6.006103,1.378663,8.490631-.026397c8.847168-5.003388,15.758209-12.177582,21.754852-20.292282.887207-1.200608,1.806092-2.393067,2.837311-3.467362.894989-.932342,2.037903-1.140365,3.141846-.269378c1.03778.818832,1.34851,1.866577.730774,3.094787-.298767.593964-.590241,1.198715-.958466,1.749497-6.475189,9.685287-14.404663,17.91072-24.544434,23.774582-7.741821,4.477142-10.727844,4.165466-17.952331-1.454377-3.690033,4.914704-4.401611,11.009827-6.718689,16.400116-1.088226,2.531586-.671478,7.413544-4.559021,6.423981-4.133118-1.052155-1.726379-5.303772-1.222321-8.192108.741608-4.249268,1.764283-8.449494,2.754059-12.996216Z"
                stroke="#ffce0a" stroke-width="3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;